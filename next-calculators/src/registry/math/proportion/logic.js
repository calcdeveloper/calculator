export const calculateLogic = (inputs) => {
    const { calcMode, valA, valB, valC, valD } = inputs;
  
    const A = Number(valA);
    const B = Number(valB);
    const C = Number(valC);
    const D = Number(valD);
  
    const formatNum = (num) => Number(num.toFixed(4)).toString();
  
    let summary = [];
    let rows = [];
    let result = 0;
  
    try {
      if (calcMode === 'findA') {
        if (isNaN(B) || isNaN(C) || isNaN(D)) throw new Error("Please enter valid numbers.");
        if (D === 0) throw new Error("Value D cannot be zero (division by zero).");
        
        result = (B * C) / D;
        summary = [{ label: 'Value A', value: formatNum(result), isHighlight: true }];
        rows = [
          ["Equation", `A / ${B} = ${C} / ${D}`],
          ["Cross Multiplication", `A × ${D} = ${B} × ${C}`],
          ["Result (A)", formatNum(result)]
        ];
  
      } else if (calcMode === 'findB') {
        if (isNaN(A) || isNaN(C) || isNaN(D)) throw new Error("Please enter valid numbers.");
        if (C === 0) throw new Error("Value C cannot be zero (division by zero).");
  
        result = (A * D) / C;
        summary = [{ label: 'Value B', value: formatNum(result), isHighlight: true }];
        rows = [
          ["Equation", `${A} / B = ${C} / ${D}`],
          ["Cross Multiplication", `${A} × ${D} = B × ${C}`],
          ["Result (B)", formatNum(result)]
        ];
  
      } else if (calcMode === 'findC') {
        if (isNaN(A) || isNaN(B) || isNaN(D)) throw new Error("Please enter valid numbers.");
        if (B === 0) throw new Error("Value B cannot be zero (division by zero).");
  
        result = (A * D) / B;
        summary = [{ label: 'Value C', value: formatNum(result), isHighlight: true }];
        rows = [
          ["Equation", `${A} / ${B} = C / ${D}`],
          ["Cross Multiplication", `${A} × ${D} = ${B} × C`],
          ["Result (C)", formatNum(result)]
        ];
  
      } else if (calcMode === 'findD') {
        if (isNaN(A) || isNaN(B) || isNaN(C)) throw new Error("Please enter valid numbers.");
        if (A === 0) throw new Error("Value A cannot be zero (division by zero).");
  
        result = (B * C) / A;
        summary = [{ label: 'Value D', value: formatNum(result), isHighlight: true }];
        rows = [
          ["Equation", `${A} / ${B} = ${C} / D`],
          ["Cross Multiplication", `${A} × D = ${B} × ${C}`],
          ["Result (D)", formatNum(result)]
        ];
      }
  
      return {
        summary,
        referenceTable: { headers: ["Step", "Value"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };