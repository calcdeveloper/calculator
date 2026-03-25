export const calculateLogic = (inputs) => {
    const { dataSet } = inputs;
  
    let summary = [];
    let rows = [];
  
    try {
      if (!dataSet || dataSet.trim() === '') {
        throw new Error("Please enter a valid dataset.");
      }
  
      // Parse the input string into an array of numbers
      const rawArray = dataSet.split(',').map(val => val.trim());
      const numbers = rawArray
        .map(val => Number(val))
        .filter(val => !isNaN(val) && val !== '');
  
      if (numbers.length === 0) {
        throw new Error("No valid numbers found. Ensure values are separated by commas.");
      }
  
      const count = numbers.length;
      const formatNum = (num) => Number(num.toFixed(4)).toString();
  
      // 1. Calculate Mean (Average)
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      const mean = sum / count;
  
      // 2. Calculate Median
      const sorted = [...numbers].sort((a, b) => a - b);
      let median = 0;
      const mid = Math.floor(count / 2);
      if (count % 2 === 0) {
        median = (sorted[mid - 1] + sorted[mid]) / 2;
      } else {
        median = sorted[mid];
      }
  
      // 3. Calculate Mode
      const frequency = {};
      let maxFreq = 0;
      numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
          maxFreq = frequency[num];
        }
      });
  
      let modeResult = "No Mode";
      if (maxFreq > 1) {
        const modes = Object.keys(frequency).filter(key => frequency[key] === maxFreq);
        if (modes.length === Object.keys(frequency).length) {
          // If all numbers appear with the exact same frequency, there is no mode
          modeResult = "No Mode";
        } else {
          modeResult = modes.join(', ');
        }
      }
  
      // 4. Calculate Range
      const min = sorted[0];
      const max = sorted[count - 1];
      const range = max - min;
  
      summary = [
        { label: 'Average (Mean)', value: formatNum(mean), isHighlight: true },
        { label: 'Median', value: formatNum(median), isHighlight: true }
      ];
  
      rows = [
        ["Count (n)", count.toString()],
        ["Sum", formatNum(sum)],
        ["Average (Mean)", formatNum(mean)],
        ["Median", formatNum(median)],
        ["Mode", modeResult],
        ["Minimum Value", formatNum(min)],
        ["Maximum Value", formatNum(max)],
        ["Range", formatNum(range)]
      ];
  
      return {
        summary,
        referenceTable: { headers: ["Statistic", "Calculated Value"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };