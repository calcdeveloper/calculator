export const config = {
    id: "staircase-step-calculator",
    name: "Staircase Step & Concrete Calculator",
    description: "Calculate the exact number of steps (risers and treads) and estimate the RCC concrete volume required for your staircase.",
    category: "construction",
    inputs: [
      {
        id: "height_feet",
        label: "Floor-to-Floor Height (Feet)",
        type: "number",
        placeholder: "e.g., 10",
        defaultValue: "10"
      },
      {
        id: "height_inches",
        label: "Additional Height (Inches)",
        type: "number",
        placeholder: "e.g., 6",
        defaultValue: "0"
      },
      {
        id: "target_riser",
        label: "Target Riser Height (Inches)",
        type: "select",
        options: [
          { value: "6", label: "6 Inches (Ideal for Residential)" },
          { value: "7", label: "7 Inches (Standard Commercial)" },
          { value: "5.5", label: "5.5 Inches (Easy Climb / Elderly)" }
        ],
        defaultValue: "6"
      },
      {
        id: "tread_length",
        label: "Tread Length / Depth (Inches)",
        type: "select",
        options: [
          { value: "10", label: "10 Inches (Standard Residential)" },
          { value: "11", label: "11 Inches (Comfortable)" },
          { value: "12", label: "12 Inches (Wide Commercial)" }
        ],
        defaultValue: "10"
      },
      {
        id: "stair_width",
        label: "Width of Staircase (Feet)",
        type: "number",
        placeholder: "e.g., 3",
        defaultValue: "3"
      },
      {
        id: "waist_slab",
        label: "Waist Slab Thickness (Inches)",
        type: "select",
        options: [
          { value: "5", label: "5 Inches (Standard RCC)" },
          { value: "6", label: "6 Inches (Heavy Duty RCC)" }
        ],
        defaultValue: "5"
      }
    ]
  };