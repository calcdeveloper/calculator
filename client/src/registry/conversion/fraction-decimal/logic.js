export const calculateLogic = (inputs) => {
    const { inputValue, conversionMode } = inputs;
    let summary = [];
    let rows = [];
  
    try {
      const val = inputValue.toString().trim();
      if (!val) throw new Error("Please enter a value.");
  
      // Helper function to find the Greatest Common Divisor (GCD) for simplifying fractions
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
  
      if (conversionMode === 'frac2dec') {
        // Logic: Fraction to Decimal
        if (!val.includes('/')) throw new Error("Please enter a valid fraction using a slash (e.g., 3/4).");
        const parts = val.split('/');
        if (parts.length !== 2) throw new Error("Invalid fraction format.");
        
        const num = Number(parts[0]);
        const den = Number(parts[1]);
        
        if (isNaN(num) || isNaN(den)) throw new Error("Numerator and denominator must be standard numbers.");
        if (den === 0) throw new Error("Denominator cannot be zero.");
  
        const decimal = num / den;
        
        summary = [{ label: `${val} =`, value: decimal.toString(), isHighlight: true }];
        rows = [
          ["Input Fraction", val],
          ["Mathematical Method", "Divide the top number by the bottom number"],
          ["Calculation", `${num} ÷ ${den}`],
          ["Exact Decimal", decimal.toString()]
        ];
  
      } else {
        // Logic: Decimal to Fraction
        const decimal = Number(val);
        if (isNaN(decimal)) throw new Error("Please enter a valid decimal number (e.g., 0.75).");
        
        if (Number.isInteger(decimal)) {
          summary = [{ label: `${decimal} =`, value: `${decimal}/1`, isHighlight: true }];
          return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "Input is already a whole number."]] } };
        }
  
        // Determine place value based on how many digits come after the decimal point
        const decStr = val.replace(/^-/, ''); // Handle negatives safely
        const decimalPlaces = decStr.includes('.') ? decStr.split('.')[1].length : 0;
        
        // The denominator becomes a power of 10 (10, 100, 1000, etc.)
        const denominator = Math.pow(10, decimalPlaces);
        
        // The numerator is the decimal shifted into a whole number
        const unsimplifiedNumerator = parseInt(decStr.replace('.', ''), 10) * (decimal < 0 ? -1 : 1);
        
        // Simplify the fraction
        const gcd = getGCD(unsimplifiedNumerator, denominator);
        const simpNum = unsimplifiedNumerator / gcd;
        const simpDen = denominator / gcd;
        const fraction = `${simpNum}/${simpDen}`;
  
        summary = [{ label: `${val} =`, value: fraction, isHighlight: true }];
        rows = [
          ["Input Decimal", val],
          ["Place Value", `${decimalPlaces} decimal place(s) means the base is ${denominator}`],
          ["Unsimplified Fraction", `${unsimplifiedNumerator}/${denominator}`],
          ["Greatest Common Divisor (GCD)", gcd.toString()],
          ["Final Simplified Fraction", fraction]
        ];
      }
  
      return {
        summary,
        referenceTable: { headers: ["Conversion Steps", "Data"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };