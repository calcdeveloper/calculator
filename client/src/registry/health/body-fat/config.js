export const config = {
    id: 'body-fat',
    name: 'Advanced Body Fat Calculator',
    description: 'Calculate your body fat percentage, lean body mass, and fat mass using multiple highly accurate measurement methods.',
    category: 'health',
    seoTitle: 'Body Fat Calculator | U.S. Navy, YMCA & Skinfold Methods',
    seoDescription: 'Accurately calculate your body fat percentage using the U.S. Navy method, YMCA method, BMI estimate, or Skinfold calipers. Find your lean body mass.',
    
    inputs: [
      {
        id: 'measurementMethod',
        label: 'Select a Measurement Method',
        type: 'select',
        defaultValue: 'navy',
        options: [
          { label: 'U.S. Navy Method (Tape)', value: 'navy' },
          { label: 'Estimate from BMI (1)', value: 'bmi_est' },
          { label: 'YMCA / Covert Bailey (Waist & Weight)', value: 'ymca' },
          { label: 'Jackson-Pollock 3-site (Skinfold)', value: 'jp3' },
          { label: 'Manual Entry (enter BF%)', value: 'manual' }
        ]
      },
      { 
        id: 'unitSystem', 
        label: 'Measurement System', 
        type: 'radio', 
        defaultValue: 'metric', 
        options: [
          { label: 'Metric (cm / kg)', value: 'metric' },
          { label: 'US Standard (ft + in / lbs)', value: 'standard' }
        ],
        hidden: (inputs) => inputs.measurementMethod === 'manual',
        onChangeEffect: (newValue, oldInputs, newInputs) => {
          if (newValue === 'standard' && oldInputs.unitSystem === 'metric') {
            const cm = oldInputs.heightCm || 170;
            const totalInches = cm / 2.54;
            newInputs.heightFt = Math.floor(totalInches / 12);
            newInputs.heightIn = Math.round(totalInches % 12);
            newInputs.weight = Math.round((oldInputs.weight || 70) * 2.20462);
            newInputs.neck = Math.round((oldInputs.neck || 38) / 2.54);
            newInputs.waist = Math.round((oldInputs.waist || 85) / 2.54);
            newInputs.hip = Math.round((oldInputs.hip || 95) / 2.54);
          } else if (newValue === 'metric' && oldInputs.unitSystem === 'standard') {
            const ft = oldInputs.heightFt || 5;
            const inc = oldInputs.heightIn || 7;
            const totalInches = (ft * 12) + inc;
            newInputs.heightCm = Math.round(totalInches * 2.54);
            newInputs.weight = Math.round((oldInputs.weight || 154) / 2.20462); 
            newInputs.neck = Math.round((oldInputs.neck || 15) * 2.54);
            newInputs.waist = Math.round((oldInputs.waist || 34) * 2.54);
            newInputs.hip = Math.round((oldInputs.hip || 38) * 2.54);
          }
          return newInputs;
        }
      },
      { 
        id: 'gender', 
        label: 'Gender', 
        type: 'radio', 
        defaultValue: 'male', 
        options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }],
        hidden: (inputs) => inputs.measurementMethod === 'manual'
      },
      { 
        id: 'age', 
        label: 'Age', 
        min: 15, max: 100, step: 1, defaultValue: 30, suffix: ' Yr',
        // THE FIX: Hide Age for Navy, YMCA, and Manual methods
        hidden: (inputs) => !['bmi_est', 'jp3'].includes(inputs.measurementMethod)
      },
      { 
        id: 'heightCm', label: 'Height (cm)', min: 100, max: 250, step: 1, defaultValue: 170, suffix: ' cm',
        hidden: (inputs) => inputs.unitSystem === 'standard' || !['bmi_est', 'navy'].includes(inputs.measurementMethod)
      },
      { 
        id: 'heightFt', label: 'Height (Feet)', min: 3, max: 8, step: 1, defaultValue: 5, suffix: ' ft',
        hidden: (inputs) => inputs.unitSystem === 'metric' || !['bmi_est', 'navy'].includes(inputs.measurementMethod)
      },
      { 
        id: 'heightIn', label: 'Height (Inches)', min: 0, max: 11, step: 1, defaultValue: 7, suffix: ' in',
        hidden: (inputs) => inputs.unitSystem === 'metric' || !['bmi_est', 'navy'].includes(inputs.measurementMethod)
      },
      { 
        id: 'weight', defaultValue: 70, step: 1,
        // Hides weight for manual, jp3, AND navy methods
        hidden: (inputs) => ['manual', 'jp3', 'navy'].includes(inputs.measurementMethod),
        dynamicProps: (inputs) => inputs.unitSystem === 'standard' 
          ? { label: 'Weight (lbs)', min: 50, max: 400, suffix: ' lbs' }
          : { label: 'Weight (kg)', min: 20, max: 200, suffix: ' kg' }
      },
      { 
        id: 'neck', defaultValue: 38, step: 0.5,
        hidden: (inputs) => inputs.measurementMethod !== 'navy',
        dynamicProps: (inputs) => inputs.unitSystem === 'standard' 
          ? { label: 'Neck Circumference (in)', min: 10, max: 30, suffix: ' in' }
          : { label: 'Neck Circumference (cm)', min: 20, max: 80, suffix: ' cm' }
      },
      { 
        id: 'waist', defaultValue: 85, step: 0.5,
        hidden: (inputs) => !['navy', 'ymca'].includes(inputs.measurementMethod),
        dynamicProps: (inputs) => inputs.unitSystem === 'standard' 
          ? { label: 'Waist Circumference (in)', min: 20, max: 60, suffix: ' in' }
          : { label: 'Waist Circumference (cm)', min: 50, max: 150, suffix: ' cm' }
      },
      { 
        id: 'hip', defaultValue: 95, step: 0.5,
        hidden: (inputs) => inputs.gender === 'male' || inputs.measurementMethod !== 'navy',
        dynamicProps: (inputs) => inputs.unitSystem === 'standard' 
          ? { label: 'Hip Circumference (in)', min: 20, max: 70, suffix: ' in' }
          : { label: 'Hip Circumference (cm)', min: 50, max: 180, suffix: ' cm' }
      },
      { 
        id: 'skinfoldChest', label: 'Chest Skinfold (mm)', min: 1, max: 100, step: 1, defaultValue: 15, suffix: ' mm',
        hidden: (inputs) => inputs.measurementMethod !== 'jp3' || inputs.gender !== 'male'
      },
      { 
        id: 'skinfoldAbdomen', label: 'Abdomen Skinfold (mm)', min: 1, max: 100, step: 1, defaultValue: 20, suffix: ' mm',
        hidden: (inputs) => inputs.measurementMethod !== 'jp3' || inputs.gender !== 'male'
      },
      { 
        id: 'skinfoldTricep', label: 'Triceps Skinfold (mm)', min: 1, max: 100, step: 1, defaultValue: 18, suffix: ' mm',
        hidden: (inputs) => inputs.measurementMethod !== 'jp3' || inputs.gender !== 'female'
      },
      { 
        id: 'skinfoldSuprailiac', label: 'Suprailiac Skinfold (mm)', min: 1, max: 100, step: 1, defaultValue: 15, suffix: ' mm',
        hidden: (inputs) => inputs.measurementMethod !== 'jp3' || inputs.gender !== 'female'
      },
      { 
        id: 'skinfoldThigh', label: 'Thigh Skinfold (mm)', min: 1, max: 100, step: 1, defaultValue: 22, suffix: ' mm',
        hidden: (inputs) => inputs.measurementMethod !== 'jp3'
      },
      { 
        id: 'manualBF', label: 'Known Body Fat %', min: 1, max: 60, step: 0.1, defaultValue: 15, suffix: ' %',
        hidden: (inputs) => inputs.measurementMethod !== 'manual'
      }
    ]
  };