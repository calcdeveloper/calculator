export function calculateLogic(inputs) {
  const { shape, unit, quantity = 1 } = inputs;
  let cubicMeters = 0;

  // Convert all incoming dimensions into Meters first
  const toMeters = {
    meter: 1,
    cm: 0.01,
    feet: 0.3048,
    inch: 0.0254,
    yard: 0.9144
  };

  const f = toMeters[unit] || 1;

  if (shape === "slab") {
    const l = (parseFloat(inputs.length) || 0) * f;
    const w = (parseFloat(inputs.width) || 0) * f;
    const d = (parseFloat(inputs.depth) || 0) * f;
    cubicMeters = l * w * d;
    
  } else if (shape === "column") {
    const dia = (parseFloat(inputs.diameter) || 0) * f;
    const h = (parseFloat(inputs.height) || 0) * f;
    const r = dia / 2;
    cubicMeters = Math.PI * Math.pow(r, 2) * h;
    
  } else if (shape === "stairs") {
    const w = (parseFloat(inputs.width) || 0) * f;
    const tread = (parseFloat(inputs.tread) || 0) * f;
    const riser = (parseFloat(inputs.riser) || 0) * f;
    const steps = parseFloat(inputs.steps) || 0;
    // Calculate the rectangular volume of all steps
    cubicMeters = (w * tread * riser) * steps;
    
  } else if (shape === "triangle") {
    const b = (parseFloat(inputs.base) || 0) * f;
    const h = (parseFloat(inputs.tri_height) || 0) * f;
    const d = (parseFloat(inputs.depth) || 0) * f;
    // Volume of triangular prism: 1/2 * base * height * depth
    cubicMeters = 0.5 * b * h * d;
  }

  // Multiply by the number of units/objects
  const totalQty = parseFloat(quantity) || 1;
  cubicMeters *= totalQty;

  // Convert Cubic Meters back to target formats
  const cubicFeet = cubicMeters * 35.3147;
  const cubicYards = cubicMeters * 1.30795;

  // Bag yields based on standard cubic footage
  const bags80 = Math.ceil(cubicFeet / 0.60) || 0;
  const bags60 = Math.ceil(cubicFeet / 0.45) || 0;
  const bags50 = Math.ceil(cubicFeet / 0.37) || 0;

  return {
    summary: [
      {
        label: "Total Cubic Yards",
        value: cubicYards.toFixed(2),
        isHighlight: true 
      },
      {
        label: "Total Cubic Meters",
        value: cubicMeters.toFixed(2),
        isHighlight: false
      },
      {
        label: "Total Cubic Feet",
        value: cubicFeet.toFixed(2),
        isHighlight: false
      },
      {
        label: "80 lb Bags",
        value: bags80,
        isHighlight: false
      },
      {
        label: "60 lb Bags",
        value: bags60,
        isHighlight: false
      },
      {
        label: "50 lb Bags",
        value: bags50,
        isHighlight: false
      }
    ]
  };
}