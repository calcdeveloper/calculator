export const config = {
    id: 'fraction-decimal-converter',
    name: 'Fraction & Decimal Converter',
    description: 'Easily convert fractions to decimals, or turn decimals into simplified fractions.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Value (e.g., "3/4" or "0.75")',
        type: 'text',
        defaultValue: '3/4'
      },
      {
        id: 'conversionMode',
        label: 'Conversion Direction',
        type: 'select',
        options: [
          { value: 'frac2dec', label: 'Fraction to Decimal' },
          { value: 'dec2frac', label: 'Decimal to Fraction' }
        ],
        defaultValue: 'frac2dec'
      }
    ]
  };