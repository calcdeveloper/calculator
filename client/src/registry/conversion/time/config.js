export const config = {
    id: 'time-converter',
    name: 'Time Converter',
    description: 'Convert between milliseconds, seconds, minutes, hours, days, weeks, months, and years.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Time to Convert',
        type: 'number',
        defaultValue: 1
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'ms', label: 'Milliseconds (ms)' },
          { value: 's', label: 'Seconds (s)' },
          { value: 'min', label: 'Minutes (min)' },
          { value: 'hr', label: 'Hours (hr)' },
          { value: 'd', label: 'Days (d)' },
          { value: 'wk', label: 'Weeks (wk)' },
          { value: 'mo', label: 'Months (mo)' },
          { value: 'yr', label: 'Years (yr)' },
          { value: 'dec', label: 'Decades' },
          { value: 'cen', label: 'Centuries' }
        ],
        defaultValue: 'hr'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'ms', label: 'Milliseconds (ms)' },
          { value: 's', label: 'Seconds (s)' },
          { value: 'min', label: 'Minutes (min)' },
          { value: 'hr', label: 'Hours (hr)' },
          { value: 'd', label: 'Days (d)' },
          { value: 'wk', label: 'Weeks (wk)' },
          { value: 'mo', label: 'Months (mo)' },
          { value: 'yr', label: 'Years (yr)' },
          { value: 'dec', label: 'Decades' },
          { value: 'cen', label: 'Centuries' }
        ],
        defaultValue: 'min'
      }
    ]
  };