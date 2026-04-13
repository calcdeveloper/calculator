export const calculateLogic = (inputs) => {
    const { obtainedMarks, totalMarks } = inputs;
  
    // Prevent calculation if total marks is 0 to avoid Infinity/NaN errors
    if (!totalMarks || totalMarks <= 0) return null;
  
    // Prevent percentage going over 100% if the user typos
    const safeObtained = Math.min(obtainedMarks, totalMarks);
    
    const percentage = (safeObtained / totalMarks) * 100;
    
    // Standard Grading Scale
    let grade = "F";
    if (percentage >= 90) grade = "A+ (Outstanding)";
    else if (percentage >= 80) grade = "A (Excellent)";
    else if (percentage >= 70) grade = "B (Good)";
    else if (percentage >= 60) grade = "C (Above Average)";
    else if (percentage >= 50) grade = "D (Average)";
    else if (percentage >= 40) grade = "E (Pass)";
  
    const lostMarks = totalMarks - safeObtained;
  
    return {
      summary: [
        {
          label: "Final Percentage",
          value: `${percentage.toFixed(2)}%`,
          isHighlight: true,
        },
        {
          label: "Estimated Grade",
          value: grade,
          isHighlight: true,
        },
        {
          label: "Total Marks",
          value: totalMarks,
        },
        {
          label: "Marks Obtained",
          value: safeObtained,
        },
      ],
      // The Pie Chart will automatically render these two slices!
      chartData: [
        { name: "Marks Obtained", value: safeObtained },
        { name: "Marks Lost", value: lostMarks },
      ],
    };
  };