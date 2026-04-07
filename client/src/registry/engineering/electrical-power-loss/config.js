export const config = {
    id: "electrical-power-loss-calculator",
    name: "Electrical Power Loss & Voltage Drop Calculator",
    description: "Calculate Electrical Power Loss (I²R Loss), Current, Resistance, or Voltage Drop across a conductor by entering any two known values.",
    category: "engineering",
    inputs: [
      {
        id: "current",
        label: "Current (I)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "A",
        unitOptions: [
          { value: "A", label: "A (Amperes)" },
          { value: "mA", label: "mA (Milliamperes)" },
          { value: "kA", label: "kA (Kiloamperes)" }
        ]
      },
      {
        id: "resistance",
        label: "Conductor Resistance (R)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "ohm",
        unitOptions: [
          { value: "ohm", label: "Ω (Ohms)" },
          { value: "mohm", label: "mΩ (Milliohms)" },
          { value: "kohm", label: "kΩ (Kiloohms)" }
        ]
      },
      {
        id: "voltageDrop",
        label: "Voltage Drop (Vd)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "V",
        unitOptions: [
          { value: "V", label: "V (Volts)" },
          { value: "mV", label: "mV (Millivolts)" }
        ]
      },
      {
        id: "powerLoss",
        label: "Power Loss (P)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "W",
        unitOptions: [
          { value: "W", label: "W (Watts)" },
          { value: "kW", label: "kW (Kilowatts)" },
          { value: "mW", label: "mW (Milliwatts)" }
        ]
      }
    ]
  };