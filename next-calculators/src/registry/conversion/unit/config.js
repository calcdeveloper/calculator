export const config = {
    id: 'length-converter',
    name: 'Length & Distance Converter',
    description: 'Convert between metric and imperial units of length and distance.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Value to Convert',
        type: 'number',
        defaultValue: 1
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'm', label: 'Meters (m)' },
          { value: 'km', label: 'Kilometers (km)' },
          { value: 'cm', label: 'Centimeters (cm)' },
          { value: 'mm', label: 'Millimeters (mm)' },
          { value: 'um', label: 'Micrometers (µm)' },
          { value: 'nm', label: 'Nanometers (nm)' },
          { value: 'mi', label: 'Miles (mi)' },
          { value: 'yd', label: 'Yards (yd)' },
          { value: 'ft', label: 'Feet (ft)' },
          { value: 'in', label: 'Inches (in)' },
          { value: 'nmi', label: 'Nautical Miles (nmi)' }
        ],
        defaultValue: 'mi'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'm', label: 'Meters (m)' },
          { value: 'km', label: 'Kilometers (km)' },
          { value: 'cm', label: 'Centimeters (cm)' },
          { value: 'mm', label: 'Millimeters (mm)' },
          { value: 'um', label: 'Micrometers (µm)' },
          { value: 'nm', label: 'Nanometers (nm)' },
          { value: 'mi', label: 'Miles (mi)' },
          { value: 'yd', label: 'Yards (yd)' },
          { value: 'ft', label: 'Feet (ft)' },
          { value: 'in', label: 'Inches (in)' },
          { value: 'nmi', label: 'Nautical Miles (nmi)' }
        ],
        defaultValue: 'km'
      }
    ]
  };