export const config = {
    id: 'water-intake',
    name: 'Water Intake Calculator',
    description: 'Calculate your exact daily water needs based on your body weight, exercise habits, climate, and specific health conditions.',
    category: 'health',
    seoTitle: 'Daily Water Intake Calculator | How Much Water Should I Drink?',
    seoDescription: 'Use our free Water Intake Calculator to find out exactly how many cups, ounces, and liters of water you should drink daily based on your weight and activity.',
    
    inputs: [
      {
        id: 'weightUnit',
        label: 'Weight Unit',
        type: 'radio',
        defaultValue: 'kg',
        options: [
          { label: 'Kilograms (kg)', value: 'kg' },
          { label: 'Pounds (lbs)', value: 'lbs' }
        ]
      },
      { 
        id: 'weight', 
        label: 'Body Weight', 
        min: 30, max: 200, step: 1, defaultValue: 70,
        dynamicProps: (inputs) => ({
          suffix: inputs.weightUnit === 'lbs' ? ' lbs' : ' kg',
          max: inputs.weightUnit === 'lbs' ? 440 : 200,
          defaultValue: inputs.weightUnit === 'lbs' ? 154 : 70
        })
      },
      { 
        id: 'exercise', 
        label: 'Daily Exercise Duration', 
        min: 0, max: 240, step: 15, defaultValue: 30, suffix: ' Min' 
      },
      { 
        id: 'climate', 
        label: 'Local Climate', 
        type: 'select', 
        defaultValue: 'temperate',
        options: [
          { label: 'Temperate / Normal', value: 'temperate' },
          { label: 'Hot / Dry', value: 'hot' },
          { label: 'Hot & Humid', value: 'humid' },
          { label: 'High Altitude (> 8,000 ft)', value: 'altitude' }
        ]
      },
      { 
        id: 'condition', 
        label: 'Special Conditions', 
        type: 'select', 
        defaultValue: 'none',
        options: [
          { label: 'None', value: 'none' },
          { label: 'Pregnant', value: 'pregnant' },
          { label: 'Breastfeeding', value: 'breastfeeding' },
          { label: 'Sick (Fever / Cold)', value: 'sick' }
        ]
      }
    ]
  };