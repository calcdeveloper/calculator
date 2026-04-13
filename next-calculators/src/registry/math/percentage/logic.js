export const calculateLogic = (inputs) => {
    const { calcType, val1, val2 } = inputs;
    
    const x = Number(val1);
    const y = Number(val2);
    
    let resultText = '';
    let highlightValue = '';
    let formulaUsed = '';
  
    if (calcType === 'type1') {
      // What is X% of Y?
      const result = (x / 100) * y;
      resultText = `${x}% of ${y} is:`;
      highlightValue = Number.isInteger(result) ? result.toString() : result.toFixed(2);
      formulaUsed = `(${x} / 100) × ${y} = ${highlightValue}`;
      
    } else if (calcType === 'type2') {
      // X is what % of Y?
      if (y === 0) {
        return { summary: [{ label: 'Error', value: 'Cannot divide by zero', isHighlight: true }] };
      }
      const result = (x / y) * 100;
      resultText = `${x} is what percentage of ${y}?`;
      highlightValue = `${Number.isInteger(result) ? result.toString() : result.toFixed(2)}%`;
      formulaUsed = `(${x} / ${y}) × 100 = ${highlightValue}`;
      
    } else if (calcType === 'type3') {
      // Percentage Increase/Decrease
      if (x === 0) {
        return { summary: [{ label: 'Error', value: 'Initial value (X) cannot be zero', isHighlight: true }] };
      }
      const change = y - x;
      const result = (change / Math.abs(x)) * 100;
      const direction = result >= 0 ? 'Increase' : 'Decrease';
      
      resultText = `Percentage ${direction} from ${x} to ${y}:`;
      highlightValue = `${Math.abs(result).toFixed(2)}%`;
      formulaUsed = `((${y} - ${x}) / |${x}|) × 100 = ${highlightValue}`;
    }
  
    return {
      summary: [
        { 
          label: resultText, 
          value: highlightValue, 
          isCurrency: false, 
          isHighlight: true 
        }
      ],
      schedule: [], 
      referenceTable: {
        headers: ["Calculation Goal", "Mathematical Formula", "Everyday Example"],
        rows: [
          ["What is X% of Y?", "X / 100 × Y", "Calculating a 20% tip on a $50 bill."],
          ["X is what % of Y?", "(X / Y) × 100", "Finding out your test score (85 out of 100)."],
          ["% Increase / Decrease", "((Y - X) / |X|) × 100", "Calculating inflation or discount rates."]
        ]
      }
    };
  };