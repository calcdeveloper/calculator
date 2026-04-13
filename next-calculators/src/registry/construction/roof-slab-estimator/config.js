export const config = {
    id: "roof-slab-estimator",
    name: "Roof Slab Concrete & Steel Estimator",
    description: "Calculate the total concrete volume (m³ and CFT) and estimate the TMT steel weight required for an RCC roof slab (lanter).",
    category: "construction",
    inputs: [
      {
        id: "unit",
        label: "Length & Width Unit",
        type: "select",
        options: [
          { value: "feet", label: "Feet (ft)" },
          { value: "meters", label: "Meters (m)" }
        ],
        defaultValue: "feet"
      },
      {
        id: "length",
        label: "Slab Length",
        type: "number",
        placeholder: "e.g., 40",
        defaultValue: "40"
      },
      {
        id: "width",
        label: "Slab Width",
        type: "number",
        placeholder: "e.g., 25",
        defaultValue: "25"
      },
      {
        id: "thickness",
        label: "Slab Thickness",
        type: "number",
        placeholder: "e.g., 5",
        defaultValue: "5"
      },
      {
        id: "thickness_unit",
        label: "Thickness Unit",
        type: "select",
        options: [
          { value: "inches", label: "Inches (Standard is 5 to 6 inches)" },
          { value: "mm", label: "Millimeters (mm)" }
        ],
        defaultValue: "inches"
      },
      {
        id: "steel_rule",
        label: "Steel Thumb Rule (Reinforcement Factor)",
        type: "select",
        options: [
          { value: "80", label: "80 kg / m³ (Standard Residential Slab)" },
          { value: "100", label: "100 kg / m³ (Heavy Commercial Slab)" }
        ],
        defaultValue: "80"
      }
    ]
  };