export const config = {
    id: 'bmr',
    name: 'BMR & Daily Calorie Calculator',
    description: 'Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) to find out exactly how many calories your body burns every day.',
    category: 'health',
    seoTitle: 'BMR & TDEE Calculator | Daily Calorie & Macro Needs',
    seoDescription: 'Free advanced BMR calculator. Accurately calculate your resting metabolic rate, total daily energy expenditure (TDEE), and daily macronutrient breakdown.',
    
    inputs: [
      { 
        id: 'unitSystem', 
        label: 'Measurement System', 
        type: 'radio', 
        defaultValue: 'metric', 
        options: [
          { label: 'Metric (cm / kg)', value: 'metric' },
          { label: 'US Standard (ft + in / lbs)', value: 'standard' }
        ],
        onChangeEffect: (newValue, oldInputs, newInputs) => {
          if (newValue === 'standard' && oldInputs.unitSystem === 'metric') {
            const cm = oldInputs.heightCm || 170;
            const totalInches = cm / 2.54;
            newInputs.heightFt = Math.floor(totalInches / 12);
            newInputs.heightIn = Math.round(totalInches % 12);
            newInputs.weight = Math.round((oldInputs.weight || 70) * 2.20462);
          } else if (newValue === 'metric' && oldInputs.unitSystem === 'standard') {
            const ft = oldInputs.heightFt || 5;
            const inc = oldInputs.heightIn || 7;
            const totalInches = (ft * 12) + inc;
            newInputs.heightCm = Math.round(totalInches * 2.54);
            newInputs.weight = Math.round((oldInputs.weight || 154) / 2.20462); 
          }
          return newInputs;
        }
      },
      { 
        id: 'gender', 
        label: 'Gender', 
        type: 'radio', 
        defaultValue: 'male', 
        options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }] 
      },
      { id: 'age', label: 'Age', min: 15, max: 100, step: 1, defaultValue: 30, suffix: ' Yr' },
      { 
        id: 'heightCm', label: 'Height (cm)', min: 100, max: 250, step: 1, defaultValue: 170, suffix: ' cm',
        hidden: (inputs) => inputs.unitSystem === 'standard'
      },
      { 
        id: 'heightFt', label: 'Height (Feet)', min: 3, max: 8, step: 1, defaultValue: 5, suffix: ' ft',
        hidden: (inputs) => inputs.unitSystem === 'metric'
      },
      { 
        id: 'heightIn', label: 'Height (Inches)', min: 0, max: 11, step: 1, defaultValue: 7, suffix: ' in',
        hidden: (inputs) => inputs.unitSystem === 'metric'
      },
      { 
        id: 'weight', defaultValue: 70, step: 1,
        dynamicProps: (inputs) => inputs.unitSystem === 'standard' 
          ? { label: 'Weight (lbs)', min: 40, max: 400, suffix: ' lbs' }
          : { label: 'Weight (kg)', min: 20, max: 200, suffix: ' kg' }
      },
      {
        id: 'activityLevel',
        label: 'Activity Level',
        type: 'select',
        defaultValue: 1.2,
        options: [
          { label: 'Sedentary (Office job, little to no exercise)', value: 1.2 },
          { label: 'Lightly Active (Light exercise 1-3 days/week)', value: 1.375 },
          { label: 'Moderately Active (Moderate exercise 3-5 days/week)', value: 1.55 },
          { label: 'Very Active (Heavy exercise 6-7 days/week)', value: 1.725 },
          { label: 'Extra Active (Physical job or training 2x/day)', value: 1.9 }
        ]
      }
    ]
  };