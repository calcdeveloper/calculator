export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Define all units relative to 1 Byte (Base Unit) using the Binary (1024) standard
      const conversionRates = {
        bit: 1 / 8,             // 8 bits in a Byte
        B: 1,
        KB: 1024,
        MB: 1048576,            // 1024^2
        GB: 1073741824,         // 1024^3
        TB: 1099511627776,      // 1024^4
        PB: 1125899906842624    // 1024^5
      };
  
      const unitNames = {
        bit: "Bits", B: "Bytes", KB: "Kilobytes", 
        MB: "Megabytes", GB: "Gigabytes", 
        TB: "Terabytes", PB: "Petabytes"
      };
  
      const unitSymbols = {
        bit: "b", B: "B", KB: "KB", MB: "MB", GB: "GB", TB: "TB", PB: "PB"
      };
  
      // Clean formatter to completely prevent scientific notation for massive byte counts
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
  
      // Convert from origin unit to base unit (Bytes), then to target unit
      const valueInBytes = value * conversionRates[fromUnit];
      const result = valueInBytes / conversionRates[toUnit];
      
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
        ["Conversion Formula", `Multiply the data size by ${formattedMultiplier}`],
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