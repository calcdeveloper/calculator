export const calculateLogic = (inputs) => {
    const { calcMode, initialValue, finalValue, initialValue2, changeType, percentChange } = inputs;
  
    const formatNum = (val) => Number(val.toFixed(4)).toString();
    const formatPercent = (val) => `${Number(val.toFixed(2))}%`;
  
    let summary = [];
    let rows = [];
  
    try {
      if (calcMode === 'findChange') {
        const v1 = Number(initialValue);
        const v2 = Number(finalValue);
  
        if (isNaN(v1) || isNaN(v2)) throw new Error("Please enter valid numbers for Initial and Final values.");
        if (v1 === 0) throw new Error("Initial value cannot be zero when calculating percentage change.");
  
        const difference = v2 - v1;
        const absDifference = Math.abs(difference);
        const percentageChange = (difference / Math.abs(v1)) * 100;
        
        const changeWord = difference > 0 ? "Increase" : difference < 0 ? "Decrease" : "No Change";
  
        summary = [
          { label: 'Percentage Change', value: formatPercent(Math.abs(percentageChange)) + ` ${changeWord}`, isHighlight: true },
          { label: 'Absolute Difference', value: formatNum(absDifference), isHighlight: false }
        ];
  
        rows = [
          ["Initial Value (V₁)", formatNum(v1)],
          ["Final Value (V₂)", formatNum(v2)],
          ["Difference (V₂ - V₁)", formatNum(difference)],
          ["Direction", changeWord],
          ["Percentage Change", formatPercent(Math.abs(percentageChange))]
        ];
  
      } else if (calcMode === 'findFinal') {
        const v1 = Number(initialValue2);
        const pChange = Number(percentChange);
  
        if (isNaN(v1) || isNaN(pChange)) throw new Error("Please enter valid numbers.");
        if (pChange < 0) throw new Error("Please enter a positive percentage. Use the dropdown to select Increase or Decrease.");
  
        const multiplier = pChange / 100;
        let difference = v1 * multiplier;
        let finalVal = 0;
  
        if (changeType === 'increase') {
          finalVal = v1 + difference;
        } else {
          finalVal = v1 - difference;
        }
  
        summary = [
          { label: 'Final Value', value: formatNum(finalVal), isHighlight: true },
          { label: `Amount of ${changeType}`, value: formatNum(difference), isHighlight: false }
        ];
  
        rows = [
          ["Initial Value", formatNum(v1)],
          ["Applied Change", `${formatPercent(pChange)} ${changeType === 'increase' ? 'Increase' : 'Decrease'}`],
          ["Absolute Difference", formatNum(difference)],
          ["Final Value", formatNum(finalVal)]
        ];
      }
  
      return {
        summary,
        referenceTable: { headers: ["Metric", "Value"], rows: rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };