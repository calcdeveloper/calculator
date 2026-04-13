export const config = {
    id: 'area-converter',
    name: 'Area Converter',
    description: 'Convert between metric and imperial area measurements, including acres and hectares.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Area to Convert',
        type: 'number',
        defaultValue: 1000
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'sqmm', label: 'Square Millimeters (mm²)' },
          { value: 'sqcm', label: 'Square Centimeters (cm²)' },
          { value: 'sqm', label: 'Square Meters (m²)' },
          { value: 'ha', label: 'Hectares (ha)' },
          { value: 'sqkm', label: 'Square Kilometers (km²)' },
          { value: 'sqin', label: 'Square Inches (sq in)' },
          { value: 'sqft', label: 'Square Feet (sq ft)' },
          { value: 'sqyd', label: 'Square Yards (sq yd)' },
          { value: 'ac', label: 'Acres (ac)' },
          { value: 'sqmi', label: 'Square Miles (sq mi)' }
        ],
        defaultValue: 'sqft'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'sqmm', label: 'Square Millimeters (mm²)' },
          { value: 'sqcm', label: 'Square Centimeters (cm²)' },
          { value: 'sqm', label: 'Square Meters (m²)' },
          { value: 'ha', label: 'Hectares (ha)' },
          { value: 'sqkm', label: 'Square Kilometers (km²)' },
          { value: 'sqin', label: 'Square Inches (sq in)' },
          { value: 'sqft', label: 'Square Feet (sq ft)' },
          { value: 'sqyd', label: 'Square Yards (sq yd)' },
          { value: 'ac', label: 'Acres (ac)' },
          { value: 'sqmi', label: 'Square Miles (sq mi)' }
        ],
        defaultValue: 'sqm'
      }
    ]
  };