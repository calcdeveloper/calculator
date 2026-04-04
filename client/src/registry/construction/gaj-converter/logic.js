export function calculateLogic(inputs) {
    const mode = inputs.calc_mode;
    let baseSqFt = 0;
  
    if (mode === "direct") {
      const area = parseFloat(inputs.area) || 0;
      const unit = inputs.direct_unit;
      
      if (area <= 0) return { summary: [] };
  
      // Standardize to Square Feet
      if (unit === "gaj") {
        baseSqFt = area * 9; // 1 Gaj = 9 Sq.ft
      } else if (unit === "sqft") {
        baseSqFt = area;
      } else if (unit === "sqm") {
        baseSqFt = area * 10.7639; // 1 Sq.m = 10.7639 Sq.ft
      } else if (unit === "acre") {
        baseSqFt = area * 43560; // 1 Acre = 43560 Sq.ft
      }
  
    } else if (mode === "dimensions") {
      const length = parseFloat(inputs.length) || 0;
      const width = parseFloat(inputs.width) || 0;
      const dimUnit = inputs.dim_unit;
      
      if (length <= 0 || width <= 0) return { summary: [] };
  
      const calculatedArea = length * width;
  
      // Standardize to Square Feet
      if (dimUnit === "feet") {
        baseSqFt = calculatedArea;
      } else if (dimUnit === "meters") {
        baseSqFt = calculatedArea * 10.7639;
      } else if (dimUnit === "gaj_linear") {
        // If dimensions are in linear yards, area is in square yards (Gaj)
        baseSqFt = calculatedArea * 9; 
      }
    }
  
    if (baseSqFt <= 0) return { summary: [] };
  
    // Calculate Output Units from the base Square Feet
    const outGaj = baseSqFt / 9;
    const outSqMeters = baseSqFt / 10.7639;
    const outAcres = baseSqFt / 43560;
  
    // Format with locale string for Indian comma placement where possible
    return {
      summary: [
        {
          label: "Gaj (Square Yards)",
          value: `${outGaj.toLocaleString("en-IN", {maximumFractionDigits: 2})} Gaj`,
          isHighlight: true
        },
        {
          label: "Square Feet",
          value: `${baseSqFt.toLocaleString("en-IN", {maximumFractionDigits: 2})} Sq.ft`,
          isHighlight: true
        },
        {
          label: "Square Meters",
          value: `${outSqMeters.toLocaleString("en-IN", {maximumFractionDigits: 2})} Sq.m`,
          isHighlight: false
        },
        {
          label: "Acres",
          value: `${outAcres.toLocaleString("en-IN", {maximumFractionDigits: 4})} Acres`,
          isHighlight: false
        }
      ]
    };
  }