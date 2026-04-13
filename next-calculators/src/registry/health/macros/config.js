export const config = {
    id: 'macros',
    name: 'Macronutrient (Macros) Calculator',
    description: 'Calculate your optimal daily protein, carbohydrates, and fat intake based on your body type, fitness goals, and preferred diet.',
    category: 'health',
    seoTitle: 'Macros Calculator | Find Your Ideal Protein, Carbs & Fat',
    seoDescription: 'Use our free Macro Calculator to find the perfect macro split for weight loss, muscle gain, or maintenance. Supports Keto, Low Carb, and High Protein diets.',
    
    inputs: [
      {
        id: 'gender',
        label: 'Gender',
        type: 'radio',
        defaultValue: 'male',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' }
        ]
      },
      { 
        id: 'age', 
        label: 'Age', 
        min: 15, max: 100, step: 1, defaultValue: 30 
      },
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
        label: 'Weight', 
        min: 30, max: 200, step: 1, defaultValue: 70,
        dynamicProps: (inputs) => ({
          suffix: inputs.weightUnit === 'lbs' ? ' lbs' : ' kg',
          max: inputs.weightUnit === 'lbs' ? 440 : 200,
          defaultValue: inputs.weightUnit === 'lbs' ? 154 : 70
        })
      },
      {
        id: 'heightUnit',
        label: 'Height Unit',
        type: 'radio',
        defaultValue: 'cm',
        options: [
          { label: 'Centimeters (cm)', value: 'cm' },
          { label: 'Inches (in)', value: 'in' }
        ]
      },
      { 
        id: 'height', 
        label: 'Height', 
        min: 100, max: 250, step: 1, defaultValue: 170,
        dynamicProps: (inputs) => ({
          suffix: inputs.heightUnit === 'in' ? ' in' : ' cm',
          max: inputs.heightUnit === 'in' ? 100 : 250,
          defaultValue: inputs.heightUnit === 'in' ? 67 : 170
        })
      },
      { 
        id: 'activity', 
        label: 'Activity Level', 
        type: 'select', 
        defaultValue: '1.375',
        options: [
          { label: 'Sedentary (Office job, little/no exercise)', value: '1.2' },
          { label: 'Lightly Active (Exercise 1-3 days/week)', value: '1.375' },
          { label: 'Moderately Active (Exercise 3-5 days/week)', value: '1.55' },
          { label: 'Very Active (Hard exercise 6-7 days/week)', value: '1.725' },
          { label: 'Extra Active (Physical job + hard training)', value: '1.9' }
        ]
      },
      { 
        id: 'goal', 
        label: 'Your Primary Goal', 
        type: 'select', 
        defaultValue: 'maintain',
        options: [
          { label: 'Lose Weight (-20% Calories)', value: 'lose' },
          { label: 'Maintain Weight', value: 'maintain' },
          { label: 'Build Muscle (+20% Calories)', value: 'gain' }
        ]
      },
      { 
        id: 'diet', 
        label: 'Preferred Diet Type', 
        type: 'select', 
        defaultValue: 'standard',
        options: [
          { label: 'Standard Balanced (30%P / 35%F / 35%C)', value: 'standard' },
          { label: 'High Protein (40%P / 30%F / 30%C)', value: 'high_protein' },
          { label: 'Low Carb (40%P / 40%F / 20%C)', value: 'low_carb' },
          { label: 'Keto (20%P / 75%F / 5%C)', value: 'keto' }
        ]
      }
    ]
  };