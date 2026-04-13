export const calculateLogic = (inputs) => {
    const { unitSystem, gender, age, heightCm, heightFt, heightIn, weight, activity } = inputs;
  
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
  
    // 2. Basal Metabolic Rate (BMR) - Validated Mifflin-St Jeor Equation
    let bmr = (10 * weightKg) + (6.25 * finalHeightCm) - (5 * age);
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
  
    // 3. Total Daily Energy Expenditure (TDEE)
    const activityMultiplier = parseFloat(activity) || 1.2;
    const tdee = bmr * activityMultiplier;
  
    // 4. Calorie Goals
    const maintain = Math.round(tdee);
    const mildWeightLoss = Math.round(tdee - 250); // ~0.25kg loss/week
    const weightLoss = Math.round(tdee - 500);     // ~0.5kg loss/week
    const weightGain = Math.round(tdee + 500);     // ~0.5kg gain/week
  
    return {
      summary: [
        { label: 'Maintenance (TDEE)', value: `${maintain} kcal`, isCurrency: false, isHighlight: true },
        { label: 'Weight Loss (-0.5kg/wk)', value: `${weightLoss} kcal`, isCurrency: false },
        { label: 'Mild Weight Loss', value: `${mildWeightLoss} kcal`, isCurrency: false },
        { label: 'Weight Gain (+0.5kg/wk)', value: `${weightGain} kcal`, isCurrency: false }
      ],
      chartData: [
        { name: 'Weight Loss', value: weightLoss },
        { name: 'Maintain Weight', value: maintain },
        { name: 'Weight Gain', value: weightGain }
      ],
      schedule: [], 
      referenceTable: {
        headers: ["Activity Level", "Description"],
        rows: [
          ["Sedentary", "Desk job, little to no exercise (x1.2)"],
          ["Lightly Active", "Light exercise 1-3 days/week (x1.375)"],
          ["Moderately Active", "Moderate exercise 3-5 days/week (x1.55)"],
          ["Very Active", "Heavy exercise 6-7 days/week (x1.725)"],
          ["Extra Active", "Physical job or intense training 2x/day (x1.9)"]
        ]
      }
    };
  };