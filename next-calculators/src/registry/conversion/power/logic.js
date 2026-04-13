export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Define all units relative to 1 Watt (W)
      const conversionRates = {
        W: 1,
        kW: 1000,
        MW: 1000000,
        hp_i: 745.699872, // Imperial/Mechanical Horsepower
        hp_m: 735.49875   // Metric Horsepower (PS)
      };
  
      const unitNames = {
        W: "Watts", kW: "Kilowatts", MW: "Megawatts", 
        hp_i: "Mechanical Horsepower", hp_m: "Metric Horsepower"
      };
  
      const unitSymbols = {
        W: "W", kW: "kW", MW: "MW", hp_i: "hp", hp_m: "PS"
      };
  
      const formatNumber = (num) => {
        if (num === 0) return "0";
        let formatted = num.toLocaleString('en-US', { 
          useGrouping: false, 
          maximumFractionDigits: 4 
        });
        if (formatted.includes('.')) {
          formatted = formatted.replace(/\.?0+$/, ''); // Strip trailing zeroes safely
        }
        return formatted;
      };
  
      if (fromUnit === toUnit) {
        summary = [{ label: `Result in ${unitNames[toUnit]}`, value: `${formatNumber(value)} ${unitSymbols[toUnit]}`, isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "Same unit selected."]] } };
      }
  
      // Convert from origin unit to base unit (Watts), then to target unit
      const valueInWatts = value * conversionRates[fromUnit];
      const result = valueInWatts / conversionRates[toUnit];
      
      const formattedInput = formatNumber(value);
      const formattedResult = formatNumber(result);
  
      // Calculate direct multiplier for the reference table
      const directMultiplier = conversionRates[fromUnit] / conversionRates[toUnit];
      
      summary = [{ 
        label: `${formattedInput} ${unitSymbols[fromUnit]} =`, 
        value: `${formattedResult} ${unitSymbols[toUnit]}`, 
        isHighlight: true 
      }];
  
      rows = [
        ["From Unit", unitNames[fromUnit]],
        ["To Unit", unitNames[toUnit]],
        ["Base Conversion (Watts)", `${formatNumber(valueInWatts)} W`],
        ["Direct Multiplier", `Multiply by ${formatNumber(directMultiplier)}`],
        ["Final Output", `${formattedResult} ${unitSymbols[toUnit]}`]
      ];
  
      return {
        summary,
        referenceTable: { headers: ["Conversion Details", "Data"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };