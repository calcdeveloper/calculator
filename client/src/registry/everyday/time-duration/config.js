export const config = {
    id: 'time-calculator',
    name: 'Time Calculator',
    description: 'Calculate the total duration between two times down to the second.',
    category: 'calculators',
    inputs: [
      {
        id: 'calcMode',
        label: 'What do you want to calculate?',
        type: 'select',
        options: [
          { value: 'duration', label: 'Duration between two times' }
        ],
        defaultValue: 'duration'
      },
      // Grouping the Start Time inputs together
      {
        id: 'startGroup',
        label: 'Start Time',
        type: 'group', // Tells your UI to render these side-by-side
        fields: [
          { id: 'startHour', placeholder: 'Hour', type: 'number', defaultValue: 8 },
          { id: 'startMin', placeholder: 'Minute', type: 'number', defaultValue: 30 },
          { id: 'startSec', placeholder: 'Second', type: 'number', defaultValue: 0 },
          { 
            id: 'startAmPm', 
            type: 'select', 
            options: [{ value: 'AM', label: 'AM' }, { value: 'PM', label: 'PM' }], 
            defaultValue: 'AM' 
          }
        ]
      },
      // Grouping the End Time inputs together
      {
        id: 'endGroup',
        label: 'End Time',
        type: 'group', // Tells your UI to render these side-by-side
        fields: [
          { id: 'endHour', placeholder: 'Hour', type: 'number', defaultValue: 5 },
          { id: 'endMin', placeholder: 'Minute', type: 'number', defaultValue: 30 },
          { id: 'endSec', placeholder: 'Second', type: 'number', defaultValue: 0 },
          { 
            id: 'endAmPm', 
            type: 'select', 
            options: [{ value: 'AM', label: 'AM' }, { value: 'PM', label: 'PM' }], 
            defaultValue: 'PM' 
          }
        ]
      }
    ]
  };