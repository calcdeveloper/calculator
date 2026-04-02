export const calculateLogic = (inputs) => {
    const { expectedMarks } = inputs;
  
    if (expectedMarks === undefined || expectedMarks === null || expectedMarks > 720) return null;
  
    // Historical Marks vs Rank approximate brackets
    const rankBrackets = [
      { mark: 720, rank: 1 },
      { mark: 715, rank: 25 },
      { mark: 710, rank: 100 },
      { mark: 700, rank: 500 },
      { mark: 680, rank: 2000 },
      { mark: 650, rank: 6500 },
      { mark: 600, rank: 25000 },
      { mark: 550, rank: 55000 },
      { mark: 500, rank: 95000 },
      { mark: 450, rank: 150000 },
      { mark: 400, rank: 230000 },
      { mark: 300, rank: 400000 },
      { mark: 200, rank: 650000 },
      { mark: 100, rank: 1000000 },
      { mark: 0, rank: 1500000 },
      { mark: -180, rank: 2500000 } // Total candidates approx
    ];
  
    let estimatedRank = 1;
    
    // Interpolate rank based on brackets
    for (let i = 0; i < rankBrackets.length - 1; i++) {
      if (expectedMarks <= rankBrackets[i].mark && expectedMarks > rankBrackets[i+1].mark) {
        const markDiff = rankBrackets[i].mark - rankBrackets[i+1].mark;
        const rankDiff = rankBrackets[i+1].rank - rankBrackets[i].rank;
        const userMarkDiff = rankBrackets[i].mark - expectedMarks;
        
        estimatedRank = Math.round(rankBrackets[i].rank + (userMarkDiff / markDiff) * rankDiff);
        break;
      }
    }
  
    // Calculate approximate percentile (assuming ~2,500,000 candidates)
    const totalCandidates = 2500000;
    const percentile = Math.max(0, ((totalCandidates - estimatedRank) / totalCandidates) * 100);
  
    // Determine likely qualification status (General category cutoff is usually around 135-140)
    const isQualified = expectedMarks >= 135;
  
    return {
      summary: [
        {
          label: "Estimated Rank (AIR)",
          value: `~ ${estimatedRank.toLocaleString()}`,
          isHighlight: true,
        },
        {
          label: "Estimated Percentile",
          value: `${percentile.toFixed(2)} %ile`,
          isHighlight: true,
        },
        {
          label: "Total Marks",
          value: "720",
        },
        {
          label: "General Qualification",
          value: isQualified ? "Likely Qualified" : "Borderline / At Risk",
        },
      ],
      // Chart visualizing the student's percentile visually
      chartData: [
        { name: "Students Behind You", value: parseFloat(percentile.toFixed(2)) },
        { name: "Students Ahead of You", value: parseFloat((100 - percentile).toFixed(2)) },
      ],
    };
  };