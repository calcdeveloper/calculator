export const config = {
  id: 'brokerage',
  name: 'Brokerage Calculator',
  description: 'Calculate exact brokerage charges, STT, GST, and exchange fees for intraday and delivery equity trading in India.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Brokerage Calculator | Calculate Zerodha, Upstox Intraday & Delivery Charges',
  seoDescription: 'Free Brokerage Calculator for Indian stock market. Calculate exact STT, GST, SEBI charges, and net profit for Intraday and Delivery equity trades.',
  seoKeywords: 'brokerage calculator, zerodha brokerage calculator, stt calculator, stock trading fees, intraday charges calculator, equity delivery brokerage',
  
  inputs: [
    { 
      id: 'tradeType', 
      label: 'Trade Type', 
      type: 'radio',
      options: [
        { label: 'Intraday (Equity)', value: 'intraday' },
        { label: 'Delivery (Equity)', value: 'delivery' }
      ],
      defaultValue: 'intraday' 
    },
    { id: 'quantity', label: 'Quantity (No. of Shares)', min: 1, max: 10000000, step: 1, defaultValue: 400 },
    { id: 'buyPrice', label: 'Buy Price (₹)', min: 0.05, max: 1000000, step: 0.05, defaultValue: 500, prefix: '₹' },
    { id: 'sellPrice', label: 'Sell Price (₹)', min: 0.05, max: 1000000, step: 0.05, defaultValue: 510, prefix: '₹' }
  ]
};
