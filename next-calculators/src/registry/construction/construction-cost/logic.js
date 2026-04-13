export function calculateLogic(inputs) {
    const builtUpArea = parseFloat(inputs.built_up_area) || 0;
    const floors = parseFloat(inputs.floors) || 0;
    const costPerSqFt = parseFloat(inputs.construction_quality) || 1800;
    const stiltFactor = parseFloat(inputs.parking) || 0;
  
    if (builtUpArea <= 0 || floors <= 0) return { summary: [] };
  
    // 1. Calculate Total Effective Area
    // If there is stilt parking, we add 50% of the area's cost because it has structure but no walls/finishing.
    const effectiveFloors = floors + stiltFactor;
    const totalArea = builtUpArea * effectiveFloors;
  
    // 2. Calculate Total Cost
    const totalCost = totalArea * costPerSqFt;
  
    // 3. Indian Construction Thumb Rule Percentages
    const costSteel = totalCost * 0.24;      // 24% for TMT Steel
    const costCement = totalCost * 0.16;     // 16% for Cement
    const costSandAgg = totalCost * 0.11;    // 11% for Sand & Aggregate (Rodi/Bajri)
    const costBricks = totalCost * 0.05;     // 5% for Bricks/Blocks
    const costLabour = totalCost * 0.15;     // 15% for Labour & Contractor Profit
    const costFinishing = totalCost * 0.17;  // 17% for Tiles, Paint, Woodwork
    const costFittings = totalCost * 0.12;   // 12% for Plumbing, Electrical, Sanitary
  
    // Helper to format as Indian Rupees
    const formatINR = (amount) => {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(amount);
    };
  
    return {
      summary: [
        {
          label: "Total Estimated Cost",
          value: formatINR(totalCost),
          isHighlight: true
        },
        {
          label: "Total Built-up Area",
          value: `${(totalArea).toLocaleString('en-IN')} Sq.ft`,
          isHighlight: false
        },
        {
          label: "Steel (TMT Bars) ~24%",
          value: formatINR(costSteel),
          isHighlight: false
        },
        {
          label: "Cement ~16%",
          value: formatINR(costCement),
          isHighlight: false
        },
        {
          label: "Sand & Aggregate (Rodi) ~11%",
          value: formatINR(costSandAgg),
          isHighlight: false
        },
        {
          label: "Bricks / AAC Blocks ~5%",
          value: formatINR(costBricks),
          isHighlight: false
        },
        {
          label: "Labour & Contractor ~15%",
          value: formatINR(costLabour),
          isHighlight: true
        },
        {
          label: "Finishing (Tiles, Paint, Wood) ~17%",
          value: formatINR(costFinishing),
          isHighlight: false
        },
        {
          label: "MEP Fittings (Electric, Plumbing) ~12%",
          value: formatINR(costFittings),
          isHighlight: false
        }
      ]
    };
  }