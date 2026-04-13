export const config = {
    id: 'volume-converter',
    name: 'Volume & Capacity Converter',
    description: 'Convert between metric and imperial/US units of volume and liquid capacity.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Volume to Convert',
        type: 'number',
        defaultValue: 1
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'ml', label: 'Milliliters (ml)' },
          { value: 'l', label: 'Liters (L)' },
          { value: 'm3', label: 'Cubic Meters (m³)' },
          { value: 'tsp', label: 'US Teaspoons (tsp)' },
          { value: 'tbsp', label: 'US Tablespoons (tbsp)' },
          { value: 'floz', label: 'US Fluid Ounces (fl oz)' },
          { value: 'cup', label: 'US Cups (cup)' },
          { value: 'pt', label: 'US Pints (pt)' },
          { value: 'qt', label: 'US Quarts (qt)' },
          { value: 'gal', label: 'US Gallons (gal)' },
          { value: 'ukgal', label: 'Imperial Gallons (UK gal)' }
        ],
        defaultValue: 'gal'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'ml', label: 'Milliliters (ml)' },
          { value: 'l', label: 'Liters (L)' },
          { value: 'm3', label: 'Cubic Meters (m³)' },
          { value: 'tsp', label: 'US Teaspoons (tsp)' },
          { value: 'tbsp', label: 'US Tablespoons (tbsp)' },
          { value: 'floz', label: 'US Fluid Ounces (fl oz)' },
          { value: 'cup', label: 'US Cups (cup)' },
          { value: 'pt', label: 'US Pints (pt)' },
          { value: 'qt', label: 'US Quarts (qt)' },
          { value: 'gal', label: 'US Gallons (gal)' },
          { value: 'ukgal', label: 'Imperial Gallons (UK gal)' }
        ],
        defaultValue: 'l'
      }
    ]
  };