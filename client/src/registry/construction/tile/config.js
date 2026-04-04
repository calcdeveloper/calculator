export const config = {
    id: "tile-calculator",
    name: "Tile Calculator (Floor & Wall)",
    description: "Calculate the total number of tiles and boxes required for your floors or bathroom walls, including skirting and wastage.",
    category: "construction",
    inputs: [
      {
        id: "calc_type",
        label: "Calculation Type",
        type: "select",
        options: [
          { value: "floor", label: "Floor Tiles" },
          { value: "wall", label: "Wall Tiles (Bathrooms/Kitchen)" }
        ],
        defaultValue: "floor"
      },
      {
        id: "length",
        label: "Room Length (Feet)",
        type: "number",
        placeholder: "e.g., 12",
        defaultValue: "12"
      },
      {
        id: "width",
        label: "Room Width or Wall Height (Feet)",
        type: "number",
        placeholder: "e.g., 10",
        defaultValue: "10"
      },
      {
        id: "tile_size",
        label: "Tile Size",
        type: "select",
        options: [
          { value: "600x600", label: "600x600 mm (2x2 ft) - Standard Floor" },
          { value: "600x1200", label: "600x1200 mm (2x4 ft) - Large Floor" },
          { value: "800x800", label: "800x800 mm (32x32 inch) - Premium Floor" },
          { value: "300x300", label: "300x300 mm (1x1 ft) - Bathroom Floor" },
          { value: "300x450", label: "300x450 mm (12x18 inch) - Bathroom Wall" },
          { value: "300x600", label: "300x600 mm (12x24 inch) - Kitchen Wall" }
        ],
        defaultValue: "600x600"
      },
      {
        id: "skirting",
        label: "Include Skirting? (4-inch floor border)",
        type: "select",
        options: [
          { value: "yes", label: "Yes, add standard 4-inch skirting" },
          { value: "no", label: "No skirting required" }
        ],
        defaultValue: "yes"
      },
      {
        id: "wastage",
        label: "Wastage Factor",
        type: "select",
        options: [
          { value: "5", label: "5% (Standard Straight Lay)" },
          { value: "10", label: "10% (Diagonal Lay or Many Corners)" },
          { value: "15", label: "15% (Complex cuts / Small bathrooms)" }
        ],
        defaultValue: "5"
      }
    ]
  };