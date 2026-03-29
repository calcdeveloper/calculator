export const config = {
    id: 'roman-numeral-converter',
    name: 'Roman Numeral Converter',
    description: 'Convert standard numbers to Roman numerals, or translate Roman numerals back into numbers.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Value to Convert',
        type: 'text',
        defaultValue: '2024'
      },
      {
        id: 'conversionMode',
        label: 'Conversion Direction',
        type: 'select',
        options: [
          { value: 'num2rom', label: 'Number to Roman Numeral' },
          { value: 'rom2num', label: 'Roman Numeral to Number' }
        ],
        defaultValue: 'num2rom'
      }
    ]
  };