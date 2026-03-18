export const calculateLogic = (inputs) => {
    const { unitSystem, gender, age, heightCm, heightFt, heightIn, weight, activityLevel } = inputs;
  
    // 1. Unify to Metric for the formula
    let finalHeightCm = 0;
    let weightKg = weight;
  
    if (unitSystem === 'standard') {
      const totalInches = (heightFt * 12) + heightIn;
      finalHeightCm = totalInches * 2.54; 
      weightKg = weight * 0.453592; 
    } else {
      finalHeightCm = heightCm;
    }
  
    // 2. Mifflin-St Jeor BMR Equation
    let bmr = (10 * weightKg) + (6.25 * finalHeightCm) - (5 * age);
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
    bmr = Math.round(bmr);
  
    // 3. TDEE (Maintenance Calories)
    const tdee = Math.round(bmr * activityLevel);
  
    // 4. Macro Calculation (Moderate baseline: 50% Carbs, 30% Protein, 20% Fat)
    // Carbs/Protein are 4 calories per gram. Fat is 9 calories per gram.
    const carbsCals = tdee * 0.50;
    const proteinCals = tdee * 0.30;
    const fatCals = tdee * 0.20;
  
    return {
      summary: [
        { label: 'Resting Calories (BMR)', value: `${bmr} kcal`, isCurrency: false },
        { label: 'Daily Maintenance (TDEE)', value: `${tdee} kcal`, isCurrency: false, isHighlight: true },
        { label: 'For Mild Weight Loss', value: `${tdee - 250} kcal`, isCurrency: false },
        { label: 'For Mild Weight Gain', value: `${tdee + 250} kcal`, isCurrency: false }
      ],
      // The pie chart will automatically grab this and show a beautiful macro breakdown!
      chartData: [
        { name: `Carbs (${Math.round(carbsCals / 4)}g)`, value: carbsCals },
        { name: `Protein (${Math.round(proteinCals / 4)}g)`, value: proteinCals },
        { name: `Fat (${Math.round(fatCals / 9)}g)`, value: fatCals }
      ],
      schedule: null, 
      referenceTable: {
        headers: ["Activity Level", "Daily Calories Burned"],
        rows: [
          ["Basal Metabolic Rate (BMR)", `${bmr} kcal`],
          ["Sedentary", `${Math.round(bmr * 1.2)} kcal`],
          ["Lightly Active", `${Math.round(bmr * 1.375)} kcal`],
          ["Moderately Active", `${Math.round(bmr * 1.55)} kcal`],
          ["Very / Extra Active", `${Math.round(bmr * 1.725)} kcal`]
        ]
      }
    };
  };