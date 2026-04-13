const defaultDateStr = new Date().toISOString().split('T')[0];

export const config = {
  id: 'pregnancy-due-date',
  name: 'Pregnancy Due Date Calculator',
  description: 'Calculate your Estimated Due Date (EDD), current trimester, and track your pregnancy progress.',
  category: 'health',
  seoTitle: 'Free Pregnancy Due Date Calculator | Calculate Your EDD',
  seoDescription: 'Calculate your exact pregnancy due date, find out what trimester you are in, and track your baby\'s progress week by week using our free EDD calculator.',
  
  inputs: [
    {
      id: 'calcMethod',
      label: 'Calculation Method',
      type: 'select', 
      defaultValue: 'last_period',
      options: [
        { label: 'First Day of Last Period', value: 'last_period' },
        { label: 'Known Due Date', value: 'due_date' },
        { label: 'Ultrasound Date', value: 'ultrasound' },
        { label: 'Conception Date', value: 'conception' },
        { label: 'IVF Transfer Date', value: 'ivf' }
      ]
    },
    { 
      id: 'targetDate', 
      type: 'date', 
      defaultValue: defaultDateStr,
      dynamicProps: (inputs) => {
        if(inputs.calcMethod === 'last_period') return { label: 'First Day of Last Period' };
        if(inputs.calcMethod === 'due_date') return { label: 'Your Known Due Date' };
        if(inputs.calcMethod === 'ultrasound') return { label: 'Date of Ultrasound' };
        if(inputs.calcMethod === 'conception') return { label: 'Date of Conception' };
        if(inputs.calcMethod === 'ivf') return { label: 'IVF Transfer Date' };
        return { label: 'Select Date' };
      }
    },
    { 
      id: 'cycleLength', 
      label: 'Average Cycle Length', 
      min: 20, max: 45, step: 1, defaultValue: 28, suffix: ' Days',
      hidden: (inputs) => inputs.calcMethod !== 'last_period' 
    },
    { 
      id: 'usWeeks', 
      label: 'Ultrasound: Weeks Pregnant', 
      min: 4, max: 40, step: 1, defaultValue: 8, suffix: ' Wk',
      hidden: (inputs) => inputs.calcMethod !== 'ultrasound' 
    },
    { 
      id: 'usDays', 
      label: 'Ultrasound: Days Pregnant', 
      min: 0, max: 6, step: 1, defaultValue: 0, suffix: ' Days',
      hidden: (inputs) => inputs.calcMethod !== 'ultrasound' 
    },
    { 
      id: 'ivfAge', 
      label: 'Embryo Age at Transfer', 
      type: 'select', 
      defaultValue: 5, 
      options: [
        { label: '3-Day Embryo', value: 3 },
        { label: '5-Day Embryo', value: 5 }
      ],
      hidden: (inputs) => inputs.calcMethod !== 'ivf' 
    }
  ]
};