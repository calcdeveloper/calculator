export const config = {
    id: 'digital-storage-converter',
    name: 'Digital Storage & Data Converter',
    description: 'Convert digital data sizes between Bits, Bytes, Kilobytes, Megabytes, Gigabytes, and Terabytes.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Data Size',
        type: 'number',
        defaultValue: 1
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'bit', label: 'Bits (b)' },
          { value: 'B', label: 'Bytes (B)' },
          { value: 'KB', label: 'Kilobytes (KB)' },
          { value: 'MB', label: 'Megabytes (MB)' },
          { value: 'GB', label: 'Gigabytes (GB)' },
          { value: 'TB', label: 'Terabytes (TB)' },
          { value: 'PB', label: 'Petabytes (PB)' }
        ],
        defaultValue: 'GB'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'bit', label: 'Bits (b)' },
          { value: 'B', label: 'Bytes (B)' },
          { value: 'KB', label: 'Kilobytes (KB)' },
          { value: 'MB', label: 'Megabytes (MB)' },
          { value: 'GB', label: 'Gigabytes (GB)' },
          { value: 'TB', label: 'Terabytes (TB)' },
          { value: 'PB', label: 'Petabytes (PB)' }
        ],
        defaultValue: 'MB'
      }
    ]
  };