export function calculateLogic(inputs) {
    // Conversion to Base Unit: Volts (V)
    const toBaseVoltage = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        case 'mV': return val * 0.001;
        case 'kV': return val * 1000;
        default: return val; // V
      }
    };
  
    let vp = toBaseVoltage(parseFloat(inputs.primaryVoltage), inputs.primaryVoltageUnit || 'V');
    let vs = toBaseVoltage(parseFloat(inputs.secondaryVoltage), inputs.secondaryVoltageUnit || 'V');
    let np = parseFloat(inputs.primaryTurns) || 0;
    let ns = parseFloat(inputs.secondaryTurns) || 0;
  
    // Count provided variables
    let providedCount = (vp > 0 ? 1 : 0) + (vs > 0 ? 1 : 0) + (np > 0 ? 1 : 0) + (ns > 0 ? 1 : 0);
  
    if (providedCount < 3) {
      return {
        summary: [{ label: "Status", value: "Please enter exactly 3 values to solve for the 4th.", isHighlight: true }]
      };
    }
    if (providedCount > 3) {
      return {
        summary: [{ label: "Status", value: "Please leave exactly one field as 0 to calculate it.", isHighlight: true }]
      };
    }
  
    let missing = '';
  
    // --- REVERSE SOLVER LOGIC ---
    // Core Formula: Vp / Vs = Np / Ns
    if (vp === 0) {
      missing = 'primaryVoltage';
      vp = (np / ns) * vs;
    } else if (vs === 0) {
      missing = 'secondaryVoltage';
      vs = (ns / np) * vp;
    } else if (np === 0) {
      missing = 'primaryTurns';
      np = (vp / vs) * ns;
    } else if (ns === 0) {
      missing = 'secondaryTurns';
      ns = (vs / vp) * np;
    }
  
    // Determine Transformer Type
    let transformerType = "Isolation (1:1)";
    if (vs > vp) {
      transformerType = "Step-Up Transformer";
    } else if (vs < vp) {
      transformerType = "Step-Down Transformer";
    }
  
    // Calculate strict Turns Ratio (Primary : Secondary)
    // Simplifying the ratio to 1
    let ratioDisplay = "";
    if (np > ns) {
      ratioDisplay = `${Number((np / ns).toFixed(3))} : 1`;
    } else {
      ratioDisplay = `1 : ${Number((ns / np).toFixed(3))}`;
    }
  
    // Formatting Output
    const formatNum = (num) => Number(num.toFixed(3)).toString();
    const formatTurns = (num) => Math.round(num).toString(); // Coil turns should ideally be whole numbers
  
    return {
      summary: [
        { label: "Primary Voltage (Vp)", value: `${formatNum(vp)} V`, isHighlight: missing === 'primaryVoltage' },
        { label: "Secondary Volts (Vs)", value: `${formatNum(vs)} V`, isHighlight: missing === 'secondaryVoltage' },
        { label: "Primary Turns (Np)", value: formatTurns(np), isHighlight: missing === 'primaryTurns' },
        { label: "Secondary Turns (Ns)", value: formatTurns(ns), isHighlight: missing === 'secondaryTurns' },
        { label: "Turns Ratio (Np:Ns)", value: ratioDisplay, isHighlight: false },
        { label: "Transformer Type", value: transformerType, isHighlight: true }
      ]
    };
  }