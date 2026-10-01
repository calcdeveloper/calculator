import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogDir = path.join(__dirname, '../src/content/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const targetStr = '\n\n---\n## Related ';
  const idx = content.indexOf(targetStr);
  if (idx !== -1) {
    content = content.substring(0, idx);
    fs.writeFileSync(filePath, content, 'utf-8');
    updatedCount++;
  }
}
console.log(`Reverted ${updatedCount} files.`);
