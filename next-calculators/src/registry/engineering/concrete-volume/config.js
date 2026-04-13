export const config = {
    id: "concrete-volume-calculator",
    name: "Concrete Volume Calculator",
    description: "Calculate the exact volume of concrete needed for slabs, patios, footings, or columns. Instantly outputs cubic yards and cubic meters.",
    category: "construction",
    inputs: [
      {
        id: "shapeType",
        label: "Project Shape",
        type: "select",
        defaultValue: "rectangular",
        options: [
          { value: "rectangular", label: "Rectangular (Slab, Square Footing, Patio)" },
          { value: "circular", label: "Circular (Column, Round Footing, Sonotube)" }
        ]
      },
      {
        id: "length",
        label: "Length (L)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "ft",
        unitOptions: [
          { value: "m", label: "m (Meters)" },
          { value: "ft", label: "ft (Feet)" },
          { value: "in", label: "in (Inches)" },
          { value: "cm", label: "cm (Centimeters)" }
        ]
      },
      {
        id: "width",
        label: "Width (W)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "ft",
        unitOptions: [
          { value: "m", label: "m (Meters)" },
          { value: "ft", label: "ft (Feet)" },
          { value: "in", label: "in (Inches)" },
          { value: "cm", label: "cm (Centimeters)" }
        ]
      },
      {
        id: "diameter",
        label: "Diameter (Dia)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "ft",
        unitOptions: [
          { value: "m", label: "m (Meters)" },
          { value: "ft", label: "ft (Feet)" },
          { value: "in", label: "in (Inches)" },
          { value: "cm", label: "cm (Centimeters)" }
        ]
      },
      {
        id: "depth",
        label: "Depth / Thickness (D)",
        type: "number",
        defaultValue: 0,
        min: 0,
        defaultUnit: "in",
        unitOptions: [
          { value: "in", label: "in (Inches)" },
          { value: "ft", label: "ft (Feet)" },
          { value: "m", label: "m (Meters)" },
          { value: "cm", label: "cm (Centimeters)" }
        ]
      },
      {
        id: "quantity",
        label: "Quantity (How many?)",
        type: "number",
        defaultValue: 1,
        min: 1,
        defaultUnit: "qty",
        unitOptions: [
          { value: "qty", label: "Items" }
        ]
      }
    ]
  };