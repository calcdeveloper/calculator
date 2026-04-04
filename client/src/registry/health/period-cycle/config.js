export const config = {
    id: "period-cycle-calculator",
    name: "Period & Menstrual Cycle Calculator",
    description: "Track your menstrual cycle, predict your next period date, and discover your estimated ovulation and fertile window.",
    category: "health",
    inputs: [
      {
        id: "last_period_date",
        label: "First Day of Last Period (LMP)",
        type: "date",
        defaultValue: new Date().toISOString().split('T')[0] // Defaults to today
      },
      {
        id: "cycle_length",
        label: "Average Cycle Length (Days)",
        type: "number",
        placeholder: "e.g., 28",
        defaultValue: "28"
      },
      {
        id: "period_duration",
        label: "Average Period Duration (Days)",
        type: "number",
        placeholder: "e.g., 5",
        defaultValue: "5"
      }
    ]
  };