export function calculateLogic(inputs) {
    const gender = inputs.gender;
    const age = parseFloat(inputs.age) || 0;
    const weight = parseFloat(inputs.weight) || 0;
    const heightFeet = parseFloat(inputs.height_feet) || 0;
    const heightInches = parseFloat(inputs.height_inches) || 0;
    const activityMultiplier = parseFloat(inputs.activity_level) || 1.2;
  
    if (age <= 0 || weight <= 0 || (heightFeet <= 0 && heightInches <= 0)) {
      return { summary: [] };
    }
  
    // 1. Convert Height to Centimeters
    const totalHeightInches = (heightFeet * 12) + heightInches;
    const heightCm = totalHeightInches * 2.54;
  
    // 2. Calculate BMR (Basal Metabolic Rate) using the Mifflin-St Jeor equation
    let bmr = 0;
    if (gender === "male") {
      bmr = (10 * weight) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
      bmr = (10 * weight) + (6.25 * heightCm) - (5 * age) - 161;
    }
  
    // 3. Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activityMultiplier;
  
    // 4. Calculate Goal-Based Calorie Targets
    // A standard healthy deficit for fat loss is 500 calories/day (approx 0.5kg loss per week)
    const fatLossCalories = tdee - 500;
    // A standard healthy surplus for muscle gain is 300 calories/day
    const muscleGainCalories = tdee + 300;
  
    // Formatting helper
    const formatCal = (val) => `${Math.round(val).toLocaleString('en-IN')} kcal / day`;
  
    return {
      summary: [
        {
          label: "Maintenance Calories (TDEE)",
          value: formatCal(tdee),
          isHighlight: true
        },
        {
          label: "Basal Metabolic Rate (BMR)",
          value: formatCal(bmr),
          isHighlight: false
        },
        {
          label: "Target for Fat Loss (-500 kcal)",
          value: formatCal(fatLossCalories),
          isHighlight: true
        },
        {
          label: "Target for Muscle Gain (+300 kcal)",
          value: formatCal(muscleGainCalories),
          isHighlight: false
        }
      ]
    };
  }