export function calculateLogic(inputs) {
    const wallLength = parseFloat(inputs.wall_length) || 0;
    const unit = inputs.wall_unit;
    const topTracksCount = parseFloat(inputs.top_tracks) || 0;
    const bottomTracksCount = parseFloat(inputs.bottom_tracks) || 0;
    const quantity = parseFloat(inputs.quantity) || 1;
  
    // Convert wall length to millimeters for unified calculation
    let lengthMm = 0;
    if (unit === "feet") {
      lengthMm = wallLength * 304.8; 
    } else if (unit === "meters") {
      lengthMm = wallLength * 1000;
    }
  
    // Determine spacing in millimeters
    let spacingMm = 610; // Default 24 inches
    if (inputs.oc_spacing === "406") {
      spacingMm = 406;
    } else if (inputs.oc_spacing === "610") {
      spacingMm = 610;
    } else if (inputs.oc_spacing === "custom_in") {
      spacingMm = (parseFloat(inputs.custom_spacing) || 24) * 25.4;
    } else if (inputs.oc_spacing === "custom_mm") {
      spacingMm = parseFloat(inputs.custom_spacing) || 610;
    }
  
    // Prevent division by zero
    if (spacingMm <= 0) spacingMm = 610;
  
    // 1. Calculate Vertical Studs / Battens
    // Formula: (Length / Spacing) rounded up + 1 starter stud
    let studsPerWall = 0;
    if (lengthMm > 0) {
      studsPerWall = Math.ceil(lengthMm / spacingMm) + 1;
    }
    const totalStuds = studsPerWall * quantity;
  
    // 2. Calculate Tracks/Channels Length
    // Tracks run horizontally along the top and bottom
    const tracksPerWallCount = topTracksCount + bottomTracksCount;
    const totalTrackLengthMm = lengthMm * tracksPerWallCount * quantity;
  
    // Convert track lengths back to useful metrics
    const totalTrackMeters = totalTrackLengthMm / 1000;
    const totalTrackFeet = totalTrackMeters * 3.28084;
  
    // Indian standard GI Channels and wooden battens often come in 10-foot (approx 3.05m) sections
    const standard10ftSections = Math.ceil(totalTrackFeet / 10);
  
    // Add 10% waste factor for studs (industry standard)
    const recommendedStuds = Math.ceil(totalStuds * 1.10);
  
    return {
      summary: [
        {
          label: "Total Vertical Studs Needed",
          value: totalStuds,
          isHighlight: true 
        },
        {
          label: "Total Tracks (Running Feet / Rft)",
          value: `${totalTrackFeet.toFixed(1)} Rft`,
          isHighlight: false
        },
        {
          label: "Total Tracks (Running Meters / Rmt)",
          value: `${totalTrackMeters.toFixed(1)} m`,
          isHighlight: false
        },
        {
          label: "Standard 10ft Sections for Tracks",
          value: standard10ftSections,
          isHighlight: false
        },
        {
          label: "Recommended Studs (includes 10% waste)",
          value: recommendedStuds,
          isHighlight: false
        }
      ]
    };
  }