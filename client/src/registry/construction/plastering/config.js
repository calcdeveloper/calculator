export const config = {
    id: "plastering-calculator",
    name: "Plastering Material Calculator",
    description: "Calculate the exact bags of cement and cubic feet of sand required for internal and external wall plastering.",
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
        id: "plaster_thickness",
        label: "Plaster Thickness",
        type: "select",
        options: [
          { value: "12", label: "12 mm (Internal Wall)" },
          { value: "15", label: "15 mm (Ceiling or Uneven Brick)" },
          { value: "20", label: "20 mm (External Wall)" }
        ],
        defaultValue: "12"
      },
      {
        id: "mortar_ratio",
        label: "Cement : Sand Ratio",
        type: "select",
        options: [
          { value: "3", label: "1:3 (Ceilings / Rich Mix)" },
          { value: "4", label: "1:4 (Internal Plaster)" },
          { value: "5", label: "1:5 (Standard Mix)" },
          { value: "6", label: "1:6 (External Plaster)" }
        ],
        defaultValue: "4"
      },
      {
        id: "unevenness",
        label: "Unevenness & Wastage Factor (%)",
        type: "number",
        defaultValue: 20 // Standard Indian allowance for brick joints and uneven surfaces
      }
    ]
  };