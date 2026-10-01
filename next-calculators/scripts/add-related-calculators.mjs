import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read calculatorData.js manually to avoid any import issues with JSX or other transpilation needs
const dataFilePath = path.join(__dirname, '../src/utils/calculatorData.js');
const dataContent = fs.readFileSync(dataFilePath, 'utf-8');

// A quick and dirty way to parse the array of objects without eval
// We can use regex to extract { name: '...', path: '...', category: '...' }
const regex = /{([^}]+)}/g;
let match;
const calculators = [];

while ((match = regex.exec(dataContent)) !== null) {
  const objStr = match[1];
  if (objStr.includes('name:') && objStr.includes('path:') && objStr.includes('category:')) {
    const nameMatch = objStr.match(/name:\s*'([^']+)'/);
    const pathMatch = objStr.match(/path:\s*'([^']+)'/);
    const categoryMatch = objStr.match(/category:\s*'([^']+)'/);
    
    if (nameMatch && pathMatch && categoryMatch) {
      calculators.push({
        name: nameMatch[1],
        path: pathMatch[1],
        category: categoryMatch[1]
      });
    }
  }
}

const blogDir = path.join(__dirname, '../src/content/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const categoryMatch = content.match(/category:\s*"([^"]+)"/);
  if (!categoryMatch) continue;
  
  const categoryName = categoryMatch[1];
  const categoryId = categoryName.toLowerCase();
  
  const related = calculators.filter(c => c.category === categoryId);
  
  // Exclude current calculator (which is linked in the post body)
  let trulyRelated = related.filter(c => !content.includes(`(${c.path})`));
  
  // If there are many, randomly pick up to 10 to keep it clean, but let's just take the first 8 to be deterministic
  if (trulyRelated.length > 8) {
    trulyRelated = trulyRelated.slice(0, 8);
  }
  
  if (trulyRelated.length === 0) continue;
  
  if (content.includes('## Related') && content.includes('Calculators')) {
    continue; // already added
  }
  
  let relatedMarkdown = `\n\n---\n## Related ${categoryName} Calculators\n\n`;
  for (const calc of trulyRelated) {
    relatedMarkdown += `* [${calc.name}](${calc.path})\n`;
  }
  
  content += relatedMarkdown;
  fs.writeFileSync(filePath, content, 'utf-8');
  updatedCount++;
}

console.log(`Successfully updated ${updatedCount} blog posts with related calculators.`);
