export const config = {
    id: 'pressure-converter',
    name: 'Pressure Converter',
    description: 'Convert pressure values between Pascals, PSI, Atmospheres, Bars, and Torr.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Pressure Value',
        type: 'number',
        defaultValue: 1
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'Pa', label: 'Pascal (Pa)' },
          { value: 'kPa', label: 'Kilopascal (kPa)' },
          { value: 'MPa', label: 'Megapascal (MPa)' },
          { value: 'psi', label: 'Pounds per square inch (psi)' },
          { value: 'atm', label: 'Atmosphere (atm)' },
          { value: 'bar', label: 'Bar (bar)' },
          { value: 'torr', label: 'Torr / mmHg (Torr)' }
        ],
        defaultValue: 'atm'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'Pa', label: 'Pascal (Pa)' },
          { value: 'kPa', label: 'Kilopascal (kPa)' },
          { value: 'MPa', label: 'Megapascal (MPa)' },
          { value: 'psi', label: 'Pounds per square inch (psi)' },
          { value: 'atm', label: 'Atmosphere (atm)' },
          { value: 'bar', label: 'Bar (bar)' },
          { value: 'torr', label: 'Torr / mmHg (Torr)' }
        ],
        defaultValue: 'psi'
      }
    ]
  };