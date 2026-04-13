export const config = {
    id: 'calories-burned',
    name: 'Calories Burned Calculator',
    description: 'Calculate exactly how many calories you burn during exercise and daily activities based on your body weight and workout duration.',
    category: 'health',
    seoTitle: 'Calories Burned Calculator | Track Exercise Calories',
    seoDescription: 'Use our free Calories Burned Calculator to find out how many calories you burn walking, running, cycling, lifting weights, and more.',
    
    inputs: [
      { 
        id: 'activity', 
        label: 'Activity Type', 
        type: 'select', 
        defaultValue: 'walking_brisk',
        options: [
          { label: 'Walking (Brisk, 3.5 mph)', value: 'walking_brisk' },
          { label: 'Running (Jogging, 6 mph)', value: 'running_jog' },
          { label: 'Cycling (Moderate, 12-14 mph)', value: 'cycling_mod' },
          { label: 'Swimming (Freestyle, Moderate)', value: 'swimming' },
          { label: 'Weightlifting (General)', value: 'weightlifting' },
          { label: 'Yoga (Hatha)', value: 'yoga' },
          { label: 'HIIT (High Intensity Interval)', value: 'hiit' },
          { label: 'Tennis (Singles)', value: 'tennis' },
          { label: 'Basketball (Game)', value: 'basketball' },
          { label: 'Sitting / Resting', value: 'sitting' }
        ]
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
        label: 'Your Body Weight', 
        min: 30, max: 200, step: 1, defaultValue: 70,
        dynamicProps: (inputs) => ({
          suffix: inputs.weightUnit === 'lbs' ? ' lbs' : ' kg',
          max: inputs.weightUnit === 'lbs' ? 440 : 200,
          defaultValue: inputs.weightUnit === 'lbs' ? 154 : 70
        })
      },
      { 
        id: 'duration', 
        label: 'Duration', 
        min: 5, max: 240, step: 5, defaultValue: 30, suffix: ' Min' 
      }
    ]
  };