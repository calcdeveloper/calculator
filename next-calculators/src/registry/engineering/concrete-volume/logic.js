export function calculateLogic(inputs) {
    // Convert units to Base SI: Meters (m)
    const toMeters = (val, unit) => {
      if (isNaN(val) || val <= 0) return 0;
      switch (unit) {
        case 'ft': return val * 0.3048;
        case 'in': return val * 0.0254;
        case 'cm': return val * 0.01;
        case 'm': return val;
        default: return val; 
      }
    };
  
    let shape = inputs.shapeType || 'rectangular';
    
    let l = toMeters(parseFloat(inputs.length), inputs.lengthUnit || 'ft');
    let w = toMeters(parseFloat(inputs.width), inputs.widthUnit || 'ft');
    let dia = toMeters(parseFloat(inputs.diameter), inputs.diameterUnit || 'ft');
    let d = toMeters(parseFloat(inputs.depth), inputs.depthUnit || 'in');
    let qty = parseFloat(inputs.quantity) || 1;
  
    let volumeCubicMeters = 0;
    let statusMessage = "";
  
    // Validation & Calculation based on Shape
    if (shape === 'rectangular') {
      if (l === 0 || w === 0 || d === 0) {
        statusMessage = "Please enter Length, Width, and Depth to calculate.";
      } else {
        volumeCubicMeters = l * w * d * qty;
      }
    } else if (shape === 'circular') {
      if (dia === 0 || d === 0) {
        statusMessage = "Please enter Diameter and Depth to calculate.";
      } else {
        let radius = dia / 2;
        volumeCubicMeters = Math.PI * Math.pow(radius, 2) * d * qty;
      }
    }
  
    if (statusMessage) {
      return {
        summary: [{ label: "Status", value: statusMessage, isHighlight: true }]
      };
    }
  
    // Conversions for output
    const cubicMetersToCubicYards = (m3) => m3 * 1.30795;
    const cubicMetersToCubicFeet = (m3) => m3 * 35.3147;
  
    let volYards = cubicMetersToCubicYards(volumeCubicMeters);
    let volFeet = cubicMetersToCubicFeet(volumeCubicMeters);
  
    // Add 5% for standard industry wastage margin
    let totalYardsWithWaste = volYards * 1.05;
    let totalMetersWithWaste = volumeCubicMeters * 1.05;
  
    const formatNum = (num) => Number(num.toFixed(2)).toString();
  
    return {
      summary: [
        { label: "Exact Volume (Cubic Yards)", value: `${formatNum(volYards)} yd³`, isHighlight: false },
        { label: "Exact Volume (Cubic Meters)", value: `${formatNum(volumeCubicMeters)} m³`, isHighlight: false },
        { label: "Exact Volume (Cubic Feet)", value: `${formatNum(volFeet)} ft³`, isHighlight: false },
        { label: "Recommended Order (yd³) *", value: `${formatNum(totalYardsWithWaste)} yd³`, isHighlight: true },
        { label: "Recommended Order (m³) *", value: `${formatNum(totalMetersWithWaste)} m³`, isHighlight: true },
        { label: "* Note", value: "Recommended order includes a standard +5% waste margin to account for uneven subgrades and spills.", isHighlight: false }
      ]
    };
  }