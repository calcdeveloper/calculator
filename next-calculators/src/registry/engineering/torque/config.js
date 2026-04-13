export const config = {
    id: "torque-calculator",
    name: "Torque Calculator",
    description: "Calculate Torque, Force, Distance, or Angle. Enter your known values to instantly solve for the missing variable.",
    category: "physics",
    inputs: [
      {
        id: "torque",
        label: "Torque (τ)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "Nm",
        unitOptions: [
          { value: "Nm", label: "Nm (Newton-meters)" },
          { value: "lb-ft", label: "lb-ft (Pound-feet)" },
          { value: "kg-m", label: "kg-m (Kilogram-meters)" }
        ]
      },
      {
        id: "force",
        label: "Force (F)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "N",
        unitOptions: [
          { value: "N", label: "N (Newtons)" },
          { value: "lbf", label: "lbf (Pound-force)" },
          { value: "kgf", label: "kgf (Kilogram-force)" }
        ]
      },
      {
        id: "distance",
        label: "Distance / Radius (r)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "m",
        unitOptions: [
          { value: "m", label: "m (Meters)" },
          { value: "cm", label: "cm (Centimeters)" },
          { value: "ft", label: "ft (Feet)" },
          { value: "in", label: "in (Inches)" }
        ]
      },
      {
        id: "angle",
        label: "Angle (θ)",
        type: "number",
        defaultValue: 90,
        min: 0,
        max: 180,
        defaultUnit: "deg",
        unitOptions: [
          { value: "deg", label: "Degrees (°)" },
          { value: "rad", label: "Radians (rad)" }
        ]
      }
    ]
  };