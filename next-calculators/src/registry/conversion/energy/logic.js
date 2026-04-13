export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Conversion rates relative to 1 Joule (J)
      const conversionRates = {
        J: 1,
        kJ: 1000,
        cal: 4.184,
        kcal: 4184,
        kWh: 3600000,
        btu: 1055.06
      };
  
      const unitNames = {
        J: "Joules", kJ: "Kilojoules", cal: "Calories", 
        kcal: "Kilocalories", kWh: "Kilowatt-hours", btu: "BTUs"
      };
  
      const formatNumber = (num) => {
        if (num === 0) return "0";
        return num.toLocaleString('en-US', { 
          useGrouping: false, 
          maximumFractionDigits: 6 
        }).replace(/\.?0+$/, '');
      };
  
      if (fromUnit === toUnit) {
        summary = [{ label: `Result in ${unitNames[toUnit]}`, value: `${formatNumber(value)} ${toUnit}`, isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "No conversion needed."]] } };
      }
  
      const valueInJoules = value * conversionRates[fromUnit];
      const result = valueInJoules / conversionRates[toUnit];
      
      summary = [{ 
        label: `${formatNumber(value)} ${fromUnit} =`, 
        value: `${formatNumber(result)} ${toUnit}`, 
        isHighlight: true 
      }];
  
      rows = [
        ["From Unit", unitNames[fromUnit]],
        ["To Unit", unitNames[toUnit]],
        ["Internal Value (Joules)", `${formatNumber(valueInJoules)} J`],
        ["Final Result", `${formatNumber(result)} ${toUnit}`]
      ];
  
      return { summary, referenceTable: { headers: ["Process", "Data"], rows } };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };