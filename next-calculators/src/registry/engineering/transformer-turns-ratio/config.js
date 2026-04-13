export const config = {
    id: "transformer-turns-ratio-calculator",
    name: "Transformer Turns Ratio Calculator",
    description: "Calculate Primary/Secondary Voltage or Coil Turns. Enter exactly three values to solve for the fourth.",
    category: "engineering",
    inputs: [
      {
        id: "primaryVoltage",
        label: "Primary Voltage (Vp)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "V",
        unitOptions: [
          { value: "V", label: "V (Volts)" },
          { value: "mV", label: "mV (Millivolts)" },
          { value: "kV", label: "kV (Kilovolts)" }
        ]
      },
      {
        id: "secondaryVoltage",
        label: "Secondary Voltage (Vs)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "V",
        unitOptions: [
          { value: "V", label: "V (Volts)" },
          { value: "mV", label: "mV (Millivolts)" },
          { value: "kV", label: "kV (Kilovolts)" }
        ]
      },
      {
        id: "primaryTurns",
        label: "Primary Turns (Np)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "turns",
        unitOptions: [
          { value: "turns", label: "Coil Turns" }
        ]
      },
      {
        id: "secondaryTurns",
        label: "Secondary Turns (Ns)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "turns",
        unitOptions: [
          { value: "turns", label: "Coil Turns" }
        ]
      }
    ]
  };