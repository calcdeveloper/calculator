export const config = {
    id: 'fuel-cost-mileage-calculator',
    name: 'Fuel Cost & Mileage Calculator',
    description: 'Calculate your total trip cost based on mileage, or find out your vehicle\'s exact fuel efficiency (km/l).',
    category: 'calculators',
    inputs: [
      {
        id: 'calcMode',
        label: 'What do you want to calculate?',
        type: 'select',
        options: [
          { value: 'trip_cost', label: 'Calculate Trip Cost & Fuel Needed' },
          { value: 'mileage', label: 'Calculate Vehicle Mileage (km/l)' }
        ],
        defaultValue: 'trip_cost'
      },
      {
        id: 'distance',
        label: 'Total Distance (km)',
        type: 'number',
        defaultValue: 150
      },
      {
        id: 'fuelPrice',
        label: 'Fuel Price (₹ per Litre)',
        type: 'number',
        defaultValue: 96.72
      },
      {
        id: 'mileage',
        label: 'Vehicle Mileage (km/l)',
        type: 'number',
        defaultValue: 18,
        // This tells your UI to ONLY show this field if 'trip_cost' is selected
        condition: (inputs) => inputs.calcMode === 'trip_cost' 
      },
      {
        id: 'fuelConsumed',
        label: 'Fuel Consumed (Litres)',
        type: 'number',
        defaultValue: 8.5,
        // This tells your UI to ONLY show this field if 'mileage' is selected
        condition: (inputs) => inputs.calcMode === 'mileage' 
      }
    ]
  };