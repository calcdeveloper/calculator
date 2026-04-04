export const config = {
    id: "plywood-sunmica-calculator",
    name: "Plywood & Sunmica (Laminate) Calculator",
    description: "Calculate how many standard 8x4 ft sheets of plywood and laminates are needed for your wardrobes, beds, or paneling.",
    category: "construction",
    inputs: [
      {
        id: "project_type",
        label: "Project / Furniture Type",
        type: "select",
        options: [
          { value: "wardrobe", label: "Wardrobe / Cupboard (Box + Doors + Shelves)" },
          { value: "kitchen", label: "Modular Kitchen Cabinets" },
          { value: "bed", label: "Double Bed with Storage" },
          { value: "paneling", label: "Flat Wall Paneling / Surface" }
        ],
        defaultValue: "wardrobe"
      },
      {
        id: "length",
        label: "Front Length / Width (Feet)",
        type: "number",
        placeholder: "e.g., 7",
        defaultValue: "7"
      },
      {
        id: "height",
        label: "Height / Depth (Feet)",
        type: "number",
        placeholder: "e.g., 10",
        defaultValue: "10"
      },
      {
        id: "wastage",
        label: "Cutting Wastage Factor",
        type: "select",
        options: [
          { value: "10", label: "10% (Standard cuts)" },
          { value: "15", label: "15% (Many drawers or complex design)" },
          { value: "20", label: "20% (High wastage / Match-grain laminate)" }
        ],
        defaultValue: "15"
      }
    ]
  };