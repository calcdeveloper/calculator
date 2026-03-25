export const calculateLogic = (inputs) => {
    const logType = inputs.logType || 'common';
    
    // Use parseFloat for extremely safe state handling
    const x = parseFloat(inputs.numberX);
    const b = parseFloat(inputs.baseB);
  
    const formatNum = (num) => parseFloat(num.toFixed(6)).toString();
  
    // If the input is completely empty or invalid, pause calculation politely
    if (isNaN(x) || x <= 0) {
      return { summary: [{ label: 'Notice', value: 'Number (x) must be > 0', isHighlight: true }] };
    }
  
    let resultValue = 0;
    let resultLabel = '';
    let equationStr = '';
  
    if (logType === 'common') {
      resultValue = Math.log10(x);
      resultLabel = 'Common Logarithm';
      equationStr = `log₁₀(${x})`;
  
    } else if (logType === 'natural') {
      resultValue = Math.log(x); 
      resultLabel = 'Natural Logarithm (ln)';
      equationStr = `ln(${x})`;
  
    } else if (logType === 'custom') {
      if (isNaN(b) || b <= 0) {
        return { summary: [{ label: 'Notice', value: 'Base (b) must be > 0', isHighlight: true }] };
      }
      if (b === 1) {
        return { summary: [{ label: 'Notice', value: 'Base (b) cannot be exactly 1', isHighlight: true }] };
      }
      
      // Change of Base Formula
      resultValue = Math.log(x) / Math.log(b);
      resultLabel = `Logarithm Base ${b}`;
      equationStr = `log_${b}(${x})`;
    }
  
    return {
      summary: [
        { 
          label: `Result (y)`, 
          value: formatNum(resultValue), 
          isHighlight: true 
        }
      ],
      referenceTable: {
        headers: ["Property", "Value"],
        rows: [
          ["Log Type", resultLabel],
          ["Equation", equationStr],
          ["Number (x)", x.toString()],
          ["Calculated Result", formatNum(resultValue)]
        ]
      }
    };
  };