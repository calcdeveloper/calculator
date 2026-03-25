export const calculateLogic = (inputs) => {
    const { calcMode } = inputs;
    const n = parseInt(inputs.n, 10);
    const r = parseInt(inputs.r, 10);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(n) || isNaN(r)) throw new Error("Please enter valid integers for n and r.");
      if (n < 0 || r < 0) throw new Error("n and r must be non-negative integers.");
  
      // Using BigInt to prevent floating-point precision loss on large factorials
      const factorial = (num) => {
        let res = 1n;
        for (let i = 2n; i <= BigInt(num); i++) {
          res *= i;
        }
        return res;
      };
  
      const nBig = BigInt(n);
      const rBig = BigInt(r);
  
      if (calcMode === 'combination') {
        if (r > n) throw new Error("For standard combinations, you cannot choose more items than the total (r cannot be greater than n).");
        
        const result = factorial(n) / (factorial(r) * factorial(n - r));
        
        summary = [{ label: 'Total Combinations (nCr)', value: result.toString(), isHighlight: true }];
        rows = [
          ["Formula", "n! / (r! × (n - r)!)"],
          ["Calculation", `${n}! / (${r}! × ${n - r}!)`],
          ["Exact Result", result.toString()]
        ];
  
      } else if (calcMode === 'permutation') {
        if (r > n) throw new Error("For standard permutations, you cannot choose more items than the total (r cannot be greater than n).");
        
        const result = factorial(n) / factorial(n - r);
        
        summary = [{ label: 'Total Permutations (nPr)', value: result.toString(), isHighlight: true }];
        rows = [
          ["Formula", "n! / (n - r)!"],
          ["Calculation", `${n}! / ${n - r}!`],
          ["Exact Result", result.toString()]
        ];
  
      } else if (calcMode === 'combination_rep') {
        if (n === 0 && r > 0) throw new Error("Cannot choose from 0 items.");
        
        const top = n + r - 1;
        let result = 1n;
        
        if (n > 0 || r > 0) {
          result = factorial(top) / (factorial(r) * factorial(n - 1));
        }
  
        summary = [{ label: 'Combinations (With Replacement)', value: result.toString(), isHighlight: true }];
        rows = [
          ["Formula", "(n + r - 1)! / (r! × (n - 1)!)"],
          ["Calculation", `${top}! / (${r}! × ${n - 1}!)`],
          ["Exact Result", result.toString()]
        ];
  
      } else if (calcMode === 'permutation_rep') {
        if (n === 0 && r > 0) throw new Error("Cannot choose from 0 items.");
        
        const result = nBig ** rBig;
        
        summary = [{ label: 'Permutations (With Replacement)', value: result.toString(), isHighlight: true }];
        rows = [
          ["Formula", "n^r"],
          ["Calculation", `${n}^${r}`],
          ["Exact Result", result.toString()]
        ];
      }
  
      return {
        summary,
        referenceTable: { headers: ["Step", "Details"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };