export const calculateLogic = (inputs) => {
    const { weightUnit, weight, exercise, climate, condition } = inputs;
  
    // 1. Convert weight to pounds for the standard medical baseline formula
    const weightLbs = weightUnit === 'kg' ? Number(weight) * 2.20462 : Number(weight);
    const exerciseMins = Number(exercise);
  
    // 2. Base Hydration: 0.5 oz of water per pound of body weight
    let baseOunces = weightLbs * 0.5;
  
    // 3. Exercise Hydration: Add 12 oz for every 30 minutes of exercise
    let exerciseOunces = (exerciseMins / 30) * 12;
  
    // 4. Climate Adjustments: Add extra fluid for sweat evaporation/respiration
    let climateOunces = 0;
    if (climate === 'hot') climateOunces = 16; // Extra 16 oz for hot weather
    else if (climate === 'humid') climateOunces = 20; // Extra 20 oz for humidity
    else if (climate === 'altitude') climateOunces = 16; // Extra 16 oz for high altitude
  
    // 5. Condition Adjustments (Based on IOM guidelines)
    let conditionOunces = 0;
    if (condition === 'pregnant') conditionOunces = 10;
    else if (condition === 'breastfeeding') conditionOunces = 24;
    else if (condition === 'sick') conditionOunces = 16;
  
    // 6. Calculate Totals
    const totalOunces = baseOunces + exerciseOunces + climateOunces + conditionOunces;
    
    // Conversions
    const totalLiters = totalOunces * 0.0295735;
    const totalCups = totalOunces / 8;
  
    // 7. Chart Data (Visualizing where the water needs are coming from)
    const chartData = [
      { name: 'Baseline Needs', value: Number(baseOunces.toFixed(0)) }
    ];
    
    if (exerciseOunces > 0) {
      chartData.push({ name: 'Exercise Needs', value: Number(exerciseOunces.toFixed(0)) });
    }
    if (climateOunces > 0 || conditionOunces > 0) {
      chartData.push({ name: 'Environmental / Health Needs', value: Number((climateOunces + conditionOunces).toFixed(0)) });
    }
  
    return {
      summary: [
        { label: 'Daily Target (Liters)', value: `${totalLiters.toFixed(1)} L`, isCurrency: false, isHighlight: true },
        { label: 'Daily Target (Ounces)', value: `${totalOunces.toFixed(0)} oz`, isCurrency: false },
        { label: 'Daily Target (Cups)', value: `${totalCups.toFixed(1)} cups`, isCurrency: false }
      ],
      chartData: chartData,
      schedule: [], 
      referenceTable: {
        headers: ["Dehydration Stage", "Common Symptoms", "Action Required"],
        rows: [
          ["Mild (1-2% fluid loss)", "Thirst, dry mouth, dark yellow urine", "Drink a glass of water immediately."],
          ["Moderate (3-5% fluid loss)", "Headache, dizziness, muscle cramps, fatigue", "Drink water with electrolytes. Rest in a cool place."],
          ["Severe (> 6% fluid loss)", "Confusion, rapid heartbeat, extreme thirst, fainting", "Seek medical attention immediately."]
        ]
      }
    };
  };