export const calculateLogic = (inputs) => {
    const { unitSystem, gender, age, heightCm, heightFt, heightIn, weight } = inputs;
  
    let finalHeightCm = 0;
    let weightKg = weight;
  
    // 1. Unify all inputs into standard Metric format for pure math
    if (unitSystem === 'standard') {
      const totalInches = (heightFt * 12) + heightIn;
      finalHeightCm = totalInches * 2.54; 
      weightKg = weight * 0.453592; 
    } else {
      finalHeightCm = heightCm;
    }
  
    // 2. BMI Calculation
    const heightInMeters = finalHeightCm / 100;
    const bmi = weightKg / (heightInMeters * heightInMeters);
    const roundedBmi = Math.round(bmi * 10) / 10;
  
    // 3. BMI Category
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi >= 18.5 && bmi <= 24.9) category = 'Normal Weight';
    else if (bmi >= 25 && bmi <= 29.9) category = 'Overweight';
    else category = 'Obese';
  
    // 4. Ideal Weight Range
    const minIdealKg = 18.5 * (heightInMeters * heightInMeters);
    const maxIdealKg = 24.9 * (heightInMeters * heightInMeters);
    
    let idealWeightText = '';
    if (unitSystem === 'standard') {
      idealWeightText = `${Math.round(minIdealKg * 2.20462)} - ${Math.round(maxIdealKg * 2.20462)} lbs`;
    } else {
      idealWeightText = `${Math.round(minIdealKg)} - ${Math.round(maxIdealKg)} kg`;
    }
  
    // 5. Basal Metabolic Rate (BMR) - Validated Mifflin-St Jeor Equation
    // Math works the same for both, but the offset is +5 for Males and -161 for Females
    let bmr = (10 * weightKg) + (6.25 * finalHeightCm) - (5 * age);
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
  
    return {
      summary: [
        { label: 'Your BMI', value: roundedBmi, isCurrency: false, isHighlight: true },
        { label: 'Health Status', value: category, isCurrency: false },
        { label: 'Ideal Weight Range', value: idealWeightText, isCurrency: false },
        { label: 'Est. BMR (Calories/Day)', value: Math.round(bmr), isCurrency: false }
      ],
      chartData: [
        { name: 'Your BMI', value: roundedBmi },
        { name: 'Max Normal BMI', value: 24.9 }
      ],
      schedule: [], 
      referenceTable: {
        headers: ["BMI Category", "Standard Range"],
        rows: [
          ["Underweight", "Less than 18.5"],
          ["Normal Weight", "18.5 - 24.9"],
          ["Overweight", "25 - 29.9"],
          ["Obese", "30 or greater"]
        ]
      }
    };
  };