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

const iframeStr = `              {showPreview && (
                <div className="w-full mt-8 border border-pdf-gray rounded-xl overflow-hidden shadow-inner h-[600px] bg-gray-50">
                  <iframe src={extractedUrl} className="w-full h-full" title="PDF Preview" />
                </div>
              )}`;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Remove ALL instances of the injected iframe string (it might be indented differently, so we'll use a regex)
  const iframeRegex = /\s*\{showPreview && \([\s\S]*?<iframe src=\{extractedUrl\}[\s\S]*?<\/div>\s*\)\}/g;
  content = content.replace(iframeRegex, '');
  
  // 2. Inject it at the CORRECT location.
  // The correct location is right after the closing div of the success buttons container.
  // The success buttons container usually looks like:
  // <div className="flex gap-4 w-full md:w-auto"> ... <button onClick={handleDownload} ... > Download PDF </button> </div>
  // We want to insert the iframe AFTER this </div>.
  
  const targetRegex = /(<button[^>]*onClick=\{handleDownload\}[^>]*>[\s\S]*?<\/button>\s*<\/div>)/;
  if (content.match(targetRegex)) {
    content = content.replace(targetRegex, `$1\n${iframeStr}\n`);
  } else {
    console.log(`Could not find target for ${file}`);
  }
  
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
}
