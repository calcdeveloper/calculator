export const config = {
    id: "construction-cost-estimator",
    name: "House Construction Cost Estimator",
    description: "Get a thumb-rule estimate of your total house building cost in India, broken down by cement, steel, labor, and finishing.",
    category: "real-estate",
    inputs: [
      {
        id: "built_up_area",
        label: "Built-up Area per Floor (Sq.ft)",
        type: "number",
        placeholder: "e.g., 1000",
        defaultValue: "1000"
      },
      {
        id: "floors",
        label: "Number of Floors",
        type: "number",
        placeholder: "e.g., 2",
        defaultValue: "2"
      },
      {
        id: "construction_quality",
        label: "Construction Quality (Class)",
        type: "select",
        options: [
          { value: "1500", label: "C Class (Basic Quality) - ~₹1,500 / sq.ft" },
          { value: "1800", label: "B Class (Standard Quality) - ~₹1,800 / sq.ft" },
          { value: "2500", label: "A Class (Premium/Luxury) - ~₹2,500 / sq.ft" }
        ],
        defaultValue: "1800"
      },
      {
        id: "parking",
        label: "Include Stilt Parking / Basement?",
        type: "select",
        options: [
          { value: "0", label: "No" },
          { value: "0.5", label: "Yes, Ground Floor Stilt (Costs 50% of normal floor)" }
        ],
        defaultValue: "0"
      }
    ]
  };