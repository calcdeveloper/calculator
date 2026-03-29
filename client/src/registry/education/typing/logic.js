export const calculateLogic = (inputs) => {
    const characters = Number(inputs.totalCharacters) || 0;
    const errors = Number(inputs.uncorrectedErrors) || 0;
    const minutes = Number(inputs.timeMinutes) || 0;
  
    try {
      if (minutes <= 0) {
        throw new Error("Time must be greater than 0 minutes.");
      }
      if (characters <= 0) {
        throw new Error("Total keystrokes must be greater than 0.");
      }
      if (errors * 5 > characters) {
        throw new Error("Errors cannot exceed the total number of characters typed.");
      }
  
      // 1. Calculate Gross WPM (1 Word = 5 Characters)
      const grossWPM = (characters / 5) / minutes;
  
      // 2. Calculate Error Penalty per minute
      const errorPenalty = errors / minutes;
  
      // 3. Calculate Net WPM
      let netWPM = grossWPM - errorPenalty;
      if (netWPM < 0) netWPM = 0; // WPM cannot be negative
  
      // 4. Calculate Accuracy Percentage
      // Using the standard formula: (Net WPM / Gross WPM) * 100
      let accuracy = 0;
      if (grossWPM > 0) {
        accuracy = (netWPM / grossWPM) * 100;
      }
  
      return {
        summary: [
          { label: 'Net Speed (WPM)', value: Math.round(netWPM).toString(), isHighlight: true },
          { label: 'Accuracy', value: `${accuracy.toFixed(1)}%` }
        ],
        referenceTable: {
          headers: ["Metric", "Value", "Description"],
          rows: [
            ["Gross WPM", Math.round(grossWPM).toString(), "Your raw typing speed before penalties"],
            ["Error Rate", `${errorPenalty.toFixed(1)} WPM`, "Speed deducted due to mistakes"],
            ["Net WPM", Math.round(netWPM).toString(), "Your official, final typing speed"],
            ["Accuracy", `${accuracy.toFixed(2)}%`, "Percentage of correct entries"]
          ]
        }
      };
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };