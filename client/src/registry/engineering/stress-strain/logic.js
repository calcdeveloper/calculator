export function calculateLogic(inputs) {
    // Convert units to Base SI: Newtons (N), Square Meters (m²), Pascals (Pa), Unitless Ratio
    const toBaseUnit = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        // Force
        case 'kN': return val * 1000;
        case 'lbf': return val * 4.44822;
        // Area
        case 'mm2': return val * 1e-6;
        case 'cm2': return val * 1e-4;
        case 'in2': return val * 0.00064516;
        // Stress & Modulus
        case 'MPa': return val * 1e6;
        case 'GPa': return val * 1e9;
        case 'psi': return val * 6894.76;
        // Strain
        case 'percent': return val / 100;
        case 'micro': return val * 1e-6;
        
        default: return val; 
      }
    };
  
    let f = toBaseUnit(parseFloat(inputs.force), inputs.forceUnit || 'N');
    let a = toBaseUnit(parseFloat(inputs.area), inputs.areaUnit || 'mm2');
    let s = toBaseUnit(parseFloat(inputs.stress), inputs.stressUnit || 'MPa');
    let e = toBaseUnit(parseFloat(inputs.strain), inputs.strainUnit || 'ratio');
    let ym = toBaseUnit(parseFloat(inputs.modulus), inputs.modulusUnit || 'GPa');
  
    let providedCount = (f > 0 ? 1 : 0) + (a > 0 ? 1 : 0) + (s > 0 ? 1 : 0) + (e > 0 ? 1 : 0) + (ym > 0 ? 1 : 0);
  
    if (providedCount < 2) {
      return {
        summary: [{ label: "Status", value: "Please enter at least 2 values to calculate.", isHighlight: true }]
      };
    }
  
    // --- SOLVER LOGIC ---
    // Pass 1: Resolve Force, Area, Stress triangle (σ = F / A)
    if (f > 0 && a > 0 && s === 0) s = f / a;
    else if (f > 0 && s > 0 && a === 0) a = f / s;
    else if (a > 0 && s > 0 && f === 0) f = s * a;
  
    // Pass 2: Resolve Stress, Strain, Modulus triangle (E = σ / ε)
    if (s > 0 && e > 0 && ym === 0) ym = s / e;
    else if (s > 0 && ym > 0 && e === 0) e = s / ym;
    else if (e > 0 && ym > 0 && s === 0) s = e * ym;
  
    // Pass 3: Re-resolve Force/Area/Stress if Stress was just discovered in Pass 2
    if (s > 0) {
      if (a > 0 && f === 0) f = s * a;
      if (f > 0 && a === 0) a = f / s;
    }
  
    // Formatting helpers
    const formatNum = (num, isStrain = false) => {
      if (num === 0) return "0";
      if (isStrain) return Number(num.toFixed(6)).toString(); // Strain gets more decimals
      if (num < 0.001 || num > 1000000) return num.toExponential(4).replace('e+', ' × 10^').replace('e', ' × 10^');
      return Number(num.toFixed(4)).toString();
    };
  
    // Convert Pascals back to MPa or GPa for cleaner display output
    const formatPressure = (pascals) => {
      if (pascals >= 1e9) return `${formatNum(pascals / 1e9)} GPa`;
      if (pascals >= 1e6) return `${formatNum(pascals / 1e6)} MPa`;
      if (pascals > 0) return `${formatNum(pascals)} Pa`;
      return "0 Pa";
    };
  
    return {
      summary: [
        { label: "Force (F)", value: f > 0 ? `${formatNum(f)} N` : "N/A", isHighlight: parseFloat(inputs.force) === 0 && f > 0 },
        { label: "Area (A)", value: a > 0 ? `${formatNum(a)} m²` : "N/A", isHighlight: parseFloat(inputs.area) === 0 && a > 0 },
        { label: "Stress (σ)", value: s > 0 ? formatPressure(s) : "N/A", isHighlight: parseFloat(inputs.stress) === 0 && s > 0 },
        { label: "Strain (ε)", value: e > 0 ? formatNum(e, true) : "N/A", isHighlight: parseFloat(inputs.strain) === 0 && e > 0 },
        { label: "Modulus (E)", value: ym > 0 ? formatPressure(ym) : "N/A", isHighlight: parseFloat(inputs.modulus) === 0 && ym > 0 }
      ]
    };
  }