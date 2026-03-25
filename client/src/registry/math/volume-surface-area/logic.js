export const calculateLogic = (inputs) => {
    const shape = inputs.shape || 'sphere';
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
  
    // Instantly convert incoming inputs to Meters
    const getVal = (id) => (Number(inputs[id]) || 0) * inRate;
  
    let volumeM3 = 0; // Volume in Cubic Meters
    let surfaceAreaM2 = 0; // Surface Area in Square Meters
    let shapeName = '';
  
    const formatNum = (num) => parseFloat(num.toFixed(6)).toString();
  
    try {
      if (shape === 'sphere') {
        shapeName = 'Sphere';
        const r = getVal('sphRad');
        if (r <= 0) throw new Error("Radius must be > 0.");
        volumeM3 = (4/3) * Math.PI * Math.pow(r, 3);
        surfaceAreaM2 = 4 * Math.PI * Math.pow(r, 2);
  
      } else if (shape === 'cube') {
        shapeName = 'Cube';
        const a = getVal('cubeSide');
        if (a <= 0) throw new Error("Side must be > 0.");
        volumeM3 = Math.pow(a, 3);
        surfaceAreaM2 = 6 * Math.pow(a, 2);
  
      } else if (shape === 'rectangular') {
        shapeName = 'Rectangular Prism';
        const l = getVal('rectL');
        const w = getVal('rectW');
        const h = getVal('rectH');
        if (l <= 0 || w <= 0 || h <= 0) throw new Error("All dimensions must be > 0.");
        volumeM3 = l * w * h;
        surfaceAreaM2 = 2 * (l*w + l*h + w*h);
  
      } else if (shape === 'cylinder') {
        shapeName = 'Cylinder';
        const r = getVal('cylRad');
        const h = getVal('cylH');
        if (r <= 0 || h <= 0) throw new Error("Radius and Height must be > 0.");
        volumeM3 = Math.PI * Math.pow(r, 2) * h;
        surfaceAreaM2 = 2 * Math.PI * r * h + 2 * Math.PI * Math.pow(r, 2);
  
      } else if (shape === 'tube') {
        shapeName = 'Tube (Hollow Cylinder)';
        const R = getVal('tubeOutRad');
        const r = getVal('tubeInRad');
        const h = getVal('tubeH');
        if (R <= 0 || r <= 0 || h <= 0) throw new Error("Radii and Height must be > 0.");
        if (r >= R) throw new Error("Outer Radius must be larger than Inner Radius.");
        volumeM3 = Math.PI * h * (Math.pow(R, 2) - Math.pow(r, 2));
        surfaceAreaM2 = 2 * Math.PI * h * (R + r) + 2 * Math.PI * (Math.pow(R, 2) - Math.pow(r, 2));
  
      } else if (shape === 'cone') {
        shapeName = 'Cone';
        const r = getVal('coneRad');
        const h = getVal('coneH');
        if (r <= 0 || h <= 0) throw new Error("Radius and Height must be > 0.");
        volumeM3 = (1/3) * Math.PI * Math.pow(r, 2) * h;
        const slant = Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2));
        surfaceAreaM2 = Math.PI * r * (r + slant);
  
      } else if (shape === 'frustum') {
        shapeName = 'Conical Frustum';
        const r1 = getVal('frusTopRad');
        const r2 = getVal('frusBotRad');
        const h = getVal('frusH');
        if (r1 <= 0 || r2 <= 0 || h <= 0) throw new Error("Radii and Height must be > 0.");
        volumeM3 = (1/3) * Math.PI * h * (Math.pow(r1, 2) + r1*r2 + Math.pow(r2, 2));
        const slant = Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(h, 2));
        surfaceAreaM2 = Math.PI * (r1 + r2) * slant + Math.PI * Math.pow(r1, 2) + Math.PI * Math.pow(r2, 2);
  
      } else if (shape === 'capsule') {
        shapeName = 'Capsule';
        const r = getVal('capRad');
        const a = getVal('capCylH');
        if (r <= 0 || a <= 0) throw new Error("Radius and Cylinder Height must be > 0.");
        volumeM3 = Math.PI * Math.pow(r, 2) * ((4/3) * r + a);
        surfaceAreaM2 = 2 * Math.PI * r * (2*r + a);
  
      } else if (shape === 'cap') {
        shapeName = 'Spherical Cap';
        const a = getVal('scapBaseRad');
        const h = getVal('scapH');
        if (a <= 0 || h <= 0) throw new Error("Base Radius and Height must be > 0.");
        volumeM3 = (1/6) * Math.PI * h * (3 * Math.pow(a, 2) + Math.pow(h, 2));
        // Total SA = curved surface + base circle
        surfaceAreaM2 = Math.PI * (Math.pow(a, 2) + Math.pow(h, 2)) + Math.PI * Math.pow(a, 2);
  
      } else if (shape === 'ellipsoid') {
        shapeName = 'Ellipsoid';
        const a = getVal('ellipA');
        const b = getVal('ellipB');
        const c = getVal('ellipC');
        if (a <= 0 || b <= 0 || c <= 0) throw new Error("All 3 axes must be > 0.");
        volumeM3 = (4/3) * Math.PI * a * b * c;
        // Knud Thomsen's Approximation for SA
        const p = 1.6075;
        const ap = Math.pow(a, p);
        const bp = Math.pow(b, p);
        const cp = Math.pow(c, p);
        surfaceAreaM2 = 4 * Math.PI * Math.pow( (ap*bp + ap*cp + bp*cp) / 3, 1/p );
  
      } else if (shape === 'pyramid') {
        shapeName = 'Square Pyramid';
        const a = getVal('pyramidBase');
        const h = getVal('pyramidH');
        if (a <= 0 || h <= 0) throw new Error("Base and Height must be > 0.");
        volumeM3 = (1/3) * Math.pow(a, 2) * h;
        const slant = Math.sqrt(Math.pow(h, 2) + Math.pow(a/2, 2));
        surfaceAreaM2 = Math.pow(a, 2) + 2 * a * slant;
      }
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  
    // 3. Convert from Meters back to the desired Output Unit
  const finalVolume = volumeM3 / Math.pow(outRate, 3); // Volume = Cubic scale
  const finalSurfaceArea = surfaceAreaM2 / Math.pow(outRate, 2); // Area = Square scale

  return {
    summary: [
      { 
        label: `Total Volume`, 
        // Updated to use the superscript ³ symbol
        value: `${formatNum(finalVolume)} ${outputUnit}³`, 
        isHighlight: true 
      },
      { 
        label: `Surface Area`, 
        // Updated to use the superscript ² symbol
        value: `${formatNum(finalSurfaceArea)} ${outputUnit}²`, 
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
        ["Calculated Volume", `${formatNum(finalVolume)} ${outputUnit}³`],
        ["Calculated Surface Area", `${formatNum(finalSurfaceArea)} ${outputUnit}²`]
      ]
    }
  };
};