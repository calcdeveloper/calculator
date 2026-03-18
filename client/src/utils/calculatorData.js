// This acts as our temporary database for search and counts
export const calculators = [
    { name: 'SIP Calculator', path: '/calculator/finance/sip', category: 'finance' },
    { name: 'EMI Calculator', path: '/calculator/finance/emi', category: 'finance' },
    { name: 'FD Calculator', path: '/calculator/finance/fd', category: 'finance' },
    { name: 'Home Loan Calculator', path: '/calculator/finance/home-loan', category: 'finance' },
    { name: 'Personal Loan Calculator', path: '/calculator/finance/personal-loan', category: 'finance' },
    { name: 'RD Calculator', path: '/calculator/finance/rd', category: 'finance' },
    { name: 'Lumpsum Calculator', path: '/calculator/finance/lumpsum', category: 'finance' },
    { name: 'PPF Calculator', path: '/calculator/finance/ppf', category: 'finance' },
    { name: 'GST Calculator', path: '/calculator/finance/gst', category: 'finance' },
    { name: 'Simple Interest Calculator', path: '/calculator/finance/simple-interest', category: 'finance' },
    { name: 'Compound Interest Calculator', path: '/calculator/finance/compound-interest', category: 'finance' },
    { name: 'Retirement Planning Calculator', path: '/calculator/finance/retirement', category: 'finance' },
    { name: 'Gratuity Calculator', path: '/calculator/finance/gratuity', category: 'finance' },
    { name: 'Car Loan Calculator', path: '/calculator/finance/car-loan', category: 'finance' },

    //Health Calculators
    { name: 'BMI Calculator', path: '/calculator/health/bmi', category: 'health' },
    { name: 'BMR Calculator', path: '/calculator/health/bmr', category: 'health' },
    { name: 'Calorie Calculator', path: '/calculator/health/calorie', category: 'health' },
    { name: 'Body Fat Precentage Calculator', path: '/calculator/health/body-fat', category: 'health' },
    
    
    
    { name: 'Percentage Calculator', path: '/calculator/math/percentage', category: 'math' },
    { name: 'Scientific Calculator', path: '/calculator/math/scientific', category: 'math' },
    { name: 'Age Calculator', path: '/calculator/utility/age', category: 'utility' },
    { name: 'Unit Converter', path: '/calculator/conversion/unit', category: 'conversion' },
    { name: 'Currency Converter', path: '/calculator/conversion/currency', category: 'conversion' },
    { name: 'CGPA Calculator', path: '/calculator/education/cgpa', category: 'education' },
    { name: 'Margin Calculator', path: '/calculator/business/margin', category: 'business' },
    { name: 'Ohm Law Calculator', path: '/calculator/engineering/ohm', category: 'engineering' },
  ];
  
  export const getCategoryCount = (categoryId) => {
    return calculators.filter(calc => calc.category === categoryId).length;
  };