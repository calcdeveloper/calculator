export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Define all units relative to 1 Meter per Second (m/s)
      const conversionRates = {
        ms: 1,
        kmh: 1 / 3.6,           // 1 km/h = 1000m / 3600s
        mph: 0.44704,           // 1 mph = 1609.344m / 3600s
        fts: 0.3048,            // 1 ft/s = 0.3048m
        knot: 1852 / 3600,      // 1 knot = 1852m / 3600s
        mach: 343               // Standard speed of sound at 20°C
      };
  
      const unitNames = {
        ms: "Meters per Second", 
        kmh: "Kilometers per Hour", 
        mph: "Miles per Hour", 
        fts: "Feet per Second", 
        knot: "Knots", 
        mach: "Mach"
      };
  
      const unitSymbols = {
        ms: "m/s", kmh: "km/h", mph: "mph", fts: "ft/s", knot: "kn", mach: "Ma"
      };
  
      const formatNumber = (num) => {
        if (num === 0) return "0";
        let formatted = num.toLocaleString('en-US', { 
          useGrouping: false, 
          maximumFractionDigits: 6 
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
  
      // Convert from origin unit to base unit (m/s), then to target unit
      const valueInMs = value * conversionRates[fromUnit];
      const result = valueInMs / conversionRates[toUnit];
      
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
        ["Conversion Formula", `Multiply speed by ${formattedMultiplier}`],
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