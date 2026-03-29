export const config = {
    id: 'discount-tax-calculator',
    name: 'Discount & Sales Tax Calculator',
    description: 'Calculate the final price of an item after applying store discounts and adding sales tax (like GST or VAT).',
    category: 'calculators',
    inputs: [
      {
        id: 'originalPrice',
        label: 'Original Price',
        type: 'number',
        defaultValue: 2500
      },
      {
        id: 'discountPercent',
        label: 'Discount (%)',
        type: 'number',
        defaultValue: 15
      },
      {
        id: 'taxPercent',
        label: 'Sales Tax / GST (%)',
        type: 'number',
        defaultValue: 18
      }
    ]
  };