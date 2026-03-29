export const config = {
    id: 'grocery-price-calculator',
    name: 'Grocery Price Calculator',
    description: 'Calculate the exact grocery cost based on weight, or find out how much weight you receive for a specific budget.',
    category: 'calculators',
    inputs: [
      {
        id: 'costPerKg',
        label: 'Cost of 1 kg (₹)',
        type: 'number',
        defaultValue: 1000
      },
      {
        id: 'purchaseMode',
        label: 'Purchase mode',
        type: 'select',
        options: [
          { value: 'weight_g', label: 'Purchase according to weight (in Grams)' },
          { value: 'weight_kg', label: 'Purchase according to weight (in Kg)' },
          { value: 'budget', label: 'Purchase according to budget (in ₹)' }
        ],
        defaultValue: 'weight_g'
      },
      {
        id: 'targetValue',
        label: 'Enter value',
        type: 'number',
        defaultValue: 700
      }
    ]
  };