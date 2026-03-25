export const config = {
    id: 'area-perimeter',
    name: 'Advanced Area & Perimeter Calculator',
    description: 'Calculate and convert area and perimeter across 8 different geometric shapes.',
    category: 'math',
    seoTitle: 'Area & Perimeter Calculator with Unit Converter',
    seoDescription: 'Calculate area, perimeter, and circumference for 8 shapes. Features an advanced unit conversion engine for metric and imperial measurements.',
    
    inputs: [
      {
        id: 'shape',
        label: 'Select Geometric Shape',
        type: 'select',
        options: [
          { label: 'Rectangle', value: 'rectangle' },
          { label: 'Square', value: 'square' },
          { label: 'Circle', value: 'circle' },
          { label: 'Triangle (Heron\'s)', value: 'triangle' },
          { label: 'Trapezoid', value: 'trapezoid' },
          { label: 'Parallelogram', value: 'parallelogram' },
          { label: 'Ellipse', value: 'ellipse' },
          { label: 'Sector (of a Circle)', value: 'sector' }
        ],
        defaultValue: 'rectangle'
      },
      {
        id: 'inputUnit',
        label: 'Input Measurement Unit (What you are typing)',
        type: 'select',
        options: [
          { label: 'Millimeters (mm)', value: 'mm' },
          { label: 'Centimeters (cm)', value: 'cm' },
          { label: 'Meters (m)', value: 'm' },
          { label: 'Kilometers (km)', value: 'km' },
          { label: 'Inches (in)', value: 'in' },
          { label: 'Feet (ft)', value: 'ft' },
          { label: 'Yards (yd)', value: 'yd' },
          { label: 'Miles (mi)', value: 'mi' }
        ],
        defaultValue: 'cm'
      },
      {
        id: 'outputUnit',
        label: 'Output Result Unit (What you want to see)',
        type: 'select',
        options: [
          { label: 'Millimeters (mm)', value: 'mm' },
          { label: 'Centimeters (cm)', value: 'cm' },
          { label: 'Meters (m)', value: 'm' },
          { label: 'Kilometers (km)', value: 'km' },
          { label: 'Inches (in)', value: 'in' },
          { label: 'Feet (ft)', value: 'ft' },
          { label: 'Yards (yd)', value: 'yd' },
          { label: 'Miles (mi)', value: 'mi' }
        ],
        defaultValue: 'cm'
      },
      
      // --- RECTANGLE INPUTS ---
      { id: 'rectL', label: 'Length', type: 'number', defaultValue: 10, condition: (i) => i.shape === 'rectangle', dynamicProps: (i) => ({ label: `Length (${i.inputUnit || 'cm'})` }) },
      { id: 'rectW', label: 'Width', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'rectangle', dynamicProps: (i) => ({ label: `Width (${i.inputUnit || 'cm'})` }) },
  
      // --- SQUARE INPUTS ---
      { id: 'sqSide', label: 'Side Length', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'square', dynamicProps: (i) => ({ label: `Side Length (${i.inputUnit || 'cm'})` }) },
  
      // --- CIRCLE INPUTS ---
      { id: 'circRad', label: 'Radius (r)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'circle', dynamicProps: (i) => ({ label: `Radius (r) in ${i.inputUnit || 'cm'}` }) },
  
      // --- TRIANGLE INPUTS ---
      { id: 'triA', label: 'Side A', type: 'number', defaultValue: 3, condition: (i) => i.shape === 'triangle', dynamicProps: (i) => ({ label: `Side A (${i.inputUnit || 'cm'})` }) },
      { id: 'triB', label: 'Side B', type: 'number', defaultValue: 4, condition: (i) => i.shape === 'triangle', dynamicProps: (i) => ({ label: `Side B (${i.inputUnit || 'cm'})` }) },
      { id: 'triC', label: 'Side C', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'triangle', dynamicProps: (i) => ({ label: `Side C (${i.inputUnit || 'cm'})` }) },
  
      // --- TRAPEZOID INPUTS ---
      { id: 'trapBase1', label: 'Top Base (a)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'trapezoid', dynamicProps: (i) => ({ label: `Top Base (a) in ${i.inputUnit || 'cm'}` }) },
      { id: 'trapBase2', label: 'Bottom Base (b)', type: 'number', defaultValue: 9, condition: (i) => i.shape === 'trapezoid', dynamicProps: (i) => ({ label: `Bottom Base (b) in ${i.inputUnit || 'cm'}` }) },
      { id: 'trapHeight', label: 'Vertical Height (h)', type: 'number', defaultValue: 4, condition: (i) => i.shape === 'trapezoid', dynamicProps: (i) => ({ label: `Vertical Height (h) in ${i.inputUnit || 'cm'}` }) },
      { id: 'trapSide1', label: 'Left Slant Side (c)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'trapezoid', dynamicProps: (i) => ({ label: `Left Slant Side (c) in ${i.inputUnit || 'cm'}` }) },
      { id: 'trapSide2', label: 'Right Slant Side (d)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'trapezoid', dynamicProps: (i) => ({ label: `Right Slant Side (d) in ${i.inputUnit || 'cm'}` }) },
  
      // --- PARALLELOGRAM INPUTS ---
      { id: 'paraBase', label: 'Base Length (b)', type: 'number', defaultValue: 10, condition: (i) => i.shape === 'parallelogram', dynamicProps: (i) => ({ label: `Base Length (b) in ${i.inputUnit || 'cm'}` }) },
      { id: 'paraSide', label: 'Slant Side (a)', type: 'number', defaultValue: 6, condition: (i) => i.shape === 'parallelogram', dynamicProps: (i) => ({ label: `Slant Side (a) in ${i.inputUnit || 'cm'}` }) },
      { id: 'paraHeight', label: 'Vertical Height (h)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'parallelogram', dynamicProps: (i) => ({ label: `Vertical Height (h) in ${i.inputUnit || 'cm'}` }) },
  
      // --- ELLIPSE INPUTS ---
      { id: 'ellipA', label: 'Semi-Major Axis (a)', type: 'number', defaultValue: 6, condition: (i) => i.shape === 'ellipse', dynamicProps: (i) => ({ label: `Semi-Major Axis (a) in ${i.inputUnit || 'cm'}` }) },
      { id: 'ellipB', label: 'Semi-Minor Axis (b)', type: 'number', defaultValue: 4, condition: (i) => i.shape === 'ellipse', dynamicProps: (i) => ({ label: `Semi-Minor Axis (b) in ${i.inputUnit || 'cm'}` }) },
  
      // --- SECTOR INPUTS ---
      { id: 'sectRad', label: 'Radius (r)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'sector', dynamicProps: (i) => ({ label: `Radius (r) in ${i.inputUnit || 'cm'}` }) },
      { id: 'sectAngle', label: 'Central Angle (Degrees θ)', type: 'number', defaultValue: 90, condition: (i) => i.shape === 'sector' }
    ]
  };