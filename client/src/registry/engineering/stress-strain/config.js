export const config = {
    id: "stress-strain-calculator",
    name: "Stress & Strain Calculator",
    description: "Calculate Mechanical Stress, Strain, Force, Area, or Young's Modulus. Enter your known values to instantly solve the material properties.",
    category: "engineering",
    inputs: [
      {
        id: "force",
        label: "Force (F)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "N",
        unitOptions: [
          { value: "N", label: "N (Newtons)" },
          { value: "kN", label: "kN (Kilonewtons)" },
          { value: "lbf", label: "lbf (Pound-force)" }
        ]
      },
      {
        id: "area",
        label: "Cross-Sectional Area (A)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "mm2",
        unitOptions: [
          { value: "mm2", label: "mm² (Sq. Millimeters)" },
          { value: "cm2", label: "cm² (Sq. Centimeters)" },
          { value: "m2", label: "m² (Sq. Meters)" },
          { value: "in2", label: "in² (Sq. Inches)" }
        ]
      },
      {
        id: "stress",
        label: "Stress (σ)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "MPa",
        unitOptions: [
          { value: "Pa", label: "Pa (Pascals)" },
          { value: "MPa", label: "MPa (Megapascals)" },
          { value: "GPa", label: "GPa (Gigapascals)" },
          { value: "psi", label: "psi (Pounds/sq. inch)" }
        ]
      },
      {
        id: "strain",
        label: "Strain (ε)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "ratio",
        unitOptions: [
          { value: "ratio", label: "Ratio (Unitless)" },
          { value: "percent", label: "Percentage (%)" },
          { value: "micro", label: "µε (Microstrain)" }
        ]
      },
      {
        id: "modulus",
        label: "Young's Modulus (E)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "GPa",
        unitOptions: [
          { value: "GPa", label: "GPa (Gigapascals)" },
          { value: "MPa", label: "MPa (Megapascals)" },
          { value: "psi", label: "psi (Pounds/sq. inch)" }
        ]
      }
    ]
  };