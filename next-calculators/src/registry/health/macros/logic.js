export const calculateLogic = (inputs) => {
    const { gender, age, weightUnit, weight, heightUnit, height, activity, goal, diet } = inputs;
  
    // 1. Standardize Inputs to Metric (kg and cm)
    const weightKg = weightUnit === 'lbs' ? Number(weight) * 0.453592 : Number(weight);
    const heightCm = heightUnit === 'in' ? Number(height) * 2.54 : Number(height);
    const ageNum = Number(age);
  
    // 2. Calculate BMR (Mifflin-St Jeor Equation)
    let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * ageNum);
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
  
    // 3. Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * Number(activity);
  
    // 4. Adjust Calories Based on Goal
    let targetCalories = tdee;
    if (goal === 'lose') {
      targetCalories = tdee * 0.80; // 20% deficit
    } else if (goal === 'gain') {
      targetCalories = tdee * 1.20; // 20% surplus
    }
  
    // 5. Determine Macro Percentages based on Diet Type
    let pPct = 0.30, fPct = 0.35, cPct = 0.35; // Standard Default
    
    if (diet === 'high_protein') { pPct = 0.40; fPct = 0.30; cPct = 0.30; }
    else if (diet === 'low_carb') { pPct = 0.40; fPct = 0.40; cPct = 0.20; }
    else if (diet === 'keto') { pPct = 0.20; fPct = 0.75; cPct = 0.05; }
  
    // 6. Calculate Grams (Protein=4 cals/g, Carbs=4 cals/g, Fat=9 cals/g)
    const proteinCals = targetCalories * pPct;
    const fatCals = targetCalories * fPct;
    const carbCals = targetCalories * cPct;
  
    const proteinGrams = Math.round(proteinCals / 4);
    const fatGrams = Math.round(fatCals / 9);
    const carbGrams = Math.round(carbCals / 4);
  
    // 7. Format Outputs
    const chartData = [
      { name: `Protein (${Math.round(pPct*100)}%)`, value: proteinGrams },
      { name: `Carbs (${Math.round(cPct*100)}%)`, value: carbGrams },
      { name: `Fat (${Math.round(fPct*100)}%)`, value: fatGrams }
    ];
  
    return {
      summary: [
        { label: 'Daily Calorie Target', value: Math.round(targetCalories), isCurrency: false, isHighlight: true },
        { label: 'Protein (g)', value: proteinGrams, isCurrency: false },
        { label: 'Carbohydrates (g)', value: carbGrams, isCurrency: false },
        { label: 'Fats (g)', value: fatGrams, isCurrency: false }
      ],
      chartData: chartData,
      schedule: [], 
      referenceTable: {
        headers: ["Macronutrient", "Calories per Gram", "Primary Function"],
        rows: [
          ["Protein", "4 Calories", "Builds and repairs muscle tissue, supports immune health."],
          ["Carbohydrates", "4 Calories", "Your body's preferred and most efficient energy source."],
          ["Fats", "9 Calories", "Essential for hormone regulation, brain health, and nutrient absorption."]
        ]
      }
    };
  };