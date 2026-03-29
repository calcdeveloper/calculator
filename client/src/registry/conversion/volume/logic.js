export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Define all units relative to 1 Liter (Base Unit)
      const conversionRates = {
        ml: 0.001,
        l: 1,
        m3: 1000,
        tsp: 0.00492892,
        tbsp: 0.0147868,
        floz: 0.0295735,
        cup: 0.236588,
        pt: 0.473176,
        qt: 0.946353,
        gal: 3.78541,
        ukgal: 4.54609 // Imperial Gallon is larger than US Gallon
      };
  
      const unitNames = {
        ml: "Milliliters", l: "Liters", m3: "Cubic Meters", 
        tsp: "US Teaspoons", tbsp: "US Tablespoons", floz: "US Fluid Ounces", 
        cup: "US Cups", pt: "US Pints", qt: "US Quarts", 
        gal: "US Gallons", ukgal: "Imperial Gallons"
      };
  
      // Formatter to completely prevent scientific notation and keep clean decimals
      const formatNumber = (num) => {
        if (num === 0) return "0";
        let formatted = num.toLocaleString('fullwide', { 
          useGrouping: false, 
          maximumFractionDigits: 7 
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
  
      // Convert from origin unit to base unit (Liters), then to target unit
      const valueInLiters = value * conversionRates[fromUnit];
      const result = valueInLiters / conversionRates[toUnit];
      
      // Calculate the direct multiplier for educational display
      const directMultiplier = conversionRates[fromUnit] / conversionRates[toUnit];
      
      const formattedResult = formatNumber(result);
      const formattedMultiplier = formatNumber(directMultiplier);
  
      summary = [{ 
        label: `${formattedInput} ${fromUnit} =`, 
        value: `${formattedResult} ${toUnit}`, 
        isHighlight: true 
      }];
  
      rows = [
        ["From Unit", unitNames[fromUnit]],
        ["To Unit", unitNames[toUnit]],
        ["Conversion Formula", `Multiply the volume by ${formattedMultiplier}`],
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