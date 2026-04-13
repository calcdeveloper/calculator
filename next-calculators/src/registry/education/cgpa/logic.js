export const calculateLogic = (inputs) => {
    const { cgpa, boardType, customMultiplier } = inputs;
    const val = Number(cgpa);
    
    let percentage = 0;
    let formulaUsed = "";
  
    try {
      if (isNaN(val) || val < 0 || val > 10) {
        throw new Error("Please enter a CGPA between 0 and 10.");
      }
  
      if (boardType === 'cbse') {
        // Standard CBSE Formula
        percentage = val * 9.5;
        formulaUsed = "CGPA × 9.5";
      } else if (boardType === 'mu') {
        // Mumbai University Formula (Reference standard)
        percentage = (7.1 * val) + 11;
        formulaUsed = "(7.1 × CGPA) + 11";
      } else if (boardType === 'aktu') {
        // AKTU/UPTU Formula
        percentage = (val - 0.75) * 10;
        formulaUsed = "(CGPA - 0.75) × 10";
      } else {
        const mult = Number(customMultiplier) || 9.5;
        percentage = val * mult;
        formulaUsed = `CGPA × ${mult}`;
      }
  
      return {
        summary: [
          { label: 'Your Percentage', value: `${percentage.toFixed(2)}%`, isHighlight: true },
          { label: 'Grade Point Average', value: `${val.toFixed(2)} / 10` }
        ],
        referenceTable: {
          headers: ["CGPA Range", "Performance Level"],
          rows: [
            ["9.1 - 10.0", "Outstanding (A1)"],
            ["8.1 - 9.0", "Excellent (A2)"],
            ["7.1 - 8.0", "Very Good (B1)"],
            ["6.1 - 7.0", "Good (B2)"]
          ]
        }
      };
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };