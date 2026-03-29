export const calculateLogic = (inputs) => {
    const { numSemesters } = inputs;
    const count = Number(numSemesters);
    
    let totalSgpa = 0;
    let semValues = [];
  
    try {
      for (let i = 1; i <= count; i++) {
        const val = Number(inputs[`sem${i}`]) || 0;
        if (val < 0 || val > 10) {
          throw new Error(`Semester ${i} SGPA must be between 0 and 10.`);
        }
        totalSgpa += val;
        semValues.push([`Semester ${i}`, val.toFixed(2)]);
      }
  
      const cgpa = totalSgpa / count;
      // Standard Indian conversion (CBSE/UGC)
      const percentage = cgpa * 9.5;
  
      return {
        summary: [
          { label: 'Final CGPA', value: cgpa.toFixed(2), isHighlight: true },
          { label: 'Equivalent Percentage', value: `${percentage.toFixed(2)}%` }
        ],
        referenceTable: {
          headers: ["Semester", "SGPA Score"],
          rows: semValues
        }
      };
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };