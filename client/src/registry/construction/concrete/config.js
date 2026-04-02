export const config = {
    id: "concrete-calculator",
    title: "Concrete Calculator",
    description: "Calculate the volume of concrete needed for your project and estimate the number of premixed bags required.",
    fields: [
      {
        name: "shape",
        label: "Project Shape",
        type: "select",
        options: [
          { value: "slab", label: "Slab / Square / Rectangle" },
          { value: "column", label: "Column / Cylinder / Hole" }
        ],
        defaultValue: "slab"
      },
      {
        name: "length",
        label: "Length (feet)",
        type: "number",
        placeholder: "e.g., 10",
        condition: (inputs) => inputs.shape === "slab"
      },
      {
        name: "width",
        label: "Width (feet)",
        type: "number",
        placeholder: "e.g., 10",
        condition: (inputs) => inputs.shape === "slab"
      },
      {
        name: "depth",
        label: "Thickness / Depth (inches)",
        type: "number",
        placeholder: "e.g., 4",
        condition: (inputs) => inputs.shape === "slab"
      },
      {
        name: "diameter",
        label: "Diameter (inches)",
        type: "number",
        placeholder: "e.g., 12",
        condition: (inputs) => inputs.shape === "column"
      },
      {
        name: "height",
        label: "Height / Depth (feet)",
        type: "number",
        placeholder: "e.g., 4",
        condition: (inputs) => inputs.shape === "column"
      },
      {
        name: "quantity",
        label: "Quantity",
        type: "number",
        defaultValue: 1,
        placeholder: "e.g., 1"
      }
    ]
  };