export function calculateLogic(inputs) {
    const length = parseFloat(inputs.wall_length) || 0;
    const height = parseFloat(inputs.wall_height) || 0;
    const deductions = parseFloat(inputs.deductions) || 0;
    const unit = inputs.unit;
    const surfaceCondition = inputs.surface_condition;
    const puttyCoats = parseInt(inputs.putty_coats) || 2;
  
    if (length <= 0 || height <= 0) return { summary: [] };
  
    // 1. Calculate Gross Area
    let areaSqft = 0;
    let deductionSqft = deductions;
  
    if (unit === "feet") {
      areaSqft = length * height;
    } else if (unit === "meters") {
      // Convert Sq Meters to Sq Ft (1 Sqm = 10.7639 Sqft)
      areaSqft = (length * height) * 10.7639;
      deductionSqft = deductions * 10.7639;
    }
  
    // 2. Calculate Net Area
    let netAreaSqft = areaSqft - deductionSqft;
    if (netAreaSqft < 0) netAreaSqft = 0;
  
    // 3. Determine Wall Putty Coverage Area (per kg)
    // Standard Indian Coverage: 
    // 2 Coats on Rough Plaster = ~12 sq ft / kg
    // 2 Coats on Smooth Plaster = ~15 sq ft / kg
    // 1 Coat on Rough = ~20 sq ft / kg
    // 1 Coat on Smooth = ~25 sq ft / kg
    
    let puttyCoveragePerKg = 12; 
  
    if (puttyCoats === 2) {
      puttyCoveragePerKg = surfaceCondition === "rough" ? 12 : 15;
    } else {
      puttyCoveragePerKg = surfaceCondition === "rough" ? 20 : 25;
    }
  
    const puttyRequiredKg = netAreaSqft / puttyCoveragePerKg;
  
    // Calculate 40kg standard bags for large projects
    const puttyBags40kg = Math.ceil(puttyRequiredKg / 40);
  
    // 4. Determine Primer Coverage Area (per Liter)
    // Standard Indian Coverage (1 Coat of Primer over Putty) = ~120 to 140 sq ft / Liter
    // We use 120 sq ft for a safer estimate.
    const primerCoveragePerLiter = 120;
    const primerRequiredLiters = netAreaSqft / primerCoveragePerLiter;
  
    return {
      summary: [
        {
          label: "Wall Putty Required (Kg)",
          value: `${Math.ceil(puttyRequiredKg)} Kg`,
          isHighlight: true
        },
        {
          label: "Primer Required (Liters)",
          value: `${primerRequiredLiters.toFixed(1)} L`,
          isHighlight: true
        },
        {
          label: "Total Paintable Area",
          value: `${netAreaSqft.toFixed(1)} Sq.Ft`,
          isHighlight: false
        },
        {
          label: "Standard 40kg Putty Bags Needed",
          value: puttyBags40kg,
          isHighlight: false
        }
      ]
    };
  }