export const calculateLogic = (inputs) => {
    const attended = Number(inputs.attendedClasses) || 0;
    const total = Number(inputs.totalClasses) || 0;
    const target = Number(inputs.targetPercentage) || 75;
  
    let summary = [];
    let rows = [];
  
    try {
      if (total <= 0) {
        throw new Error("Total classes conducted must be greater than 0.");
      }
      if (attended < 0) {
        throw new Error("Attended classes cannot be negative.");
      }
      if (attended > total) {
        throw new Error("You cannot attend more classes than were conducted!");
      }
      if (target <= 0 || target > 100) {
        throw new Error("Target percentage must be between 1 and 100.");
      }
  
      // 1. Calculate Current Percentage
      const currentPercentage = (attended / total) * 100;
  
      summary.push({ 
        label: 'Current Attendance', 
        value: `${currentPercentage.toFixed(2)}%`, 
        isHighlight: true 
      });
  
      rows.push(["Classes Attended", attended]);
      rows.push(["Total Classes", total]);
      rows.push(["Current Percentage", `${currentPercentage.toFixed(2)}%`]);
  
      // 2. Future Prediction Logic
      if (currentPercentage < target) {
        // Formula: (attended + x) / (total + x) = target / 100
        // x = (target * total - 100 * attended) / (100 - target)
        const classesNeeded = Math.ceil(((target * total) - (100 * attended)) / (100 - target));
        
        summary.push({ 
          label: 'Status', 
          value: `Short by ${(target - currentPercentage).toFixed(2)}%` 
        });
        rows.push([
          "Action Required", 
          `You must attend ${classesNeeded} more consecutive classes to reach ${target}%.`
        ]);
  
      } else if (currentPercentage > target) {
        // Formula: attended / (total + y) = target / 100
        // y = (100 * attended - target * total) / target
        const classesCanMiss = Math.floor(((100 * attended) - (target * total)) / target);
        
        summary.push({ 
          label: 'Status', 
          value: 'On Track! Safe to miss classes.' 
        });
        
        if (classesCanMiss === 0) {
           rows.push(["Action Required", `You are exactly on track. You cannot miss the next class.`]);
        } else {
           rows.push(["Action Required", `You can safely miss ${classesCanMiss} upcoming classes and stay >= ${target}%.`]);
        }
      } else {
        summary.push({ 
          label: 'Status', 
          value: 'Exactly on Target' 
        });
        rows.push(["Action Required", "You are exactly on your target. Don't miss the next class!"]);
      }
  
      return { summary, referenceTable: { headers: ["Attendance Breakdown", "Details"], rows } };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };