export const config = {
    id: 'attendance-calculator',
    name: 'Attendance Calculator',
    description: 'Calculate your current attendance percentage and find out how many classes you can miss or need to attend to meet your target.',
    category: 'education',
    inputs: [
      {
        id: 'attendedClasses',
        label: 'Total Classes Attended',
        type: 'number',
        defaultValue: 30,
        min: 0
      },
      {
        id: 'totalClasses',
        label: 'Total Classes Conducted',
        type: 'number',
        defaultValue: 45,
        min: 1
      },
      {
        id: 'targetPercentage',
        label: 'Target Attendance (%)',
        type: 'number',
        defaultValue: 75,
        min: 1,
        max: 100,
        step: 1
      }
    ]
  };