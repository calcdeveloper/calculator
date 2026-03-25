export const calculateLogic = (inputs) => {
    // Safely parse numbers
    const x = parseFloat(inputs.baseX);
    const n = parseFloat(inputs.exponentN);
  
    // Soft validation for empty fields
    if (isNaN(x) || isNaN(n)) {
      return { summary: [{ label: 'Notice', value: 'Awaiting valid numbers', isHighlight: true }] };
    }
  
    // Handle Imaginary Numbers (Negative base with a fractional/decimal exponent)
    if (x < 0 && !Number.isInteger(n)) {
      return { summary: [{ label: 'Notice', value: 'Result is a complex/imaginary number', isHighlight: true }] };
    }
  
    // Calculate x to the power of n
    const resultValue = Math.pow(x, n);
  
    // Format the result dynamically based on size
    let formattedResult = '';
    if (!isFinite(resultValue)) {
      formattedResult = 'Infinity';
    } else if (Math.abs(resultValue) >= 1e12 || (Math.abs(resultValue) < 1e-6 && resultValue !== 0)) {
      // Use scientific notation for massive or microscopic numbers
      formattedResult = resultValue.toExponential(6);
    } else if (!Number.isInteger(resultValue)) {
      // Format standard decimals to 6 places
      formattedResult = parseFloat(resultValue.toFixed(6)).toString();
    } else {
      // Standard integers
      formattedResult = resultValue.toString();
    }
  
    return {
      summary: [
        { 
          label: `Result (y)`, 
          value: formattedResult, 
          isHighlight: true 
        }
      ],
      referenceTable: {
        headers: ["Property", "Value"],
        rows: [
          ["Equation Format", `${x}^${n}`],
          ["Base Number (x)", x.toString()],
          ["Exponent / Power (n)", n.toString()],
          ["Calculated Result", formattedResult]
        ]
      }
    };
  };