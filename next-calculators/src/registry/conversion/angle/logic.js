export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Conversion rates relative to 1 Degree (deg)
      const toDegrees = {
        deg: 1,
        rad: 180 / Math.PI,
        grad: 0.9 // 360 / 400
      };
  
      const fromDegrees = {
        deg: 1,
        rad: Math.PI / 180,
        grad: 10 / 9 // 400 / 360
      };
  
      const unitNames = {
        deg: "Degrees",
        rad: "Radians",
        grad: "Gradians"
      };
  
      const unitSymbols = {
        deg: "°",
        rad: "rad",
        grad: "grad"
      };
  
      const formatNumber = (num) => {
        if (num === 0) return "0";
        return num.toLocaleString('en-US', { 
          useGrouping: false, 
          maximumFractionDigits: 8 
        }).replace(/\.?0+$/, '');
      };
  
      if (fromUnit === toUnit) {
        summary = [{ label: `Result in ${unitNames[toUnit]}`, value: `${formatNumber(value)}${unitSymbols[toUnit]}`, isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "Same unit selected."]] } };
      }
  
      // Convert to base (Degrees), then to target
      const valueInDeg = value * toDegrees[fromUnit];
      const result = valueInDeg * fromDegrees[toUnit];
      
      summary = [{ 
        label: `${formatNumber(value)}${unitSymbols[fromUnit]} =`, 
        value: `${formatNumber(result)} ${unitSymbols[toUnit]}`, 
        isHighlight: true 
      }];
  
      rows = [
        ["From Unit", unitNames[fromUnit]],
        ["To Unit", unitNames[toUnit]],
        ["Base Value (Degrees)", `${formatNumber(valueInDeg)}°`],
        ["Final Conversion", `${formatNumber(result)} ${unitSymbols[toUnit]}`]
      ];
  
      return { summary, referenceTable: { headers: ["Conversion Breakdown", "Data"], rows } };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };