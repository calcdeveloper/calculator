export function calculateLogic(inputs) {
    // Conversion to Base Units: Millimeters (mm) and RPM
    const toBaseLen = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        case 'in': return val * 25.4;
        case 'cm': return val * 10;
        default: return val; // mm
      }
    };
  
    const toBaseRPM = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      return unit === 'rps' ? val * 60 : val; // rpm
    };
  
    let d1 = toBaseLen(parseFloat(inputs.driverDiameter), inputs.driverDiameterUnit || 'mm');
    let d2 = toBaseLen(parseFloat(inputs.drivenDiameter), inputs.drivenDiameterUnit || 'mm');
    let c = toBaseLen(parseFloat(inputs.centerDistance), inputs.centerDistanceUnit || 'mm');
    let rpm1 = toBaseRPM(parseFloat(inputs.driverSpeed), inputs.driverSpeedUnit || 'rpm');
    let rpm2 = toBaseRPM(parseFloat(inputs.drivenSpeed), inputs.drivenSpeedUnit || 'rpm');
  
    let speedVarsCount = (d1 > 0 ? 1 : 0) + (d2 > 0 ? 1 : 0) + (rpm1 > 0 ? 1 : 0) + (rpm2 > 0 ? 1 : 0);
    let lengthVarsCount = (d1 > 0 ? 1 : 0) + (d2 > 0 ? 1 : 0) + (c > 0 ? 1 : 0);
  
    if (speedVarsCount < 3 && lengthVarsCount < 3) {
      return {
        summary: [{ label: "Status", value: "Enter at least 3 speed variables, or D1, D2, and C to calculate belt length.", isHighlight: true }]
      };
    }
  
    let missing = [];
  
    // --- 1. REVERSE SOLVER LOGIC FOR SPEED & DIAMETER ---
    // Core Formula: D1 × RPM1 = D2 × RPM2
    if (speedVarsCount === 3) {
      if (d1 === 0) {
        missing.push('driverDiameter');
        d1 = (d2 * rpm2) / rpm1;
      } else if (d2 === 0) {
        missing.push('drivenDiameter');
        d2 = (d1 * rpm1) / rpm2;
      } else if (rpm1 === 0) {
        missing.push('driverSpeed');
        rpm1 = (d2 * rpm2) / d1;
      } else if (rpm2 === 0) {
        missing.push('drivenSpeed');
        rpm2 = (d1 * rpm1) / d2;
      }
    } else if (speedVarsCount > 3) {
        missing.push('overconstrained');
    }
  
    // --- 2. FORWARD SOLVER FOR BELT LENGTH ---
    // Core Formula: L = 2C + (π/2)(D1+D2) + ((D1-D2)²)/(4C)
    let beltLength = 0;
    if (d1 > 0 && d2 > 0 && c > 0) {
      beltLength = (2 * c) + ((Math.PI / 2) * (d1 + d2)) + (Math.pow(d1 - d2, 2) / (4 * c));
      missing.push('beltLength');
    }
  
    // Formatting Output
    const formatNum = (num) => Number(num.toFixed(2)).toString();
  
    let summaryData = [];
  
    // Always show D1 and D2 if calculated or provided
    if (d1 > 0) summaryData.push({ label: "Driver Diameter (D1)", value: `${formatNum(d1)} mm`, isHighlight: missing.includes('driverDiameter') });
    if (d2 > 0) summaryData.push({ label: "Driven Diameter (D2)", value: `${formatNum(d2)} mm`, isHighlight: missing.includes('drivenDiameter') });
    
    // Show RPMs if part of the calculation
    if (rpm1 > 0) summaryData.push({ label: "Driver Speed (RPM1)", value: `${formatNum(rpm1)} RPM`, isHighlight: missing.includes('driverSpeed') });
    if (rpm2 > 0) summaryData.push({ label: "Driven Speed (RPM2)", value: `${formatNum(rpm2)} RPM`, isHighlight: missing.includes('drivenSpeed') });
  
    // Add Ratio if we have both diameters
    if (d1 > 0 && d2 > 0) {
      let ratio = d2 / d1;
      summaryData.push({ label: "Pulley Ratio", value: `${formatNum(ratio)} : 1`, isHighlight: false });
    }
  
    // Add Belt Length if calculated
    if (beltLength > 0) {
      summaryData.push({ label: "Belt Length (L)", value: `${formatNum(beltLength)} mm`, isHighlight: true });
    }
  
    if (missing.includes('overconstrained')) {
        summaryData.unshift({ label: "Warning", value: "Speed variables are overconstrained. Leave one blank to calculate.", isHighlight: true });
    }
  
    return { summary: summaryData };
  }