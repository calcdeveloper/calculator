const fs = require('fs');
const path = require('path');

const dir = 'src/content/blog/';
const files = fs.readdirSync(dir);

let totalReplaced = 0;

files.forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace $ followed by numbers (e.g. $100, $1,000, $5.50) with ₹
    // Also handle cases like $ 100 or $1,000.00
    const newContent = content.replace(/\$([ ]*[0-9,.]+)/g, '₹$1');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Updated ${file}`);
      totalReplaced++;
    }
  }
});

console.log(`Finished replacing currency in ${totalReplaced} files.`);
