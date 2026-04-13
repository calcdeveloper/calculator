export const calculateLogic = (inputs) => {
    const { calcMode, startDate, endDate, operation, years, months, days } = inputs;
    
    let summary = [];
    let rows = [];
  
    try {
      if (!startDate) throw new Error("Please select a valid start date.");
  
      const start = new Date(startDate);
  
      if (calcMode === 'difference') {
        if (!endDate) throw new Error("Please select a valid end date.");
        const end = new Date(endDate);
        
        // Calculate difference in milliseconds, then convert to days
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  
        summary = [
          { label: 'Total Duration', value: `${diffDays} Days`, isHighlight: true }
        ];
        rows = [
          ["Start Date", start.toDateString()],
          ["End Date", end.toDateString()],
          ["Formula", "| End Date - Start Date | converted to days"],
          ["Difference", `${diffDays} Days`]
        ];
  
      } else if (calcMode === 'add_sub') {
        const y = Number(years) || 0;
        const m = Number(months) || 0;
        const d = Number(days) || 0;
  
        const resultDate = new Date(start);
        const multiplier = operation === 'add' ? 1 : -1;
  
        resultDate.setFullYear(resultDate.getFullYear() + (y * multiplier));
        resultDate.setMonth(resultDate.getMonth() + (m * multiplier));
        resultDate.setDate(resultDate.getDate() + (d * multiplier));
  
        const opText = operation === 'add' ? 'Added' : 'Subtracted';
  
        summary = [
          { label: 'Resulting Date', value: resultDate.toDateString(), isHighlight: true }
        ];
        rows = [
          ["Original Date", start.toDateString()],
          ["Operation", `${opText} ${y} Years, ${m} Months, ${d} Days`],
          ["Calculated Date", resultDate.toDateString()]
        ];
      }
  
      return { summary, referenceTable: { headers: ["Calculation Details", "Value"], rows } };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };