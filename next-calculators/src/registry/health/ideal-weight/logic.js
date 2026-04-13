export const calculateLogic = (inputs) => {
    const { gender, heightUnit, height } = inputs;
  
    // 1. Standardize Height to Inches (for IBW formulas) and Meters (for BMI formula)
    const heightInches = heightUnit === 'cm' ? Number(height) / 2.54 : Number(height);
    const heightMeters = heightUnit === 'cm' ? Number(height) / 100 : Number(height) * 0.0254;
    
    // Calculate inches over 5 feet (60 inches). Can be negative if shorter than 5ft.
    const inchesOver60 = heightInches - 60;
  
    // 2. Calculate the 4 recognized IBW Formulas (results in kg)
    let devine, robinson, miller, hamwi;
  
    if (gender === 'male') {
      devine = 50.0 + (2.3 * inchesOver60);
      robinson = 52.0 + (1.9 * inchesOver60);
      miller = 56.2 + (1.41 * inchesOver60);
      hamwi = 48.0 + (2.7 * inchesOver60);
    } else {
      devine = 45.5 + (2.3 * inchesOver60);
      robinson = 49.0 + (1.7 * inchesOver60);
      miller = 53.1 + (1.36 * inchesOver60);
      hamwi = 45.5 + (2.2 * inchesOver60);
    }
  
    // Ensure minimum weight floor for extreme edge cases (e.g., very short height)
    devine = Math.max(devine, 20);
    robinson = Math.max(robinson, 20);
    miller = Math.max(miller, 20);
    hamwi = Math.max(hamwi, 20);
  
    // Calculate Average IBW
    const averageIBW = (devine + robinson + miller + hamwi) / 4;
  
    // 3. Calculate Healthy BMI Weight Range (BMI 18.5 to 24.9)
    // Formula: Weight(kg) = BMI * Height(m)^2
    const minHealthyWeight = 18.5 * Math.pow(heightMeters, 2);
    const maxHealthyWeight = 24.9 * Math.pow(heightMeters, 2);
  
    // Helper to convert kg to formatted string (includes lbs)
    const formatWeight = (kg) => {
      const lbs = kg * 2.20462;
      return `${kg.toFixed(1)} kg (${lbs.toFixed(1)} lbs)`;
    };
  
    // 4. Set up Chart Data (Comparing the different formulas)
    const chartData = [
      { name: 'Devine Formula', value: Number(devine.toFixed(1)) },
      { name: 'Robinson Formula', value: Number(robinson.toFixed(1)) },
      { name: 'Miller Formula', value: Number(miller.toFixed(1)) },
      { name: 'Hamwi Formula', value: Number(hamwi.toFixed(1)) }
    ];
  
    return {
      summary: [
        { 
          label: 'Average Ideal Weight', 
          value: formatWeight(averageIBW), 
          isCurrency: false, 
          isHighlight: true 
        },
        { 
          label: 'Healthy BMI Range', 
          value: `${minHealthyWeight.toFixed(1)} - ${maxHealthyWeight.toFixed(1)} kg`, 
          isCurrency: false 
        }
      ],
      chartData: chartData,
      schedule: [], 
      referenceTable: {
        headers: ["Formula Used", "Calculated Ideal Weight", "Year Developed"],
        rows: [
          ["J.D. Robinson", formatWeight(robinson), "1983"],
          ["Dr. B.J. Devine", formatWeight(devine), "1974"],
          ["Dr. D.R. Miller", formatWeight(miller), "1983"],
          ["Dr. G.J. Hamwi", formatWeight(hamwi), "1964"]
        ]
      }
    };
  };