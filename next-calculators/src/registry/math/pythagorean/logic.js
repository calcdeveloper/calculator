export const calculateLogic = (inputs) => {
    const solveFor = inputs.solveFor || 'hypotenuse';
    const a = Number(inputs.sideA) || 0;
    const b = Number(inputs.sideB) || 0;
    const c = Number(inputs.sideC) || 0;
  
    // Helper to format decimals elegantly
    const formatNum = (num) => parseFloat(num.toFixed(6)).toString();
  
    let resultValue = 0;
    let resultLabel = '';
    let steps = '';
  
    try {
      if (solveFor === 'hypotenuse') {
        if (a <= 0 || b <= 0) throw new Error("Both legs must be greater than 0.");
        resultValue = Math.sqrt((a * a) + (b * b));
        resultLabel = 'Hypotenuse (c)';
        steps = `c = √(a² + b²) = √(${a}² + ${b}²) = √(${a * a} + ${b * b}) = √${a * a + b * b}`;
        
      } else if (solveFor === 'legA') {
        if (b <= 0 || c <= 0) throw new Error("Leg and hypotenuse must be greater than 0.");
        if (b >= c) throw new Error("Hypotenuse (c) must be strictly longer than Leg (b).");
        resultValue = Math.sqrt((c * c) - (b * b));
        resultLabel = 'Leg (a)';
        steps = `a = √(c² - b²) = √(${c}² - ${b}²) = √(${c * c} - ${b * b}) = √${c * c - b * b}`;
  
      } else if (solveFor === 'legB') {
        if (a <= 0 || c <= 0) throw new Error("Leg and hypotenuse must be greater than 0.");
        if (a >= c) throw new Error("Hypotenuse (c) must be strictly longer than Leg (a).");
        resultValue = Math.sqrt((c * c) - (a * a));
        resultLabel = 'Leg (b)';
        steps = `b = √(c² - a²) = √(${c}² - ${a}²) = √(${c * c} - ${a * a}) = √${c * c - a * a}`;
      }
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  
    return {
      summary: [
        { label: resultLabel, value: formatNum(resultValue), isHighlight: true }
      ],
      referenceTable: {
        headers: ["Property", "Value"],
        rows: [
          ["Equation Format", "a² + b² = c²"],
          ["Solving For", resultLabel],
          ["Math Steps", steps],
          ["Final Result", formatNum(resultValue)]
        ]
      }
    };
  };