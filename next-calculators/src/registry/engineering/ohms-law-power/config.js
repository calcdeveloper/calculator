export const config = {
    id: "ohms-law-power",
    name: "Ohm's Law & Power Calculator",
    description: "Enter any two known values (Voltage, Current, Resistance, or Power) to instantly calculate the other two.",
    category: "engineering", // Adjust if your category is different
    inputs: [
      {
        id: "voltage",
        label: "Voltage (V)",
        type: "number",
        defaultValue: 0,
        min: 0,
        max: 1000000,
        defaultUnit: "V",
        unitOptions: [
          { value: "V", label: "V" },
          { value: "kV", label: "kV" },
          { value: "mV", label: "mV" }
        ]
      },
      {
        id: "current",
        label: "Current (I)",
        type: "number",
        defaultValue: 0,
        min: 0,
        max: 1000000,
        defaultUnit: "A",
        unitOptions: [
          { value: "A", label: "A" },
          { value: "mA", label: "mA" }
        ]
      },
      {
        id: "resistance",
        label: "Resistance (R)",
        type: "number",
        defaultValue: 0,
        min: 0,
        max: 1000000,
        defaultUnit: "Ω",
        unitOptions: [
          { value: "Ω", label: "Ω" },
          { value: "kΩ", label: "kΩ" },
          { value: "MΩ", label: "MΩ" }
        ]
      },
      {
        id: "power",
        label: "Power (P)",
        type: "number",
        defaultValue: 0,
        min: 0,
        max: 1000000,
        defaultUnit: "W",
        unitOptions: [
          { value: "W", label: "W" },
          { value: "kW", label: "kW" },
          { value: "MW", label: "MW" },
          { value: "hp", label: "hp" }
        ]
      }
    ]
  };