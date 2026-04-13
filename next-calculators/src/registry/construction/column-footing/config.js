export const config = {
    id: "column-footing-calculator",
    name: "Column & Footing Concrete Calculator",
    description: "Calculate the exact volume of concrete required for rectangular or circular columns and their foundational footings.",
    category: "construction",
    inputs: [
      {
        id: "unit",
        label: "Measurement Unit",
        type: "select",
        options: [
          { value: "feet", label: "Feet (Decimal, e.g., 0.75 for 9 inches)" },
          { value: "meters", label: "Meters (m)" }
        ],
        defaultValue: "feet"
      },
      {
        id: "shape",
        label: "Column Shape",
        type: "select",
        options: [
          { value: "rectangular", label: "Rectangular / Square" },
          { value: "circular", label: "Circular / Round" }
        ],
        defaultValue: "rectangular"
      },
      {
        id: "col_length",
        label: "Column Length / Diameter",
        type: "number",
        placeholder: "e.g., 0.75",
        defaultValue: "0.75"
      },
      {
        id: "col_width",
        label: "Column Width (Leave empty if Circular)",
        type: "number",
        placeholder: "e.g., 1",
        defaultValue: "1"
      },
      {
        id: "col_height",
        label: "Column Height",
        type: "number",
        placeholder: "e.g., 10",
        defaultValue: "10"
      },
      {
        id: "foot_length",
        label: "Footing Length",
        type: "number",
        placeholder: "e.g., 4",
        defaultValue: "4"
      },
      {
        id: "foot_width",
        label: "Footing Width",
        type: "number",
        placeholder: "e.g., 4",
        defaultValue: "4"
      },
      {
        id: "foot_depth",
        label: "Footing Depth / Thickness",
        type: "number",
        placeholder: "e.g., 1",
        defaultValue: "1"
      },
      {
        id: "quantity",
        label: "Number of Columns / Footings",
        type: "number",
        placeholder: "e.g., 12",
        defaultValue: "1"
      }
    ]
  };