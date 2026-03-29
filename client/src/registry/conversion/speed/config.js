export const config = {
    id: 'speed-converter',
    name: 'Speed & Velocity Converter',
    description: 'Convert speed and velocity between mph, km/h, knots, meters per second, and Mach.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Speed',
        type: 'number',
        defaultValue: 60
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'mph', label: 'Miles per Hour (mph)' },
          { value: 'kmh', label: 'Kilometers per Hour (km/h)' },
          { value: 'ms', label: 'Meters per Second (m/s)' },
          { value: 'fts', label: 'Feet per Second (ft/s)' },
          { value: 'knot', label: 'Knots (kn)' },
          { value: 'mach', label: 'Mach (Speed of Sound)' }
        ],
        defaultValue: 'mph'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'mph', label: 'Miles per Hour (mph)' },
          { value: 'kmh', label: 'Kilometers per Hour (km/h)' },
          { value: 'ms', label: 'Meters per Second (m/s)' },
          { value: 'fts', label: 'Feet per Second (ft/s)' },
          { value: 'knot', label: 'Knots (kn)' },
          { value: 'mach', label: 'Mach (Speed of Sound)' }
        ],
        defaultValue: 'kmh'
      }
    ]
  };