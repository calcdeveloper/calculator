export function calculateLogic(inputs) {
    // Convert selected units to base units (Farads, Volts, Coulombs, Joules)
    const toBaseUnit = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        // Capacitance
        case 'mF': return val * 1e-3;
        case 'µF': return val * 1e-6;
        case 'nF': return val * 1e-9;
        case 'pF': return val * 1e-12;
        // Voltage
        case 'kV': return val * 1e3;
        case 'mV': return val * 1e-3;
        // Charge
        case 'mC': return val * 1e-3;
        case 'µC': return val * 1e-6;
        case 'nC': return val * 1e-9;
        case 'pC': return val * 1e-12;
        // Energy
        case 'mJ': return val * 1e-3;
        case 'µJ': return val * 1e-6;
        
        default: return val; // Base units (F, V, C, J)
      }
    };
  
    let c = toBaseUnit(parseFloat(inputs.capacitance), inputs.capacitanceUnit || 'µF');
    let v = toBaseUnit(parseFloat(inputs.voltage), inputs.voltageUnit || 'V');
    let q = toBaseUnit(parseFloat(inputs.charge), inputs.chargeUnit || 'µC');
    let e = toBaseUnit(parseFloat(inputs.energy), inputs.energyUnit || 'mJ');
  
    let provided = [];
    if (!isNaN(c) && c > 0) provided.push({ key: 'C', name: 'Capacitance', value: c });
    if (!isNaN(v) && v > 0) provided.push({ key: 'V', name: 'Voltage', value: v });
    if (!isNaN(q) && q > 0) provided.push({ key: 'Q', name: 'Charge', value: q });
    if (!isNaN(e) && e > 0) provided.push({ key: 'E', name: 'Energy', value: e });
  
    if (provided.length < 2) {
      return {
        summary: [{ label: "Status", value: "Please enter exactly 2 values.", isHighlight: true }]
      };
    }
  
    const val1 = provided[0];
    const val2 = provided[1];
    const combo = val1.key + val2.key;
  
    let calcC = 0, calcV = 0, calcQ = 0, calcE = 0;
  
    // The 6 possible combinations of giving 2 variables out of 4
    if (combo === 'CV') {
      calcC = val1.value; calcV = val2.value; 
      calcQ = calcC * calcV; 
      calcE = 0.5 * calcC * (calcV * calcV);
    } else if (combo === 'CQ') {
      calcC = val1.value; calcQ = val2.value; 
      calcV = calcQ / calcC; 
      calcE = (calcQ * calcQ) / (2 * calcC);
    } else if (combo === 'CE') {
      calcC = val1.value; calcE = val2.value; 
      calcV = Math.sqrt((2 * calcE) / calcC); 
      calcQ = Math.sqrt(2 * calcE * calcC);
    } else if (combo === 'VQ') {
      calcV = val1.value; calcQ = val2.value; 
      calcC = calcQ / calcV; 
      calcE = 0.5 * calcQ * calcV;
    } else if (combo === 'VE') {
      calcV = val1.value; calcE = val2.value; 
      calcC = (2 * calcE) / (calcV * calcV); 
      calcQ = (2 * calcE) / calcV;
    } else if (combo === 'QE') {
      calcQ = val1.value; calcE = val2.value; 
      calcV = (2 * calcE) / calcQ; 
      calcC = (calcQ * calcQ) / (2 * calcE);
    }
  
    // Format numbers nicely, using scientific notation for very small/large values
    const formatNum = (num) => {
      if (num === 0) return "0";
      if (num < 0.0001 || num > 100000) {
        return num.toExponential(4).replace('e+', ' × 10^').replace('e', ' × 10^');
      }
      return Number(num.toFixed(6)).toString();
    };
  
    return {
      summary: [
        {
          label: "Capacitance (C)",
          value: `${formatNum(calcC)} Farads`,
          isHighlight: combo.indexOf('C') === -1
        },
        {
          label: "Voltage (V)",
          value: `${formatNum(calcV)} Volts`,
          isHighlight: combo.indexOf('V') === -1
        },
        {
          label: "Charge (Q)",
          value: `${formatNum(calcQ)} Coulombs`,
          isHighlight: combo.indexOf('Q') === -1
        },
        {
          label: "Energy (E)",
          value: `${formatNum(calcE)} Joules`,
          isHighlight: combo.indexOf('E') === -1
        },
        ...(provided.length > 2 
          ? [{ label: "Note", value: `Calculated using ${val1.name} & ${val2.name}. Others ignored.`, isHighlight: false }] 
          : [])
      ]
    };
  }