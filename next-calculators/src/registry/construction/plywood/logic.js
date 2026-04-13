export function calculateLogic(inputs) {
    const projectType = inputs.project_type;
    const length = parseFloat(inputs.length) || 0;
    const height = parseFloat(inputs.height) || 0; // Acts as width/depth depending on project
    const wastagePercent = parseFloat(inputs.wastage) || 15;
  
    if (length <= 0 || height <= 0) return { summary: [] };
  
    // 1. Calculate Primary Frontal/Base Area
    const baseAreaSqFt = length * height;
    const areaWithWastage = baseAreaSqFt * (1 + (wastagePercent / 100));
  
    // A standard Indian plywood/laminate sheet is 8ft x 4ft = 32 Sq.ft
    const sheetSizeSqFt = 32;
  
    // 2. Initialize material areas
    let ply18mmArea = 0; // Primary structural plywood
    let ply6mmArea = 0;  // Backing plywood (for wardrobes/kitchens)
    let lamOuterArea = 0; // 1mm or 0.8mm Designer Laminate (Sunmica)
    let lamInnerArea = 0; // 0.72mm Inner Laminate (Liner Mica)
  
    // 3. Apply Carpenter Thumb Rules based on Project Type
    if (projectType === "wardrobe") {
      // Wardrobe framing, doors, and internal shelves take approx 3x the front area
      ply18mmArea = areaWithWastage * 3.0;
      // The back panel takes exactly 1x the front area
      ply6mmArea = areaWithWastage * 1.0;
      // Outer laminate covers front doors and exposed sides (~1.2x to 1.5x)
      lamOuterArea = areaWithWastage * 1.3;
      // Inner laminate covers the entire inside box and shelves (~2.5x)
      lamInnerArea = areaWithWastage * 2.5;
  
    } else if (projectType === "kitchen") {
      // Kitchen base + wall units take approx 3.5x front area due to deep boxes
      ply18mmArea = areaWithWastage * 3.5;
      ply6mmArea = areaWithWastage * 1.0;
      lamOuterArea = areaWithWastage * 1.2; // Front shutters
      lamInnerArea = areaWithWastage * 3.0; // Inside cabinets
  
    } else if (projectType === "bed") {
      // Bed frame, top, and bottom boxes (approx 2.5x mattress area)
      ply18mmArea = areaWithWastage * 2.5;
      ply6mmArea = 0; // Beds rarely use 6mm
      lamOuterArea = areaWithWastage * 0.8; // Only sides and headboard are laminated
      lamInnerArea = areaWithWastage * 1.5; // Inside the storage box
  
    } else if (projectType === "paneling") {
      // Flat wall paneling is 1:1 ratio
      ply18mmArea = areaWithWastage * 1.0;
      ply6mmArea = 0;
      lamOuterArea = areaWithWastage * 1.0;
      lamInnerArea = 0;
    }
  
    // 4. Convert Areas to Standard 8x4 Sheets (Math.ceil because you can't buy half a sheet)
    const ply18mmSheets = Math.ceil(ply18mmArea / sheetSizeSqFt);
    const ply6mmSheets = Math.ceil(ply6mmArea / sheetSizeSqFt);
    const lamOuterSheets = Math.ceil(lamOuterArea / sheetSizeSqFt);
    const lamInnerSheets = Math.ceil(lamInnerArea / sheetSizeSqFt);
  
    let summaryOutput = [
      {
        label: "Elevation / Base Area",
        value: `${baseAreaSqFt.toFixed(1)} Sq.ft`,
        isHighlight: false
      },
      {
        label: "18mm Plywood Sheets (8x4 ft)",
        value: `${ply18mmSheets} Sheets`,
        isHighlight: true
      }
    ];
  
    if (ply6mmSheets > 0) {
      summaryOutput.push({
        label: "6mm/8mm Backing Plywood",
        value: `${ply6mmSheets} Sheets`,
        isHighlight: false
      });
    }
  
    summaryOutput.push({
      label: "Outer Designer Laminate (Sunmica)",
      value: `${lamOuterSheets} Sheets`,
      isHighlight: true
    });
  
    if (lamInnerSheets > 0) {
      summaryOutput.push({
        label: "Inner Liner Laminate (0.72mm)",
        value: `${lamInnerSheets} Sheets`,
        isHighlight: false
      });
    }
  
    return { summary: summaryOutput };
  }