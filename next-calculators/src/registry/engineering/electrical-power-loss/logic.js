export function calculateLogic(inputs) {
    // Conversion to Base SI: Amperes (A), Ohms (Ω), Volts (V), Watts (W)
    const toBaseUnit = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        case 'mA': case 'mV': case 'mW': case 'mohm': return val * 0.001;
        case 'kA': case 'kW': case 'kohm': return val * 1000;
        default: return val; // A, ohm, V, W
      }
    };
  
    let i = toBaseUnit(parseFloat(inputs.current), inputs.currentUnit || 'A');
    let r = toBaseUnit(parseFloat(inputs.resistance), inputs.resistanceUnit || 'ohm');
    let vd = toBaseUnit(parseFloat(inputs.voltageDrop), inputs.voltageDropUnit || 'V');
    let p = toBaseUnit(parseFloat(inputs.powerLoss), inputs.powerLossUnit || 'W');
  
    // Count provided variables (greater than 0)
    let providedCount = (i > 0 ? 1 : 0) + (r > 0 ? 1 : 0) + (vd > 0 ? 1 : 0) + (p > 0 ? 1 : 0);
  
    if (providedCount < 2) {
      return {
        summary: [{ label: "Status", value: "Please enter exactly 2 values to solve for the remaining 2.", isHighlight: true }]
      };
    }
    if (providedCount > 2) {
        return {
            summary: [{ label: "Status", value: "Please clear fields and enter exactly 2 values only to prevent conflicting calculations.", isHighlight: true }]
          };
    }
  
    let missing = [];
  
    // --- REVERSE SOLVER LOGIC FOR 2 KNOWN VARIABLES ---
    
    if (i > 0 && r > 0) {
      missing = ['voltageDrop', 'powerLoss'];
      vd = i * r;
      p = Math.pow(i, 2) * r;
    } 
    else if (i > 0 && vd > 0) {
      missing = ['resistance', 'powerLoss'];
      r = vd / i;
      p = i * vd;
    } 
    else if (i > 0 && p > 0) {
      missing = ['resistance', 'voltageDrop'];
      r = p / Math.pow(i, 2);
      vd = p / i;
    } 
    else if (r > 0 && vd > 0) {
      missing = ['current', 'powerLoss'];
      i = vd / r;
      p = Math.pow(vd, 2) / r;
    } 
    else if (r > 0 && p > 0) {
      missing = ['current', 'voltageDrop'];
      i = Math.sqrt(p / r);
      vd = Math.sqrt(p * r);
    } 
    else if (vd > 0 && p > 0) {
      missing = ['current', 'resistance'];
      i = p / vd;
      r = Math.pow(vd, 2) / p;
    }
  
    // Formatting Output
    const formatNum = (num) => {
      if (num === 0) return "0";
      if (num < 0.0001 || num > 1000000) return num.toExponential(4).replace('e+', ' × 10^').replace('e', ' × 10^');
      return Number(num.toFixed(4)).toString();
    };
  
    return {
      summary: [
        { label: "Current (I)", value: `${formatNum(i)} A`, isHighlight: missing.includes('current') },
        { label: "Resistance (R)", value: `${formatNum(r)} Ω`, isHighlight: missing.includes('resistance') },
        { label: "Voltage Drop (Vd)", value: `${formatNum(vd)} V`, isHighlight: missing.includes('voltageDrop') },
        { label: "Power Loss (P)", value: `${formatNum(p)} W`, isHighlight: missing.includes('powerLoss') }
      ]
    };
  }