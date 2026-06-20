const fs = require('fs');

const files = [
  'src/components/tools/RelatedPdfTools.jsx',
  'src/components/tools/RelatedDeveloperTools.jsx',
  'src/components/tools/RelatedFunTools.jsx',
  'src/components/tools/RelatedEncoderDecoderTools.jsx',
  'src/components/tools/RelatedConverterTools.jsx',
  'src/components/tools/RelatedDesignTools.jsx',
  'src/components/tools/RelatedTextTools.jsx',
  'src/components/tools/RelatedGeneratorsTools.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Find the array name in setTools(...)
  const setToolsMatch = content.match(/setTools\(([a-zA-Z0-Z_]+)\)/);
  if (!setToolsMatch) continue;
  const arrayName = setToolsMatch[1];
  
  // 2. Replace the useEffect block to filter out the currentPath
  content = content.replace(
    new RegExp(`useEffect\\(\\(\\) => \\{\\s*setTools\\(${arrayName}\\);\\s*\\}, \\[\\]\\);`),
    `useEffect(() => {
    if (!currentPath) {
      setTools(${arrayName});
      return;
    }
    // Filter out the current tool
    const filteredTools = ${arrayName}.filter(tool => tool.link !== currentPath && !tool.link.includes(currentPath));
    setTools(filteredTools);
  }, [currentPath]);`
  );
  
  // 3. Remove isActive styling inside the mapping function
  // We can just replace the massive template literals with simpler ones since isActive is always false.
  
  // Replace the link class
  content = content.replace(
    /className=\{\`group flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 shadow-sm \$\{\s*isActive\s*\?\s*'[^']+'\s*:\s*'([^']+)'\s*\}\`\}/g,
    'className="group flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 shadow-sm $1"'
  );
  
  // Replace the icon div class
  content = content.replace(
    /className=\{\`w-10 h-10 rounded-lg flex items-center justify-center transition-colors \$\{\s*isActive\s*\?\s*'[^']+'\s*:\s*'([^']+)'\s*\}\`\}/g,
    'className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors $1"'
  );
  
  // Replace the text class
  content = content.replace(
    /className=\{\`font-bold text-sm line-clamp-1 \$\{\s*isActive \? '[^']+' : '([^']+)'\s*\}\`\}/g,
    'className="font-bold text-sm line-clamp-1 $1"'
  );
  
  // Remove the const isActive definition
  content = content.replace(/\s*const isActive = currentPath && tool\.link\.includes\(currentPath\);/g, '');
  
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
}
