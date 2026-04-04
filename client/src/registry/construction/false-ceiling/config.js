export const config = {
    id: "false-ceiling-calculator",
    name: "False Ceiling & POP Calculator",
    description: "Calculate Gypsum boards, POP bags, and GI metal framing channels needed for your interior false ceiling.",
    category: "construction",
    inputs: [
      {
        id: "ceiling_type",
        label: "Ceiling Material Type",
        type: "select",
        options: [
          { value: "gypsum", label: "Gypsum Board (Standard Drywall)" },
          { value: "pop", label: "POP (Plaster of Paris with mesh)" }
        ],
        defaultValue: "gypsum"
      },
      {
        id: "length",
        label: "Room Length (Feet)",
        type: "number",
        placeholder: "e.g., 15",
        defaultValue: "15"
      },
      {
        id: "width",
        label: "Room Width (Feet)",
        type: "number",
        placeholder: "e.g., 12",
        defaultValue: "12"
      },
      {
        id: "board_size",
        label: "Gypsum Board Size (If applicable)",
        type: "select",
        options: [
          { value: "24", label: "6 x 4 Feet (Standard Indian Size)" },
          { value: "32", label: "8 x 4 Feet (Large Size)" }
        ],
        defaultValue: "24"
      },
      {
        id: "wastage",
        label: "Material Wastage Factor",
        type: "select",
        options: [
          { value: "5", label: "5% (Simple flat ceiling)" },
          { value: "10", label: "10% (Cove designs, multiple levels)" },
          { value: "15", label: "15% (Highly complex designs)" }
        ],
        defaultValue: "10"
      }
    ]
  };