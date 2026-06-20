const fs = require('fs');

const files = [
  'src/components/tools/RelatedConverterTools.jsx',
  'src/components/tools/RelatedDeveloperTools.jsx',
  'src/components/tools/RelatedPdfTools.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/export default function (Related\w+Tools)\(\{ currentToolPath \}\) \{/, 'export default function $1(props) {\n  const currentPath = props.currentToolPath || props.currentPath || "";');
  
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
}
