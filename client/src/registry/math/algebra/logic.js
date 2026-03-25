export const calculateLogic = (inputs) => {
    const { calcMode, valA, valB, valC, valD } = inputs;
  
    const a = Number(valA);
    const b = Number(valB);
    const c = Number(valC);
    const d = Number(valD);
  
    const formatNum = (num) => Number(num.toFixed(4)).toString();
  
    let summary = [];
    let rows = [];
  
    try {
      if (calcMode === 'linear') {
        if (isNaN(a) || isNaN(b) || isNaN(c)) throw new Error("Please enter valid numbers.");
        if (a === 0) throw new Error("Value 'a' cannot be zero in this equation format.");
  
        const step1 = c - b;
        const x = step1 / a;
  
        summary = [{ label: 'Result (x)', value: formatNum(x), isHighlight: true }];
        rows = [
          ["Original Equation", `${a}x + ${b} = ${c}`],
          ["Subtract b from both sides", `${a}x = ${c} - ${b}`],
          ["Simplify", `${a}x = ${step1}`],
          ["Divide by a", `x = ${step1} / ${a}`],
          ["Final Answer", `x = ${formatNum(x)}`]
        ];
  
      } else if (calcMode === 'both_sides') {
        if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) throw new Error("Please enter valid numbers.");
        
        const xCoef = a - c;
        const constant = d - b;
        
        if (xCoef === 0) {
          if (constant === 0) throw new Error("Infinite solutions (both sides are identical).");
          throw new Error("No solution (parallel lines).");
        }
  
        const x = constant / xCoef;
  
        summary = [{ label: 'Result (x)', value: formatNum(x), isHighlight: true }];
        rows = [
          ["Original Equation", `${a}x + ${b} = ${c}x + ${d}`],
          ["Group x terms on the left", `${a}x - ${c}x + ${b} = ${d}`],
          ["Group constants on the right", `${xCoef}x = ${d} - ${b}`],
          ["Simplify", `${xCoef}x = ${constant}`],
          ["Divide by x coefficient", `x = ${constant} / ${xCoef}`],
          ["Final Answer", `x = ${formatNum(x)}`]
        ];
  
      } else if (calcMode === 'quadratic') {
        if (isNaN(a) || isNaN(b) || isNaN(c)) throw new Error("Please enter valid numbers.");
        if (a === 0) throw new Error("If 'a' is zero, this is a linear equation, not quadratic.");
  
        const discriminant = Math.pow(b, 2) - (4 * a * c);
        
        rows.push(["Original Equation", `${a}x² + ${b}x + ${c} = 0`]);
        rows.push(["Discriminant (b² - 4ac)", `${b}² - 4(${a})(${c}) = ${discriminant}`]);
  
        if (discriminant > 0) {
          const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
          const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
          summary = [
            { label: 'Root 1 (x₁)', value: formatNum(x1), isHighlight: true },
            { label: 'Root 2 (x₂)', value: formatNum(x2), isHighlight: true }
          ];
          rows.push(["Roots Property", "Two real, distinct roots"]);
          rows.push(["Applying Quadratic Formula", "x = (-b ± √Discriminant) / 2a"]);
          rows.push(["Result x₁", formatNum(x1)]);
          rows.push(["Result x₂", formatNum(x2)]);
        } else if (discriminant === 0) {
          const x = -b / (2 * a);
          summary = [{ label: 'Root (x)', value: formatNum(x), isHighlight: true }];
          rows.push(["Roots Property", "One real repeated root"]);
          rows.push(["Result x", formatNum(x)]);
        } else {
          const realPart = -b / (2 * a);
          const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
          const root1 = `${formatNum(realPart)} + ${formatNum(imaginaryPart)}i`;
          const root2 = `${formatNum(realPart)} - ${formatNum(imaginaryPart)}i`;
          
          summary = [
            { label: 'Complex Root 1', value: root1, isHighlight: true },
            { label: 'Complex Root 2', value: root2, isHighlight: true }
          ];
          rows.push(["Roots Property", "Two complex roots (Discriminant < 0)"]);
          rows.push(["Result x₁", root1]);
          rows.push(["Result x₂", root2]);
        }
      }
  
      return {
        summary,
        referenceTable: { headers: ["Solving Step", "Equation / Value"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };