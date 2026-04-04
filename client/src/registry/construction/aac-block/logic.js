export function calculateLogic(inputs) {
    const length = parseFloat(inputs.wall_length) || 0;
    const height = parseFloat(inputs.wall_height) || 0;
    const unit = inputs.unit;
    const thicknessMm = parseFloat(inputs.block_thickness) || 150;
    const wastage = parseFloat(inputs.wastage) || 3;
  
    if (length <= 0 || height <= 0) return { summary: [] };
  
    // 1. Convert wall dimensions to Meters
    let lengthM = length;
    let heightM = height;
    if (unit === "feet") {
      lengthM = length * 0.3048;
      heightM = height * 0.3048;
    }
    
    const thicknessM = thicknessMm / 1000;
    const wallArea = lengthM * heightM;
    const wallVolume = wallArea * thicknessM;
  
    // 2. Standard Indian AAC Block Size
    // Length: 600mm (0.6m), Height: 200mm (0.2m)
    const blockLength = 0.6;
    const blockHeight = 0.2;
  
    // Standard chemical adhesive joint thickness is 3mm (0.003m)
    const jointThickness = 0.003;
    const blockLengthWithJoint = blockLength + jointThickness;
    const blockHeightWithJoint = blockHeight + jointThickness;
  
    // 3. Calculate Number of Blocks (using face area method)
    const blockFaceAreaWithJoint = blockLengthWithJoint * blockHeightWithJoint;
    const exactBlocks = wallArea / blockFaceAreaWithJoint;
    
    // Apply wastage
    const totalBlocksWithWastage = Math.ceil(exactBlocks * (1 + wastage / 100));
  
    // Blocks per square meter (for the summary metric)
    const blocksPerSqm = 1 / blockFaceAreaWithJoint;
  
    // 4. Calculate Chemical Adhesive
    // Industry Thumb Rule in India: 
    // One 40kg bag of AAC Block Adhesive covers approx 1.2 Cubic Meters of masonry.
    const adhesiveCoveragePerBagCuM = 1.2;
    const adhesiveBags = wallVolume / adhesiveCoveragePerBagCuM;
  
    return {
      summary: [
        {
          label: "Total AAC Blocks Required",
          value: totalBlocksWithWastage,
          isHighlight: true
        },
        {
          label: "Block Adhesive (40kg Bags)",
          value: Math.ceil(adhesiveBags),
          isHighlight: false
        },
        {
          label: "Blocks per Square Meter (sqm)",
          value: blocksPerSqm.toFixed(2),
          isHighlight: false
        },
        {
          label: "Exact Blocks (0% wastage)",
          value: Math.ceil(exactBlocks),
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