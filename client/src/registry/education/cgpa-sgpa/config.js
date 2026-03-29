export const config = {
    id: 'sgpa-to-cgpa-calculator',
    name: 'SGPA to CGPA Calculator',
    description: 'Calculate your Cumulative GPA (CGPA) by averaging your semester-wise SGPA scores.',
    category: 'education',
    inputs: [
      {
        id: 'numSemesters',
        label: 'Number of Semesters to Calculate',
        type: 'select',
        options: [
          { value: '2', label: '2 Semesters (1 Year)' },
          { value: '4', label: '4 Semesters (2 Years)' },
          { value: '6', label: '6 Semesters (3 Years)' },
          { value: '8', label: '8 Semesters (Full Degree)' }
        ],
        defaultValue: '2'
      },
      { id: 'sem1', label: 'Semester 1 SGPA', type: 'number', defaultValue: 8.0, min: 0, max: 10, step: 0.01 },
      { id: 'sem2', label: 'Semester 2 SGPA', type: 'number', defaultValue: 8.5, min: 0, max: 10, step: 0.01 },
      { 
        id: 'sem3', label: 'Semester 3 SGPA', type: 'number', defaultValue: 0, min: 0, max: 10, step: 0.01,
        condition: (inputs) => Number(inputs.numSemesters) >= 4 
      },
      { 
        id: 'sem4', label: 'Semester 4 SGPA', type: 'number', defaultValue: 0, min: 0, max: 10, step: 0.01,
        condition: (inputs) => Number(inputs.numSemesters) >= 4 
      },
      { 
        id: 'sem5', label: 'Semester 5 SGPA', type: 'number', defaultValue: 0, min: 0, max: 10, step: 0.01,
        condition: (inputs) => Number(inputs.numSemesters) >= 6 
      },
      { 
        id: 'sem6', label: 'Semester 6 SGPA', type: 'number', defaultValue: 0, min: 0, max: 10, step: 0.01,
        condition: (inputs) => Number(inputs.numSemesters) >= 6 
      },
      { 
        id: 'sem7', label: 'Semester 7 SGPA', type: 'number', defaultValue: 0, min: 0, max: 10, step: 0.01,
        condition: (inputs) => Number(inputs.numSemesters) >= 8 
      },
      { 
        id: 'sem8', label: 'Semester 8 SGPA', type: 'number', defaultValue: 0, min: 0, max: 10, step: 0.01,
        condition: (inputs) => Number(inputs.numSemesters) >= 8 
      }
    ]
  };