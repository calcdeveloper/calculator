export const config = {
    id: 'gst',
    name: 'GST Calculator',
    description: 'Calculate Goods and Services Tax (GST) easily. Add or reverse-calculate GST from your billed amount and get the CGST/SGST breakdown instantly.',
    category: 'finance',
    
    // High-Intent SEO Metadata
    seoTitle: 'GST Calculator Online | Add or Remove GST (18%, 28%)',
    seoDescription: 'Accurately calculate GST for your business invoices. Add or reverse calculate GST with standard 5%, 12%, 18%, and 28% tax slabs. View the CGST and SGST breakdown.',
    seoKeywords: 'gst calculator, online gst calculator, reverse gst calculator, add gst, remove gst, cgst sgst calculator, 18% gst calculator, gst formula',
    
    inputs: [
      { 
        id: 'calcType', 
        label: 'Calculation Type', 
        type: 'select', 
        defaultValue: 'add', 
        options: [
          { label: 'Add GST (Exclusive)', value: 'add' },
          { label: 'Remove GST (Inclusive)', value: 'remove' }
        ] 
      },
      { id: 'amount', label: 'Amount', min: 100, max: 10000000, step: 100, defaultValue: 10000, prefix: '₹' },
      { 
        id: 'gstRate', 
        label: 'GST Slab', 
        type: 'select', 
        defaultValue: 18, 
        options: [
          { label: '3% (Special e.g., Gold)', value: 3 },
          { label: '5% (Essential Goods)', value: 5 },
          { label: '12% (Standard I)', value: 12 },
          { label: '18% (Standard II / Services)', value: 18 },
          { label: '28% (Luxury Goods)', value: 28 }
        ] 
      }
    ]
  };