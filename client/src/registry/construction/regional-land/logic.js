export function calculateLogic(inputs) {
    const area = parseFloat(inputs.area_value) || 0;
    const inputUnit = inputs.input_unit;
  
    if (area <= 0) return { summary: [] };
  
    // 1. Convert Input to Base Unit: Square Feet (Sq.ft)
    let baseSqFt = 0;
  
    switch (inputUnit) {
      case "cent":
        baseSqFt = area * 435.6; // 1 Cent = 435.6 Sq.ft (1/100 of an Acre)
        break;
      case "guntha":
        baseSqFt = area * 1089.0; // 1 Guntha = 1089 Sq.ft (1/40 of an Acre)
        break;
      case "bigha_up":
        baseSqFt = area * 27225.0; // 1 Pucca Bigha = 27,225 Sq.ft
        break;
      case "bigha_guj":
        baseSqFt = area * 17424.0; // 1 Gujarat Bigha = 17,424 Sq.ft
        break;
      case "bigha_wb":
        baseSqFt = area * 14400.0; // 1 Bengal Bigha = 14,400 Sq.ft
        break;
      case "sqft":
        baseSqFt = area;
        break;
      case "sqm":
        baseSqFt = area * 10.7639; // 1 Sq.m = 10.7639 Sq.ft
        break;
      case "acre":
        baseSqFt = area * 43560.0; // 1 Acre = 43,560 Sq.ft
        break;
      default:
        baseSqFt = 0;
    }
  
    if (baseSqFt <= 0) return { summary: [] };
  
    // 2. Calculate Outputs from Base Sq.ft
    const outCent = baseSqFt / 435.6;
    const outGuntha = baseSqFt / 1089.0;
    const outBighaUP = baseSqFt / 27225.0;
    const outSqMeters = baseSqFt / 10.7639;
    const outAcres = baseSqFt / 43560.0;
  
    // Format with standard Indian numbering system
    const formatNum = (num, decimals) => num.toLocaleString("en-IN", { maximumFractionDigits: decimals });
  
    return {
      summary: [
        {
          label: "Square Feet",
          value: `${formatNum(baseSqFt, 2)} Sq.ft`,
          isHighlight: true
        },
        {
          label: "Square Meters",
          value: `${formatNum(outSqMeters, 2)} Sq.m`,
          isHighlight: true
        },
        {
          label: "Acres",
          value: `${formatNum(outAcres, 4)} Acres`,
          isHighlight: true
        },
        {
          label: "Cent (South India)",
          value: `${formatNum(outCent, 2)} Cents`,
          isHighlight: false
        },
        {
          label: "Guntha (West India)",
          value: `${formatNum(outGuntha, 2)} Gunthas`,
          isHighlight: false
        },
        {
          label: "Standard Bigha (UP/Raj)",
          value: `${formatNum(outBighaUP, 3)} Bigha`,
          isHighlight: false
        }
      ]
    };
  }