export const calculateLogic = (inputs) => {
  const { startTime, endTime } = inputs;
  
  let summary = [];
  let rows = [];

  // Helper function: Parse HTML5 time string "HH:mm:ss" or "HH:mm" into numbers
  const parseTime = (timeStr) => {
    if (!timeStr) return { h: 0, m: 0, s: 0 };
    const parts = timeStr.split(':');
    return {
      h: Number(parts[0]) || 0,
      m: Number(parts[1]) || 0,
      s: Number(parts[2]) || 0
    };
  };

  // Helper function: Format time back to user-friendly AM/PM display
  const formatDisplayTime = (h, m, s) => {
    const pad = (num) => String(num || 0).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 === 0 ? 12 : h % 12;
    return `${pad(displayH)}:${pad(m)}:${pad(s)} ${ampm}`;
  };

  try {
    // 1. Parse times
    const start = parseTime(startTime);
    const end = parseTime(endTime);

    // 2. Convert both times to total seconds from midnight
    const startTotalSeconds = (start.h * 3600) + (start.m * 60) + start.s;
    let endTotalSeconds = (end.h * 3600) + (end.m * 60) + end.s;

    // 3. Handle crossing midnight (e.g., night shifts)
    if (endTotalSeconds < startTotalSeconds) {
      endTotalSeconds += 86400; // Add 24 hours worth of seconds
    }

    // 4. Calculate the total difference in seconds
    const diffSecondsTotal = endTotalSeconds - startTotalSeconds;
    
    // 5. Break difference back down into Hours, Minutes, Seconds
    const durationHours = Math.floor(diffSecondsTotal / 3600);
    const durationMinutes = Math.floor((diffSecondsTotal % 3600) / 60);
    const durationSeconds = diffSecondsTotal % 60;

    // Format for display
    const startTimeDisplay = formatDisplayTime(start.h, start.m, start.s);
    const endTimeDisplay = formatDisplayTime(end.h, end.m, end.s);

    summary = [
      { 
        label: 'Total Duration', 
        value: `${durationHours}h ${durationMinutes}m ${durationSeconds}s`, 
        isHighlight: true 
      }
    ];
    
    rows = [
      ["Start Time", startTimeDisplay],
      ["End Time", endTimeDisplay],
      ["Duration Breakdown", `${durationHours} Hours, ${durationMinutes} Minutes, ${durationSeconds} Seconds`],
      ["Total in Minutes", `${(diffSecondsTotal / 60).toFixed(2)} Minutes`],
      ["Total in Hours", `${(diffSecondsTotal / 3600).toFixed(4)} Hours`]
    ];

    return { summary, referenceTable: { headers: ["Details", "Value"], rows } };

  } catch (err) {
    return { summary: [{ label: 'Error', value: 'Invalid time input provided.', isHighlight: true }] };
  }
};