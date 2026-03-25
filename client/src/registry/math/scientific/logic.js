export const calculateLogic = (inputs) => {
    const { calcMode, trigOp, angleUnit, logOp, powerOp, num1, num2 } = inputs;
    
    const x = Number(num1);
    const y = Number(num2);
  
    // Helper to clean up floating point errors (e.g., sin(180) returning 1.22e-16 instead of 0)
    const cleanFloat = (num) => {
      if (Math.abs(num) < 1e-10) return 0;
      return Number(num.toPrecision(12));
    };
  
    // ---------------------------------------------------------
    // MODE: TRIGONOMETRY
    // ---------------------------------------------------------
    if (calcMode === 'trig') {
      let result = 0;
      let explanation = '';
      
      const isInverse = ['asin', 'acos', 'atan'].includes(trigOp);
      
      if (isInverse) {
        // Inverse Trig (Input is a ratio, output is an angle)
        if ((trigOp === 'asin' || trigOp === 'acos') && (x < -1 || x > 1)) {
          return { summary: [{ label: 'Error', value: 'Value must be between -1 and 1' }] };
        }
        
        if (trigOp === 'asin') result = Math.asin(x);
        else if (trigOp === 'acos') result = Math.acos(x);
        else if (trigOp === 'atan') result = Math.atan(x);
        
        const radAns = cleanFloat(result);
        const degAns = cleanFloat(result * (180 / Math.PI));
        
        return {
          summary: [
            { label: `${trigOp}(${x}) in Degrees`, value: `${degAns}°`, isHighlight: true },
            { label: `${trigOp}(${x}) in Radians`, value: `${radAns} rad` }
          ]
        };
      } else {
        // Regular Trig (Input is an angle, output is a ratio)
        const radVal = angleUnit === 'deg' ? x * (Math.PI / 180) : x;
        
        if (trigOp === 'sin') result = Math.sin(radVal);
        else if (trigOp === 'cos') result = Math.cos(radVal);
        else if (trigOp === 'tan') {
          if (angleUnit === 'deg' && x % 180 === 90) {
            return { summary: [{ label: 'Result', value: 'Undefined (Infinity)', isHighlight: true }] };
          }
          result = Math.tan(radVal);
        }
        
        return {
          summary: [{ label: `${trigOp}(${x}${angleUnit === 'deg' ? '°' : ' rad'})`, value: cleanFloat(result).toString(), isHighlight: true }]
        };
      }
    }
  
    // ---------------------------------------------------------
    // MODE: LOGARITHMS
    // ---------------------------------------------------------
    if (calcMode === 'log') {
      if (x <= 0) return { summary: [{ label: 'Error', value: 'Value (x) must be greater than 0' }] };
      
      let result = 0;
      let label = '';
      
      if (logOp === 'log10') {
        result = Math.log10(x);
        label = `log₁₀(${x})`;
      } else if (logOp === 'ln') {
        result = Math.log(x);
        label = `ln(${x})`;
      } else if (logOp === 'logBase') {
        if (y <= 0 || y === 1) return { summary: [{ label: 'Error', value: 'Base must be > 0 and ≠ 1' }] };
        result = Math.log(x) / Math.log(y);
        label = `log base ${y} of ${x}`;
      }
  
      return {
        summary: [{ label: label, value: cleanFloat(result).toString(), isHighlight: true }]
      };
    }
  
    // ---------------------------------------------------------
    // MODE: POWERS & ROOTS
    // ---------------------------------------------------------
    if (calcMode === 'power') {
      let result = 0;
      let label = '';
  
      if (powerOp === 'square') {
        result = Math.pow(x, 2);
        label = `${x}²`;
      } else if (powerOp === 'sqrt') {
        if (x < 0) return { summary: [{ label: 'Error', value: 'Cannot square root a negative number' }] };
        result = Math.sqrt(x);
        label = `√${x}`;
      } else if (powerOp === 'power') {
        result = Math.pow(x, y);
        label = `${x} ^ ${y}`;
      } else if (powerOp === 'nthRoot') {
        if (y === 0) return { summary: [{ label: 'Error', value: 'Root (y) cannot be zero' }] };
        if (x < 0 && y % 2 === 0) return { summary: [{ label: 'Error', value: 'Even root of a negative number is undefined' }] };
        // Handle negative x for odd roots correctly
        result = x < 0 ? -Math.pow(-x, 1/y) : Math.pow(x, 1/y);
        label = `${y}-th root of ${x}`;
      }
  
      return {
        summary: [{ label: label, value: cleanFloat(result).toString(), isHighlight: true }]
      };
    }
  
    // ---------------------------------------------------------
    // MODE: FACTORIAL
    // ---------------------------------------------------------
    if (calcMode === 'factorial') {
      if (x < 0 || !Number.isInteger(x)) {
        return { summary: [{ label: 'Error', value: 'Factorial requires a positive integer' }] };
      }
      if (x > 170) {
        return { summary: [{ label: 'Result', value: 'Infinity (Number too large)', isHighlight: true }] };
      }
  
      let result = 1;
      for (let i = 2; i <= x; i++) {
        result *= i;
      }
  
      return {
        summary: [{ label: `${x}!`, value: result.toString(), isHighlight: true }]
      };
    }
  
    return { summary: [] };
  };