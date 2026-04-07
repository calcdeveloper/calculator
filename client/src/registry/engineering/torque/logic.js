export function calculateLogic(inputs) {
    // Convert selected units into standard SI base units
    const toBaseUnit = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        // Torque
        case 'lb-ft': return val * 1.355818;
        case 'kg-m': return val * 9.80665;
        // Force
        case 'lbf': return val * 4.44822;
        case 'kgf': return val * 9.80665;
        // Distance
        case 'cm': return val / 100;
        case 'ft': return val * 0.3048;
        case 'in': return val * 0.0254;
        // Angle
        case 'rad': return val * (180 / Math.PI);
        
        default: return val; // Base units (Nm, N, m, deg)
      }
    };
  
    let t = toBaseUnit(parseFloat(inputs.torque), inputs.torqueUnit || 'Nm');
    let f = toBaseUnit(parseFloat(inputs.force), inputs.forceUnit || 'N');
    let d = toBaseUnit(parseFloat(inputs.distance), inputs.distanceUnit || 'm');
    
    // Angle defaults to 90 degrees if left blank
    let rawAngle = parseFloat(inputs.angle);
    let a = isNaN(rawAngle) ? 90 : toBaseUnit(rawAngle, inputs.angleUnit || 'deg'); 
  
    // Count primary variables provided
    let primaryCount = (t > 0 ? 1 : 0) + (f > 0 ? 1 : 0) + (d > 0 ? 1 : 0);
  
    if (primaryCount < 2) {
      return {
        summary: [{ label: "Status", value: "Please enter at least 2 primary values (Torque, Force, or Distance).", isHighlight: true }]
      };
    }
  
    let calcT = t, calcF = f, calcD = d, calcA = a;
    let missing = '';
  
    const angleInRads = a * (Math.PI / 180);
    const sinTheta = Math.sin(angleInRads);
  
    // Math guard: prevent division by zero if angle is 0 or 180
    if (sinTheta === 0 && primaryCount === 2 && t > 0) {
        return { summary: [{ label: "Error", value: "Angle cannot be 0° or 180° when solving for Force or Distance (sin(θ) is 0).", isHighlight: true }] };
    }
  
    // Determine what to calculate based on what is missing
    if (primaryCount === 3) {
      // Solve for Angle
      missing = 'Angle';
      let sinA = t / (f * d);
      if (sinA > 1 || sinA < 0) {
        return { summary: [{ label: "Error", value: "Invalid inputs. Torque is mathematically too high for the given Force and Distance.", isHighlight: true }] };
      }
      calcA = Math.asin(sinA) * (180 / Math.PI); 
    } else {
      if (t === 0) {
        missing = 'Torque';
        calcT = f * d * sinTheta;
      } else if (f === 0) {
        missing = 'Force';
        calcF = t / (d * sinTheta);
      } else if (d === 0) {
        missing = 'Distance';
        calcD = t / (f * sinTheta);
      }
    }
  
    const formatNum = (num) => Number(num.toFixed(4)).toString();
  
    return {
      summary: [
        {
          label: "Torque (τ)",
          value: `${formatNum(calcT)} Nm`,
          isHighlight: missing === 'Torque'
        },
        {
          label: "Force (F)",
          value: `${formatNum(calcF)} N`,
          isHighlight: missing === 'Force'
        },
        {
          label: "Distance (r)",
          value: `${formatNum(calcD)} m`,
          isHighlight: missing === 'Distance'
        },
        {
          label: "Angle (θ)",
          value: `${formatNum(calcA)}°`,
          isHighlight: missing === 'Angle'
        }
      ]
    };
  }