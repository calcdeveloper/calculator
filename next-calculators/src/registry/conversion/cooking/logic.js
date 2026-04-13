export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Define all units relative to 1 Milliliter (Base Unit) for liquid volume
      const conversionRates = {
        ml: 1,
        l: 1000,
        tsp: 4.92892,
        tbsp: 14.7868,
        floz: 29.5735,
        cup: 236.588,
        pt: 473.176,
        qt: 946.353
      };
  
      const unitNames = {
        ml: "Milliliters", l: "Liters", 
        tsp: "Teaspoons", tbsp: "Tablespoons", floz: "Fluid Ounces", 
        cup: "Cups", pt: "Pints", qt: "Quarts"
      };
  
      // Clean formatter to completely prevent scientific notation
      const formatNumber = (num) => {
        if (num === 0) return "0";
        let formatted = num.toLocaleString('fullwide', { 
          useGrouping: false, 
          maximumFractionDigits: 4 
        });
        if (formatted.includes('.')) {
          formatted = formatted.replace(/\.?0+$/, ''); // Strip trailing zeroes safely
        }
        return formatted;
      };
  
      const formattedInput = formatNumber(value);
  
      if (fromUnit === toUnit) {
        summary = [{ label: `Result in ${unitNames[toUnit]}`, value: formattedInput, isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "Same unit selected."]] } };
      }
  
      // Convert from origin unit to base unit (ml), then to target unit
      const valueInMl = value * conversionRates[fromUnit];
      const result = valueInMl / conversionRates[toUnit];
      
      // Calculate the direct multiplier for educational display
      const directMultiplier = conversionRates[fromUnit] / conversionRates[toUnit];
      
      const formattedResult = formatNumber(result);
      const formattedMultiplier = formatNumber(directMultiplier);
  
      summary = [{ 
        label: `${formattedInput} ${unitNames[fromUnit]} =`, 
        value: `${formattedResult} ${unitNames[toUnit]}`, 
        isHighlight: true 
      }];
  
      rows = [
        ["From Unit", unitNames[fromUnit]],
        ["To Unit", unitNames[toUnit]],
        ["Conversion Formula", `Multiply the amount by ${formattedMultiplier}`],
        ["Calculation", `${formattedInput} × ${formattedMultiplier}`],
        ["Exact Output", `${formattedResult} ${unitNames[toUnit]}`]
      ];
  
      return {
        summary,
        referenceTable: { headers: ["Conversion Details", "Data"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };