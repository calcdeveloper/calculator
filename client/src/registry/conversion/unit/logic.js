export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Define all units relative to 1 Meter (Base Unit)
      const conversionRates = {
        m: 1,
        km: 1000,
        cm: 0.01,
        mm: 0.001,
        um: 1e-6,
        nm: 1e-9,
        mi: 1609.344,
        yd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
        nmi: 1852
      };
  
      const unitNames = {
        m: "Meters", km: "Kilometers", cm: "Centimeters", mm: "Millimeters",
        um: "Micrometers", nm: "Nanometers", mi: "Miles", yd: "Yards",
        ft: "Feet", in: "Inches", nmi: "Nautical Miles"
      };
  
      if (fromUnit === toUnit) {
        summary = [{ label: `Result in ${unitNames[toUnit]}`, value: value.toString(), isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "Same unit selected."]] } };
      }
  
      // Convert from origin unit to base unit (Meters), then to target unit
      const valueInMeters = value * conversionRates[fromUnit];
      const result = valueInMeters / conversionRates[toUnit];
      
      // Calculate the direct multiplier for educational display
      const directMultiplier = conversionRates[fromUnit] / conversionRates[toUnit];
      
      // Format the numbers beautifully to avoid huge scientific notation messes for UI
      const formatNumber = (num) => {
        if (num === 0) return "0";
        if (num > 1e6 || num < 1e-4) return num.toExponential(4);
        return Number(num.toPrecision(7)).toString();
      };
  
      const formattedResult = formatNumber(result);
      const formattedMultiplier = formatNumber(directMultiplier);
  
      summary = [{ 
        label: `${value} ${fromUnit} =`, 
        value: `${formattedResult} ${toUnit}`, 
        isHighlight: true 
      }];
  
      rows = [
        ["From Unit", unitNames[fromUnit]],
        ["To Unit", unitNames[toUnit]],
        ["Conversion Formula", `Multiply the length value by ${formattedMultiplier}`],
        ["Calculation", `${value} × ${formattedMultiplier}`],
        ["Exact Output", `${result} ${toUnit}`]
      ];
  
      return {
        summary,
        referenceTable: { headers: ["Conversion Details", "Data"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };