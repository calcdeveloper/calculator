const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.startsWith('sitemap') && f.endsWith('.xml') && f !== 'sitemap.xml' && f !== 'sitemap-design.xml');

const urlMap = {};
const duplicates = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(publicDir, file), 'utf8');
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const url = match[1];
    if (urlMap[url]) {
      duplicates.push({ url, file1: urlMap[url], file2: file });
    } else {
      urlMap[url] = file;
    }
  }
}

if (duplicates.length > 0) {
  console.log("Found duplicates:");
  console.log(duplicates);
} else {
  console.log("No duplicate URLs found across all generated sitemaps.");
}
