export const config = {
  id: 'time-duration-calculator',
  name: 'Time Duration Calculator',
  description: 'Calculate the total duration between two times down to the exact hour and minute.',
  category: 'everyday',
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
    {
      id: 'startTime',
      label: 'Start Time',
      type: 'time',
      // CRITICAL: Must be zero-padded (08, not 8) and 24-hour format
      defaultValue: '08:30' 
    },
    {
      id: 'endTime',
      label: 'End Time',
      type: 'time',
      // CRITICAL: Must be zero-padded and 24-hour format
      defaultValue: '17:30' 
    }
  ]
};