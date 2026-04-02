export const calculateLogic = (inputs) => {
    const { marks, qualifyingMarks, meanTop } = inputs;
  
    if (!marks || !qualifyingMarks || !meanTop) return null;
  
    // Constants defined by GATE committee for the formula
    const Sq = 350; // Score assigned to qualifying marks
    const St = 900; // Score assigned to top 0.1% mean
  
    // Official GATE Score Formula:
    // Score = Sq + (St - Sq) * ((M - Mq) / (Mt - Mq))
    
    let gateScore = Sq + (St - Sq) * ((marks - qualifyingMarks) / (meanTop - qualifyingMarks));
  
    // Gate scores are capped at 1000 and typically don't go below 0 for qualified candidates
    gateScore = Math.max(0, Math.min(1000, gateScore));
  
    return {
      summary: [
        {
          label: "Calculated GATE Score",
          value: Math.round(gateScore),
          isHighlight: true,
        },
        {
          label: "Normalized Range",
          value: "Out of 1000",
        },
        {
          label: "Status",
          value: marks >= qualifyingMarks ? "Qualified" : "Not Qualified",
          isHighlight: marks >= qualifyingMarks,
        },
      ],
      chartData: [
        { name: "Your Marks", value: marks },
        { name: "Gap to Top", value: meanTop - marks > 0 ? meanTop - marks : 0 },
      ],
    };
  };