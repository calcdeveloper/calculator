export const config = {
    id: "marble-granite-estimator",
    name: "Marble & Granite Flooring Estimator",
    description: "Calculate the total stone area required and estimate the cement and sand needed for the base mortar bed.",
    category: "construction",
    inputs: [
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
        label: "Room / Area Length",
        type: "number",
        placeholder: "e.g., 15",
        defaultValue: "15"
      },
      {
        id: "width",
        label: "Room / Area Width",
        type: "number",
        placeholder: "e.g., 12",
        defaultValue: "12"
      },
      {
        id: "wastage",
        label: "Stone Wastage Factor",
        type: "select",
        options: [
          { value: "10", label: "10% (Standard for good quality slabs)" },
          { value: "15", label: "15% (High wastage for lots of cuts/defects)" }
        ],
        defaultValue: "10"
      },
      {
        id: "mortar_thickness",
        label: "Mortar Bed Thickness",
        type: "select",
        options: [
          { value: "1", label: "1 Inch (25mm) - Very Level Floor" },
          { value: "1.5", label: "1.5 Inches (40mm) - Standard" },
          { value: "2", label: "2 Inches (50mm) - Uneven Floor" }
        ],
        defaultValue: "1.5"
      },
      {
        id: "mortar_ratio",
        label: "Cement to Sand Ratio",
        type: "select",
        options: [
          { value: "4", label: "1:4 (1 part Cement, 4 parts Sand) - Strong" },
          { value: "6", label: "1:6 (1 part Cement, 6 parts Sand) - Standard" }
        ],
        defaultValue: "6"
      }
    ]
  };