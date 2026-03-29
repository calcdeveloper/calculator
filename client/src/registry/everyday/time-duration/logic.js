export const calculateLogic = (inputs) => {
    const { 
      startHour, startMin, startSec, startAmPm, 
      endHour, endMin, endSec, endAmPm 
    } = inputs;
    
    let summary = [];
    let rows = [];
  
    // Helper function: Convert 12-hour AM/PM to 24-hour integer
    const convertTo24Hour = (hour, ampm) => {
      let h = Number(hour) || 0;
      if (ampm === 'PM' && h !== 12) h += 12;
      if (ampm === 'AM' && h === 12) h = 0;
      return h;
    };
  
    // Helper function: Format display string like "08:30:00 AM"
    const formatDisplayTime = (h, m, s, ampm) => {
      const pad = (num) => String(num || 0).padStart(2, '0');
      return `${pad(h)}:${pad(m)}:${pad(s)} ${ampm}`;
    };
  
    try {
      // 1. Convert Start Time to total seconds from midnight
      const sH24 = convertTo24Hour(startHour, startAmPm);
      const startTotalSeconds = (sH24 * 3600) + ((Number(startMin) || 0) * 60) + (Number(startSec) || 0);
  
      // 2. Convert End Time to total seconds from midnight
      const eH24 = convertTo24Hour(endHour, endAmPm);
      let endTotalSeconds = (eH24 * 3600) + ((Number(endMin) || 0) * 60) + (Number(endSec) || 0);
  
      // 3. Handle crossing midnight (if end time is earlier than start time)
      if (endTotalSeconds < startTotalSeconds) {
        endTotalSeconds += 86400; // Add 24 hours worth of seconds
      }
  
      // 4. Calculate the difference
      const diffSecondsTotal = endTotalSeconds - startTotalSeconds;
      
      // 5. Break difference back down into Hours, Minutes, Seconds
      const durationHours = Math.floor(diffSecondsTotal / 3600);
      const durationMinutes = Math.floor((diffSecondsTotal % 3600) / 60);
      const durationSeconds = diffSecondsTotal % 60;
  
      // Display values
      const startTimeDisplay = formatDisplayTime(startHour, startMin, startSec, startAmPm);
      const endTimeDisplay = formatDisplayTime(endHour, endMin, endSec, endAmPm);
  
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
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };