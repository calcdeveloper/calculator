export const config = {
    id: "neet-rank",
    name: "NEET Rank Predictor",
    description: "Predict your All India Rank (AIR) and Percentile for NEET based on your expected marks.",
    category: "education",
    seoTitle: "NEET Rank Predictor | Marks vs Rank Calculator",
    seoDescription: "Free online NEET Rank Predictor. Enter your expected marks out of 720 to calculate your estimated All India Rank (AIR), percentile, and understand the tie-breaking formulas.",
    seoKeywords: "neet rank predictor, neet marks vs rank, neet percentile calculator, calculate neet rank, neet expected cut off, neet tie breaking criteria",
    inputs: [
      {
        id: "expectedMarks",
        label: "Expected NEET Marks (out of 720)",
        type: "number",
        min: -180,
        max: 720,
        defaultValue: 610,
        placeholder: "e.g., 610",
        helperText: "Enter your estimated score after checking the answer key.",
      },
    ],
  };