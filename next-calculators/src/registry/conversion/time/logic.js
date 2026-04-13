export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Define all units relative to 1 Second (Base Unit)
      // Using standard calendar assumptions: 1 Year = 365 days, 1 Month = 30.41666 days
      const conversionRates = {
        ms: 0.001,
        s: 1,
        min: 60,
        hr: 3600,
        d: 86400,
        wk: 604800,
        mo: 2628000, 
        yr: 31536000,
        dec: 315360000,
        cen: 3153600000
      };
  
      const unitNames = {
        ms: "Milliseconds", s: "Seconds", min: "Minutes", 
        hr: "Hours", d: "Days", wk: "Weeks", 
        mo: "Months", yr: "Years", dec: "Decades", cen: "Centuries"
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
        summary = [{ label: `Result in ${unitNames[toUnit]}`, value: formattedInput, isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "Same unit selected."]] } };
      }
  
      // Convert from origin unit to base unit (Seconds), then to target unit
      const valueInSeconds = value * conversionRates[fromUnit];
      const result = valueInSeconds / conversionRates[toUnit];
      
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
        ["Conversion Formula", `Multiply the time by ${formattedMultiplier}`],
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