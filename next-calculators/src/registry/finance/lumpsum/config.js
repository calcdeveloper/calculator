export const config = {
    id: 'lumpsum',
    name: 'Lumpsum Calculator',
    description: 'Calculate the future value of your one-time Mutual Fund investment with the power of compounding.',
    category: 'finance',
    
    // High-Intent SEO Metadata
    seoTitle: 'Mutual Fund Lumpsum Calculator | One Time Investment Returns',
    seoDescription: 'Accurately calculate your Mutual Fund lumpsum returns. See how your one-time investment grows over time with our year-by-year compounding schedule.',
    seoKeywords: 'lumpsum calculator, mutual fund lumpsum calculator, one time investment calculator, lumpsum return calculator, lumpsum investment, compounding calculator',
    
    inputs: [
      { id: 'investmentAmount', label: 'Total Investment', min: 5000, max: 10000000, step: 5000, defaultValue: 100000, prefix: '₹' },
      { id: 'expectedReturn', label: 'Expected Return Rate (p.a)', min: 1, max: 30, step: 0.1, defaultValue: 12, suffix: '%' },
      { id: 'timePeriod', label: 'Time Period', min: 1, max: 40, step: 1, defaultValue: 10, suffix: ' Yr' }
    ]
  };