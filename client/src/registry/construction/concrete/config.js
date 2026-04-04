export const config = {
  id: "concrete-calculator",
  name: "Concrete Calculator",
  description: "Calculate concrete volume for slabs, footings, columns, stairs, and more. Supports metric and imperial units.",
  category: "construction",
  inputs: [
    {
      id: "shape",
      label: "Project Shape",
      type: "select",
      options: [
        { value: "slab", label: "Slab / Square / Rectangle" },
        { value: "column", label: "Column / Cylinder / Hole" },
        { value: "stairs", label: "Stairs / Steps" },
        { value: "triangle", label: "Triangle Slab" }
      ],
      defaultValue: "slab"
    },
    {
      id: "unit",
      label: "Measurement Unit",
      type: "select",
      options: [
        { value: "feet", label: "Feet (ft)" },
        { value: "inch", label: "Inches (in)" },
        { value: "yard", label: "Yards (yd)" },
        { value: "meter", label: "Meters (m)" },
        { value: "cm", label: "Centimeters (cm)" }
      ],
      defaultValue: "feet"
    },
    // --- Slab Inputs ---
    {
      id: "length",
      label: "Length",
      type: "number",
      hidden: (inputs) => inputs.shape !== "slab",
      dynamicProps: (inputs) => ({ suffix: inputs.unit }),
      defaultValue: ""
    },
    {
      id: "width",
      label: "Width",
      type: "number",
      hidden: (inputs) => inputs.shape !== "slab" && inputs.shape !== "stairs",
      dynamicProps: (inputs) => ({ suffix: inputs.unit }),
      defaultValue: ""
    },
    {
      id: "depth",
      label: "Depth / Thickness",
      type: "number",
      hidden: (inputs) => inputs.shape !== "slab" && inputs.shape !== "triangle",
      dynamicProps: (inputs) => ({ suffix: inputs.unit }),
      defaultValue: ""
    },
    // --- Column Inputs ---
    {
      id: "diameter",
      label: "Diameter",
      type: "number",
      hidden: (inputs) => inputs.shape !== "column",
      dynamicProps: (inputs) => ({ suffix: inputs.unit }),
      defaultValue: ""
    },
    {
      id: "height",
      label: "Height / Depth",
      type: "number",
      hidden: (inputs) => inputs.shape !== "column",
      dynamicProps: (inputs) => ({ suffix: inputs.unit }),
      defaultValue: ""
    },
    // --- Stair Inputs ---
    {
      id: "tread",
      label: "Tread Depth (Run)",
      type: "number",
      hidden: (inputs) => inputs.shape !== "stairs",
      dynamicProps: (inputs) => ({ suffix: inputs.unit }),
      defaultValue: ""
    },
    {
      id: "riser",
      label: "Riser Height (Rise)",
      type: "number",
      hidden: (inputs) => inputs.shape !== "stairs",
      dynamicProps: (inputs) => ({ suffix: inputs.unit }),
      defaultValue: ""
    },
    {
      id: "steps",
      label: "Number of Steps",
      type: "number",
      hidden: (inputs) => inputs.shape !== "stairs",
      defaultValue: ""
    },
    // --- Triangle Inputs ---
    {
      id: "base",
      label: "Triangle Base",
      type: "number",
      hidden: (inputs) => inputs.shape !== "triangle",
      dynamicProps: (inputs) => ({ suffix: inputs.unit }),
      defaultValue: ""
    },
    {
      id: "tri_height",
      label: "Triangle Height",
      type: "number",
      hidden: (inputs) => inputs.shape !== "triangle",
      dynamicProps: (inputs) => ({ suffix: inputs.unit }),
      defaultValue: ""
    },
    // --- General Quantity ---
    {
      id: "quantity",
      label: "Quantity (How many?)",
      type: "number",
      defaultValue: 1
    }
  ]
};