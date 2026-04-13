export const config = {
    id: 'simple-interest',
    name: 'Simple Interest Calculator',
    description: 'Calculate the simple interest on your loans or investments quickly. View the total interest and final amount with a year-by-year breakdown.',
    category: 'finance',
    
    // High-Intent SEO Metadata
    seoTitle: 'Simple Interest Calculator Online | SI Formula & Schedule',
    seoDescription: 'Calculate Simple Interest (SI) accurately with our free online calculator. See the total interest, final maturity amount, and the exact formula used.',
    seoKeywords: 'simple interest calculator, si calculator, simple interest formula, calculate simple interest online, simple interest vs compound interest, personal loan interest calculator',
    
    inputs: [
      { id: 'principal', label: 'Principal Amount', min: 1000, max: 10000000, step: 1000, defaultValue: 100000, prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (p.a)', min: 1, max: 30, step: 0.1, defaultValue: 10, suffix: '%' },
      { id: 'time', label: 'Time Period', min: 1, max: 30, step: 1, defaultValue: 5, suffix: ' Yr' }
    ]
  };