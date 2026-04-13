export const config = {
    id: 'ideal-weight',
    name: 'Ideal Weight Calculator',
    description: 'Calculate your ideal body weight (IBW) based on your height and gender using four medically recognized formulas and the healthy BMI range.',
    category: 'health',
    seoTitle: 'Ideal Weight Calculator | Find Your Healthy Target Weight',
    seoDescription: 'Use our highly accurate Ideal Body Weight (IBW) calculator to find your perfect weight range using the Devine, Robinson, Miller, and Hamwi medical formulas.',
    
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
      }
    ]
  };