export const calculateLogic = (inputs) => {
    const shape = inputs.shape || 'rectangle';
    const inputUnit = inputs.inputUnit || 'cm';
    const outputUnit = inputs.outputUnit || 'cm';
    
    // 1. Conversion Matrix (Everything relative to 1 Meter)
    const toMeters = {
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000,
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.344
    };
  
    const inRate = toMeters[inputUnit];
    const outRate = toMeters[outputUnit];
  
    // Helper function to grab an input and instantly convert it to Meters
    const getVal = (id) => (Number(inputs[id]) || 0) * inRate;
  
    let areaM2 = 0; // Area stored in Square Meters
    let perimM = 0; // Perimeter stored in Meters
    let shapeName = '';
    let perimeterLabel = 'Perimeter';
  
    // Format to avoid extreme trailing decimals (e.g., 5.0000000001)
    const formatNum = (num) => parseFloat(num.toFixed(6)).toString();
  
    try {
      if (shape === 'rectangle') {
        shapeName = 'Rectangle';
        const l = getVal('rectL');
        const w = getVal('rectW');
        if (l <= 0 || w <= 0) throw new Error("Length and Width must be > 0.");
        areaM2 = l * w;
        perimM = 2 * (l + w);
  
      } else if (shape === 'square') {
        shapeName = 'Square';
        const s = getVal('sqSide');
        if (s <= 0) throw new Error("Side must be > 0.");
        areaM2 = s * s;
        perimM = 4 * s;
  
      } else if (shape === 'circle') {
        shapeName = 'Circle';
        perimeterLabel = 'Circumference';
        const r = getVal('circRad');
        if (r <= 0) throw new Error("Radius must be > 0.");
        areaM2 = Math.PI * (r * r);
        perimM = 2 * Math.PI * r;
  
      } else if (shape === 'triangle') {
        shapeName = 'Triangle';
        const a = getVal('triA');
        const b = getVal('triB');
        const c = getVal('triC');
        if (a <= 0 || b <= 0 || c <= 0) throw new Error("All 3 sides must be > 0.");
        if (a + b <= c || a + c <= b || b + c <= a) throw new Error("Invalid Triangle: Sum of two sides must exceed the third.");
        perimM = a + b + c;
        const s = perimM / 2;
        areaM2 = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  
      } else if (shape === 'trapezoid') {
        shapeName = 'Trapezoid';
        const a = getVal('trapBase1');
        const b = getVal('trapBase2');
        const h = getVal('trapHeight');
        const c = getVal('trapSide1');
        const d = getVal('trapSide2');
        if (a <= 0 || b <= 0 || h <= 0 || c <= 0 || d <= 0) throw new Error("All inputs must be > 0.");
        areaM2 = ((a + b) / 2) * h;
        perimM = a + b + c + d;
  
      } else if (shape === 'parallelogram') {
        shapeName = 'Parallelogram';
        const b = getVal('paraBase');
        const a = getVal('paraSide');
        const h = getVal('paraHeight');
        if (b <= 0 || a <= 0 || h <= 0) throw new Error("Base, Side, and Height must be > 0.");
        areaM2 = b * h;
        perimM = 2 * (a + b);
  
      } else if (shape === 'ellipse') {
        shapeName = 'Ellipse';
        const a = getVal('ellipA');
        const b = getVal('ellipB');
        if (a <= 0 || b <= 0) throw new Error("Axes must be > 0.");
        areaM2 = Math.PI * a * b;
        perimM = Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
  
      } else if (shape === 'sector') {
        shapeName = 'Sector';
        const r = getVal('sectRad');
        // Angles do not get converted to meters! Keep this raw.
        const theta = Number(inputs.sectAngle) || 0; 
        if (r <= 0 || theta <= 0 || theta > 360) throw new Error("Radius must be > 0, Angle must be 1-360.");
        areaM2 = (theta / 360) * Math.PI * (r * r);
        perimM = (theta / 360) * 2 * Math.PI * r + (2 * r);
      }
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  
    // Convert from baseline metric back to the desired Output Unit
    const finalArea = areaM2 / Math.pow(outRate, 2); // Corrected to use areaM2
    const finalPerimeter = perimM / outRate;         // Corrected to use perimM
  
    return {
      summary: [
        { 
          label: `Total Area`, 
          value: `${formatNum(finalArea)} ${outputUnit}²`, 
          isHighlight: true 
        },
        { 
          label: perimeterLabel, // Dynamically uses 'Circumference' for circles
          value: `${formatNum(finalPerimeter)} ${outputUnit}`, 
          isHighlight: true 
        },
        { 
          label: 'Evaluated Shape', 
          value: shapeName, 
          isHighlight: false 
        }
      ],
      referenceTable: {
        headers: ["Metric", "Converted Value"],
        rows: [
          ["Shape Type", shapeName],
          ["Input Unit", inputUnit],
          ["Output Unit", outputUnit],
          ["Calculated Area", `${formatNum(finalArea)} ${outputUnit}²`],
          [`Calculated ${perimeterLabel}`, `${formatNum(finalPerimeter)} ${outputUnit}`]
        ]
      }
    };
  };