export function calculateLogic(inputs) {
    // Convert chosen units to base units for accurate math
    const toBaseUnit = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        case 'kV': return val * 1000;
        case 'mV': return val / 1000;
        case 'mA': return val / 1000;
        case 'kΩ': return val * 1000;
        case 'MΩ': return val * 1000000;
        case 'kW': return val * 1000;
        case 'MW': return val * 1000000;
        case 'hp': return val * 745.7; // Mechanical horsepower to watts
        default: return val; 
      }
    };
  
    // Extract values using dynamic unit keys (e.g., inputs.voltageUnit)
    let v = toBaseUnit(parseFloat(inputs.voltage), inputs.voltageUnit || 'V');
    let i = toBaseUnit(parseFloat(inputs.current), inputs.currentUnit || 'A');
    let r = toBaseUnit(parseFloat(inputs.resistance), inputs.resistanceUnit || 'Ω');
    let p = toBaseUnit(parseFloat(inputs.power), inputs.powerUnit || 'W');
  
    let provided = [];
    if (!isNaN(v) && v > 0) provided.push({ key: 'V', name: 'Voltage', value: v });
    if (!isNaN(i) && i > 0) provided.push({ key: 'I', name: 'Current', value: i });
    if (!isNaN(r) && r > 0) provided.push({ key: 'R', name: 'Resistance', value: r });
    if (!isNaN(p) && p > 0) provided.push({ key: 'P', name: 'Power', value: p });
  
    if (provided.length < 2) {
      return {
        summary: [{ label: "Status", value: "Please enter at least 2 values to calculate.", isHighlight: true }]
      };
    }
  
    const val1 = provided[0];
    const val2 = provided[1];
    const combo = val1.key + val2.key;
  
    let calcV = 0, calcI = 0, calcR = 0, calcP = 0;
  
    if (combo === 'VI') {
      calcV = val1.value; calcI = val2.value; calcR = calcV / calcI; calcP = calcV * calcI;
    } else if (combo === 'VR') {
      calcV = val1.value; calcR = val2.value; calcI = calcV / calcR; calcP = (calcV * calcV) / calcR;
    } else if (combo === 'VP') {
      calcV = val1.value; calcP = val2.value; calcI = calcP / calcV; calcR = (calcV * calcV) / calcP;
    } else if (combo === 'IR') {
      calcI = val1.value; calcR = val2.value; calcV = calcI * calcR; calcP = calcI * calcI * calcR;
    } else if (combo === 'IP') {
      calcI = val1.value; calcP = val2.value; calcV = calcP / calcI; calcR = calcP / (calcI * calcI);
    } else if (combo === 'RP') {
      calcR = val1.value; calcP = val2.value; calcV = Math.sqrt(calcP * calcR); calcI = Math.sqrt(calcP / calcR);
    }
  
    // Round to max 4 decimal places for clean display
    const formatNum = (num) => Number(num.toFixed(4));
  
    return {
      summary: [
        {
          label: "Voltage (V)",
          value: `${formatNum(calcV)} Volts`,
          isHighlight: combo.indexOf('V') === -1
        },
        {
          label: "Current (I)",
          value: `${formatNum(calcI)} Amperes`,
          isHighlight: combo.indexOf('I') === -1
        },
        {
          label: "Resistance (R)",
          value: `${formatNum(calcR)} Ohms (Ω)`,
          isHighlight: combo.indexOf('R') === -1
        },
        {
          label: "Power (P)",
          value: `${formatNum(calcP)} Watts`,
          isHighlight: combo.indexOf('P') === -1
        },
        ...(provided.length > 2 
          ? [{ label: "Note", value: `Calculated using ${val1.name} & ${val2.name}. Other inputs ignored.`, isHighlight: false }] 
          : [])
      ]
    };
  }