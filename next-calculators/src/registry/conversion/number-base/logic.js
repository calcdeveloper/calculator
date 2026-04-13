export const calculateLogic = (inputs) => {
    const { inputValue, fromBase, toBase } = inputs;
    let summary = [];
    let rows = [];
  
    try {
      const val = inputValue.toString().trim().toUpperCase();
      if (!val) throw new Error("Please enter a value.");
  
      const fromRadix = parseInt(fromBase, 10);
      const toRadix = parseInt(toBase, 10);
  
      // Validate characters based on the selected input base
      const validChars = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^[0-9]+$/,
        16: /^[0-9A-F]+$/
      };
  
      if (!validChars[fromRadix].test(val)) {
        throw new Error(`Invalid characters for Base-${fromRadix}.`);
      }
  
      // Step 1: Convert input to Decimal (Base 10)
      const decimalValue = parseInt(val, fromRadix);
  
      // Step 2: Convert Decimal to Target Base
      const resultValue = decimalValue.toString(toRadix).toUpperCase();
  
      const baseNames = {
        2: "Binary",
        8: "Octal",
        10: "Decimal",
        16: "Hexadecimal"
      };
  
      if (fromBase === toBase) {
        summary = [{ label: `Result in ${baseNames[toRadix]}`, value: resultValue, isHighlight: true }];
        return { summary, referenceTable: { headers: ["Step", "Value"], rows: [["Note", "Same base selected."]] } };
      }
  
      summary = [{ 
        label: `${val} (${baseNames[fromRadix]}) =`, 
        value: `${resultValue} (${baseNames[toRadix]})`, 
        isHighlight: true 
      }];
  
      rows = [
        ["Input Value", val],
        ["From Base", baseNames[fromRadix]],
        ["To Base", baseNames[toRadix]],
        ["Decimal Equivalent", decimalValue.toString(10)],
        ["Final Output", resultValue]
      ];
  
      return {
        summary,
        referenceTable: { headers: ["Conversion Details", "Data"], rows }
      };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };