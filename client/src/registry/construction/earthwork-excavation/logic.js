export function calculateLogic(inputs) {
    const length = parseFloat(inputs.length) || 0;
    const width = parseFloat(inputs.width) || 0;
    const depth = parseFloat(inputs.depth) || 0;
    const quantity = parseFloat(inputs.quantity) || 1;
    const unit = inputs.unit;
    const swellFactor = parseFloat(inputs.swell) || 25;
    const truckCapacityCft = parseFloat(inputs.truck) || 100;
  
    if (length <= 0 || width <= 0 || depth <= 0) return { summary: [] };
  
    // 1. Calculate Single Pit Raw Volume
    const singleRawVol = length * width * depth;
    const totalRawVol = singleRawVol * quantity;
  
    // 2. Standardize into CFT and Cubic Meters
    let rawVolumeCft = 0;
    let rawVolumeCum = 0;
  
    if (unit === "feet") {
      rawVolumeCft = totalRawVol;
      rawVolumeCum = totalRawVol / 35.3147;
    } else if (unit === "meters") {
      rawVolumeCum = totalRawVol;
      rawVolumeCft = totalRawVol * 35.3147;
    }
  
    // 3. Apply Swell Factor to get Loose Volume (The actual dirt to be moved)
    const swellMultiplier = 1 + (swellFactor / 100);
    const looseVolumeCft = rawVolumeCft * swellMultiplier;
    const looseVolumeCum = rawVolumeCum * swellMultiplier;
  
    // 4. Calculate Truck Trips
    // We use Math.ceil because even a partially full truck counts as a trip
    const truckTrips = Math.ceil(looseVolumeCft / truckCapacityCft);
  
    return {
      summary: [
        {
          label: "Solid Earth Volume (Bank Volume)",
          value: `${Math.round(rawVolumeCft)} CFT`,
          isHighlight: false
        },
        {
          label: `Loose Soil Volume (+${swellFactor}% Swell)`,
          value: `${Math.round(looseVolumeCft)} CFT`,
          isHighlight: true
        },
        {
          label: "Loose Soil Volume (m³)",
          value: `${looseVolumeCum.toFixed(2)} m³`,
          isHighlight: true
        },
        {
          label: "Estimated Truck / Tractor Trips",
          value: `${truckTrips} Trips`,
          isHighlight: true
        }
      ]
    };
  }