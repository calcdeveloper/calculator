export const calculateLogic = (inputs) => {
    const { inputValue, fromUnit, toUnit } = inputs;
    const value = Number(inputValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(value)) throw new Error("Please enter a valid number.");
  
      // Define all units relative to 1 bit per second (bps) using decimal networking standards
      const conversionRates = {
        bps: 1,
        Kbps: 1000,
        Mbps: 1000000,
        Gbps: 1000000000,
        Bps: 8,                  // 8 bits in a Byte
        KBps: 8000,              // 8 * 1000
        MBps: 8000000,           // 8 * 1,000,000
        GBps: 8000000000         // 8 * 1,000,000,000
      };
  
      const unitNames = {
        bps: "bits per second", Kbps: "Kilobits per second", 
        Mbps: "Megabits per second", Gbps: "Gigabits per second", 
        Bps: "Bytes per second", KBps: "Kilobytes per second", 
        MBps: "Megabytes per second", GBps: "Gigabytes per second"
      };
  
      const unitSymbols = {
        bps: "bps", Kbps: "Kbps", Mbps: "Mbps", Gbps: "Gbps", 
        Bps: "B/s", KBps: "KB/s", MBps: "MB/s", GBps: "GB/s"
      };
  
      const formatNumber = (num) => {
        if (num === 0) return "0";
        let formatted = num.toLocaleString('en-US', { 
          useGrouping: false, 
          maximumFractionDigits: 6 
        });
        if (formatted.includes('.')) {
          formatted = formatted.replace(/\.?0+$/, ''); // Strip trailing zeroes safely
        }
        return formatted;
      };
  
      const formattedInput = formatNumber(value);
  
      if (fromUnit === toUnit) {
        summary = [{ label: `Result in ${unitNames[toUnit]}`, value: `${formattedInput} ${unitSymbols[toUnit]}`, isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "Same unit selected."]] } };
      }
  
      // Convert from origin unit to base unit (bps), then to target unit
      const valueInBps = value * conversionRates[fromUnit];
      const result = valueInBps / conversionRates[toUnit];
      
      // Calculate the direct multiplier
      const directMultiplier = conversionRates[fromUnit] / conversionRates[toUnit];
      
      const formattedResult = formatNumber(result);
      const formattedMultiplier = formatNumber(directMultiplier);
  
      summary = [{ 
        label: `${formattedInput} ${unitSymbols[fromUnit]} =`, 
        value: `${formattedResult} ${unitSymbols[toUnit]}`, 
        isHighlight: true 
      }];
  
      rows = [
        ["From Unit", unitNames[fromUnit]],
        ["To Unit", unitNames[toUnit]],
        ["Conversion Formula", `Multiply the speed by ${formattedMultiplier}`],
        ["Calculation", `${formattedInput} × ${formattedMultiplier}`],
        ["Exact Output", `${formattedResult} ${unitSymbols[toUnit]}`]
      ];
  
      return {
        summary,
        referenceTable: { headers: ["Conversion Details", "Data"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };