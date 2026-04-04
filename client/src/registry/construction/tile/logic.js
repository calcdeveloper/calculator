export function calculateLogic(inputs) {
    const calcType = inputs.calc_type;
    const length = parseFloat(inputs.length) || 0;
    const width = parseFloat(inputs.width) || 0; // Acts as height if calcType is wall
    const tileSize = inputs.tile_size;
    const includeSkirting = inputs.skirting;
    const wastagePercent = parseFloat(inputs.wastage) || 5;
  
    if (length <= 0 || width <= 0) return { summary: [] };
  
    // 1. Calculate Base Area in Sq.ft
    let baseAreaSqFt = length * width;
  
    // 2. Calculate Skirting Area (Only if floor calculation)
    let skirtingAreaSqFt = 0;
    if (calcType === "floor" && includeSkirting === "yes") {
      // Perimeter = 2 * (Length + Width)
      const perimeter = 2 * (length + width);
      // Standard Indian skirting is 4 inches high (4/12 = 0.333 feet)
      skirtingAreaSqFt = perimeter * 0.3333;
    }
  
    // 3. Total Net Area
    const netAreaSqFt = baseAreaSqFt + skirtingAreaSqFt;
  
    // 4. Add Wastage
    const grossAreaSqFt = netAreaSqFt * (1 + (wastagePercent / 100));
  
    // 5. Tile Specifications Lookup Table (Indian Standards)
    // Sizes are defined as: area per tile in sq.ft, and pieces per box
    const tileSpecs = {
      "600x600": { sqftPerTile: 4.0, piecesPerBox: 4 }, // 16 sqft/box
      "600x1200": { sqftPerTile: 8.0, piecesPerBox: 2 }, // 16 sqft/box
      "800x800": { sqftPerTile: 7.11, piecesPerBox: 3 }, // ~21.33 sqft/box
      "300x300": { sqftPerTile: 1.0, piecesPerBox: 9 }, // 9 sqft/box
      "300x450": { sqftPerTile: 1.5, piecesPerBox: 6 }, // 9 sqft/box
      "300x600": { sqftPerTile: 2.0, piecesPerBox: 5 }  // 10 sqft/box
    };
  
    const spec = tileSpecs[tileSize];
    
    // 6. Calculate Tiles and Boxes
    const totalTilesRequired = Math.ceil(grossAreaSqFt / spec.sqftPerTile);
    const totalBoxesRequired = Math.ceil(totalTilesRequired / spec.piecesPerBox);
    
    // Calculate the actual area the purchased boxes will cover
    const areaPurchased = totalBoxesRequired * spec.piecesPerBox * spec.sqftPerTile;
  
    return {
      summary: [
        {
          label: "Total Boxes Needed",
          value: `${totalBoxesRequired} Boxes`,
          isHighlight: true
        },
        {
          label: "Total Individual Tiles",
          value: `${totalTilesRequired} Pieces`,
          isHighlight: true
        },
        {
          label: "Net Area (Including Skirting)",
          value: `${netAreaSqFt.toFixed(2)} Sq.ft`,
          isHighlight: false
        },
        {
          label: `Area to Purchase (with ${wastagePercent}% waste)`,
          value: `${areaPurchased.toFixed(2)} Sq.ft`,
          isHighlight: false
        }
      ]
    };
  }