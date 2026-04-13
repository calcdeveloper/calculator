export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Define all units relative to 1 Gram (Base Unit)
      const conversionRates = {
        mg: 0.001,
        g: 1,
        kg: 1000,
        mt: 1000000,
        oz: 28.349523125,
        lb: 453.59237,
        st: 6350.29318,
        uston: 907184.74
      };
  
      const unitNames = {
        mg: "Milligrams", g: "Grams", kg: "Kilograms", mt: "Metric Tons",
        oz: "Ounces", lb: "Pounds", st: "Stones", uston: "US Short Tons"
      };
  
      if (fromUnit === toUnit) {
        // Use toLocaleString to prevent scientific notation even on identical massive numbers
        const exactValue = value.toLocaleString('fullwide', { useGrouping: false, maximumFractionDigits: 10 });
        summary = [{ label: `Result in ${unitNames[toUnit]}`, value: exactValue, isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "Same unit selected."]] } };
      }
  
      // Convert from origin unit to base unit (Grams), then to target unit
      const valueInGrams = value * conversionRates[fromUnit];
      const result = valueInGrams / conversionRates[toUnit];
      
      // Calculate the direct multiplier for educational display
      const directMultiplier = conversionRates[fromUnit] / conversionRates[toUnit];
      
      // NEW FORMATTER: Forces exact numbers and prevents "1e+9" scientific notation
      const formatNumber = (num) => {
        if (num === 0) return "0";
        
        // 'fullwide' and useGrouping:false forces JS to print the entire number out
        let formatted = num.toLocaleString('fullwide', { 
          useGrouping: false, 
          maximumFractionDigits: 10 
        });
        
        // Clean up any trailing decimals if it resolved to a clean integer
        if (formatted.includes('.')) {
          formatted = formatted.replace(/\.?0+$/, '');
        }
        return formatted;
      };
  
      const formattedResult = formatNumber(result);
      const formattedMultiplier = formatNumber(directMultiplier);
      const formattedInput = formatNumber(value);
  
      summary = [{ 
        label: `${formattedInput} ${fromUnit} =`, 
        value: `${formattedResult} ${toUnit}`, 
        isHighlight: true 
      }];
  
      rows = [
        ["From Unit", unitNames[fromUnit]],
        ["To Unit", unitNames[toUnit]],
        ["Conversion Formula", `Multiply the weight by ${formattedMultiplier}`],
        ["Calculation", `${formattedInput} × ${formattedMultiplier}`],
        ["Exact Output", `${formattedResult} ${toUnit}`]
      ];
  
      return {
        summary,
        referenceTable: { headers: ["Conversion Details", "Data"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };