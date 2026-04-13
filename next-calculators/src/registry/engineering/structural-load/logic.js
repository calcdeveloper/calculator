export function calculateLogic(inputs) {
    // Convert units to Base SI: Meters (m) and Kilonewtons per square meter (kPa)
    const toBaseLength = (val, unit) => {
      if (isNaN(val) || val <= 0) return 0;
      return unit === 'ft' ? val * 0.3048 : val;
    };
  
    const toBasePressure = (val, unit) => {
      if (isNaN(val) || val <= 0) return 0;
      // 1 psf = 0.0478803 kPa (kN/m²)
      return unit === 'psf' ? val * 0.0478803 : val; 
    };
  
    let l = toBaseLength(parseFloat(inputs.length), inputs.lengthUnit || 'ft');
    let w = toBaseLength(parseFloat(inputs.width), inputs.widthUnit || 'ft');
    let dl = toBasePressure(parseFloat(inputs.deadLoad), inputs.deadLoadUnit || 'psf');
    let ll = toBasePressure(parseFloat(inputs.liveLoad), inputs.liveLoadUnit || 'psf');
  
    if (l === 0 || w === 0 || (dl === 0 && ll === 0)) {
      return {
        summary: [{ label: "Status", value: "Please enter length, width, and at least one load value.", isHighlight: true }]
      };
    }
  
    // Calculate Tributary Area (m²)
    let areaBase = l * w;
    let areaImperial = areaBase * 10.7639; // Convert m² to ft²
  
    // Calculate Total Point Loads in Base unit (kN)
    let totalDL_kN = areaBase * dl;
    let totalLL_kN = areaBase * ll;
  
    // ASD Load Combination: DL + LL
    let asdLoad_kN = totalDL_kN + totalLL_kN;
    let asdLoad_lbs = asdLoad_kN * 224.809; // Convert kN to lbf
  
    // LRFD Load Combination: 1.2(DL) + 1.6(LL)
    let lrfdLoad_kN = (1.2 * totalDL_kN) + (1.6 * totalLL_kN);
    let lrfdLoad_lbs = lrfdLoad_kN * 224.809; // Convert kN to lbf
  
    const formatNum = (num) => Number(num.toFixed(2)).toString();
    const formatForce = (num) => Number(num.toFixed(0)).toLocaleString(); // Whole numbers for large forces
  
    return {
      summary: [
        { label: "Tributary Area", value: `${formatNum(areaImperial)} ft²  (${formatNum(areaBase)} m²)`, isHighlight: false },
        { label: "ASD Total Load (DL + LL)", value: `${formatForce(asdLoad_lbs)} lbs`, isHighlight: true },
        { label: "ASD Metric Output", value: `${formatNum(asdLoad_kN)} kN`, isHighlight: false },
        { label: "LRFD Ultimate Load (1.2D + 1.6L)", value: `${formatForce(lrfdLoad_lbs)} lbs`, isHighlight: true },
        { label: "LRFD Metric Output", value: `${formatNum(lrfdLoad_kN)} kN`, isHighlight: false }
      ]
    };
  }