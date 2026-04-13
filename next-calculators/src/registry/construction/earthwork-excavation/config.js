export const config = {
    id: "earthwork-excavation-calculator",
    name: "Earthwork & Excavation Calculator (Soil Volume)",
    description: "Calculate the exact volume of soil to be excavated and estimate the number of truck trips required for soil removal.",
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
        label: "Pit Length",
        type: "number",
        placeholder: "e.g., 5",
        defaultValue: "5"
      },
      {
        id: "width",
        label: "Pit Width",
        type: "number",
        placeholder: "e.g., 5",
        defaultValue: "5"
      },
      {
        id: "depth",
        label: "Excavation Depth",
        type: "number",
        placeholder: "e.g., 6",
        defaultValue: "6"
      },
      {
        id: "quantity",
        label: "Number of Pits / Trenches",
        type: "number",
        placeholder: "e.g., 10",
        defaultValue: "1"
      },
      {
        id: "swell",
        label: "Soil Swell Factor (Expansion)",
        type: "select",
        options: [
          { value: "25", label: "Standard Earth / Loam (+25%)" },
          { value: "35", label: "Hard Clay (+35%)" },
          { value: "15", label: "Sand / Gravel (+15%)" },
          { value: "0", label: "No Expansion (+0%)" }
        ],
        defaultValue: "25"
      },
      {
        id: "truck",
        label: "Disposal Vehicle Capacity",
        type: "select",
        options: [
          { value: "100", label: "Tractor Trolley (~1 Brass / 100 CFT)" },
          { value: "250", label: "Small Tipper Truck (~2.5 Brass / 250 CFT)" },
          { value: "500", label: "Hyva / Large Dump Truck (~5 Brass / 500 CFT)" }
        ],
        defaultValue: "100"
      }
    ]
  };