export const config = {
    id: "fluid-mechanics-reynolds-calculator",
    name: "Reynolds Number Calculator (Fluid Mechanics)",
    description: "Calculate Reynolds Number, Density, Velocity, Diameter, or Viscosity to determine if fluid flow is Laminar or Turbulent.",
    category: "engineering",
    inputs: [
      {
        id: "reynolds",
        label: "Reynolds Number (Re)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "ratio",
        unitOptions: [
          { value: "ratio", label: "Dimensionless" }
        ]
      },
      {
        id: "density",
        label: "Fluid Density (ρ)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "kg_m3",
        unitOptions: [
          { value: "kg_m3", label: "kg/m³ (Kilograms/cubic meter)" },
          { value: "lb_ft3", label: "lb/ft³ (Pounds/cubic foot)" },
          { value: "g_cm3", label: "g/cm³ (Grams/cubic centimeter)" }
        ]
      },
      {
        id: "velocity",
        label: "Flow Velocity (v)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "m_s",
        unitOptions: [
          { value: "m_s", label: "m/s (Meters/second)" },
          { value: "ft_s", label: "ft/s (Feet/second)" },
          { value: "cm_s", label: "cm/s (Centimeters/second)" }
        ]
      },
      {
        id: "diameter",
        label: "Pipe Diameter / Length (D)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "m",
        unitOptions: [
          { value: "m", label: "m (Meters)" },
          { value: "cm", label: "cm (Centimeters)" },
          { value: "mm", label: "mm (Millimeters)" },
          { value: "in", label: "in (Inches)" },
          { value: "ft", label: "ft (Feet)" }
        ]
      },
      {
        id: "viscosity",
        label: "Dynamic Viscosity (μ)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "Pa_s",
        unitOptions: [
          { value: "Pa_s", label: "Pa·s (Pascal-seconds / kg/(m·s))" },
          { value: "cP", label: "cP (Centipoise)" },
          { value: "lb_ft_s", label: "lb/(ft·s) (Pounds per foot-second)" }
        ]
      }
    ]
  };