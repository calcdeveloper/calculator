export const config = {
    id: "structural-load-calculator",
    name: "Structural Load Calculator",
    description: "Calculate Tributary Area, Dead Load, Live Load, ASD (Unfactored), and LRFD (Factored) ultimate loads for columns and beams.",
    category: "engineering",
    inputs: [
      {
        id: "length",
        label: "Tributary Length (L)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "ft",
        unitOptions: [
          { value: "ft", label: "ft (Feet)" },
          { value: "m", label: "m (Meters)" }
        ]
      },
      {
        id: "width",
        label: "Tributary Width (W)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "ft",
        unitOptions: [
          { value: "ft", label: "ft (Feet)" },
          { value: "m", label: "m (Meters)" }
        ]
      },
      {
        id: "deadLoad",
        label: "Area Dead Load (DL)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "psf",
        unitOptions: [
          { value: "psf", label: "psf (Pounds/sq. ft)" },
          { value: "kpa", label: "kPa / kN/m²" }
        ]
      },
      {
        id: "liveLoad",
        label: "Area Live Load (LL)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "psf",
        unitOptions: [
          { value: "psf", label: "psf (Pounds/sq. ft)" },
          { value: "kpa", label: "kPa / kN/m²" }
        ]
      }
    ]
  };