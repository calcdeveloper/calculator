export const config = {
    id: "thermodynamics-ideal-gas-calculator",
    name: "Ideal Gas Law Calculator (Thermodynamics)",
    description: "Calculate Pressure, Volume, Moles, or Temperature of an ideal gas using the PV = nRT equation.",
    category: "science",
    inputs: [
      {
        id: "pressure",
        label: "Pressure (P)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "atm",
        unitOptions: [
          { value: "atm", label: "atm (Atmospheres)" },
          { value: "Pa", label: "Pa (Pascals)" },
          { value: "kPa", label: "kPa (Kilopascals)" },
          { value: "bar", label: "bar" },
          { value: "psi", label: "psi (Pounds/sq. inch)" }
        ]
      },
      {
        id: "volume",
        label: "Volume (V)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "L",
        unitOptions: [
          { value: "L", label: "L (Liters)" },
          { value: "m3", label: "m³ (Cubic Meters)" },
          { value: "cm3", label: "cm³ (Cubic Centimeters)" },
          { value: "ft3", label: "ft³ (Cubic Feet)" }
        ]
      },
      {
        id: "moles",
        label: "Amount of Substance (n)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "mol",
        unitOptions: [
          { value: "mol", label: "mol (Moles)" },
          { value: "kmol", label: "kmol (Kilomoles)" }
        ]
      },
      {
        id: "temperature",
        label: "Temperature (T)",
        type: "number",
        defaultValue: 0,
        min: 0, // Kelvin cannot be negative, handled in logic
        defaultUnit: "K",
        unitOptions: [
          { value: "K", label: "K (Kelvin)" },
          { value: "C", label: "°C (Celsius)" },
          { value: "F", label: "°F (Fahrenheit)" }
        ]
      }
    ]
  };