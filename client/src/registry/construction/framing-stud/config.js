export const config = {
    id: "framing-stud-calculator",
    name: "Partition & Framing Calculator",
    description: "Calculate GI metal studs, wooden battens, and tracking channels for Gypsum drywall or plywood partitions. Tailored for Indian standard sizes.",
    category: "construction",
    inputs: [
      {
        id: "wall_length",
        label: "Wall Length",
        type: "number",
        placeholder: "e.g., 12",
        defaultValue: ""
      },
      {
        id: "wall_unit",
        label: "Length Unit",
        type: "select",
        options: [
          { value: "feet", label: "Feet (ft)" },
          { value: "meters", label: "Meters (m)" }
        ],
        defaultValue: "feet"
      },
      {
        id: "oc_spacing",
        label: "Stud Spacing (Center-to-Center)",
        type: "select",
        options: [
          { value: "406", label: "16 inches (406 mm) - High Strength" },
          { value: "610", label: "24 inches (610 mm) - Standard" },
          { value: "custom_in", label: "Custom Spacing (Inches)" },
          { value: "custom_mm", label: "Custom Spacing (mm)" }
        ],
        defaultValue: "610"
      },
      {
        id: "custom_spacing",
        label: "Enter Custom Spacing",
        type: "number",
        placeholder: "e.g., 450",
        hidden: (inputs) => inputs.oc_spacing !== "custom_in" && inputs.oc_spacing !== "custom_mm",
        defaultValue: ""
      },
      {
        id: "top_tracks",
        label: "Number of Top Tracks/Ceiling Channels",
        type: "number",
        defaultValue: 1 // Usually 1 for metal partition framing
      },
      {
        id: "bottom_tracks",
        label: "Number of Bottom Tracks/Floor Channels",
        type: "number",
        defaultValue: 1 // Usually 1
      },
      {
        id: "quantity",
        label: "Number of Identical Walls",
        type: "number",
        defaultValue: 1
      }
    ]
  };