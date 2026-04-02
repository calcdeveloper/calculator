export const config = {
    id: "time-work",
    name: "Time & Work Calculator",
    description: "Calculate how long it takes for two people or machines to complete a task together.",
    category: "education",
    seoTitle: "Time and Work Calculator | Solve Work Problems Instantly",
    seoDescription: "Free online Time & Work calculator. Calculate how long it takes two people to finish a job working together. Includes LCM and Unitary method formulas with examples.",
    seoKeywords: "time and work calculator, working together calculator, aptitude time and work formula, LCM method for time and work, calculate time taken together",
    inputs: [
      {
        id: "timeA",
        label: "Time taken by Person A (alone)",
        type: "number",
        min: 0.1,
        defaultValue: 10,
        placeholder: "e.g., 10",
        helperText: "In days, hours, or minutes",
      },
      {
        id: "timeB",
        label: "Time taken by Person B (alone)",
        type: "number",
        min: 0.1,
        defaultValue: 15,
        placeholder: "e.g., 15",
        helperText: "Must be the same unit as Person A",
      },
    ],
  };