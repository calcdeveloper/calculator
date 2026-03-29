export const calculateLogic = (inputs) => {
    const { dob, targetDate } = inputs;
    
    try {
      const birth = new Date(dob);
      const target = new Date(targetDate);
  
      if (isNaN(birth.getTime()) || isNaN(target.getTime())) {
        throw new Error("Please select valid dates.");
      }
  
      if (birth > target) {
        throw new Error("Date of Birth cannot be in the future of the target date.");
      }
  
      let years = target.getFullYear() - birth.getFullYear();
      let months = target.getMonth() - birth.getMonth();
      let days = target.getDate() - birth.getDate();
  
      // Handle negative days by borrowing from the previous month
      if (days < 0) {
        months--;
        const lastMonth = new Date(target.getFullYear(), target.getMonth(), 0);
        days += lastMonth.getDate();
      }
  
      // Handle negative months by borrowing from the year
      if (months < 0) {
        years--;
        months += 12;
      }
  
      // Total time calculations for summary
      const diffTime = Math.abs(target - birth);
      const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const totalWeeks = Math.floor(totalDays / 7);
      const remainingDays = totalDays % 7;
  
      const summary = [
        { label: 'Age', value: `${years} Years, ${months} Months, ${days} Days`, isHighlight: true },
        { label: 'Total Weeks', value: `${totalWeeks} weeks and ${remainingDays} days` },
        { label: 'Total Days', value: `${totalDays.toLocaleString()} days` }
      ];
  
      const rows = [
        ["Birth Date", dob],
        ["Target Date", targetDate],
        ["Years", years.toString()],
        ["Months", months.toString()],
        ["Days", days.toString()]
      ];
  
      return {
        summary,
        referenceTable: { headers: ["Metric", "Value"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };