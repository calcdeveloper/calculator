export const config = {
    id: "concrete-mix-calculator",
    name: "Concrete Mix Calculator (Cement, Sand, Aggregate)",
    description: "Calculate the exact number of cement bags, and cubic feet (CFT) of sand and aggregate required for various concrete grades.",
    category: "construction",
    inputs: [
      {
        id: "volume",
        label: "Total Concrete Volume Required",
        type: "number",
        placeholder: "e.g., 1",
        defaultValue: "1"
      },
      {
        id: "unit",
        label: "Volume Unit",
        type: "select",
        options: [
          { value: "cum", label: "Cubic Meters (m³)" },
          { value: "cft", label: "Cubic Feet (CFT)" }
        ],
        defaultValue: "cum"
      },
      {
        id: "grade",
        label: "Concrete Grade (Nominal Mix)",
        type: "select",
        options: [
          { value: "M10", label: "M10 (1 : 3 : 6) - PCC / Leveling Course" },
          { value: "M15", label: "M15 (1 : 2 : 4) - Standard Foundation" },
          { value: "M20", label: "M20 (1 : 1.5 : 3) - Slabs, Beams, Columns" },
          { value: "M25", label: "M25 (1 : 1 : 2) - Heavy Load Structures" }
        ],
        defaultValue: "M20"
      },
      {
        id: "wastage",
        label: "Wastage Percentage (%)",
        type: "number",
        defaultValue: 5
      }
    ]
  };