export const config = {
  id: 'lcm',
  name: 'LCM & GCF Calculator',
  description: 'Instantly find the Least Common Multiple (LCM) and Greatest Common Factor (GCF) for any set of numbers.',
  category: 'math',
  
  inputs: [
    {
      id: 'numberInput',
      label: 'Enter numbers (separated by commas)',
      type: 'text', // This triggers our new, slider-free text box
      defaultValue: '12, 18, 24',
      placeholder: 'e.g., 10, 15, 20'
    }
  ]
};