export const config = {
    id: 'profit-loss-discount',
    name: 'Profit, Loss & Discount Calculator',
    description: 'Calculate profit, loss, cost price, selling price, marked price, and discounts using standard financial formulas.',
    category: 'math',
    inputs: [
      {
        id: 'calcMode',
        label: 'What do you want to calculate?',
        type: 'select',
        options: [
          { value: 'find_pl', label: 'Profit or Loss Amount & Percentage' },
          { value: 'find_sp', label: 'Selling Price (from CP & Profit/Loss %)' },
          { value: 'find_cp', label: 'Cost Price (from SP & Profit/Loss %)' },
          { value: 'find_discount', label: 'Discount Amount & Percentage' },
          { value: 'find_sp_discount', label: 'Selling Price (from Marked Price & Discount %)' }
        ],
        defaultValue: 'find_pl'
      },
      // --- MODE: Find Profit/Loss ---
      {
        id: 'cp1', label: 'Cost Price (CP)', type: 'number', defaultValue: 100, min: 0,
        showIf: (inputs) => inputs.calcMode === 'find_pl'
      },
      {
        id: 'sp1', label: 'Selling Price (SP)', type: 'number', defaultValue: 125, min: 0,
        showIf: (inputs) => inputs.calcMode === 'find_pl'
      },
      // --- MODE: Find Selling Price (from CP & %) ---
      {
        id: 'cp2', label: 'Cost Price (CP)', type: 'number', defaultValue: 100, min: 0,
        showIf: (inputs) => inputs.calcMode === 'find_sp'
      },
      {
        id: 'plType1', label: 'Profit or Loss?', type: 'select', 
        options: [{ value: 'profit', label: 'Profit (+)' }, { value: 'loss', label: 'Loss (-)' }], 
        defaultValue: 'profit', showIf: (inputs) => inputs.calcMode === 'find_sp'
      },
      {
        id: 'plPercent1', label: 'Percentage (%)', type: 'number', defaultValue: 20, min: 0,
        showIf: (inputs) => inputs.calcMode === 'find_sp'
      },
      // --- MODE: Find Cost Price (from SP & %) ---
      {
        id: 'sp2', label: 'Selling Price (SP)', type: 'number', defaultValue: 120, min: 0,
        showIf: (inputs) => inputs.calcMode === 'find_cp'
      },
      {
        id: 'plType2', label: 'Profit or Loss?', type: 'select', 
        options: [{ value: 'profit', label: 'Profit (+)' }, { value: 'loss', label: 'Loss (-)' }], 
        defaultValue: 'profit', showIf: (inputs) => inputs.calcMode === 'find_cp'
      },
      {
        id: 'plPercent2', label: 'Percentage (%)', type: 'number', defaultValue: 20, min: 0,
        showIf: (inputs) => inputs.calcMode === 'find_cp'
      },
      // --- MODE: Find Discount ---
      {
        id: 'mp1', label: 'Marked Price (MP)', type: 'number', defaultValue: 150, min: 0,
        showIf: (inputs) => inputs.calcMode === 'find_discount'
      },
      {
        id: 'sp3', label: 'Selling Price (SP)', type: 'number', defaultValue: 120, min: 0,
        showIf: (inputs) => inputs.calcMode === 'find_discount'
      },
      // --- MODE: Find SP from Discount ---
      {
        id: 'mp2', label: 'Marked Price (MP)', type: 'number', defaultValue: 200, min: 0,
        showIf: (inputs) => inputs.calcMode === 'find_sp_discount'
      },
      {
        id: 'discountPercent', label: 'Discount Percentage (%)', type: 'number', defaultValue: 15, min: 0,
        showIf: (inputs) => inputs.calcMode === 'find_sp_discount'
      }
    ]
  };