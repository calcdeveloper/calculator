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
  
  // Replace <Icon size={20} /> with {React.isValidElement(tool.icon) ? tool.icon : <Icon size={20} />}
  content = content.replace('<Icon size={20} />', '{React.isValidElement(tool.icon) ? tool.icon : <Icon size={20} />}');
  
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
}
