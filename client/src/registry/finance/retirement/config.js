export const config = {
    id: 'retirement',
    name: 'Retirement Planning Calculator',
    description: 'Calculate your required retirement corpus based on your life expectancy, inflation, and exact monthly SIP needed to reach your goal.',
    category: 'finance',
    
    // High-Intent SEO Metadata
    seoTitle: 'Advanced Retirement Calculator 2026 | Corpus, SIP & Life Expectancy',
    seoDescription: 'Plan your retirement accurately. Factor in life expectancy, inflation, and expected returns to calculate your exact retirement corpus and required monthly SIP.',
    seoKeywords: 'retirement calculator with life expectancy, retirement planning calculator, retirement corpus formula, monthly sip for retirement, inflation adjusted retirement calculator',
    
    inputs: [
      { id: 'currentAge', label: 'Current Age', min: 18, max: 60, step: 1, defaultValue: 30, suffix: ' Yr' },
      { id: 'retirementAge', label: 'Target Retirement Age', min: 40, max: 70, step: 1, defaultValue: 60, suffix: ' Yr' },
      { id: 'lifeExpectancy', label: 'Life Expectancy', min: 70, max: 100, step: 1, defaultValue: 85, suffix: ' Yr' },
      { id: 'monthlyExpenses', label: 'Current Monthly Expenses', min: 10000, max: 1000000, step: 5000, defaultValue: 50000, prefix: '₹' },
      { id: 'inflationRate', label: 'Expected Inflation', min: 1, max: 12, step: 0.5, defaultValue: 6, suffix: '%' },
      { id: 'expectedReturn', label: 'Expected Return (Pre-Retirement)', min: 5, max: 20, step: 0.5, defaultValue: 12, suffix: '%' }
    ]
  };