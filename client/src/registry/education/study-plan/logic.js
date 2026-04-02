export const calculateLogic = (inputs) => {
    const { totalUnits, daysLeft, revisionDays, hoursPerDay } = inputs;
  
    if (!totalUnits || !daysLeft || daysLeft <= revisionDays) return null;
  
    const netStudyDays = daysLeft - revisionDays;
    const unitsPerDay = totalUnits / netStudyDays;
    const timePerUnit = (netStudyDays * hoursPerDay) / totalUnits;
  
    return {
      summary: [
        {
          label: "Daily Target",
          value: `${unitsPerDay.toFixed(2)} Units/Day`,
          isHighlight: true,
        },
        {
          label: "Time per Unit",
          value: `${timePerUnit.toFixed(1)} Hours`,
          isHighlight: true,
        },
        {
          label: "Actual Study Days",
          value: `${netStudyDays} Days`,
        },
        {
          label: "Total Study Hours",
          value: `${(netStudyDays * hoursPerDay).toFixed(0)} Hrs`,
        },
      ],
      chartData: [
        { name: "New Learning Days", value: netStudyDays },
        { name: "Revision Days", value: revisionDays },
      ],
    };
  };