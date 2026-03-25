export const calculateLogic = (inputs) => {
  const { numberInput } = inputs;

  // 1. Force string conversion to be perfectly safe
  const safeInput = String(numberInput || '');

  // 2. Split by comma and clean up the entries
  const rawVals = safeInput
    .split(',')
    .map(s => s.trim())
    .filter(s => s !== '');

  const nums = [];
  
  // 3. Convert to numbers and validate
  for (let val of rawVals) {
    const n = Number(val);
    
    // Check if the entry is a valid, positive whole number
    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
      return { 
        summary: [{ 
          label: 'Error', 
          value: `Invalid entry: "${val}". Please use whole numbers separated by commas.`, 
          isHighlight: true 
        }] 
      };
    }
    nums.push(n);
  }

  // 4. Ensure we have at least two valid numbers
  if (nums.length < 2) {
    return { 
      summary: [{ 
        label: 'Awaiting Input', 
        value: 'Please enter at least two numbers (e.g., 12, 15)', 
        isHighlight: true 
      }] 
    };
  }

  // 5. Mathematical Helper Functions
  const getGCD = (a, b) => {
    while (b) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const getLCM = (a, b) => {
    return (a * b) / getGCD(a, b);
  };

  // 6. Calculate Results
  const finalGCF = nums.reduce((acc, val) => getGCD(acc, val));
  const finalLCM = nums.reduce((acc, val) => getLCM(acc, val));

  // 7. Format Output
  const formattedNumbers = nums.join(', ');

  return {
    summary: [
      { 
        label: 'Least Common Multiple (LCM)', 
        value: finalLCM.toString(), 
        isHighlight: true 
      },
      { 
        label: 'Greatest Common Factor (GCF)', 
        value: finalGCF.toString(), 
        isHighlight: true
      }
    ],
    referenceTable: {
      headers: ["Data Point", "Value"],
      rows: [
        ["Numbers Evaluated", formattedNumbers],
        ["Total Count of Numbers", nums.length.toString()],
        ["Calculated GCF", finalGCF.toString()],
        ["Calculated LCM", finalLCM.toString()]
      ]
    }
  };
};