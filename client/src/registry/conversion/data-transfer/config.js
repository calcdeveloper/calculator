export const config = {
    id: 'data-transfer-converter',
    name: 'Data Transfer & Network Speed Converter',
    description: 'Convert network speeds and download rates between Mbps, MB/s, Gbps, and GB/s.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Transfer Speed',
        type: 'number',
        defaultValue: 100
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'bps', label: 'bits per second (bps)' },
          { value: 'Kbps', label: 'Kilobits per second (Kbps)' },
          { value: 'Mbps', label: 'Megabits per second (Mbps)' },
          { value: 'Gbps', label: 'Gigabits per second (Gbps)' },
          { value: 'Bps', label: 'Bytes per second (B/s)' },
          { value: 'KBps', label: 'Kilobytes per second (KB/s)' },
          { value: 'MBps', label: 'Megabytes per second (MB/s)' },
          { value: 'GBps', label: 'Gigabytes per second (GB/s)' }
        ],
        defaultValue: 'Mbps'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'bps', label: 'bits per second (bps)' },
          { value: 'Kbps', label: 'Kilobits per second (Kbps)' },
          { value: 'Mbps', label: 'Megabits per second (Mbps)' },
          { value: 'Gbps', label: 'Gigabits per second (Gbps)' },
          { value: 'Bps', label: 'Bytes per second (B/s)' },
          { value: 'KBps', label: 'Kilobytes per second (KB/s)' },
          { value: 'MBps', label: 'Megabytes per second (MB/s)' },
          { value: 'GBps', label: 'Gigabytes per second (GB/s)' }
        ],
        defaultValue: 'MBps'
      }
    ]
  };