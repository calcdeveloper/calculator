export function calculateLogic(inputs) {
    // Conversion to Base Unit: RPM (Revolutions Per Minute)
    const toBaseRPM = (val, unit) => {
      if (isNaN(val) || val === 0) return 0;
      switch (unit) {
        case 'rps': return val * 60; // Revs per second to RPM
        case 'rad_s': return val * 9.549296596425384; // Rad/s to RPM (30/π)
        default: return val; // rpm
      }
    };
  
    let t1 = parseFloat(inputs.driverTeeth) || 0;
    let t2 = parseFloat(inputs.drivenTeeth) || 0;
    let rpm1 = toBaseRPM(parseFloat(inputs.driverSpeed), inputs.driverSpeedUnit || 'rpm');
    let rpm2 = toBaseRPM(parseFloat(inputs.drivenSpeed), inputs.drivenSpeedUnit || 'rpm');
  
    let providedCount = (t1 > 0 ? 1 : 0) + (t2 > 0 ? 1 : 0) + (rpm1 > 0 ? 1 : 0) + (rpm2 > 0 ? 1 : 0);
  
    if (providedCount < 3) {
      return {
        summary: [{ label: "Status", value: "Please enter exactly 3 values to solve for the 4th.", isHighlight: true }]
      };
    }
    if (providedCount > 3) {
        return {
            summary: [{ label: "Status", value: "Please leave exactly one field as 0 to calculate it.", isHighlight: true }]
          };
    }
  
    let missing = '';
  
    // --- REVERSE SOLVER LOGIC ---
    // Core Formula: T1 × RPM1 = T2 × RPM2
    if (t1 === 0) {
      missing = 'driverTeeth';
      t1 = (t2 * rpm2) / rpm1;
    } else if (t2 === 0) {
      missing = 'drivenTeeth';
      t2 = (t1 * rpm1) / rpm2;
    } else if (rpm1 === 0) {
      missing = 'driverSpeed';
      rpm1 = (t2 * rpm2) / t1;
    } else if (rpm2 === 0) {
      missing = 'drivenSpeed';
      rpm2 = (t1 * rpm1) / t2;
    }
  
    // Calculate System Ratios
    let gearRatio = t2 / t1;
    let systemType = gearRatio > 1 ? "Gear Reduction (More Torque)" : gearRatio < 1 ? "Overdrive (More Speed)" : "1:1 Direct Drive";
  
    // Formatting Output
    const formatNum = (num) => Number(num.toFixed(2)).toString();
    const formatTeeth = (num) => Math.round(num).toString(); // Gear teeth must be whole numbers
  
    return {
      summary: [
        { label: "Driver Teeth (T1)", value: formatTeeth(t1), isHighlight: missing === 'driverTeeth' },
        { label: "Driven Teeth (T2)", value: formatTeeth(t2), isHighlight: missing === 'drivenTeeth' },
        { label: "Driver Speed (RPM1)", value: `${formatNum(rpm1)} RPM`, isHighlight: missing === 'driverSpeed' },
        { label: "Driven Speed (RPM2)", value: `${formatNum(rpm2)} RPM`, isHighlight: missing === 'drivenSpeed' },
        { label: "Gear Ratio", value: `${formatNum(gearRatio)} : 1`, isHighlight: false },
        { label: "System Behavior", value: systemType, isHighlight: true }
      ]
    };
  }