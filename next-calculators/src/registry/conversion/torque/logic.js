export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Conversion rates relative to 1 Newton-meter (Nm)
      const conversionRates = {
        Nm: 1,
        ftlb: 1.35581795,
        inlb: 0.112984829,
        kgm: 9.80665
      };
  
      const unitNames = {
        Nm: "Newton-meters",
        ftlb: "Pound-feet",
        inlb: "Pound-inches",
        kgm: "Kilogram-force meters"
      };
  
      const formatNumber = (num) => {
        if (num === 0) return "0";
        return num.toLocaleString('en-US', { 
          useGrouping: false, 
          maximumFractionDigits: 4 
        }).replace(/\.?0+$/, '');
      };
  
      if (fromUnit === toUnit) {
        summary = [{ label: `Result in ${unitNames[toUnit]}`, value: `${formatNumber(value)} ${toUnit}`, isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "No conversion required."]] } };
      }
  
      const valueInNm = value * conversionRates[fromUnit];
      const result = valueInNm / conversionRates[toUnit];
      
      summary = [{ 
        label: `${formatNumber(value)} ${fromUnit} =`, 
        value: `${formatNumber(result)} ${toUnit}`, 
        isHighlight: true 
      }];
  
      rows = [
        ["From Unit", unitNames[fromUnit]],
        ["To Unit", unitNames[toUnit]],
        ["Base Value (Nm)", `${formatNumber(valueInNm)} N·m`],
        ["Final Result", `${formatNumber(result)} ${toUnit}`]
      ];
  
      return { summary, referenceTable: { headers: ["Conversion Process", "Data"], rows } };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };