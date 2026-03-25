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
    { name: 'Body Fat Precentage Calculator', path: '/calculator/health/body-fat', category: 'health' },
    { name: 'Calorie Calculator', path: '/calculator/health/calorie', category: 'health' },
    { name: 'Pregnancy Calculator', path: '/calculator/health/pregnancy', category: 'health' },
    { name: 'Macro Calculator', path: '/calculator/health/macros', category: 'health' },
    { name: 'Water Intake Calculator', path: '/calculator/health/water-intake', category: 'health' },
    { name: 'Ideal Weight Calculator', path: '/calculator/health/ideal-weight', category: 'health' },

    //Math Calculators
    { name: 'Percentage Calculator', path: '/calculator/math/percentage', category: 'math' },
    { name: 'Fraction Calculator', path: '/calculator/math/fraction', category: 'math' },
    { name: 'Scientific Calculator', path: '/calculator/math/scientific', category: 'math' },
    { name: 'LCM Calculator', path: '/calculator/math/lcm', category: 'math' },
    { name: 'Standard Deviation Calculator', path: '/calculator/math/standard-deviation', category: 'math' },
    { name: 'Quadratic Formula Calculator', path: '/calculator/math/quadratic', category: 'math' },
    { name: 'Mean Median Mode Calculator', path: '/calculator/math/mean-median-mode', category: 'math' }, 
    { name: 'Area & Perimeter Calculator', path: '/calculator/math/area-perimeter', category: 'math' },
    { name: 'Volume & Surface Area Calculator', path: '/calculator/math/volume-surface-area', category: 'math' },
    { name: 'Pythagorean Theorem Calculator', path: '/calculator/math/pythagorean', category: 'math' },
    { name: 'Log Calculator (Logarithm) Calculator', path: '/calculator/math/logarithm', category: 'math' },
    { name: 'Exponent Calculator', path: '/calculator/math/exponent', category: 'math' },
    { name: 'Matrix Calculator', path: '/calculator/math/matrix', category: 'math' },
    { name: 'Probability Calculator', path: '/calculator/math/probability', category: 'math' },
    { name: 'Percentage Increase & Decrease Calculator', path: '/calculator/math/percentage-inc-dec', category: 'math' },
    { name: 'Ratio Calculator', path: '/calculator/math/ratio', category: 'math' },
    { name: 'Proportion Calculator', path: '/calculator/math/proportion', category: 'math' },
    { name: 'Profit, Loss & Discount Calculator', path: '/calculator/math/profitloss', category: 'math' },
    { name: 'Algebra Calculator', path: '/calculator/math/algebra', category: 'math' }, 
    { name: 'Permutation and Combination Calculator', path: '/calculator/math/permutation-combination', category: 'math' },
    { name: 'Average Calculator', path: '/calculator/math/average', category: 'math' }, 


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