export const config = {
    id: 'volume-surface-area',
    name: '3D Volume & Surface Area Calculator',
    description: 'Calculate and convert volume and surface area across 11 different 3D shapes.',
    category: 'math',
    seoTitle: 'Volume & Surface Area Calculator with Unit Converter',
    seoDescription: 'Calculate volume and surface area for spheres, cones, cylinders, cubes, capsules, ellipsoids, and more with an advanced conversion engine.',
    
    inputs: [
      {
        id: 'shape',
        label: 'Select 3D Shape',
        type: 'select',
        options: [
          { label: 'Sphere (Ball)', value: 'sphere' },
          { label: 'Cube', value: 'cube' },
          { label: 'Rectangular Prism', value: 'rectangular' },
          { label: 'Cylinder', value: 'cylinder' },
          { label: 'Tube (Hollow Cylinder)', value: 'tube' },
          { label: 'Cone', value: 'cone' },
          { label: 'Conical Frustum', value: 'frustum' },
          { label: 'Capsule', value: 'capsule' },
          { label: 'Spherical Cap', value: 'cap' },
          { label: 'Ellipsoid', value: 'ellipsoid' },
          { label: 'Square Pyramid', value: 'pyramid' }
        ],
        defaultValue: 'sphere'
      },
      {
        id: 'inputUnit',
        label: 'Input Measurement Unit',
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
        label: 'Output Result Unit',
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
      
      // --- SPHERE INPUTS ---
      { id: 'sphRad', label: 'Radius (r)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'sphere', dynamicProps: (i) => ({ label: `Radius (r) in ${i.inputUnit || 'cm'}` }) },
  
      // --- CUBE INPUTS ---
      { id: 'cubeSide', label: 'Edge Length (a)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'cube', dynamicProps: (i) => ({ label: `Edge Length (a) in ${i.inputUnit || 'cm'}` }) },
  
      // --- RECTANGULAR PRISM INPUTS ---
      { id: 'rectL', label: 'Length', type: 'number', defaultValue: 10, condition: (i) => i.shape === 'rectangular', dynamicProps: (i) => ({ label: `Length in ${i.inputUnit || 'cm'}` }) },
      { id: 'rectW', label: 'Width', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'rectangular', dynamicProps: (i) => ({ label: `Width in ${i.inputUnit || 'cm'}` }) },
      { id: 'rectH', label: 'Height', type: 'number', defaultValue: 4, condition: (i) => i.shape === 'rectangular', dynamicProps: (i) => ({ label: `Height in ${i.inputUnit || 'cm'}` }) },
  
      // --- CYLINDER INPUTS ---
      { id: 'cylRad', label: 'Base Radius (r)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'cylinder', dynamicProps: (i) => ({ label: `Base Radius (r) in ${i.inputUnit || 'cm'}` }) },
      { id: 'cylH', label: 'Height (h)', type: 'number', defaultValue: 10, condition: (i) => i.shape === 'cylinder', dynamicProps: (i) => ({ label: `Height (h) in ${i.inputUnit || 'cm'}` }) },
  
      // --- TUBE INPUTS ---
      { id: 'tubeOutRad', label: 'Outer Radius (R)', type: 'number', defaultValue: 6, condition: (i) => i.shape === 'tube', dynamicProps: (i) => ({ label: `Outer Radius (R) in ${i.inputUnit || 'cm'}` }) },
      { id: 'tubeInRad', label: 'Inner Radius (r)', type: 'number', defaultValue: 4, condition: (i) => i.shape === 'tube', dynamicProps: (i) => ({ label: `Inner Radius (r) in ${i.inputUnit || 'cm'}` }) },
      { id: 'tubeH', label: 'Height (h)', type: 'number', defaultValue: 10, condition: (i) => i.shape === 'tube', dynamicProps: (i) => ({ label: `Height (h) in ${i.inputUnit || 'cm'}` }) },
  
      // --- CONE INPUTS ---
      { id: 'coneRad', label: 'Base Radius (r)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'cone', dynamicProps: (i) => ({ label: `Base Radius (r) in ${i.inputUnit || 'cm'}` }) },
      { id: 'coneH', label: 'Height (h)', type: 'number', defaultValue: 10, condition: (i) => i.shape === 'cone', dynamicProps: (i) => ({ label: `Height (h) in ${i.inputUnit || 'cm'}` }) },
  
      // --- CONICAL FRUSTUM INPUTS ---
      { id: 'frusTopRad', label: 'Top Radius (r1)', type: 'number', defaultValue: 3, condition: (i) => i.shape === 'frustum', dynamicProps: (i) => ({ label: `Top Radius (r1) in ${i.inputUnit || 'cm'}` }) },
      { id: 'frusBotRad', label: 'Bottom Radius (r2)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'frustum', dynamicProps: (i) => ({ label: `Bottom Radius (r2) in ${i.inputUnit || 'cm'}` }) },
      { id: 'frusH', label: 'Height (h)', type: 'number', defaultValue: 8, condition: (i) => i.shape === 'frustum', dynamicProps: (i) => ({ label: `Height (h) in ${i.inputUnit || 'cm'}` }) },
  
      // --- CAPSULE INPUTS ---
      { id: 'capRad', label: 'Radius (r)', type: 'number', defaultValue: 4, condition: (i) => i.shape === 'capsule', dynamicProps: (i) => ({ label: `Radius (r) in ${i.inputUnit || 'cm'}` }) },
      { id: 'capCylH', label: 'Straight Cylinder Height (a)', type: 'number', defaultValue: 10, condition: (i) => i.shape === 'capsule', dynamicProps: (i) => ({ label: `Cylinder Height (a) in ${i.inputUnit || 'cm'}` }) },
  
      // --- SPHERICAL CAP INPUTS ---
      { id: 'scapBaseRad', label: 'Base Radius (a)', type: 'number', defaultValue: 4, condition: (i) => i.shape === 'cap', dynamicProps: (i) => ({ label: `Base Radius (a) in ${i.inputUnit || 'cm'}` }) },
      { id: 'scapH', label: 'Height of Cap (h)', type: 'number', defaultValue: 2, condition: (i) => i.shape === 'cap', dynamicProps: (i) => ({ label: `Height of Cap (h) in ${i.inputUnit || 'cm'}` }) },
  
      // --- ELLIPSOID INPUTS ---
      { id: 'ellipA', label: 'Axis A (x-radius)', type: 'number', defaultValue: 6, condition: (i) => i.shape === 'ellipsoid', dynamicProps: (i) => ({ label: `Axis A in ${i.inputUnit || 'cm'}` }) },
      { id: 'ellipB', label: 'Axis B (y-radius)', type: 'number', defaultValue: 4, condition: (i) => i.shape === 'ellipsoid', dynamicProps: (i) => ({ label: `Axis B in ${i.inputUnit || 'cm'}` }) },
      { id: 'ellipC', label: 'Axis C (z-radius)', type: 'number', defaultValue: 3, condition: (i) => i.shape === 'ellipsoid', dynamicProps: (i) => ({ label: `Axis C in ${i.inputUnit || 'cm'}` }) },
  
      // --- SQUARE PYRAMID INPUTS ---
      { id: 'pyramidBase', label: 'Base Edge (a)', type: 'number', defaultValue: 5, condition: (i) => i.shape === 'pyramid', dynamicProps: (i) => ({ label: `Base Edge (a) in ${i.inputUnit || 'cm'}` }) },
      { id: 'pyramidH', label: 'Height (h)', type: 'number', defaultValue: 8, condition: (i) => i.shape === 'pyramid', dynamicProps: (i) => ({ label: `Height (h) in ${i.inputUnit || 'cm'}` }) }
    ]
  };