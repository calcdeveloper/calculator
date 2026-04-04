export const config = {
    id: "brick-calculator",
    name: "Brickwork Calculator (Bricks, Cement, Sand)",
    description: "Calculate the exact number of red bricks or fly ash bricks, plus the bags of cement and cubic feet of sand required for wall construction.",
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
        id: "wall_thickness",
        label: "Wall Thickness",
        type: "select",
        options: [
          { value: "115", label: "4.5 Inch (Half Brick Wall)" },
          { value: "230", label: "9 Inch (Full Brick Wall)" }
        ],
        defaultValue: "230"
      },
      {
        id: "brick_size",
        label: "Brick Size (L x W x H)",
        type: "select",
        options: [
          { value: "230_115_75", label: "Traditional Red Brick (230 x 115 x 75 mm)" },
          { value: "190_90_90", label: "Standard Modular Brick (190 x 90 x 90 mm)" },
          { value: "230_110_75", label: "Fly Ash Brick (230 x 110 x 75 mm)" }
        ],
        defaultValue: "230_115_75"
      },
      {
        id: "mortar_ratio",
        label: "Cement : Sand Ratio",
        type: "select",
        options: [
          { value: "4", label: "1:4 (Best for 4.5-inch walls)" },
          { value: "5", label: "1:5 (Standard)" },
          { value: "6", label: "1:6 (Standard for 9-inch walls)" }
        ],
        defaultValue: "6"
      },
      {
        id: "wastage",
        label: "Wastage Percentage",
        type: "number",
        defaultValue: 5
      }
    ]
  };