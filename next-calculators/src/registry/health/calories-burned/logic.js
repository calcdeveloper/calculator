export const calculateLogic = (inputs) => {
    const { activity, weightUnit, weight, duration } = inputs;
  
    // Dictionary of MET (Metabolic Equivalent of Task) values
    const MET_VALUES = {
      walking_brisk: 4.3,
      running_jog: 9.8,
      cycling_mod: 8.0,
      swimming: 8.3,
      weightlifting: 3.5,
      yoga: 2.5,
      hiit: 8.0,
      tennis: 7.3,
      basketball: 8.0,
      sitting: 1.0 
    };
  
    const currentMet = MET_VALUES[activity] || 1.0;
    
    // Convert weight to kg for the clinical formula
    const weightInKg = weightUnit === 'lbs' ? Number(weight) * 0.453592 : Number(weight);
    const timeInMins = Number(duration);
  
    // Standard MET Formula: Calories = (MET * 3.5 * weight in kg / 200) * time in minutes
    const totalCalories = (currentMet * 3.5 * weightInKg / 200) * timeInMins;
    
    // Resting Calories for the same duration (MET = 1.0)
    const restingCalories = (1.0 * 3.5 * weightInKg / 200) * timeInMins;
    
    // Active Calories (Calories burned *above* your baseline resting rate)
    const activeCalories = Math.max(0, totalCalories - restingCalories);
  
    // Metrics for summary
    const caloriesPerHour = (totalCalories / timeInMins) * 60;
    const caloriesPerMinute = totalCalories / timeInMins;
  
    // Chart Logic: Breaking down the total burn into Active vs Resting
    const chartData = [
      { name: 'Active Burn (Cals)', value: Number(activeCalories.toFixed(0)) },
      { name: 'Resting Burn (Cals)', value: Number(restingCalories.toFixed(0)) }
    ];
  
    return {
      summary: [
        { label: 'Total Calories Burned', value: totalCalories.toFixed(0), isCurrency: false, isHighlight: true },
        { label: 'Calories Per Hour', value: caloriesPerHour.toFixed(0), isCurrency: false },
        { label: 'Calories Per Minute', value: caloriesPerMinute.toFixed(1), isCurrency: false },
        { label: 'MET Value Used', value: currentMet.toFixed(1), isCurrency: false }
      ],
      chartData: chartData,
      schedule: [], 
      referenceTable: {
        headers: ["Activity Intensity", "MET Range"],
        rows: [
          ["Light Intensity", "< 3.0 METs", "Sitting, slow walking, light yoga"],
          ["Moderate Intensity", "3.0 - 6.0 METs", "Brisk walking, weightlifting, light cycling"],
          ["Vigorous Intensity", "> 6.0 METs", "Running, HIIT, competitive sports, swimming"]
        ]
      }
    };
  };