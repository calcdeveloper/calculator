export const config = {
    id: "water-tank-capacity-calculator",
    name: "Water Tank Capacity Calculator",
    description: "Calculate the exact water capacity in Liters for rectangular underground sumps and cylindrical overhead tanks.",
    category: "construction",
    inputs: [
      {
        id: "shape",
        label: "Tank Type & Shape",
        type: "select",
        options: [
          { value: "rectangular", label: "Rectangular (Underground Sump / RCC)" },
          { value: "cylindrical", label: "Cylindrical (Overhead / Sintex type)" }
        ],
        defaultValue: "rectangular"
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
        id: "length",
        label: "Internal Length (For Rectangular)",
        type: "number",
        placeholder: "e.g., 6",
        defaultValue: "6"
      },
      {
        id: "width",
        label: "Internal Width (For Rectangular)",
        type: "number",
        placeholder: "e.g., 4",
        defaultValue: "4"
      },
      {
        id: "diameter",
        label: "Internal Diameter (For Cylindrical)",
        type: "number",
        placeholder: "e.g., 4",
        defaultValue: ""
      },
      {
        id: "depth",
        label: "Internal Depth / Height",
        type: "number",
        placeholder: "e.g., 5",
        defaultValue: "5"
      }
    ]
  };