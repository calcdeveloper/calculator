export function calculateLogic(inputs) {
    const { shape, quantity = 1 } = inputs;
    let cubicFeet = 0;
  
    if (shape === "slab") {
      const length = parseFloat(inputs.length) || 0;
      const width = parseFloat(inputs.width) || 0;
      const depthInches = parseFloat(inputs.depth) || 0;
  
      // Convert depth from inches to feet
      const depthFeet = depthInches / 12;
      cubicFeet = length * width * depthFeet;
  
    } else if (shape === "column") {
      const diameterInches = parseFloat(inputs.diameter) || 0;
      const heightFeet = parseFloat(inputs.height) || 0;
  
      // Convert diameter to radius in feet
      const radiusFeet = (diameterInches / 2) / 12;
      // Volume of a cylinder: V = πr²h
      cubicFeet = Math.PI * Math.pow(radiusFeet, 2) * heightFeet;
    }
  
    // Multiply by the number of slabs/columns
    const totalQuantity = parseFloat(quantity) || 1;
    cubicFeet = cubicFeet * totalQuantity;
  
    // Convert Cubic Feet to Cubic Yards (1 cubic yard = 27 cubic feet)
    const cubicYards = cubicFeet / 27;
  
    // Standard premix bag yields in cubic feet
    // 80lb bag yields ~0.60 cu ft
    // 60lb bag yields ~0.45 cu ft
    // 50lb bag yields ~0.37 cu ft
    const bags80 = Math.ceil(cubicFeet / 0.60);
    const bags60 = Math.ceil(cubicFeet / 0.45);
    const bags50 = Math.ceil(cubicFeet / 0.37);
  
    return {
      cubicYards: cubicYards.toFixed(2),
      cubicFeet: cubicFeet.toFixed(2),
      bags80: bags80,
      bags60: bags60,
      bags50: bags50
    };
  }