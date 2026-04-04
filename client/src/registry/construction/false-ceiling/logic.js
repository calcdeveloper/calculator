export function calculateLogic(inputs) {
    const ceilingType = inputs.ceiling_type;
    const length = parseFloat(inputs.length) || 0;
    const width = parseFloat(inputs.width) || 0;
    const boardSizeSqFt = parseFloat(inputs.board_size) || 24;
    const wastagePercent = parseFloat(inputs.wastage) || 10;
  
    if (length <= 0 || width <= 0) return { summary: [] };
  
    // 1. Calculate Area and Perimeter
    const areaSqFt = length * width;
    const perimeterFt = 2 * (length + width);
    const areaWithWastage = areaSqFt * (1 + (wastagePercent / 100));
  
    // 2. Calculate GI Framing Channels (Standard 12 ft / 3.6m lengths in India)
    // Perimeter Channel runs along the wall edges
    const perimeterChannels = Math.ceil(perimeterFt / 12);
    
    // Ceiling / Intermediate Sections form the inner grid (Thumb rule: ~1 length per 16 sq.ft)
    const ceilingSections = Math.ceil(areaSqFt / 16);
  
    // 3. Calculate Primary Material Output
    let summaryOutput = [];
  
    summaryOutput.push({
      label: "Total Ceiling Area",
      value: `${areaSqFt.toFixed(1)} Sq.ft`,
      isHighlight: false
    });
  
    if (ceilingType === "gypsum") {
      // Gypsum Calculation
      const totalBoards = Math.ceil(areaWithWastage / boardSizeSqFt);
      const drywallScrews = totalBoards * 20; // Approx 20 screws per board
      const jointingCompound = Math.ceil(areaSqFt / 100); // 1 kg paste per 100 sq.ft for joints
  
      summaryOutput.push({
        label: "Gypsum Boards Required",
        value: `${totalBoards} Boards`,
        isHighlight: true
      });
      summaryOutput.push({
        label: "Jointing Compound (Putty)",
        value: `~${jointingCompound} kg`,
        isHighlight: false
      });
      summaryOutput.push({
        label: "Drywall Screws (Black Screws)",
        value: `~${drywallScrews} Pcs`,
        isHighlight: false
      });
  
    } else if (ceilingType === "pop") {
      // POP Calculation
      // Standard Indian POP Bag is 20kg. 1 bag covers approx 20-22 sq.ft at standard 12mm thickness.
      const popBags = Math.ceil(areaWithWastage / 20);
      
      summaryOutput.push({
        label: "POP Bags Required (20kg)",
        value: `${popBags} Bags`,
        isHighlight: true
      });
      summaryOutput.push({
        label: "Chicken Wire Mesh",
        value: `${Math.ceil(areaWithWastage)} Sq.ft`,
        isHighlight: false
      });
    }
  
    // Add Framing to Output
    summaryOutput.push({
      label: "GI Perimeter Channels (12ft)",
      value: `${perimeterChannels} Lengths`,
      isHighlight: true
    });
    summaryOutput.push({
      label: "GI Ceiling/Cross Sections (12ft)",
      value: `${ceilingSections} Lengths`,
      isHighlight: true
    });
  
    return { summary: summaryOutput };
  }