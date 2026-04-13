export const config = {
    id: "capacitor-calculator",
    name: "Capacitor Charge & Energy Calculator",
    description: "Calculate Capacitance, Voltage, Charge, or Energy. Enter any two known values to instantly find the other two.",
    category: "engineering", 
    inputs: [
      {
        id: "capacitance",
        label: "Capacitance (C)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "µF",
        unitOptions: [
          { value: "F", label: "F" },
          { value: "mF", label: "mF" },
          { value: "µF", label: "µF" },
          { value: "nF", label: "nF" },
          { value: "pF", label: "pF" }
        ]
      },
      {
        id: "voltage",
        label: "Voltage (V)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "V",
        unitOptions: [
          { value: "V", label: "V" },
          { value: "kV", label: "kV" },
          { value: "mV", label: "mV" }
        ]
      },
      {
        id: "charge",
        label: "Charge (Q)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "µC",
        unitOptions: [
          { value: "C", label: "C" },
          { value: "mC", label: "mC" },
          { value: "µC", label: "µC" },
          { value: "nC", label: "nC" },
          { value: "pC", label: "pC" }
        ]
      },
      {
        id: "energy",
        label: "Energy (E)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "mJ",
        unitOptions: [
          { value: "J", label: "J" },
          { value: "mJ", label: "mJ" },
          { value: "µJ", label: "µJ" }
        ]
      }
    ]
  };