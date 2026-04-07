export const config = {
    id: "frequency-calculator",
    name: "Frequency & Wavelength Calculator",
    description: "Calculate Frequency, Time Period, Wavelength, or Angular Frequency. Enter exactly one value to instantly solve for the rest.",
    category: "engineering",
    inputs: [
      {
        id: "frequency",
        label: "Frequency (f)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "Hz",
        unitOptions: [
          { value: "Hz", label: "Hz (Hertz)" },
          { value: "kHz", label: "kHz (Kilohertz)" },
          { value: "MHz", label: "MHz (Megahertz)" },
          { value: "GHz", label: "GHz (Gigahertz)" }
        ]
      },
      {
        id: "period",
        label: "Time Period (T)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "ms",
        unitOptions: [
          { value: "s", label: "s (Seconds)" },
          { value: "ms", label: "ms (Milliseconds)" },
          { value: "us", label: "μs (Microseconds)" },
          { value: "ns", label: "ns (Nanoseconds)" }
        ]
      },
      {
        id: "wavelength",
        label: "Wavelength (λ)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "m",
        unitOptions: [
          { value: "km", label: "km (Kilometers)" },
          { value: "m", label: "m (Meters)" },
          { value: "cm", label: "cm (Centimeters)" },
          { value: "mm", label: "mm (Millimeters)" }
        ]
      },
      {
        id: "angular",
        label: "Angular Frequency (ω)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "rad_s",
        unitOptions: [
          { value: "rad_s", label: "rad/s (Radians/sec)" },
          { value: "Mrad_s", label: "Mrad/s (Mega-radians/sec)" }
        ]
      }
    ]
  };