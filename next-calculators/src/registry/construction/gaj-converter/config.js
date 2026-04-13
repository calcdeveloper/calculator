export const config = {
    id: "gaj-converter-calculator",
    name: "Gaj to Square Feet / Sq Meter Converter",
    description: "Convert land area between Gaj, Square Feet, Square Meters, and Acres, or calculate total plot area using dimensions.",
    category: "real-estate",
    inputs: [
      {
        id: "calc_mode",
        label: "Calculation Method",
        type: "select",
        options: [
          { value: "direct", label: "Convert Total Area directly" },
          { value: "dimensions", label: "Calculate Plot Area (Length × Width)" }
        ],
        defaultValue: "direct"
      },
      {
        id: "direct_unit",
        label: "Input Unit (If converting directly)",
        type: "select",
        options: [
          { value: "gaj", label: "Gaj (Square Yards)" },
          { value: "sqft", label: "Square Feet (Sq.ft)" },
          { value: "sqm", label: "Square Meters (Sq.m)" },
          { value: "acre", label: "Acres" }
        ],
        defaultValue: "gaj"
      },
      {
        id: "area",
        label: "Total Area Value",
        type: "number",
        placeholder: "e.g., 100",
        defaultValue: "100"
      },
      {
        id: "dim_unit",
        label: "Measurement Unit (If using Length & Width)",
        type: "select",
        options: [
          { value: "feet", label: "Feet (ft)" },
          { value: "meters", label: "Meters (m)" },
          { value: "gaj_linear", label: "Gaj (Linear Yards)" }
        ],
        defaultValue: "feet"
      },
      {
        id: "length",
        label: "Plot Length (Depth)",
        type: "number",
        placeholder: "e.g., 45",
        defaultValue: ""
      },
      {
        id: "width",
        label: "Plot Width (Frontage)",
        type: "number",
        placeholder: "e.g., 20",
        defaultValue: ""
      }
    ]
  };