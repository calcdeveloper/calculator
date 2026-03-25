export const calculateLogic = (inputs) => {
    const { calcMode, ratioA, ratioB, factor } = inputs;
  
    const a = Number(ratioA);
    const b = Number(ratioB);
    const f = Number(factor);
  
    if (isNaN(a) || isNaN(b)) {
      return { summary: [{ label: 'Error', value: 'Please enter valid numbers for the ratio.', isHighlight: true }] };
    }
    if (b === 0) {
      return { summary: [{ label: 'Error', value: 'Ratio Part B cannot be zero.', isHighlight: true }] };
    }
  
    let summary = [];
    let rows = [];
  
    const formatNum = (num) => Number(num.toFixed(4)).toString();
  
    // Helper function: Find the Greatest Common Divisor (GCD)
    const getGCD = (x, y) => {
      x = Math.abs(x);
      y = Math.abs(y);
      while (y) {
        let t = y;
        y = x % y;
        x = t;
      }
      return x;
    };
  
    try {
      if (calcMode === 'simplify') {
        // Scale decimals to integers first to find a clean GCD
        let scale = 1;
        while ((a * scale) % 1 !== 0 || (b * scale) % 1 !== 0) {
          scale *= 10;
        }
        
        const scaledA = a * scale;
        const scaledB = b * scale;
        const gcd = getGCD(scaledA, scaledB);
        
        const simA = scaledA / gcd;
        const simB = scaledB / gcd;
  
        summary = [{ label: 'Simplified Ratio', value: `${simA} : ${simB}`, isHighlight: true }];
        rows = [
          ["Original Ratio", `${a} : ${b}`],
          ["Greatest Common Divisor (GCD)", gcd.toString()],
          ["Simplified Ratio", `${simA} : ${simB}`]
        ];
  
      } else if (calcMode === 'one_to_n') {
        const n = b / a;
        summary = [{ label: "1:n Form", value: `1 : ${formatNum(n)}`, isHighlight: true }];
        rows = [
          ["Original Ratio", `${a} : ${b}`],
          ["Math Applied", "Divided both sides by A"],
          ["Simplified to 1:n", `1 : ${formatNum(n)}`]
        ];
  
      } else if (calcMode === 'n_to_one') {
        const n = a / b;
        summary = [{ label: "n:1 Form", value: `${formatNum(n)} : 1`, isHighlight: true }];
        rows = [
          ["Original Ratio", `${a} : ${b}`],
          ["Math Applied", "Divided both sides by B"],
          ["Simplified to n:1", `${formatNum(n)} : 1`]
        ];
  
      } else if (calcMode === 'larger' || calcMode === 'equivalent') {
        if (isNaN(f)) throw new Error("A multiplier factor is required.");
        const newA = a * f;
        const newB = b * f;
        
        summary = [{ label: 'Equivalent Ratio', value: `${formatNum(newA)} : ${formatNum(newB)}`, isHighlight: true }];
        rows = [
          ["Original Ratio", `${a} : ${b}`],
          ["Multiplier Applied", `× ${f}`],
          ["New Ratio", `${formatNum(newA)} : ${formatNum(newB)}`]
        ];
  
      } else if (calcMode === 'smaller') {
        if (isNaN(f) || f === 0) throw new Error("A valid non-zero divisor is required.");
        const newA = a / f;
        const newB = b / f;
        
        summary = [{ label: 'Equivalent Ratio', value: `${formatNum(newA)} : ${formatNum(newB)}`, isHighlight: true }];
        rows = [
          ["Original Ratio", `${a} : ${b}`],
          ["Divisor Applied", `÷ ${f}`],
          ["New Ratio", `${formatNum(newA)} : ${formatNum(newB)}`]
        ];
      }
  
      return {
        summary,
        referenceTable: { headers: ["Step / Property", "Value"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };