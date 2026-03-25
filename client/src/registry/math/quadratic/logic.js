export const calculateLogic = (inputs) => {
    const a = Number(inputs.a);
    const b = Number(inputs.b);
    const c = Number(inputs.c);
  
    // 1. Validation: 'a' cannot be zero in a quadratic equation
    if (a === 0) {
      return {
        summary: [{ 
          label: 'Error', 
          value: 'Coefficient "a" cannot be 0. (That makes it a linear equation!)', 
          isHighlight: true 
        }]
      };
    }
  
    // 2. Math calculations
    const discriminant = (b * b) - (4 * a * c);
    let root1, root2, rootType;
  
    // Helper to keep numbers clean (up to 4 decimal places)
    const formatNum = (num) => Number(num.toFixed(4)).toString();
  
    // 3. Determine Root Types based on the Discriminant
    if (discriminant > 0) {
      rootType = 'Two Real Roots';
      const sqrtD = Math.sqrt(discriminant);
      root1 = formatNum((-b + sqrtD) / (2 * a));
      root2 = formatNum((-b - sqrtD) / (2 * a));
    } else if (discriminant === 0) {
      rootType = 'One Real Root (Repeated)';
      root1 = formatNum(-b / (2 * a));
      root2 = root1; 
    } else {
      rootType = 'Two Complex (Imaginary) Roots';
      const realPart = formatNum(-b / (2 * a));
      // Calculate the imaginary part using the absolute value of the discriminant
      const imaginaryPart = formatNum(Math.sqrt(Math.abs(discriminant)) / (2 * a));
      
      // Format as string with 'i'
      root1 = `${realPart} + ${imaginaryPart}i`;
      root2 = `${realPart} - ${imaginaryPart}i`;
    }
  
    // 4. Format the equation nicely for the reference table
    const signB = b >= 0 ? '+' : '-';
    const signC = c >= 0 ? '+' : '-';
    const equationString = `${a}x² ${signB} ${Math.abs(b)}x ${signC} ${Math.abs(c)} = 0`;
  
    // 5. Return structured data for CalculatorLayout
    return {
      summary: [
        { 
          label: 'Root 1 (x₁)', 
          value: root1, 
          isHighlight: true 
        },
        { 
          label: 'Root 2 (x₂)', 
          value: root2, 
          isHighlight: true 
        },
        { 
          label: 'Discriminant (Δ)', 
          value: formatNum(discriminant), 
          isHighlight: false 
        },
        { 
          label: 'Nature of Roots', 
          value: rootType, 
          isHighlight: false 
        }
      ],
      referenceTable: {
        headers: ["Property", "Value"],
        rows: [
          ["Equation Evaluated", equationString],
          ["Coefficient a", a.toString()],
          ["Coefficient b", b.toString()],
          ["Coefficient c", c.toString()],
          ["Discriminant Value", formatNum(discriminant)],
          ["Root Classification", rootType]
        ]
      }
    };
  };