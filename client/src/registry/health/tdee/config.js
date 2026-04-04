export const config = {
    id: "tdee-calculator",
    name: "TDEE (Total Daily Energy Expenditure) Calculator",
    description: "Calculate your maintenance calories and find out exactly how much you need to eat to lose fat or build muscle.",
    category: "health",
    inputs: [
      {
        id: "gender",
        label: "Biological Gender",
        type: "select",
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" }
        ],
        defaultValue: "male"
      },
      {
        id: "age",
        label: "Age (Years)",
        type: "number",
        placeholder: "e.g., 28",
        defaultValue: "28"
      },
      {
        id: "weight",
        label: "Weight (kg)",
        type: "number",
        placeholder: "e.g., 75",
        defaultValue: "75"
      },
      {
        id: "height_feet",
        label: "Height (Feet)",
        type: "number",
        placeholder: "e.g., 5",
        defaultValue: "5"
      },
      {
        id: "height_inches",
        label: "Height (Inches)",
        type: "number",
        placeholder: "e.g., 9",
        defaultValue: "9"
      },
      {
        id: "activity_level",
        label: "Activity Level",
        type: "select",
        options: [
          { value: "1.2", label: "Sedentary (Desk job, little to no exercise)" },
          { value: "1.375", label: "Lightly Active (Light exercise 1-3 days/week)" },
          { value: "1.55", label: "Moderately Active (Moderate exercise 3-5 days/week)" },
          { value: "1.725", label: "Very Active (Heavy exercise 6-7 days/week)" },
          { value: "1.9", label: "Extra Active (Physical job + heavy training)" }
        ],
        defaultValue: "1.2"
      }
    ]
  };