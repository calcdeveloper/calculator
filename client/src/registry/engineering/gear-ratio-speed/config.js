export const config = {
    id: "gear-ratio-speed-calculator",
    name: "Gear Ratio & RPM Calculator (Mechanical)",
    description: "Calculate Gear Ratio, Driver Speed, Driven Speed, or Gear Teeth by entering any three known variables.",
    category: "engineering",
    inputs: [
      {
        id: "driverTeeth",
        label: "Driver Gear Teeth (T1)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "teeth",
        unitOptions: [
          { value: "teeth", label: "Teeth count" }
        ]
      },
      {
        id: "drivenTeeth",
        label: "Driven Gear Teeth (T2)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "teeth",
        unitOptions: [
          { value: "teeth", label: "Teeth count" }
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
          { value: "rps", label: "RPS (Revs per second)" },
          { value: "rad_s", label: "rad/s (Radians/sec)" }
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
          { value: "rps", label: "RPS (Revs per second)" },
          { value: "rad_s", label: "rad/s (Radians/sec)" }
        ]
      }
    ]
  };