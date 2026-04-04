export function calculateLogic(inputs) {
    const length = parseFloat(inputs.wall_length) || 0;
    const height = parseFloat(inputs.wall_height) || 0;
    const unit = inputs.unit;
    const thicknessMm = parseFloat(inputs.wall_thickness) || 230;
    const mortarRatio = parseFloat(inputs.mortar_ratio) || 6;
    const wastage = parseFloat(inputs.wastage) || 5;
  
    if (length <= 0 || height <= 0) return { summary: [] };
  
    // 1. Convert wall dimensions to Meters
    let lengthM = length;
    let heightM = height;
    if (unit === "feet") {
      lengthM = length * 0.3048;
      heightM = height * 0.3048;
    }
    const thicknessM = thicknessMm / 1000;
  
    // Calculate Total Wall Volume in Cubic Meters
    const wallVolume = lengthM * heightM * thicknessM;
  
    // 2. Parse Brick Dimensions (converting mm to meters)
    const brickDims = inputs.brick_size.split("_").map(Number);
    const bL = brickDims[0] / 1000;
    const bW = brickDims[1] / 1000;
    const bH = brickDims[2] / 1000;
  
    // Standard mortar joint thickness is 10mm (0.01m)
    const mortarThickness = 0.01;
    const bL_m = bL + mortarThickness;
    const bW_m = bW + mortarThickness;
    const bH_m = bH + mortarThickness;
  
    // 3. Calculate Number of Bricks
    const volOneBrickWithMortar = bL_m * bW_m * bH_m;
    const volOneBrickWithoutMortar = bL * bW * bH;
  
    const exactBricks = wallVolume / volOneBrickWithMortar;
    const totalBricksWithWastage = Math.ceil(exactBricks * (1 + wastage / 100));
  
    // 4. Calculate Mortar Volume
    // Wet volume = Total Wall Volume - Volume occupied by bricks only
    const volumeOccupiedByBricks = exactBricks * volOneBrickWithoutMortar;
    const wetMortarVolume = wallVolume - volumeOccupiedByBricks;
  
    // Convert wet volume to dry volume (Increase by 33% for dry mortar)
    const dryMortarVolume = wetMortarVolume * 1.33;
  
    // 5. Calculate Cement and Sand
    const totalRatio = 1 + mortarRatio; // e.g., 1 + 6 = 7
    
    // Cement volume in Cu.m
    const cementVolume = dryMortarVolume * (1 / totalRatio);
    // Density of cement = 1440 kg/m3. 1 Bag = 50kg.
    const cementKg = cementVolume * 1440;
    const cementBags = cementKg / 50;
  
    // Sand volume in Cu.m
    const sandVolumeCum = dryMortarVolume * (mortarRatio / totalRatio);
    // Convert Cu.m to Cubic Feet (CFT) - 1 Cu.m = 35.3147 CFT
    const sandCFT = sandVolumeCum * 35.3147;
  
    return {
      summary: [
        {
          label: "Total Bricks Required (inc. wastage)",
          value: totalBricksWithWastage,
          isHighlight: true
        },
        {
          label: "Cement Required (50kg Bags)",
          value: `${Math.ceil(cementBags * 10) / 10} Bags`, // Rounded to 1 decimal
          isHighlight: false
        },
        {
          label: "Sand Required (Cubic Feet / CFT)",
          value: `${sandCFT.toFixed(2)} CFT`,
          isHighlight: false
        },
        {
          label: "Exact Bricks (0% wastage)",
          value: Math.ceil(exactBricks),
          isHighlight: false
        },
        {
          label: "Total Wall Volume",
          value: `${wallVolume.toFixed(2)} m³`,
          isHighlight: false
        }
      ]
    };
  }