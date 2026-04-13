export const config = {
    id: 'car-loan',
    name: 'Car Loan EMI Calculator',
    description: 'Calculate your monthly car loan EMI, total interest, and the true cost of your vehicle after factoring in your down payment.',
    category: 'finance',
    
    // High-Intent SEO Metadata
    seoTitle: 'Car Loan EMI Calculator | Auto Loan Formula & Schedule',
    seoDescription: 'Calculate your car loan EMI instantly. Factor in your down payment, interest rate, and tenure to see your exact monthly payment and true vehicle cost.',
    seoKeywords: 'car loan calculator, auto loan emi calculator, car loan formula, car finance calculator, vehicle loan calculator, true cost of car',
    
    inputs: [
      { id: 'carPrice', label: 'On-Road Car Price', min: 100000, max: 10000000, step: 10000, defaultValue: 1000000, prefix: '₹' },
      { id: 'downPayment', label: 'Down Payment', min: 0, max: 5000000, step: 10000, defaultValue: 200000, prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (p.a)', min: 5, max: 25, step: 0.1, defaultValue: 8.5, suffix: '%' },
      { id: 'tenure', label: 'Loan Tenure', min: 1, max: 8, step: 1, defaultValue: 5, suffix: ' Yr' }
    ]
  };