export const calculateLogic = (inputs) => {
    const { inputValue, conversionMode } = inputs;
    let summary = [];
    let rows = [];
  
    try {
      const val = inputValue.toString().trim().toUpperCase();
      if (!val) throw new Error("Please enter a value.");
  
      const romanMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
      ];
  
      const romanValues = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
      };
  
      if (conversionMode === 'num2rom') {
        // Logic: Number to Roman Numeral
        let num = parseInt(val, 10);
        if (isNaN(num)) throw new Error("Please enter a valid whole number.");
        if (num < 1 || num > 3999) throw new Error("Standard Roman numerals only support numbers from 1 to 3999.");
  
        let originalNum = num;
        let result = '';
        let breakdown = [];
  
        for (let i = 0; i < romanMap.length; i++) {
          while (num >= romanMap[i].value) {
            result += romanMap[i].symbol;
            breakdown.push(`${romanMap[i].symbol} (${romanMap[i].value})`);
            num -= romanMap[i].value;
          }
        }
  
        summary = [{ label: `${originalNum} =`, value: result, isHighlight: true }];
        rows = [
          ["Input Number", originalNum.toString()],
          ["Numeral Breakdown", breakdown.join(" + ")],
          ["Final Roman Numeral", result]
        ];
  
      } else {
        // Logic: Roman Numeral to Number
        if (!/^[MDCLXVI]+$/.test(val)) {
          throw new Error("Invalid characters. Use only M, D, C, L, X, V, I.");
        }
  
        let total = 0;
        let explanationSteps = [];
  
        for (let i = 0; i < val.length; i++) {
          let currentVal = romanValues[val[i]];
          let nextVal = romanValues[val[i + 1]];
  
          if (nextVal && currentVal < nextVal) {
            // Subtractive notation (e.g., IV = 4)
            total += (nextVal - currentVal);
            explanationSteps.push(`${val[i]}${val[i+1]} = ${nextVal} - ${currentVal} = ${nextVal - currentVal}`);
            i++; // Skip the next character since we processed it
          } else {
            // Additive notation (e.g., VI = 6)
            total += currentVal;
            explanationSteps.push(`${val[i]} = ${currentVal}`);
          }
        }
  
        summary = [{ label: `${val} =`, value: total.toString(), isHighlight: true }];
        rows = [
          ["Input Roman Numeral", val],
          ["Calculation Steps", explanationSteps.join(", ")],
          ["Final Number", total.toString()]
        ];
      }
  
      return {
        summary,
        referenceTable: { headers: ["Conversion Steps", "Data"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };