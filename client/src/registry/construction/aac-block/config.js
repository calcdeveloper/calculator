export const config = {
    id: "aac-block-calculator",
    name: "AAC Block & Adhesive Calculator",
    description: "Calculate the exact number of AAC / Siporex blocks and bags of chemical adhesive required for modern masonry walls.",
    category: "construction",
    inputs: [
      {
        id: "wall_length",
        label: "Wall Length",
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
        id: "block_thickness",
        label: "Block Thickness",
        type: "select",
        options: [
          { value: "100", label: "100 mm (4 Inch - Partition)" },
          { value: "150", label: "150 mm (6 Inch - Standard)" },
          { value: "200", label: "200 mm (8 Inch - Exterior)" },
          { value: "225", label: "225 mm (9 Inch - Exterior)" }
        ],
        defaultValue: "150"
      },
      {
        id: "wastage",
        label: "Wastage Percentage",
        type: "number",
        defaultValue: 3 // AAC blocks have less breakage than red bricks
      }
    ]
  };