export const config = {
    id: 'typing-speed-calculator',
    name: 'Typing Speed Calculator (WPM)',
    description: 'Calculate your Gross WPM, Net WPM, and Accuracy percentage based on standardized typing test rules.',
    category: 'education',
    inputs: [
      {
        id: 'totalCharacters',
        label: 'Total Keystrokes (Characters Typed)',
        type: 'number',
        defaultValue: 1500,
        min: 1,
        max: 10000,
        step: 1
      },
      {
        id: 'uncorrectedErrors',
        label: 'Number of Errors (Incorrect Words)',
        type: 'number',
        defaultValue: 5,
        min: 0,
        max: 500,
        step: 1
      },
      {
        id: 'timeMinutes',
        label: 'Time Taken (in Minutes)',
        type: 'number',
        defaultValue: 10,
        min: 1,
        max: 60,
        step: 1
      }
    ]
  };