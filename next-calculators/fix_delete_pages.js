const fs = require('fs');

const file = 'src/app/tools/pdf-tools/delete-pages/DeletePagesClient.jsx';
let content = fs.readFileSync(file, 'utf8');

// Add extractedUrl state
content = content.replace(/const \[isDone, setIsDone\] = useState\(false\);/, 
  'const [isDone, setIsDone] = useState(false);\n  const [extractedUrl, setExtractedUrl] = useState(null);');

// Replace deletePages logic
content = content.replace(/const link = document\.createElement\('a'\);[\s\S]*?link\.click\(\);\s*setIsDone\(true\);/, 
  'setExtractedUrl(url);\n      setIsDone(true);');

// Update reset logic
content = content.replace(/setIsDone\(false\);/, 'setIsDone(false);\n    setExtractedUrl(null);');

// Add handleDownload function
content = content.replace(/const reset = \(\) => \{/, `const handleDownload = () => {
    if (!extractedUrl) return;
    const link = document.createElement("a");
    link.href = extractedUrl;
    link.download = \`updated_\${file.name}\`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const reset = () => {`);

// Update rendering logic: 
// The tool currently renders the workspace when `file` is present. We need to hide it when extractedUrl is present.
content = content.replace(/\} \: \(\s*<div className="p-6 md:p-10">/, 
  `} else if (extractedUrl) {
            return (
              <div className="p-8 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold text-pdf-dark mb-4">Pages Deleted!</h2>
                <p className="text-pdf-gray mb-8">Your modified PDF is ready for download.</p>
                
                <div className="flex gap-4 w-full md:w-auto">
                  <button
                    onClick={reset}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-pdf-gray/20 hover:bg-pdf-gray/30 text-pdf-dark font-bold rounded-xl transition-all"
                  >
                    <RotateCcw size={20} /> Start Over
                  </button>
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-pdf-white border border-pdf-primary text-pdf-primary hover:bg-pdf-primary/5 font-bold rounded-xl transition-all shadow-sm"
                  >
                    <Eye size={20} /> {showPreview ? 'Hide Preview' : 'Preview PDF'}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20"
                  >
                    <Download size={20} /> Download PDF
                  </button>
                </div>
                {showPreview && (
                  <div className="w-full mt-8 border border-pdf-gray rounded-xl overflow-hidden shadow-inner h-[600px] bg-gray-50">
                    <iframe src={extractedUrl} className="w-full h-full" title="PDF Preview" />
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <div className="p-6 md:p-10">`);

// Replace the end of the block properly since we wrapped it in else
// Need to replace the matching closing tags for the `file` ternary operator
// Wait, the ternary operator `!file ? (...) : (<div className="p-6 md:p-10"> ... </div>)`
// Let's change the ternary to a standard block.
// Let's just do it directly.
