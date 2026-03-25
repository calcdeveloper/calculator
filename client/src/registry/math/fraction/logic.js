export const calculateLogic = (inputs) => {
    const { calcType, decInput, whole1, num1, den1, operation, whole2, num2, den2 } = inputs;
    
    // Helper: Greatest Common Divisor
    const getGCD = (a, b) => {
      a = Math.abs(a);
      b = Math.abs(b);
      while (b) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };
  
    // Helper: Format Fraction to Mixed Number String
    const toMixedStr = (n, d) => {
      if (d === 1) return `${n}`;
      if (d === 0) return 'Undefined';
      if (Math.abs(n) < d) return `${n}/${d}`;
      
      const whole = Math.trunc(n / d);
      const remainder = Math.abs(n % d);
      return remainder === 0 ? `${whole}` : `${whole} ${remainder}/${d}`;
    };
  
    // ---------------------------------------------------------
    // MODE: DECIMAL TO FRACTION
    // ---------------------------------------------------------
    if (calcType === 'dec2frac') {
      const val = Number(decInput);
      if (isNaN(val)) return { summary: [{ label: 'Error', value: 'Invalid input' }] };
  
      const decimals = val.toString().includes('.') ? val.toString().split('.')[1].length : 0;
      const denominator = Math.pow(10, decimals);
      const numerator = Math.round(val * denominator);
  
      const gcd = getGCD(numerator, denominator);
      const simpNum = numerator / gcd;
      const simpDen = denominator / gcd;
  
      return {
        summary: [
          { label: `Fraction of ${val}`, value: `${simpNum}/${simpDen}`, isHighlight: true },
          { label: 'As a Mixed Number', value: toMixedStr(simpNum, simpDen) }
        ],
        referenceTable: {
          headers: ["Step", "Explanation", "Result"],
          rows: [
            ["1. Base Fraction", `Write as decimal over 1`, `${val}/1`],
            ["2. Multiply by 10s", `Move decimal ${decimals} places`, `${numerator}/${denominator}`],
            ["3. Simplify", `Divide by GCD (${gcd})`, `${simpNum}/${simpDen}`]
          ]
        }
      };
    }
  
    // ---------------------------------------------------------
    // FOR ALL OTHER MODES: Parse Fraction 1
    // ---------------------------------------------------------
    let n1 = Number(num1 || 0);
    let d1 = Number(den1 || 1);
    if (d1 === 0) return { summary: [{ label: 'Error', value: 'Denominator 1 cannot be zero' }] };
  
    // ---------------------------------------------------------
    // MODE: FRACTION TO DECIMAL
    // ---------------------------------------------------------
    if (calcType === 'frac2dec') {
      const decimalVal = n1 / d1;
      return {
        summary: [
          { label: `${n1}/${d1} as a Decimal`, value: decimalVal.toString(), isHighlight: true },
          { label: 'Percentage Equivalent', value: `${(decimalVal * 100).toFixed(2)}%` }
        ]
      };
    }
  
    // ---------------------------------------------------------
    // MODE: SIMPLIFY FRACTION
    // ---------------------------------------------------------
    if (calcType === 'simplify') {
      const gcd = getGCD(n1, d1);
      const simpNum = n1 / gcd;
      const simpDen = d1 / gcd;
      return {
        summary: [
          { label: `Simplified ${n1}/${d1}`, value: `${simpNum}/${simpDen}`, isHighlight: true },
          { label: 'Mixed Number', value: toMixedStr(simpNum, simpDen) },
          { label: 'Decimal', value: (n1 / d1).toString() }
        ],
        referenceTable: {
          headers: ["Step", "Explanation", "Result"],
          rows: [
            ["1. Original", "Starting Fraction", `${n1}/${d1}`],
            ["2. Find GCD", "Greatest Common Divisor", gcd.toString()],
            ["3. Divide", `Divide top & bottom by ${gcd}`, `${simpNum}/${simpDen}`]
          ]
        }
      };
    }
  
    // ---------------------------------------------------------
    // MODES: BASIC MATH & MIXED NUMBERS
    // ---------------------------------------------------------
    let n2 = Number(num2 || 0);
    let d2 = Number(den2 || 1);
    if (d2 === 0) return { summary: [{ label: 'Error', value: 'Denominator 2 cannot be zero' }] };
  
    // If mixed, convert to improper fractions first
    if (calcType === 'mixed') {
      let w1 = Number(whole1 || 0);
      let w2 = Number(whole2 || 0);
      n1 = (Math.abs(w1) * d1 + Math.abs(n1)) * (w1 < 0 || n1 < 0 ? -1 : 1);
      n2 = (Math.abs(w2) * d2 + Math.abs(n2)) * (w2 < 0 || n2 < 0 ? -1 : 1);
    }
  
    if (operation === 'divide' && n2 === 0) {
      return { summary: [{ label: 'Error', value: 'Cannot divide by zero' }] };
    }
  
    let finalNum = 0, finalDen = 1, operatorSymbol = '+';
  
    if (operation === 'add') {
      finalNum = (n1 * d2) + (n2 * d1);
      finalDen = d1 * d2;
      operatorSymbol = '+';
    } else if (operation === 'subtract') {
      finalNum = (n1 * d2) - (n2 * d1);
      finalDen = d1 * d2;
      operatorSymbol = '-';
    } else if (operation === 'multiply') {
      finalNum = n1 * n2;
      finalDen = d1 * d2;
      operatorSymbol = '×';
    } else if (operation === 'divide') {
      finalNum = n1 * d2;
      finalDen = d1 * n2;
      operatorSymbol = '÷';
    }
  
    // Fix negative denominators
    if (finalDen < 0) {
      finalNum = -finalNum;
      finalDen = -finalDen;
    }
  
    // Simplify Result
    const gcd = getGCD(finalNum, finalDen);
    const simpNum = finalNum / gcd;
    const simpDen = finalDen / gcd;
  
    return {
      summary: [
        { label: `Result (Simplified)`, value: `${simpNum}/${simpDen}`, isHighlight: true },
        { label: 'As a Mixed Number', value: toMixedStr(simpNum, simpDen) },
        { label: 'As a Decimal', value: (finalNum / finalDen).toFixed(4).replace(/\.?0+$/, '') }
      ],
      referenceTable: {
        headers: ["Step", "Explanation", "Result"],
        rows: [
          ["1. Raw Math", `Performed ${operatorSymbol} operation`, `${finalNum}/${finalDen}`],
          ["2. Simplify", `Divided by GCD of ${gcd}`, `${simpNum}/${simpDen}`]
        ]
      }
    };
  };