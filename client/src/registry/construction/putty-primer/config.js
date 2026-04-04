export const config = {
    id: "putty-primer-calculator",
    name: "Wall Putty & Primer Calculator",
    description: "Calculate the exact Kg of wall putty and Liters of primer needed to prepare your interior or exterior walls for painting.",
    category: "construction",
    inputs: [
      {
        id: "wall_length",
        label: "Total Wall Length",
        type: "number",
        placeholder: "e.g., 10",
        defaultValue: ""
      },
      {
        id: "wall_height",
        label: "Wall Height",
        type: "number",
        placeholder: "e.g., 10",
        defaultValue: ""
      },
      {
        id: "unit",
        label: "Measurement Unit",
        type: "select",
        options: [
          { value: "feet", label: "Feet (ft)" },
          { value: "meters", label: "Meters (m)" }
        ],
        defaultValue: "feet"
      },
      {
        id: "deductions",
        label: "Deduct Doors/Windows Area (Optional)",
        type: "number",
        placeholder: "e.g., 20",
        defaultValue: "0"
      },
      {
        id: "surface_condition",
        label: "Surface Condition",
        type: "select",
        options: [
          { value: "rough", label: "Fresh/Rough Plaster (Needs more putty)" },
          { value: "smooth", label: "Repainting/Smooth Wall (Needs less putty)" }
        ],
        defaultValue: "rough"
      },
      {
        id: "putty_coats",
        label: "Number of Putty Coats",
        type: "select",
        options: [
          { value: "2", label: "2 Coats (Standard for new walls)" },
          { value: "1", label: "1 Coat (Touch-ups only)" }
        ],
        defaultValue: "2"
      }
    ]
  };