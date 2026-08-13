const fs = require('fs');

function cleanFraction(content) {
  // Replace simple fractions
  content = content.replace(/\\\( \\frac\{([0-9]+)\}\{([0-9]+)\} \\\)/g, '$1/$2');
  // Replace mixed numbers
  content = content.replace(/\\\( ([0-9]+) \\frac\{([0-9]+)\}\{([0-9]+)\} \\\)/g, '$1 $2/$3');
  // Replace times and div
  content = content.replace(/\\times/g, '×');
  content = content.replace(/\\div/g, '÷');
  // Replace any remaining \( ... \) math sections
  content = content.replace(/\\\( (.*?) \\\)/g, (match, inner) => {
    let clean = inner;
    clean = clean.replace(/\\frac\{([0-9\s×]+)\}\{([0-9\s×]+)\}/g, '($1)/($2)');
    clean = clean.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)');
    return clean;
  });
  return content;
}

function cleanScientific(content) {
  // Replace $ math $
  content = content.replace(/\$([^\$]+)\$/g, (match, inner) => {
    let clean = inner;
    clean = clean.replace(/x\^2/g, 'x²');
    clean = clean.replace(/x\^y/g, 'x^y');
    clean = clean.replace(/\\sqrt\{x\}/g, '√x');
    clean = clean.replace(/\\pi/g, 'π');
    clean = clean.replace(/a\^2 \+ b\^2 = c\^2/g, 'a² + b² = c²');
    clean = clean.replace(/c = \\sqrt\{20\^2 \+ 15\^2\}/g, 'c = √(20² + 15²)');
    clean = clean.replace(/\[H\^\\+\]/g, '[H+]');
    clean = clean.replace(/2\.5 \\times 10\^\{-4\}/g, '2.5 × 10^-4');
    clean = clean.replace(/-\\log_\{10\}\[H\^\\+\]/g, '-log10[H+]');
    clean = clean.replace(/Velocity \\times \\sin\(\\text\{Angle\}\)/g, 'Velocity × sin(Angle)');
    clean = clean.replace(/50 \\times \\sin\(30\)/g, '50 × sin(30)');
    clean = clean.replace(/2\\pi/g, '2π');
    clean = clean.replace(/\\sin\^\{-1\}/g, 'sin⁻¹');
    clean = clean.replace(/30\^\\circ/g, '30°');
    clean = clean.replace(/x!/g, 'x!');
    clean = clean.replace(/5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120/g, '5! = 5 × 4 × 3 × 2 × 1 = 120');
    clean = clean.replace(/3\.5 \\times 10\^6/g, '3.5 × 10^6');
    return clean;
  });
  return content;
}

const fracPath = 'src/content/blog/fraction-calculator.md';
let frac = fs.readFileSync(fracPath, 'utf8');
frac = cleanFraction(frac);
fs.writeFileSync(fracPath, frac);

const sciPath = 'src/content/blog/scientific-calculator.md';
let sci = fs.readFileSync(sciPath, 'utf8');
sci = cleanScientific(sci);
fs.writeFileSync(sciPath, sci);

console.log("Done cleaning files.");
