export function calculateLogic(inputs) {
    // Convert units to Base SI: kg/m³, m/s, m, Pa·s
    const toBaseUnit = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        // Density
        case 'lb_ft3': return val * 16.0185;
        case 'g_cm3': return val * 1000;
        // Velocity
        case 'ft_s': return val * 0.3048;
        case 'cm_s': return val * 0.01;
        // Diameter
        case 'cm': return val * 0.01;
        case 'mm': return val * 0.001;
        case 'in': return val * 0.0254;
        case 'ft': return val * 0.3048;
        // Viscosity
        case 'cP': return val * 0.001;
        case 'lb_ft_s': return val * 1.48816;
        
        default: return val; // kg_m3, m_s, m, Pa_s
      }
    };
  
    let re = parseFloat(inputs.reynolds) || 0;
    let rho = toBaseUnit(parseFloat(inputs.density), inputs.densityUnit || 'kg_m3');
    let v = toBaseUnit(parseFloat(inputs.velocity), inputs.velocityUnit || 'm_s');
    let d = toBaseUnit(parseFloat(inputs.diameter), inputs.diameterUnit || 'm');
    let mu = toBaseUnit(parseFloat(inputs.viscosity), inputs.viscosityUnit || 'Pa_s');
  
    let providedCount = (re > 0 ? 1 : 0) + (rho > 0 ? 1 : 0) + (v > 0 ? 1 : 0) + (d > 0 ? 1 : 0) + (mu > 0 ? 1 : 0);
  
    if (providedCount < 4) {
      return {
        summary: [{ label: "Status", value: "Please enter exactly 4 values to solve for the 5th.", isHighlight: true }]
      };
    }
  
    let missing = '';
  
    // --- REVERSE SOLVER LOGIC ---
    // Formula: Re = (ρ * v * D) / μ
    if (re === 0) {
      missing = 'reynolds';
      re = (rho * v * d) / mu;
    } else if (rho === 0) {
      missing = 'density';
      rho = (re * mu) / (v * d);
    } else if (v === 0) {
      missing = 'velocity';
      v = (re * mu) / (rho * d);
    } else if (d === 0) {
      missing = 'diameter';
      d = (re * mu) / (rho * v);
    } else if (mu === 0) {
      missing = 'viscosity';
      mu = (rho * v * d) / re;
    }
  
    // Determine Flow Regime based on Reynolds Number in pipes
    let flowRegime = "Unknown";
    if (re > 0) {
      if (re < 2300) flowRegime = "Laminar Flow (Smooth)";
      else if (re >= 2300 && re <= 4000) flowRegime = "Transitional Flow (Unstable)";
      else flowRegime = "Turbulent Flow (Chaotic)";
    }
  
    // Formatting Output
    const formatNum = (num) => {
      if (num === 0) return "0";
      if (num < 0.0001 || num > 1000000) return num.toExponential(4).replace('e+', ' × 10^').replace('e', ' × 10^');
      return Number(num.toFixed(4)).toString();
    };
  
    return {
      summary: [
        { label: "Reynolds Number (Re)", value: formatNum(re), isHighlight: missing === 'reynolds' },
        { label: "Flow Regime", value: flowRegime, isHighlight: true },
        { label: "Fluid Density (ρ)", value: `${formatNum(rho)} kg/m³`, isHighlight: missing === 'density' },
        { label: "Flow Velocity (v)", value: `${formatNum(v)} m/s`, isHighlight: missing === 'velocity' },
        { label: "Diameter/Length (D)", value: `${formatNum(d)} m`, isHighlight: missing === 'diameter' },
        { label: "Dynamic Viscosity (μ)", value: `${formatNum(mu)} Pa·s`, isHighlight: missing === 'viscosity' }
      ]
    };
  }