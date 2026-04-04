export const config = {
    id: "tmt-steel-weight-calculator",
    name: "TMT Steel Bar (Sariya) Weight Calculator",
    description: "Calculate the exact weight of TMT steel bars per meter, per foot, and per bundle using standard civil engineering formulas.",
    category: "construction",
    inputs: [
      {
        id: "diameter",
        label: "Bar Diameter / Thickness",
        type: "select",
        options: [
          { value: "8", label: "8 mm" },
          { value: "10", label: "10 mm" },
          { value: "12", label: "12 mm" },
          { value: "16", label: "16 mm" },
          { value: "20", label: "20 mm" },
          { value: "25", label: "25 mm" },
          { value: "32", label: "32 mm" }
        ],
        defaultValue: "12"
      },
      {
        id: "unit",
        label: "Length Unit",
        type: "select",
        options: [
          { value: "meters", label: "Meters (Standard is 12m)" },
          { value: "feet", label: "Feet (Standard is 39.4ft)" }
        ],
        defaultValue: "meters"
      },
      {
        id: "length",
        label: "Length of One Bar",
        type: "number",
        placeholder: "e.g., 12",
        defaultValue: "12"
      },
      {
        id: "quantity",
        label: "Total Number of Bars (Pieces)",
        type: "number",
        placeholder: "e.g., 50",
        defaultValue: "1"
      }
    ]
  };