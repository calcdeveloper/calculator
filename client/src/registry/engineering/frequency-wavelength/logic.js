export function calculateLogic(inputs) {
    // Speed of Light in a vacuum (c) in m/s
    const C_SPEED_OF_LIGHT = 299792458; 
  
    // Conversion to Base SI: Hertz (Hz), Seconds (s), Meters (m), Rad/s
    const toBaseUnit = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        // Frequency
        case 'kHz': return val * 1e3;
        case 'MHz': return val * 1e6;
        case 'GHz': return val * 1e9;
        // Period
        case 'ms': return val * 1e-3;
        case 'us': return val * 1e-6;
        case 'ns': return val * 1e-9;
        // Wavelength
        case 'km': return val * 1e3;
        case 'cm': return val * 1e-2;
        case 'mm': return val * 1e-3;
        // Angular Frequency
        case 'Mrad_s': return val * 1e6;
        
        default: return val; // Hz, s, m, rad_s
      }
    };
  
    let f = toBaseUnit(parseFloat(inputs.frequency), inputs.frequencyUnit || 'Hz');
    let t = toBaseUnit(parseFloat(inputs.period), inputs.periodUnit || 'ms');
    let wl = toBaseUnit(parseFloat(inputs.wavelength), inputs.wavelengthUnit || 'm');
    let w = toBaseUnit(parseFloat(inputs.angular), inputs.angularUnit || 'rad_s');
  
    // Count provided variables
    let providedCount = (f > 0 ? 1 : 0) + (t > 0 ? 1 : 0) + (wl > 0 ? 1 : 0) + (w > 0 ? 1 : 0);
  
    if (providedCount !== 1) {
      return {
        summary: [{ label: "Status", value: "Please enter exactly 1 value to calculate the remaining 3.", isHighlight: true }]
      };
    }
  
    let given = '';
  
    // --- OMNI-DIRECTIONAL SOLVER LOGIC ---
    if (f > 0) {
      given = 'frequency';
      t = 1 / f;
      wl = C_SPEED_OF_LIGHT / f;
      w = 2 * Math.PI * f;
    } else if (t > 0) {
      given = 'period';
      f = 1 / t;
      wl = C_SPEED_OF_LIGHT / f;
      w = 2 * Math.PI * f;
    } else if (wl > 0) {
      given = 'wavelength';
      f = C_SPEED_OF_LIGHT / wl;
      t = 1 / f;
      w = 2 * Math.PI * f;
    } else if (w > 0) {
      given = 'angular';
      f = w / (2 * Math.PI);
      t = 1 / f;
      wl = C_SPEED_OF_LIGHT / f;
    }
  
    // Formatting Output
    const formatNum = (num) => {
      if (num === 0) return "0";
      if (num < 0.0001 || num > 1000000) return num.toExponential(4).replace('e+', ' × 10^').replace('e', ' × 10^');
      return Number(num.toFixed(4)).toString();
    };
  
    const formatFrequency = (hz) => {
      if (hz >= 1e9) return `${formatNum(hz / 1e9)} GHz`;
      if (hz >= 1e6) return `${formatNum(hz / 1e6)} MHz`;
      if (hz >= 1e3) return `${formatNum(hz / 1e3)} kHz`;
      return `${formatNum(hz)} Hz`;
    };
  
    const formatTime = (sec) => {
      if (sec < 1e-6) return `${formatNum(sec * 1e9)} ns`;
      if (sec < 1e-3) return `${formatNum(sec * 1e6)} μs`;
      if (sec < 1) return `${formatNum(sec * 1e3)} ms`;
      return `${formatNum(sec)} s`;
    };
  
    return {
      summary: [
        { label: "Frequency (f)", value: formatFrequency(f), isHighlight: given !== 'frequency' },
        { label: "Time Period (T)", value: formatTime(t), isHighlight: given !== 'period' },
        { label: "Wavelength (λ)", value: `${formatNum(wl)} m`, isHighlight: given !== 'wavelength' },
        { label: "Angular Freq (ω)", value: `${formatNum(w)} rad/s`, isHighlight: given !== 'angular' }
      ]
    };
  }