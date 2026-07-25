import React from 'react';
import FAQAccordion from './FAQAccordion';

const faqs = [
  {
    "question": "Why did my charts disappear in the PDF?",
    "answer": "Our tool specifically performs raw data extraction. To maintain client-side processing speeds and ensure 100% privacy without requiring massive server infrastructure, the engine extracts the text values of your cells and rebuilds them into a clean PDF table. Visual charts and graphics are stripped away."
  },
  {
    "question": "What file types are supported?",
    "answer": "This tool supports the modern `.xlsx` format, older `.xls` formats, standard `.csv` comma-separated values, and text files. All of these can be parsed securely in the browser."
  },
  {
    "question": "What happens if my spreadsheet has multiple sheets/tabs?",
    "answer": "The data extraction engine loops through every active sheet in your workbook, extracting the data and separating them into clean sections within the final generated PDF."
  }
];

export default function ExcelToPdfSeo() {
  return (
    <article className="prose prose-lg max-w-none text-pdf-dark mt-16 bg-pdf-white p-8 md:p-12 rounded-3xl shadow-sm border border-pdf-gray">
      <h2 className="text-3xl font-extrabold text-pdf-dark mb-6">Convert Excel to PDF Securely</h2>
      
      <p className="lead text-xl text-pdf-gray mb-8">
        Need to lock a spreadsheet into a PDF without uploading your financial data to the cloud? The ToolsWizard Excel to PDF converter extracts the raw tabular data from your .xlsx, .xls, or .csv files and compiles them directly into a standard PDF data table. Best of all, it runs entirely inside your browser to guarantee 100% data privacy.
      </p>

      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-10">
        <h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-4">
        How to Use the Excel to PDF Tool
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
          Unlike cloud-based converters that use Microsoft Office backend servers to perfectly clone complex visual layouts (which requires uploading your sensitive documents to a third-party server), our tool utilizes a <strong>Zero-Trust Data Extraction Engine</strong>. It prioritizes data privacy above all else by parsing the raw data out of your sheets and painting them into a clean, unified PDF table locally. Complex cell colors, charts, and macros will not be preserved perfectly, but your sensitive financial data will remain strictly on your hard drive.
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4">How to Convert Excel to PDF</h3>
      <ol className="list-decimal pl-6 space-y-4 mb-10 text-pdf-gray">
        <li><strong>Select your Spreadsheet:</strong> Drag and drop your target Microsoft Excel or CSV file into the secure conversion zone.</li>
        <li><strong>Initialize the Engine:</strong> Click "Compile to PDF". The tool will spin up a local parser to read the document's rows and columns.</li>
        <li><strong>Download the .pdf:</strong> A clean PDF document containing all your tabular data perfectly aligned will be instantly generated and saved to your computer.</li>
      </ol>

      <h3 className="text-2xl font-bold mt-10 mb-4">Why Privacy Matters for Excel Spreadsheets</h3>
      <p className="mb-6">
        When dealing with accounting ledgers, employee payrolls, or customer databases, uploading an Excel document to a random free conversion website is a massive security risk. Once a document leaves your network, you lose control over how it is stored, who reads it, and whether it is used to train AI models.
      </p>
      <p className="mb-6">
        Our zero-trust architecture solves this by downloading the conversion logic directly into your browser's memory. When you click "convert", the processing happens using your computer's own CPU. The network connection could be physically severed, and the tool would still function perfectly.
      </p>

      
      

      <h3 className="text-2xl font-bold mt-12 mb-6">Frequently Asked Questions</h3>
      <FAQAccordion faqs={faqs} />
    </article>
  );
}
