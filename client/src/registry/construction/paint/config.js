export const config = {
    id: "paint-calculator",
    name: "Room & Exterior Paint Calculator",
    description: "Calculate the exact liters of paint and primer required for your walls and ceilings based on Indian brand coverage standards.",
    category: "construction",
    inputs: [
      {
        id: "length",
        label: "Room / Wall Length (Feet)",
        type: "number",
        placeholder: "e.g., 15",
        defaultValue: "15"
      },
      {
        id: "width",
        label: "Room / Wall Width (Feet)",
        type: "number",
        placeholder: "e.g., 12",
        defaultValue: "12"
      },
      {
        id: "height",
        label: "Wall Height (Feet)",
        type: "number",
        placeholder: "e.g., 10",
        defaultValue: "10"
      },
      {
        id: "ceiling",
        label: "Paint the Ceiling?",
        type: "select",
        options: [
          { value: "yes", label: "Yes, include ceiling" },
          { value: "no", label: "No, walls only" }
        ],
        defaultValue: "yes"
      },
      {
        id: "doors",
        label: "Number of Doors (Standard 7x3 ft)",
        type: "number",
        placeholder: "e.g., 1",
        defaultValue: "1"
      },
      {
        id: "windows",
        label: "Number of Windows (Standard 4x4 ft)",
        type: "number",
        placeholder: "e.g., 2",
        defaultValue: "1"
      },
      {
        id: "paint_type",
        label: "Paint Quality & Type",
        type: "select",
        options: [
          { value: "luxury_interior", label: "Luxury Interior (e.g., Royale / Silk)" },
          { value: "standard_interior", label: "Standard Interior (e.g., Tractor / Bison)" },
          { value: "exterior", label: "Exterior Weathercoat (e.g., Apex / WeatherCoat)" }
        ],
        defaultValue: "luxury_interior"
      },
      {
        id: "coats",
        label: "Number of Coats",
        type: "select",
        options: [
          { value: "2", label: "2 Coats (Standard for fresh paint)" },
          { value: "1", label: "1 Coat (Repainting the exact same color)" }
        ],
        defaultValue: "2"
      }
    ]
  };