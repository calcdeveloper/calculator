export const config = {
    id: "belt-length-pulley-speed-calculator",
    name: "Belt Length & Pulley Speed Calculator",
    description: "Calculate Belt Length by providing diameters and center distance, or determine missing Pulley Speeds and Diameters.",
    category: "engineering",
    inputs: [
      {
        id: "driverDiameter",
        label: "Driver Diameter (D1)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "mm",
        unitOptions: [
          { value: "mm", label: "mm (Millimeters)" },
          { value: "cm", label: "cm (Centimeters)" },
          { value: "in", label: "in (Inches)" }
        ]
      },
      {
        id: "drivenDiameter",
        label: "Driven Diameter (D2)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "mm",
        unitOptions: [
          { value: "mm", label: "mm (Millimeters)" },
          { value: "cm", label: "cm (Centimeters)" },
          { value: "in", label: "in (Inches)" }
        ]
      },
      {
        id: "centerDistance",
        label: "Center Distance (C)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "mm",
        unitOptions: [
          { value: "mm", label: "mm (Millimeters)" },
          { value: "cm", label: "cm (Centimeters)" },
          { value: "in", label: "in (Inches)" }
        ]
      },
      {
        id: "driverSpeed",
        label: "Driver Speed (RPM 1)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "rpm",
        unitOptions: [
          { value: "rpm", label: "RPM (Revs per minute)" },
          { value: "rps", label: "RPS (Revs per second)" }
        ]
      },
      {
        id: "drivenSpeed",
        label: "Driven Speed (RPM 2)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "rpm",
        unitOptions: [
          { value: "rpm", label: "RPM (Revs per minute)" },
          { value: "rps", label: "RPS (Revs per second)" }
        ]
      }
    ]
  };