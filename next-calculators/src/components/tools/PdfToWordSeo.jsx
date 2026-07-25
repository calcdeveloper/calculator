import React from 'react';
import FAQAccordion from './FAQAccordion';

const faqs = [
  {
    "question": "Why did my images disappear in the Word file?",
    "answer": "Our tool specifically performs text extraction. To maintain client-side processing speeds and ensure 100% privacy without requiring massive server infrastructure, the engine targets alphanumeric data and strips away heavy binary blobs (images)."
  },
  {
    "question": "Does this tool use OCR for scanned documents?",
    "answer": "No. Optical Character Recognition (OCR) requires scanning images to guess words, which is highly computationally intensive and requires a server. This tool extracts natively embedded text. If your PDF is just a scanned photo of a piece of paper, this tool will not be able to extract the text."
  },
  {
    "question": "Is there a file size limit?",
    "answer": "Because the processing happens in your browser's RAM, the file size limit is determined by your hardware. Most modern laptops can easily extract text from a 100-page, 50MB document in just a few seconds."
  },
  {
    "question": "What versions of Microsoft Word are supported?",
    "answer": "The tool generates standard Office Open XML `.docx` files. These files are universally supported by Microsoft Word 2007 and newer, Google Docs, LibreOffice, and Apple Pages."
  }
];

export default function PdfToWordSeo() {
  return (
    <article className="prose prose-lg max-w-none text-pdf-dark mt-16 bg-pdf-white p-8 md:p-12 rounded-3xl shadow-sm border border-pdf-gray">
      <h2 className="text-3xl font-extrabold text-pdf-dark mb-6">Convert PDF to Word Securely (Text Extraction)</h2>
      
      <p className="lead text-xl text-pdf-gray mb-8">
        Need to edit the text inside a locked PDF? The ToolsWizard PDF to Word converter extracts the raw text from your documents and formats it directly into an editable Microsoft Word (.docx) file. Best of all, it runs entirely inside your browser to guarantee 100% data privacy.
      </p>

      <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 mb-10">
        <h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-4">
        How to Use the PDF to Word Tool
      </h3>
      <ol className="list-decimal pl-6 mb-8 space-y-3">
        <li>
          <strong>Select Your File:</strong> Click the upload area or simply drag and drop your document directly into the browser window.
        </li>
        <li>
          <strong>Process Locally:</strong> Click the main convert button. Our advanced browser-based engine will instantly process the file securely.
        </li>
        <li>
          <strong>Download Result:</strong> Once processing is complete, your newly converted document will be immediately available for download.
        </li>
      </ol>
<h3 className="text-xl font-bold text-amber-900 mt-0 mb-3">Understanding Client-Side Extraction</h3>
        <p className="text-amber-800 m-0">
          Unlike cloud-based converters that utilize heavy backend servers to perfectly clone complex visual layouts (which requires uploading your sensitive documents to a third-party server), our tool utilizes a <strong>Zero-Trust Text Extraction Engine</strong>. It prioritizes data privacy above all else by stripping the readable text out of the PDF and flowing it into a Word document locally. Complex tables, images, and fonts will not be preserved, but your sensitive data will remain strictly on your hard drive.
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4">How to Extract Text to Word</h3>
      <ol className="list-decimal pl-6 space-y-4 mb-10 text-pdf-gray">
        <li><strong>Select your PDF:</strong> Drag and drop your target PDF file into the secure extraction zone.</li>
        <li><strong>Initialize the Engine:</strong> Click "Extract Text to Word". The tool will spin up a local WebAssembly parser to read the document.</li>
        <li><strong>Download the .docx:</strong> A clean Microsoft Word document containing all readable text will be instantly generated and saved to your computer.</li>
      </ol>

      <h3 className="text-2xl font-bold mt-10 mb-4">Why Privacy Matters for PDF Conversion</h3>
      <p className="mb-6">
        When dealing with legal contracts, financial audits, or patient records, uploading a PDF to a random free conversion website is a massive security risk. Once a document leaves your network, you lose control over how it is stored, who reads it, and whether it is used to train AI models.
      </p>
      <p className="mb-6">
        Our zero-trust architecture solves this by downloading the conversion logic directly into your browser's memory. When you click "convert", the processing happens using your computer's own CPU. The network connection could be physically severed, and the tool would still function perfectly.
      </p>

      
      

      <h3 className="text-2xl font-bold mt-12 mb-6">Frequently Asked Questions</h3>
      <FAQAccordion faqs={faqs} />
    </article>
  );
}
