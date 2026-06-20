const fs = require('fs');

const files = [
  'src/app/tools/pdf-tools/password-protect/ProtectPdfClient.jsx',
  'src/app/tools/pdf-tools/add-images/AddImagesClient.jsx',
  'src/app/tools/pdf-tools/delete-pages/DeletePagesClient.jsx',
  'src/app/tools/pdf-tools/extract-pages/ExtractPagesClient.jsx',
  'src/app/tools/pdf-tools/merge-pdf/MergePdfClient.jsx',
  'src/app/tools/pdf-tools/page-numbers/PageNumbersClient.jsx',
  'src/app/tools/pdf-tools/rotate-pdf/RotatePdfClient.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('Eye,')) {
    content = content.replace(/import \{([^}]+)\}\s+from\s+["']lucide-react["'];/, (match, p1) => {
      return `import { Eye, ${p1.trim()} } from 'lucide-react';`;
    });
  }
  
  if (!content.includes('showPreview')) {
    content = content.replace(/const \[isProcessing, setIsProcessing\] = useState\(false\);/, 
      `const [isProcessing, setIsProcessing] = useState(false);\n  const [showPreview, setShowPreview] = useState(false);`);
  }
  
  if (content.includes('const reset = () => {') && !content.includes('setShowPreview(false);')) {
    content = content.replace(/const reset = \(\) => \{/, 
      `const reset = () => {\n    setShowPreview(false);`);
  }
  
  const downloadButtonRegex = /<button\s+onClick=\{handleDownload\}[^>]*>[\s\S]*?<\/button>/;
  if (!content.includes('onClick={() => setShowPreview(!showPreview)}')) {
    content = content.replace(downloadButtonRegex, (match) => {
      return `
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-pdf-white border border-pdf-primary text-pdf-primary hover:bg-pdf-primary/5 font-bold rounded-xl transition-all shadow-sm"
                >
                  <Eye size={20} /> {showPreview ? 'Hide Preview' : 'Preview PDF'}
                </button>
                ${match}`;
    });
  }
  
  if (!content.includes('<iframe src={extractedUrl}')) {
    content = content.replace(/(<div className="flex [^>]+>\s*<button[\s\S]*?<\/button>\s*<\/button>\s*<\/div>|<div className="flex [^>]+>[\s\S]*?<\/button>\s*<\/div>)/, `$1
              {showPreview && (
                <div className="w-full mt-8 border border-pdf-gray rounded-xl overflow-hidden shadow-inner h-[600px] bg-gray-50">
                  <iframe src={extractedUrl} className="w-full h-full" title="PDF Preview" />
                </div>
              )}`);
  }
  
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
}
