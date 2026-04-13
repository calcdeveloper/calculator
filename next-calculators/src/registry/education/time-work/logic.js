export const calculateLogic = (inputs) => {
    const { timeA, timeB } = inputs;
  
    // Prevent calculation if inputs are missing, zero, or negative
    if (!timeA || !timeB || timeA <= 0 || timeB <= 0) return null;
  
    // Formula: (A * B) / (A + B)
    const timeTogether = (timeA * timeB) / (timeA + timeB);
    
    // Calculate individual efficiency (percentage of work done per unit of time)
    const efficiencyA = (1 / timeA) * 100;
    const efficiencyB = (1 / timeB) * 100;
    const combinedEfficiency = efficiencyA + efficiencyB;
  
    return {
      summary: [
        {
          label: "Time Taken Together",
          value: `${timeTogether.toFixed(2)} units`,
          isHighlight: true,
        },
        {
          label: "Combined Efficiency",
          value: `${combinedEfficiency.toFixed(2)}% per unit`,
          isHighlight: true,
        },
        {
          label: "Person A Efficiency",
          value: `${efficiencyA.toFixed(2)}% per unit`,
        },
        {
          label: "Person B Efficiency",
          value: `${efficiencyB.toFixed(2)}% per unit`,
        },
      ],
      // Chart visualizing the time required (shorter is better)
      chartData: [
        { name: "Person A (Alone)", value: timeA },
        { name: "Person B (Alone)", value: timeB },
        { name: "Working Together", value: parseFloat(timeTogether.toFixed(2)) },
      ],
    };
  };