export const calculateLogic = (inputs) => {
    const { dataset } = inputs;
  
    // 1. Safely parse the comma-separated string
    const safeInput = String(dataset || '');
    const rawVals = safeInput.split(',').map(s => s.trim()).filter(s => s !== '');
  
    const nums = [];
    
    // 2. Convert to numbers and validate
    for (let val of rawVals) {
      const n = Number(val);
      if (isNaN(n)) {
        return { 
          summary: [{ label: 'Error', value: `Invalid entry: "${val}". Please use numbers separated by commas.`, isHighlight: true }] 
        };
      }
      nums.push(n);
    }
  
    const N = nums.length;
  
    // Need at least 2 numbers for a sample standard deviation
    if (N < 2) {
      return { 
        summary: [{ label: 'Awaiting Input', value: 'Please enter at least two numbers to calculate standard deviation.', isHighlight: true }] 
      };
    }
  
    // 3. Math Calculations
    // Calculate Mean
    const sum = nums.reduce((acc, val) => acc + val, 0);
    const mean = sum / N;
  
    // Calculate sum of squared differences
    const squaredDiffs = nums.map(x => Math.pow(x - mean, 2));
    const sumSquaredDiffs = squaredDiffs.reduce((acc, val) => acc + val, 0);
  
    // Population Statistics (Divide by N)
    const popVariance = sumSquaredDiffs / N;
    const popStdDev = Math.sqrt(popVariance);
  
    // Sample Statistics (Divide by N - 1)
    const sampleVariance = sumSquaredDiffs / (N - 1);
    const sampleStdDev = Math.sqrt(sampleVariance);
  
    // 4. Format outputs to 4 decimal places for precision
    const formatNum = (num) => Number(num.toFixed(4)).toString();
  
    return {
      summary: [
        { 
          label: 'Sample Standard Deviation (s)', 
          value: formatNum(sampleStdDev), 
          isHighlight: true 
        },
        { 
          label: 'Population Standard Deviation (σ)', 
          value: formatNum(popStdDev), 
          isHighlight: true 
        },
        { 
          label: 'Mean (Average)', 
          value: formatNum(mean), 
          isHighlight: false 
        },
        { 
          label: 'Count (N)', 
          value: N.toString(), 
          isHighlight: false 
        }
      ],
      referenceTable: {
        headers: ["Statistic", "Sample (N-1)", "Population (N)"],
        rows: [
          ["Standard Deviation", formatNum(sampleStdDev), formatNum(popStdDev)],
          ["Variance", formatNum(sampleVariance), formatNum(popVariance)],
          ["Mean", formatNum(mean), formatNum(mean)],
          ["Sum of Squares", formatNum(sumSquaredDiffs), formatNum(sumSquaredDiffs)],
          ["Count (N)", N.toString(), N.toString()]
        ]
      }
    };
  };