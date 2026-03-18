export const calculateLogic = (inputs) => {
    const { 
      unitSystem, gender, age, heightCm, heightFt, heightIn, weight, 
      neck, waist, hip, measurementMethod, manualBF,
      skinfoldChest, skinfoldAbdomen, skinfoldThigh, skinfoldTricep, skinfoldSuprailiac
    } = inputs;
  
    // 1. Metric Conversions
    let h_cm = heightCm;
    let w_kg = weight;
    let n_cm = neck;
    let wa_cm = waist;
    let hi_cm = hip;
  
    if (unitSystem === 'standard') {
      h_cm = ((heightFt * 12) + heightIn) * 2.54;
      w_kg = weight * 0.453592;
      n_cm = neck * 2.54;
      wa_cm = waist * 2.54;
      hi_cm = hip * 2.54;
    }
  
    let w_lbs = w_kg * 2.20462;
    let wa_in = wa_cm / 2.54;
    let h_m = h_cm / 100;
  
    let bfPercentage = 0;
  
    // 2. Select Formula Based on Method
    switch (measurementMethod) {
      case 'bmi_est':
        const bmi = w_kg / (h_m * h_m);
        const sexModifier = gender === 'male' ? 1 : 0;
        bfPercentage = (1.20 * bmi) + (0.23 * age) - (10.8 * sexModifier) - 5.4;
        break;
  
      case 'ymca':
        if (gender === 'male') {
          bfPercentage = ((-98.42 + (4.15 * wa_in) - (0.082 * w_lbs)) / w_lbs) * 100;
        } else {
          bfPercentage = ((-76.76 + (4.15 * wa_in) - (0.082 * w_lbs)) / w_lbs) * 100;
        }
        break;
  
      case 'jp3':
        let bodyDensity = 0;
        if (gender === 'male') {
          const sum = skinfoldChest + skinfoldAbdomen + skinfoldThigh;
          bodyDensity = 1.10938 - (0.0008267 * sum) + (0.0000016 * sum * sum) - (0.0002574 * age);
        } else {
          const sum = skinfoldTricep + skinfoldSuprailiac + skinfoldThigh;
          bodyDensity = 1.0994921 - (0.0009929 * sum) + (0.0000023 * sum * sum) - (0.0001392 * age);
        }
        bfPercentage = (495 / bodyDensity) - 450;
        break;
  
      case 'manual':
        bfPercentage = manualBF;
        break;
  
      case 'navy':
      default:
        let valMale = wa_cm - n_cm;
        let valFemale = wa_cm + hi_cm - n_cm;
        
        if (valMale <= 0) valMale = 1; 
        if (valFemale <= 0) valFemale = 1; 
  
        if (gender === 'male') {
          bfPercentage = 495 / (1.0324 - 0.19077 * Math.log10(valMale) + 0.15456 * Math.log10(h_cm)) - 450;
        } else {
          bfPercentage = 495 / (1.29579 - 0.35004 * Math.log10(valFemale) + 0.22100 * Math.log10(h_cm)) - 450;
        }
        break;
    }
  
    // 3. Boundary Limits
    bfPercentage = Math.max(2, Math.min(bfPercentage, 60));
    
    // 4. Calculate Mass
    const fatMassKg = w_kg * (bfPercentage / 100);
    const leanMassKg = w_kg - fatMassKg;
  
    const formatWeight = (kgVal) => {
      return unitSystem === 'standard' ? `${(kgVal * 2.20462).toFixed(1)} lbs` : `${kgVal.toFixed(1)} kg`;
    };
  
    // 5. ACE Health Categories
    let category = "";
    if (gender === 'male') {
      if (bfPercentage < 6) category = "Essential Fat";
      else if (bfPercentage < 14) category = "Athletes";
      else if (bfPercentage < 18) category = "Fitness";
      else if (bfPercentage < 25) category = "Acceptable";
      else category = "Obese";
    } else {
      if (bfPercentage < 14) category = "Essential Fat";
      else if (bfPercentage < 21) category = "Athletes";
      else if (bfPercentage < 25) category = "Fitness";
      else if (bfPercentage < 32) category = "Acceptable";
      else category = "Obese";
    }
  
    // Hide mass calculations for methods that don't collect weight
    const showMass = !['manual', 'jp3'].includes(measurementMethod);
  
    // 6. Generate Dynamic Table
    const tableRows = gender === 'male' 
      ? [
          ["Essential Fat", "2-5%"],
          ["Athletes", "6-13%"],
          ["Fitness", "14-17%"],
          ["Acceptable", "18-24%"],
          ["Obese", "25% and higher"]
        ]
      : [
          ["Essential Fat", "10-13%"],
          ["Athletes", "14-20%"],
          ["Fitness", "21-24%"],
          ["Acceptable", "25-31%"],
          ["Obese", "32% and higher"]
        ];
  
    return {
      summary: [
        { label: 'Body Fat Percentage', value: `${bfPercentage.toFixed(1)}%`, isHighlight: true, isCurrency: false },
        { label: 'Health Category', value: category, isCurrency: false },
        ...(showMass ? [{ label: 'Fat Mass', value: formatWeight(fatMassKg), isCurrency: false }] : []),
        ...(showMass ? [{ label: 'Lean Body Mass', value: formatWeight(leanMassKg), isCurrency: false }] : [])
      ],
      chartData: showMass ? [
        { name: 'Fat Mass', value: Number(fatMassKg.toFixed(1)) },
        { name: 'Lean Body Mass', value: Number(leanMassKg.toFixed(1)) }
      ] : [
        { name: 'Fat %', value: Number(bfPercentage.toFixed(1)) },
        { name: 'Lean %', value: Number((100 - bfPercentage).toFixed(1)) }
      ],
      schedule: null,
      referenceTable: {
        headers: ["Category", "Body Fat % Range"],
        rows: tableRows
      }
    };
  };