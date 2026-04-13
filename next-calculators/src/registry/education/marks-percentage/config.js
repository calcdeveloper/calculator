export const config = {
    id: "marks-percentage",
    name: "Marks Percentage Calculator",
    description: "Calculate your exam marks percentage, grade, and visualize your performance instantly.",
    category: "education",
    seoTitle: "Marks Percentage Calculator | Calculate Exam Percentage",
    seoDescription: "Free online marks percentage calculator. Easily calculate your exam percentage, determine your grade, and learn formulas to convert CGPA to percentage.",
    seoKeywords: "marks percentage calculator, how to calculate percentage of marks, exam percentage calculator, grade calculator, marks to percentage formula",
    inputs: [
      {
        id: "obtainedMarks",
        label: "Marks Obtained",
        type: "number",
        min: 0,
        defaultValue: 425,
        placeholder: "e.g., 425",
      },
      {
        id: "totalMarks",
        label: "Total Marks Maximum",
        type: "number",
        min: 1,
        defaultValue: 500,
        placeholder: "e.g., 500",
      },
    ],
  };