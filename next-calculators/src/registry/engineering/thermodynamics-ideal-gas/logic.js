export function calculateLogic(inputs) {
    // Universal Gas Constant in SI Units: m^3*Pa / (mol*K) or J / (mol*K)
    const R = 8.31446261815324;
  
    // Conversion to Base SI: Pascals (Pa), Cubic Meters (m³), Moles (mol), Kelvin (K)
    const toBasePressure = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        case 'atm': return val * 101325;
        case 'kPa': return val * 1000;
        case 'bar': return val * 100000;
        case 'psi': return val * 6894.757;
        case 'Pa': return val;
        default: return val; 
      }
    };
  
    const toBaseVolume = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        case 'L': return val * 0.001;
        case 'cm3': return val * 1e-6;
        case 'ft3': return val * 0.0283168;
        case 'm3': return val;
        default: return val;
      }
    };
  
    const toBaseMoles = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      return unit === 'kmol' ? val * 1000 : val;
    };
  
    const toKelvin = (val, unit) => {
      if (isNaN(val) || val === 0) return 0; // 0 used as flag for 'missing' in our solver
      if (unit === 'C') return val + 273.15;
      if (unit === 'F') return (val - 32) * (5/9) + 273.15;
      return val; // Kelvin
    };
  
    let p = toBasePressure(parseFloat(inputs.pressure), inputs.pressureUnit || 'atm');
    let v = toBaseVolume(parseFloat(inputs.volume), inputs.volumeUnit || 'L');
    let n = toBaseMoles(parseFloat(inputs.moles), inputs.molesUnit || 'mol');
    let t = toKelvin(parseFloat(inputs.temperature), inputs.temperatureUnit || 'K');
  
    // Count provided variables (ignoring 0 values)
    let providedCount = (p > 0 ? 1 : 0) + (v > 0 ? 1 : 0) + (n > 0 ? 1 : 0) + (t > 0 ? 1 : 0);
  
    if (providedCount < 3) {
      return {
        summary: [{ label: "Status", value: "Please enter exactly 3 values to solve for the 4th.", isHighlight: true }]
      };
    }
  
    let missing = '';
  
    // --- REVERSE SOLVER LOGIC ---
    // Core Formula: P * V = n * R * T
    if (p === 0) {
      missing = 'pressure';
      p = (n * R * t) / v;
    } else if (v === 0) {
      missing = 'volume';
      v = (n * R * t) / p;
    } else if (n === 0) {
      missing = 'moles';
      n = (p * v) / (R * t);
    } else if (t === 0) {
      missing = 'temperature';
      t = (p * v) / (n * R);
    }
  
    // Formatting Output
    const formatNum = (num) => {
      if (num === 0) return "0";
      if (num < 0.0001 || num > 1000000) return num.toExponential(4).replace('e+', ' × 10^').replace('e', ' × 10^');
      return Number(num.toFixed(4)).toString();
    };
  
    // Convert outputs back to standard readable formats for the summary
    let pressureDisplay = `${formatNum(p / 101325)} atm (${formatNum(p)} Pa)`;
    let volumeDisplay = `${formatNum(v * 1000)} L`;
    let tempDisplay = `${formatNum(t)} K (${formatNum(t - 273.15)} °C)`;
  
    return {
      summary: [
        { label: "Pressure (P)", value: pressureDisplay, isHighlight: missing === 'pressure' },
        { label: "Volume (V)", value: volumeDisplay, isHighlight: missing === 'volume' },
        { label: "Amount (n)", value: `${formatNum(n)} mol`, isHighlight: missing === 'moles' },
        { label: "Temperature (T)", value: tempDisplay, isHighlight: missing === 'temperature' },
        { label: "Gas Constant (R)", value: "8.314 J/(mol·K)", isHighlight: false }
      ]
    };
  }