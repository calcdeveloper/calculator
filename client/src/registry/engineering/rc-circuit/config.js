export const config = {
    id: "rc-circuit-calculator",
    name: "RC Circuit Calculator (Time Constant & Filters)",
    description: "Calculate Resistance, Capacitance, Time Constant (Tau), or Cutoff Frequency for Resistor-Capacitor circuits.",
    category: "engineering",
    inputs: [
      {
        id: "resistance",
        label: "Resistance (R)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "ohm",
        unitOptions: [
          { value: "ohm", label: "Ω (Ohms)" },
          { value: "kohm", label: "kΩ (Kiloohms)" },
          { value: "Mohm", label: "MΩ (Megaohms)" }
        ]
      },
      {
        id: "capacitance",
        label: "Capacitance (C)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "uF",
        unitOptions: [
          { value: "F", label: "F (Farads)" },
          { value: "mF", label: "mF (Millifarads)" },
          { value: "uF", label: "μF (Microfarads)" },
          { value: "nF", label: "nF (Nanofarads)" },
          { value: "pF", label: "pF (Picofarads)" }
        ]
      },
      {
        id: "timeConstant",
        label: "Time Constant (τ)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "ms",
        unitOptions: [
          { value: "s", label: "s (Seconds)" },
          { value: "ms", label: "ms (Milliseconds)" },
          { value: "us", label: "μs (Microseconds)" }
        ]
      },
      {
        id: "frequency",
        label: "Cutoff Frequency (fc)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "Hz",
        unitOptions: [
          { value: "Hz", label: "Hz (Hertz)" },
          { value: "kHz", label: "kHz (Kilohertz)" },
          { value: "MHz", label: "MHz (Megahertz)" }
        ]
      }
    ]
  };