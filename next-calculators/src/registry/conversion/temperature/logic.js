export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      const unitSymbols = { c: "°C", f: "°F", k: "K" };
      const unitNames = { c: "Celsius", f: "Fahrenheit", k: "Kelvin" };
  
      // Prevent scientific notation and format cleanly
      const formatNumber = (num) => {
        let formatted = num.toLocaleString('fullwide', { 
          useGrouping: false, 
          maximumFractionDigits: 4 
        });
        if (formatted.includes('.')) {
          formatted = formatted.replace(/\.?0+$/, ''); // Strip trailing zeroes
        }
        return formatted;
      };
  
      const formattedInput = formatNumber(value);
  
      if (fromUnit === toUnit) {
        summary = [{ label: `Result in ${unitNames[toUnit]}`, value: `${formattedInput} ${unitSymbols[toUnit]}`, isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "Same unit selected."]] } };
      }
  
      let result = 0;
      let formulaStr = "";
      let calculationStr = "";
  
      // 1. Celsius to Fahrenheit
      if (fromUnit === 'c' && toUnit === 'f') {
        result = (value * 9/5) + 32;
        formulaStr = "(°C × 9/5) + 32";
        calculationStr = `(${formattedInput} × 9/5) + 32`;
      }
      // 2. Fahrenheit to Celsius
      else if (fromUnit === 'f' && toUnit === 'c') {
        result = (value - 32) * 5/9;
        formulaStr = "(°F - 32) × 5/9";
        calculationStr = `(${formattedInput} - 32) × 5/9`;
      }
      // 3. Celsius to Kelvin
      else if (fromUnit === 'c' && toUnit === 'k') {
        result = value + 273.15;
        formulaStr = "°C + 273.15";
        calculationStr = `${formattedInput} + 273.15`;
      }
      // 4. Kelvin to Celsius
      else if (fromUnit === 'k' && toUnit === 'c') {
        result = value - 273.15;
        formulaStr = "K - 273.15";
        calculationStr = `${formattedInput} - 273.15`;
      }
      // 5. Fahrenheit to Kelvin
      else if (fromUnit === 'f' && toUnit === 'k') {
        result = (value - 32) * 5/9 + 273.15;
        formulaStr = "(°F - 32) × 5/9 + 273.15";
        calculationStr = `(${formattedInput} - 32) × 5/9 + 273.15`;
      }
      // 6. Kelvin to Fahrenheit
      else if (fromUnit === 'k' && toUnit === 'f') {
        result = (value - 273.15) * 9/5 + 32;
        formulaStr = "(K - 273.15) × 9/5 + 32";
        calculationStr = `(${formattedInput} - 273.15) × 9/5 + 32`;
      }
  
      const formattedResult = formatNumber(result);
  
      // Absolute zero check (Optional educational touch)
      if ((toUnit === 'k' && result < 0) || (fromUnit === 'k' && value < 0)) {
         rows.push(["Note", "Value is below Absolute Zero (0 K), which is physically impossible!"]);
      }
  
      summary = [{ 
        label: `${formattedInput} ${unitSymbols[fromUnit]} =`, 
        value: `${formattedResult} ${unitSymbols[toUnit]}`, 
        isHighlight: true 
      }];
  
      rows.unshift(
        ["From Unit", unitNames[fromUnit]],
        ["To Unit", unitNames[toUnit]],
        ["Conversion Formula", formulaStr],
        ["Calculation", calculationStr],
        ["Exact Output", `${formattedResult} ${unitSymbols[toUnit]}`]
      );
  
      return {
        summary,
        referenceTable: { headers: ["Conversion Details", "Data"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };