export const config = {
    id: "beam-deflection-advanced",
    name: "Advanced Beam Deflection Calculator",
    description: "Calculate Deflection, Force, Length, Modulus, or Inertia across various beam configurations and load types.",
    category: "engineering",
    inputs: [
      {
        id: "beamType",
        label: "Beam Type",
        type: "select",
        defaultValue: "cantilever",
        options: [
          { value: "cantilever", label: "Cantilever Beam (Fixed at one end)" },
          { value: "simply_supported", label: "Simply Supported Beam (Pinned at both ends)" }
        ]
      },
      {
        id: "loadType",
        label: "Load Type",
        type: "select",
        defaultValue: "point",
        options: [
          { value: "point", label: "Point Load (Concentrated Load)" },
          { value: "udl", label: "Uniformly Distributed Load (Total Load)" }
        ]
      },
      {
        id: "deflection",
        label: "Max Deflection (δ)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "mm",
        unitOptions: [
          { value: "mm", label: "mm (Millimeters)" },
          { value: "cm", label: "cm (Centimeters)" },
          { value: "m", label: "m (Meters)" },
          { value: "in", label: "in (Inches)" }
        ]
      },
      {
        id: "force",
        label: "Total Force / Load (F)",
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
        id: "length",
        label: "Beam Length (L)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "m",
        unitOptions: [
          { value: "m", label: "m (Meters)" },
          { value: "cm", label: "cm (Centimeters)" },
          { value: "mm", label: "mm (Millimeters)" },
          { value: "ft", label: "ft (Feet)" },
          { value: "in", label: "in (Inches)" }
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
      },
      {
        id: "inertia",
        label: "Moment of Inertia (I)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "cm4",
        unitOptions: [
          { value: "cm4", label: "cm⁴ (Centimeters⁴)" },
          { value: "mm4", label: "mm⁴ (Millimeters⁴)" },
          { value: "m4", label: "m⁴ (Meters⁴)" },
          { value: "in4", label: "in⁴ (Inches⁴)" }
        ]
      }
    ]
  };