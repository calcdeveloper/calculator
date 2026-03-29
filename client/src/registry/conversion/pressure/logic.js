export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Define all units relative to 1 Pascal (Pa)
      const conversionRates = {
        Pa: 1,
        kPa: 1000,
        MPa: 1000000,
        bar: 100000,
        atm: 101325,
        torr: 133.322368, // 1 atm = 760 torr. 101325 / 760 = 133.322368
        psi: 6894.75729   // 1 psi ≈ 6894.76 Pa
      };
  
      const unitNames = {
        Pa: "Pascals", kPa: "Kilopascals", MPa: "Megapascals", 
        bar: "Bars", atm: "Atmospheres", torr: "Torr", psi: "Pounds per square inch"
      };
  
      const unitSymbols = {
        Pa: "Pa", kPa: "kPa", MPa: "MPa", bar: "bar", atm: "atm", torr: "Torr", psi: "psi"
      };
  
      // Format number to avoid massive decimal trails
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
  
      // Convert from origin unit to base unit (Pa), then to target unit
      const valueInPa = value * conversionRates[fromUnit];
      const result = valueInPa / conversionRates[toUnit];
      
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
        ["Base Conversion (Pascals)", `${formatNumber(valueInPa)} Pa`],
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