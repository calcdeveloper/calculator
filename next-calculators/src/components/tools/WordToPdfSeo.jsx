import React from 'react';
import FAQAccordion from './FAQAccordion';

const faqs = [
  {
    "question": "Why does the PDF layout look different than my Word file?",
    "answer": "Our tool specifically performs text and basic structural extraction. To maintain client-side processing speeds and ensure 100% privacy without requiring massive server infrastructure, the engine targets alphanumeric data and basic layout (paragraphs, bold text, lists). It does not perfectly clone complex proprietary Word positioning."
  },
  {
    "question": "Are .doc files supported?",
    "answer": "No. This tool only supports the modern `.docx` format introduced in Microsoft Word 2007, which is an open XML standard that can be parsed securely in the browser."
  },
  {
    "question": "Is there a file size limit?",
    "answer": "Because the processing happens in your browser's RAM, the file size limit is determined by your hardware. Most modern laptops can easily extract text from large Word documents in just a few seconds."
  }
];

export default function WordToPdfSeo() {
  return (
    <article className="prose prose-lg max-w-none text-pdf-dark mt-16 bg-pdf-white p-8 md:p-12 rounded-3xl shadow-sm border border-pdf-gray">
      <h2 className="text-3xl font-extrabold text-pdf-dark mb-6">Convert Word to PDF Securely</h2>
      
      <p className="lead text-xl text-pdf-gray mb-8">
        Need to lock a Word document into a PDF without uploading it to the cloud? The ToolsWizard Word to PDF converter extracts the raw text and basic formatting from your .docx files and compiles them directly into a standard PDF file. Best of all, it runs entirely inside your browser to guarantee 100% data privacy.
      </p>

      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-10">
        <h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-4">
        How to Use the Word to PDF Tool
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
<h3 className="text-xl font-bold text-blue-900 mt-0 mb-3">Understanding Client-Side Rendering</h3>
        <p className="text-blue-800 m-0">
          Unlike cloud-based converters that use Microsoft Office backend servers to perfectly clone complex visual layouts (which requires uploading your sensitive documents to a third-party server), our tool utilizes a <strong>Zero-Trust Text Extraction Engine</strong>. It prioritizes data privacy above all else by parsing the text, headings, and lists out of the Word document and painting them onto a PDF locally. Complex tables, custom fonts, and images will not be preserved perfectly, but your sensitive data will remain strictly on your hard drive.
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4">How to Convert Word to PDF</h3>
      <ol className="list-decimal pl-6 space-y-4 mb-10 text-pdf-gray">
        <li><strong>Select your DOCX:</strong> Drag and drop your target Microsoft Word file into the secure conversion zone.</li>
        <li><strong>Initialize the Engine:</strong> Click "Compile to PDF". The tool will spin up a local parser to read the document.</li>
        <li><strong>Download the .pdf:</strong> A clean PDF document containing all readable text and basic formatting will be instantly generated and saved to your computer.</li>
      </ol>

      <h3 className="text-2xl font-bold mt-10 mb-4">Why Privacy Matters for Word Documents</h3>
      <p className="mb-6">
        When dealing with legal contracts, internal memos, or financial audits, uploading a Word document to a random free conversion website is a massive security risk. Once a document leaves your network, you lose control over how it is stored, who reads it, and whether it is used to train AI models.
      </p>
      <p className="mb-6">
        Our zero-trust architecture solves this by downloading the conversion logic directly into your browser's memory. When you click "convert", the processing happens using your computer's own CPU. The network connection could be physically severed, and the tool would still function perfectly.
      </p>

      
      

      <h3 className="text-2xl font-bold mt-12 mb-6">Frequently Asked Questions</h3>
      <FAQAccordion faqs={faqs} />
    </article>
  );
}
