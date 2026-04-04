export function calculateLogic(inputs) {
    const hFeet = parseFloat(inputs.height_feet) || 0;
    const hInches = parseFloat(inputs.height_inches) || 0;
    const targetRiser = parseFloat(inputs.target_riser) || 6;
    const treadInches = parseFloat(inputs.tread_length) || 10;
    const widthFeet = parseFloat(inputs.stair_width) || 3;
    const waistThickness = parseFloat(inputs.waist_slab) || 5;
  
    // Total floor-to-floor height in inches
    const totalHeightInches = (hFeet * 12) + hInches;
  
    if (totalHeightInches <= 0) return { summary: [] };
  
    // 1. Calculate Risers and Treads
    // Raw risers might have decimals (e.g., 120 / 7 = 17.14)
    const rawRisers = totalHeightInches / targetRiser;
    // We must have a whole number of steps, so we round to the nearest integer
    const actualRisers = Math.round(rawRisers);
    
    // Recalculate the EXACT riser height to ensure no error at the top step
    const exactRiserInches = totalHeightInches / actualRisers;
  
    // The number of treads is always one less than the number of risers for a single flight
    const totalTreads = actualRisers - 1;
  
    // 2. Calculate the Total Run (Horizontal distance)
    const totalRunInches = totalTreads * treadInches;
    const totalRunFeet = totalRunInches / 12;
  
    // 3. Calculate Concrete Volume
    const widthInches = widthFeet * 12;
    
    // Waist Slab Length = √(Height² + Run²) (Pythagoras Theorem)
    const inclinedLengthInches = Math.sqrt(Math.pow(totalHeightInches, 2) + Math.pow(totalRunInches, 2));
    
    // Volume of Waist Slab (in cubic inches) = L × W × Thickness
    const waistVolumeCuIn = inclinedLengthInches * widthInches * waistThickness;
  
    // Volume of Triangular Steps = Number of Treads × (1/2 × Base × Height × Width)
    const stepsVolumeCuIn = totalTreads * (0.5 * treadInches * exactRiserInches * widthInches);
  
    const totalVolumeCuIn = waistVolumeCuIn + stepsVolumeCuIn;
  
    // Convert to standard units
    const totalVolumeCFT = totalVolumeCuIn / 1728; // 1 Cubic Foot = 1728 Cubic Inches
    const totalVolumeCuM = totalVolumeCFT / 35.3147; // 1 Cubic Meter = 35.3147 CFT
  
    // Format outputs
    const formatNum = (num, decimals = 2) => num.toLocaleString("en-IN", { maximumFractionDigits: decimals });
  
    return {
      summary: [
        {
          label: "Total Number of Steps (Risers)",
          value: `${actualRisers} Steps`,
          isHighlight: true
        },
        {
          label: "Exact Riser Height Required",
          value: `${formatNum(exactRiserInches, 2)} Inches`,
          isHighlight: true
        },
        {
          label: "Total Number of Treads",
          value: `${totalTreads} Treads`,
          isHighlight: false
        },
        {
          label: "Total Horizontal Run",
          value: `${formatNum(totalRunFeet, 2)} Feet`,
          isHighlight: false
        },
        {
          label: "Concrete Required (CFT)",
          value: `${formatNum(totalVolumeCFT, 1)} CFT`,
          isHighlight: true
        },
        {
          label: "Concrete Required (Cu.m)",
          value: `${formatNum(totalVolumeCuM, 2)} Cu.m`,
          isHighlight: false
        }
      ]
    };
  }