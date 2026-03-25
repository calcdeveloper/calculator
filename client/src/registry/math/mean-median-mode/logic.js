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
  
    // Need at least 1 number to calculate basic stats
    if (N === 0) {
      return { 
        summary: [{ label: 'Awaiting Input', value: 'Please enter some numbers.', isHighlight: true }] 
      };
    }
  
    // Helper function to format numbers cleanly (up to 4 decimal places)
    const formatNum = (num) => Number(num.toFixed(4)).toString();
  
    // 3. Math Calculations
    // MEAN
    const sum = nums.reduce((acc, val) => acc + val, 0);
    const mean = sum / N;
  
    // MEDIAN
    const sorted = [...nums].sort((a, b) => a - b);
    let median;
    if (N % 2 === 0) {
      // If even amount of numbers, average the two middle ones
      median = (sorted[N / 2 - 1] + sorted[N / 2]) / 2;
    } else {
      // If odd amount, just grab the middle one
      median = sorted[Math.floor(N / 2)];
    }
  
    // MODE
    const frequency = {};
    let maxFreq = 0;
    
    nums.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxFreq) {
        maxFreq = frequency[num];
      }
    });
  
    let modeResult = "None";
    // Only count as mode if a number appears more than once
    if (maxFreq > 1) {
      const modes = Object.keys(frequency).filter(key => frequency[key] === maxFreq);
      modeResult = modes.join(', ');
    }
  
    // RANGE (Max - Min)
    const min = sorted[0];
    const max = sorted[N - 1];
    const range = max - min;
  
    // 4. Return structured data
    return {
      summary: [
        { 
          label: 'Mean (Average)', 
          value: formatNum(mean), 
          isHighlight: true 
        },
        { 
          label: 'Median', 
          value: formatNum(median), 
          isHighlight: true 
        },
        { 
          label: 'Mode', 
          value: modeResult, 
          isHighlight: false 
        },
        { 
          label: 'Range', 
          value: formatNum(range), 
          isHighlight: false 
        }
      ],
      referenceTable: {
        headers: ["Statistic", "Value"],
        rows: [
          ["Mean (Average)", formatNum(mean)],
          ["Median (Middle)", formatNum(median)],
          ["Mode (Most Frequent)", modeResult],
          ["Range (Max - Min)", formatNum(range)],
          ["Minimum Value", formatNum(min)],
          ["Maximum Value", formatNum(max)],
          ["Sum Total", formatNum(sum)],
          ["Count (N)", N.toString()]
        ]
      }
    };
  };