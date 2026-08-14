const fs = require('fs');
const path = require('path');

const dir = './src/content/blog';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Let's just find lines that start with `*(Output:` and process them and the lines above them
  let lines = content.split('\n');
  let newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line.includes('*(Output:')) {
      // Find the output text
      const outputMatch = line.match(/\*\((Output:.*?)\)\*/);
      if (outputMatch) {
        let outputText = outputMatch[1]; // e.g. "Output: 2 Tablespoons = 30 Milliliters"
        // Look backwards and strip out the list formatting "1. ", "2. ", etc until we hit a non-list line
        let j = newLines.length - 1;
        while (j >= 0 && /^\d+\.\s+/.test(newLines[j])) {
          newLines[j] = newLines[j].replace(/^\d+\.\s+/, '');
          j--;
        }
        // Append the output to the last line we processed
        if (newLines.length > 0) {
          // ensure there's no trailing space
          newLines[newLines.length - 1] = newLines[newLines.length - 1].trimRight();
          newLines[newLines.length - 1] += ` (${outputText}).`;
        }
      } else {
        newLines.push(line); // fallback
      }
    } else {
      newLines.push(line);
    }
  }

  content = newLines.join('\n');
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
