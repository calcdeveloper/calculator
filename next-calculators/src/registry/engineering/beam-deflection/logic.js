export function calculateLogic(inputs) {
    // Convert units to Base SI: Meters (m), Newtons (N), Pascals (Pa), Meters^4 (m^4)
    const toBaseUnit = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        case 'mm': return val * 1e-3;
        case 'cm': return val * 1e-2;
        case 'in': return val * 0.0254;
        case 'ft': return val * 0.3048;
        case 'kN': return val * 1000;
        case 'lbf': return val * 4.44822;
        case 'MPa': return val * 1e6;
        case 'GPa': return val * 1e9;
        case 'psi': return val * 6894.76;
        case 'cm4': return val * 1e-8;
        case 'mm4': return val * 1e-12;
        case 'in4': return val * 4.162314e-7;
        default: return val; 
      }
    };
  
    let beam = inputs.beamType || 'cantilever';
    let load = inputs.loadType || 'point';
  
    let d = toBaseUnit(parseFloat(inputs.deflection), inputs.deflectionUnit || 'mm');
    let f = toBaseUnit(parseFloat(inputs.force), inputs.forceUnit || 'N');
    let l = toBaseUnit(parseFloat(inputs.length), inputs.lengthUnit || 'm');
    let e = toBaseUnit(parseFloat(inputs.modulus), inputs.modulusUnit || 'GPa');
    let i = toBaseUnit(parseFloat(inputs.inertia), inputs.inertiaUnit || 'cm4');
  
    // Count provided physical variables
    let providedCount = (d > 0 ? 1 : 0) + (f > 0 ? 1 : 0) + (l > 0 ? 1 : 0) + (e > 0 ? 1 : 0) + (i > 0 ? 1 : 0);
  
    if (providedCount < 4) {
      return {
        summary: [{ label: "Status", value: "Please enter exactly 4 numerical values to solve for the 5th.", isHighlight: true }]
      };
    }
  
    // Determine the structural Constant (K) based on Beam and Load Type combinations
    let k = 3; // Default (Cantilever + Point)
    if (beam === 'cantilever' && load === 'udl') {
      k = 8;
    } else if (beam === 'simply_supported' && load === 'point') {
      k = 48; // Point load at center
    } else if (beam === 'simply_supported' && load === 'udl') {
      k = 384 / 5; // 76.8
    }
  
    let missing = '';
  
    // --- UNIFIED REVERSE SOLVER LOGIC ---
    // Core Formula: δ = (F * L^3) / (K * E * I)
    if (d === 0) {
      missing = 'deflection';
      d = (f * Math.pow(l, 3)) / (k * e * i);
    } else if (f === 0) {
      missing = 'force';
      f = (k * d * e * i) / Math.pow(l, 3);
    } else if (l === 0) {
      missing = 'length';
      l = Math.cbrt((k * d * e * i) / f);
    } else if (e === 0) {
      missing = 'modulus';
      e = (f * Math.pow(l, 3)) / (k * d * i);
    } else if (i === 0) {
      missing = 'inertia';
      i = (f * Math.pow(l, 3)) / (k * d * e);
    }
  
    // Formatting Output
    const formatNum = (num) => {
      if (num === 0) return "0";
      if (num < 0.0001 || num > 1000000) return num.toExponential(4).replace('e+', ' × 10^').replace('e', ' × 10^');
      return Number(num.toFixed(5)).toString();
    };
  
    const formatModulus = (pascals) => {
      if (pascals >= 1e9) return `${formatNum(pascals / 1e9)} GPa`;
      if (pascals >= 1e6) return `${formatNum(pascals / 1e6)} MPa`;
      return `${formatNum(pascals)} Pa`;
    };
  
    return {
      summary: [
        { label: "Configuration", value: `${beam.replace('_', ' ').toUpperCase()} + ${load.toUpperCase()} LOAD`, isHighlight: false },
        { label: "Deflection (δ)", value: `${formatNum(d * 1000)} mm`, isHighlight: missing === 'deflection' },
        { label: "Total Force (F)", value: `${formatNum(f)} N`, isHighlight: missing === 'force' },
        { label: "Length (L)", value: `${formatNum(l)} m`, isHighlight: missing === 'length' },
        { label: "Modulus (E)", value: formatModulus(e), isHighlight: missing === 'modulus' },
        { label: "Inertia (I)", value: `${formatNum(i * 1e8)} cm⁴`, isHighlight: missing === 'inertia' }
      ]
    };
  }