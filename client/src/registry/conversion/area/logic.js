export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Define all units relative to 1 Square Meter (Base Unit)
      const conversionRates = {
        sqmm: 0.000001,
        sqcm: 0.0001,
        sqm: 1,
        ha: 10000,
        sqkm: 1000000,
        sqin: 0.00064516,
        sqft: 0.09290304,
        sqyd: 0.83612736,
        ac: 4046.8564224,
        sqmi: 2589988.110336
      };
  
      const unitSymbols = {
        sqmm: "mm²", sqcm: "cm²", sqm: "m²", ha: "ha", sqkm: "km²",
        sqin: "sq in", sqft: "sq ft", sqyd: "sq yd", ac: "acres", sqmi: "sq mi"
      };
  
      const unitNames = {
        sqmm: "Square Millimeters", sqcm: "Square Centimeters", sqm: "Square Meters", 
        ha: "Hectares", sqkm: "Square Kilometers", sqin: "Square Inches", 
        sqft: "Square Feet", sqyd: "Square Yards", ac: "Acres", sqmi: "Square Miles"
      };
  
      // Formatter to completely prevent scientific notation
      const formatNumber = (num) => {
        if (num === 0) return "0";
        let formatted = num.toLocaleString('fullwide', { 
          useGrouping: false, 
          maximumFractionDigits: 8 
        });
        if (formatted.includes('.')) {
          formatted = formatted.replace(/\.?0+$/, ''); // Strip trailing zeroes safely
        }
        return formatted;
      };
  
      const formattedInput = formatNumber(value);
  
      if (fromUnit === toUnit) {
        summary = [{ label: `Result in ${unitNames[toUnit]}`, value: `${formattedInput} ${unitSymbols[toUnit]}`, isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "Same unit selected."]] } };
      }
  
      // Convert from origin unit to base unit (Square Meters), then to target unit
      const valueInSqMeters = value * conversionRates[fromUnit];
      const result = valueInSqMeters / conversionRates[toUnit];
      
      // Calculate the direct multiplier for educational display
      const directMultiplier = conversionRates[fromUnit] / conversionRates[toUnit];
      
      const formattedResult = formatNumber(result);
      const formattedMultiplier = formatNumber(directMultiplier);
  
      summary = [{ 
        label: `${formattedInput} ${unitSymbols[fromUnit]} =`, 
        value: `${formattedResult} ${unitSymbols[toUnit]}`, 
        isHighlight: true 
      }];
  
      rows = [
        ["From Unit", unitNames[fromUnit]],
        ["To Unit", unitNames[toUnit]],
        ["Conversion Formula", `Multiply the area by ${formattedMultiplier}`],
        ["Calculation", `${formattedInput} × ${formattedMultiplier}`],
        ["Exact Output", `${formattedResult} ${unitSymbols[toUnit]}`]
      ];
  
      return {
        summary,
        referenceTable: { headers: ["Conversion Details", "Data"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };