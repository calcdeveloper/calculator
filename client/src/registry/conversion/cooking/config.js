export const config = {
    id: 'cooking-converter',
    name: 'Cooking Measurement Converter',
    description: 'Convert recipe measurements between cups, tablespoons, teaspoons, milliliters, and fluid ounces.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Amount',
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
          { value: 'tsp', label: 'Teaspoons (tsp)' },
          { value: 'tbsp', label: 'Tablespoons (tbsp)' },
          { value: 'floz', label: 'Fluid Ounces (fl oz)' },
          { value: 'cup', label: 'Cups (cup)' },
          { value: 'pt', label: 'Pints (pt)' },
          { value: 'qt', label: 'Quarts (qt)' }
        ],
        defaultValue: 'cup'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'ml', label: 'Milliliters (ml)' },
          { value: 'l', label: 'Liters (L)' },
          { value: 'tsp', label: 'Teaspoons (tsp)' },
          { value: 'tbsp', label: 'Tablespoons (tbsp)' },
          { value: 'floz', label: 'Fluid Ounces (fl oz)' },
          { value: 'cup', label: 'Cups (cup)' },
          { value: 'pt', label: 'Pints (pt)' },
          { value: 'qt', label: 'Quarts (qt)' }
        ],
        defaultValue: 'tbsp'
      }
    ]
  };