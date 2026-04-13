export const config = {
    id: "brass-volume-calculator",
    name: "Brass Volume Calculator (Sand & Aggregate)",
    description: "Calculate the volume of sand, aggregate (gitti), or soil in Brass and Cubic Feet (CFT) based on truck or tractor trolley dimensions.",
    category: "construction",
    inputs: [
      {
        id: "unit",
        label: "Input Unit",
        type: "select",
        options: [
          { value: "feet", label: "Feet (Decimal, e.g., 10.5)" },
          { value: "inches", label: "Inches" },
          { value: "meters", label: "Meters (m)" }
        ],
        defaultValue: "feet"
      },
      {
        id: "length",
        label: "Vehicle / Trolley Length",
        type: "number",
        placeholder: "e.g., 10",
        defaultValue: ""
      },
      {
        id: "width",
        label: "Vehicle / Trolley Width",
        type: "number",
        placeholder: "e.g., 5.5",
        defaultValue: ""
      },
      {
        id: "height",
        label: "Material Height / Depth",
        type: "number",
        placeholder: "e.g., 2",
        defaultValue: ""
      },
      {
        id: "material",
        label: "Material Type (For Weight Estimate)",
        type: "select",
        options: [
          { value: "sand", label: "River Sand (Reti)" },
          { value: "aggregate", label: "Crushed Stone / Aggregate (Gitti)" },
          { value: "soil", label: "Excavated Soil (Mitti)" }
        ],
        defaultValue: "sand"
      }
    ]
  };