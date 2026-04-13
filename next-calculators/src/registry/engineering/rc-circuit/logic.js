export function calculateLogic(inputs) {
    // Conversion to Base SI: Ohms (Ω), Farads (F), Seconds (s), Hertz (Hz)
    const toBaseUnit = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        // Resistance
        case 'kohm': return val * 1e3;
        case 'Mohm': return val * 1e6;
        // Capacitance
        case 'mF': return val * 1e-3;
        case 'uF': return val * 1e-6;
        case 'nF': return val * 1e-9;
        case 'pF': return val * 1e-12;
        // Time
        case 'ms': return val * 1e-3;
        case 'us': return val * 1e-6;
        // Frequency
        case 'kHz': return val * 1e3;
        case 'MHz': return val * 1e6;
        
        default: return val; // ohm, F, s, Hz
      }
    };
  
    let r = toBaseUnit(parseFloat(inputs.resistance), inputs.resistanceUnit || 'ohm');
    let c = toBaseUnit(parseFloat(inputs.capacitance), inputs.capacitanceUnit || 'uF');
    let tau = toBaseUnit(parseFloat(inputs.timeConstant), inputs.timeConstantUnit || 'ms');
    let fc = toBaseUnit(parseFloat(inputs.frequency), inputs.frequencyUnit || 'Hz');
  
    let providedCount = (r > 0 ? 1 : 0) + (c > 0 ? 1 : 0) + (tau > 0 ? 1 : 0) + (fc > 0 ? 1 : 0);
  
    if (providedCount !== 2) {
      return {
        summary: [{ label: "Status", value: "Please enter exactly 2 independent values to solve the circuit.", isHighlight: true }]
      };
    }
  
    // Time Constant and Frequency are inverses of each other mathematically. 
    // You cannot determine R and C if only tau and fc are given.
    if (tau > 0 && fc > 0) {
      return {
        summary: [{ label: "Error", value: "Cannot determine Resistance and Capacitance from just Time Constant and Frequency. Please provide R or C.", isHighlight: true }]
      };
    }
  
    let missing = [];
  
    // --- REVERSE SOLVER LOGIC ---
    
    if (r > 0 && c > 0) {
      missing = ['timeConstant', 'frequency'];
      tau = r * c;
      fc = 1 / (2 * Math.PI * tau);
    } 
    else if (r > 0 && tau > 0) {
      missing = ['capacitance', 'frequency'];
      c = tau / r;
      fc = 1 / (2 * Math.PI * tau);
    } 
    else if (r > 0 && fc > 0) {
      missing = ['timeConstant', 'capacitance'];
      tau = 1 / (2 * Math.PI * fc);
      c = tau / r;
    } 
    else if (c > 0 && tau > 0) {
      missing = ['resistance', 'frequency'];
      r = tau / c;
      fc = 1 / (2 * Math.PI * tau);
    } 
    else if (c > 0 && fc > 0) {
      missing = ['timeConstant', 'resistance'];
      tau = 1 / (2 * Math.PI * fc);
      r = tau / c;
    }
  
    // Formatting Output
    const formatNum = (num) => {
      if (num === 0) return "0";
      if (num < 0.0001 || num > 1000000) return num.toExponential(4).replace('e+', ' × 10^').replace('e', ' × 10^');
      return Number(num.toFixed(4)).toString();
    };
  
    const formatCapacitance = (farads) => {
      if (farads < 1e-9) return `${formatNum(farads * 1e12)} pF`;
      if (farads < 1e-6) return `${formatNum(farads * 1e9)} nF`;
      if (farads < 1e-3) return `${formatNum(farads * 1e6)} μF`;
      return `${formatNum(farads)} F`;
    };
  
    return {
      summary: [
        { label: "Resistance (R)", value: `${formatNum(r)} Ω`, isHighlight: missing.includes('resistance') },
        { label: "Capacitance (C)", value: formatCapacitance(c), isHighlight: missing.includes('capacitance') },
        { label: "Time Constant (τ)", value: `${formatNum(tau * 1000)} ms`, isHighlight: missing.includes('timeConstant') },
        { label: "Cutoff Frequency (fc)", value: `${formatNum(fc)} Hz`, isHighlight: missing.includes('frequency') },
        { label: "Full Charge Time (5τ)", value: `${formatNum(tau * 5 * 1000)} ms`, isHighlight: false }
      ]
    };
  }