const fs = require('fs');
const path = require('path');

const dir = './src/content/blog';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  let lines = content.split('\n');
  let newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line.includes('*(Output:')) {
      // line might be: *(Output: 100 Liters = 26.4172 US Gallons).*
      let startIdx = line.indexOf('(Output:');
      let endIdx = line.indexOf(')*');
      if (startIdx !== -1 && endIdx !== -1) {
        let outputText = line.substring(startIdx, endIdx); // "(Output: ...)"
        
        // Go backwards and strip "1. " format
        let j = newLines.length - 1;
        while (j >= 0 && /^\d+\.\s+/.test(newLines[j])) {
          newLines[j] = newLines[j].replace(/^\d+\.\s+/, '');
          j--;
        }
        
        // Append to the previous line
        if (newLines.length > 0) {
            newLines[newLines.length - 1] = newLines[newLines.length - 1].trimRight() + " " + outputText + ".";
        }
      } else {
        newLines.push(line);
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
