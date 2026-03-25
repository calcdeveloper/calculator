export const calculateLogic = (inputs) => {
    const { calcMethod, targetDate, cycleLength, usWeeks, usDays, ivfAge } = inputs;
    
    // SAFETY CHECK: Prevents crashes if layout sends invalid date
    if (!targetDate || !isNaN(targetDate)) {
      return {
        summary: [
          { label: 'Estimated Due Date', value: 'Select a Date', isCurrency: false, isHighlight: true },
          { label: 'Current Progress', value: '0 wk, 0 d', isCurrency: false },
          { label: 'Current Stage', value: '-', isCurrency: false },
          { label: 'Days Remaining', value: 0, isCurrency: false }
        ],
        chartData: [{ name: 'Awaiting Valid Date', value: 100 }], 
        schedule: [], 
        referenceTable: { headers: [], rows: [] } 
      };
    }
  
    const baseDate = new Date(targetDate);
    baseDate.setHours(12, 0, 0, 0); // Normalize time to avoid timezone jumps
    let dueDate;
  
    // 1. Calculate Expected Due Date based on the chosen method
    if (calcMethod === 'last_period') {
      const daysToAdd = 280 + (Number(cycleLength || 28) - 28);
      dueDate = new Date(baseDate.getTime() + daysToAdd * 86400000);
    } else if (calcMethod === 'due_date') {
      dueDate = new Date(baseDate.getTime());
    } else if (calcMethod === 'ultrasound') {
      const currentGestationalDays = (Number(usWeeks || 8) * 7) + Number(usDays || 0);
      const daysRemaining = 280 - currentGestationalDays;
      dueDate = new Date(baseDate.getTime() + daysRemaining * 86400000);
    } else if (calcMethod === 'conception') {
      dueDate = new Date(baseDate.getTime() + 266 * 86400000);
    } else if (calcMethod === 'ivf') {
      const daysToAdd = 266 - Number(ivfAge || 5);
      dueDate = new Date(baseDate.getTime() + daysToAdd * 86400000);
    }
  
    // 2. Calculate Current Progress 
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    
    const diffTimeTotal = dueDate.getTime() - today.getTime();
    let daysRemaining = Math.max(0, Math.ceil(diffTimeTotal / 86400000));
    
    let diffDays = 280 - daysRemaining; // Total days pregnant
    if (diffDays < 0) diffDays = 0;
  
    const currentWeeks = Math.floor(diffDays / 7);
    const currentDays = diffDays % 7;
  
    // 3. Determine Trimester
    let trimester = "1st Trimester";
    if (currentWeeks >= 14 && currentWeeks <= 27) {
      trimester = "2nd Trimester";
    } else if (currentWeeks >= 28 && currentWeeks <= 42) {
      trimester = "3rd Trimester";
    } else if (currentWeeks > 42) {
      trimester = "Post-term";
    }
  
    // 4. Chart Logic
    let progressPercent = Math.min(100, Math.round((diffDays / 280) * 100));
    if (isNaN(progressPercent)) progressPercent = 0;
  
    let chartData;
    if (progressPercent >= 100) {
       chartData = [{ name: 'Completed (%)', value: 100 }];
    } else if (progressPercent <= 0) {
       chartData = [{ name: 'Remaining (%)', value: 100 }];
    } else {
       chartData = [
         { name: 'Completed (%)', value: progressPercent },
         { name: 'Remaining (%)', value: 100 - progressPercent }
       ];
    }
  
    const formattedDueDate = dueDate.toLocaleDateString('en-US', { 
      month: 'long', day: 'numeric', year: 'numeric' 
    });
  
    return {
      summary: [
        { label: 'Estimated Due Date', value: formattedDueDate, isCurrency: false, isHighlight: true },
        { label: 'Current Progress', value: `${currentWeeks} wk, ${currentDays} d`, isCurrency: false },
        { label: 'Current Stage', value: trimester, isCurrency: false },
        { label: 'Days Remaining', value: daysRemaining, isCurrency: false }
      ],
      chartData: chartData,
      schedule: [], 
      referenceTable: {
        headers: ["Trimester", "Week Range & Milestones"],
        rows: [
          ["1st Trimester (Weeks 1-13)", "Crucial early development; baby's organs begin to form."],
          ["2nd Trimester (Weeks 14-27)", "Rapid growth; you may begin to feel the baby move."],
          ["3rd Trimester (Weeks 28-40+)", "Final maturation, weight gain, and preparation for birth."]
        ]
      }
    };
  };