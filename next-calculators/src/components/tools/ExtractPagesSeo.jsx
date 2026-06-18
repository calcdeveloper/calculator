import React from 'react';
import { HelpCircle, CheckCircle2, Lock } from 'lucide-react';

export default function ExtractPagesSeo() {
  const faqs = [
    {
      q: "What does it mean to Extract PDF Pages?",
      a: "Extracting PDF pages means pulling specific pages out of a larger PDF document and saving them as a new, separate PDF file. This is useful when you only need a portion of a document and want to discard the rest without modifying the original file."
    },
    {
      q: "Is this tool free to use?",
      a: "Yes, our PDF page extraction tool is completely free. There are no hidden fees, no limits on the number of pages you can extract, and no watermarks added to your downloaded documents."
    },
    {
      q: "How do I specify which pages to extract?",
      a: "You can specify pages by entering them in the input field. Use commas to separate individual pages (e.g., 1, 4, 7) and hyphens for page ranges (e.g., 2-5). You can combine both formats, like '1, 3-5, 8'."
    },
    {
      q: "Can I extract pages from multiple PDFs at once?",
      a: "Currently, our tool is designed to handle one PDF file at a time to ensure optimal performance and accuracy in your local browser environment."
    },
    {
      q: "Will the quality of the extracted pages remain the same?",
      a: "Absolutely. The extraction process pulls the exact pages from your original document without any compression, ensuring the quality, text, formatting, and images remain identical to the original."
    },
    {
      q: "Is my data secure during the extraction process?",
      a: "Yes, 100% secure. Our tool processes the PDF entirely within your local web browser. Your file is never uploaded to an external server, meaning your private data never leaves your device."
    },
    {
      q: "Do I need to install any software to use this tool?",
      a: "No installation is required. This is a web-based application that runs directly in your modern web browser (like Chrome, Safari, Firefox, or Edge)."
    },
    {
      q: "Does this work on mobile devices?",
      a: "Yes, our tool is fully responsive and works efficiently on mobile browsers (iOS and Android), allowing you to extract pages from your phone or tablet on the go."
    },
    {
      q: "What is the maximum file size I can upload?",
      a: "Because processing happens locally on your device, the file size limit is dictated by your device's available memory. In general, documents up to a few hundred megabytes should process without issue."
    },
    {
      q: "Will extracting pages alter the original PDF file?",
      a: "No, the original PDF file remains completely unchanged on your device. The tool creates a brand new PDF file containing only the pages you selected."
    },
    {
      q: "Can I extract pages that contain interactive forms or signatures?",
      a: "Yes, the tool will extract the pages exactly as they are. However, complex digital signatures might become invalid depending on how the original PDF was secured."
    },
    {
      q: "Why should I use this over desktop software?",
      a: "Our browser-based tool is instantly accessible, requires no installation, is completely free, and doesn't consume permanent space on your hard drive, making it a highly convenient alternative to bulky desktop software."
    },
    {
      q: "What browsers are supported?",
      a: "We support all major modern web browsers including Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, and Opera."
    },
    {
      q: "Do I need an internet connection to use this tool?",
      a: "You need an internet connection to load the website initially. However, because the processing happens locally via JavaScript in your browser, the actual extraction process doesn't rely on network speed."
    },
    {
      q: "Can I extract pages from a password-protected PDF?",
      a: "Currently, you need to provide an unlocked PDF. If a PDF is encrypted with a password, our tool cannot read its structure to extract the pages."
    },
    {
      q: "Are there any hidden costs or subscriptions?",
      a: "No. The tool is provided as a free utility. There are no premium tiers, no subscriptions, and no hidden charges."
    },
    {
      q: "Can I share the extracted PDF easily?",
      a: "Yes, the extracted file is a standard PDF. You can email it, upload it to cloud storage, or share it via messaging apps just like any other document."
    },
    {
      q: "Does it support Mac, Windows, and Linux?",
      a: "Yes, since it operates within the browser, it is entirely operating system agnostic and works flawlessly on Mac, Windows, and Linux."
    },
    {
      q: "How fast is the extraction process?",
      a: "The extraction is nearly instantaneous, usually taking just a few seconds, as it relies on the processing power of your local device rather than internet upload/download speeds."
    },
    {
      q: "Who is this tool built for?",
      a: "It's built for everyone—students, lawyers, accountants, marketers, and anyone who needs to quickly separate specific pages from a larger document for sharing or personal organization."
    }
  ];

  return (
    <section className="prose max-w-none bg-pdf-white p-10 md:p-16 rounded-3xl shadow-sm border border-pdf-gray mb-20 mt-16 font-sans text-pdf-dark leading-relaxed">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-pdf-dark tracking-tight mb-6">Master Document Management: Extract PDF Pages Effortlessly</h2>
        <p className="text-lg text-pdf-dark/80">
          In our fast-paced digital world, efficiency is paramount. We constantly handle massive PDF documents—be it exhaustive corporate reports, sprawling academic textbooks, or intricate legal contracts. Often, you only need a fraction of that information. Sending a 500-page document when only three pages are relevant is unprofessional, confusing, and wastes bandwidth. This is where the ability to precisely <strong>Extract PDF Pages</strong> becomes an invaluable skill.
        </p>
        <p className="text-lg text-pdf-dark/80 mt-4">
          Our online <strong>Extract PDF Pages</strong> tool is engineered to solve this exact problem. By allowing you to isolate specific pages and save them as a fresh, independent document, we empower you to streamline your workflow, enhance your professional communication, and organize your digital life with unprecedented ease. And best of all, our tool operates entirely within your browser, guaranteeing unparalleled speed and absolute privacy.
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-10 tracking-tight">Understanding PDF Page Extraction</h3>
      <p className="text-lg text-pdf-dark/80">
        At its core, <strong>extracting PDF pages</strong> is the process of splitting a larger Portable Document Format (PDF) file to create a new file containing only a selected subset of pages. Think of it like taking a massive physical binder, removing only the specific chapters you need for a meeting, and placing them in a sleek, new folder. The original binder remains intact, while you now have a highly focused, lightweight document ready for immediate use.
      </p>
      <p className="text-lg text-pdf-dark/80 mt-4">
        Our dedicated <strong>PDF Extractor</strong> achieves this without altering the integrity of the original file. The fonts, images, vector graphics, and layouts remain pixel-perfect. It does not rasterize the text into images, ensuring your extracted pages remain fully searchable and selectable, preserving the high fidelity of your important data.
      </p>

      <h3 className="text-2xl font-bold mt-10 tracking-tight">Why Choose a Client-Side PDF Extractor?</h3>
      <p className="text-lg text-pdf-dark/80">
        The internet is saturated with online PDF utilities, but the vast majority operate on a server-side model. This means when you want to edit a document, you are forced to upload your potentially sensitive files to a remote server. This approach introduces significant risks and drawbacks. Our tool, conversely, utilizes advanced WebAssembly and JavaScript to perform the extraction <em>client-side</em>—directly within your device's memory.
      </p>
      
      <div className="not-prose grid md:grid-cols-2 gap-8 my-8">
        <div className="p-8 bg-pdf-bg/50 rounded-2xl border border-pdf-gray/50">
          <h4 className="text-xl font-bold text-pdf-primary mb-4 flex items-center gap-2"><Lock size={20} /> Uncompromising Privacy</h4>
          <p className="text-pdf-dark/80 text-base leading-relaxed">
            Your data is yours. Because processing happens locally, your PDF never travels across the internet. There are no server logs, no cloud storage vulnerabilities, and zero risk of your confidential business data, legal documents, or personal records being intercepted or retained by third parties.
          </p>
        </div>
        <div className="p-8 bg-pdf-bg/50 rounded-2xl border border-pdf-gray/50">
          <h4 className="text-xl font-bold text-pdf-secondary mb-4 flex items-center gap-2"><CheckCircle2 size={20} /> Zero Latency Performance</h4>
          <p className="text-pdf-dark/80 text-base leading-relaxed">
            Server-side tools force you to wait for long upload and download times, especially with large files. Our local processor eliminates this entirely. Extraction happens in milliseconds, utilizing your device's CPU to deliver immediate results, dramatically speeding up your workflow.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10 tracking-tight">Core Features That Drive Productivity</h3>
      <p className="text-lg text-pdf-dark/80">
        We have meticulously designed our <strong>Extract Pages from PDF</strong> tool to be intuitive yet powerful, catering to both casual users and demanding professionals.
      </p>

      <ul className="space-y-3 text-lg text-pdf-dark/80 list-disc pl-6 mt-4">
        <li><strong>Flexible Range Selection:</strong> Specify exactly what you need. Need pages 1, 5, and 7? Just type '1, 5, 7'. Need a whole section? Type '10-25'. You can mix and match formats effortlessly (e.g., '1, 3-5, 12') for complete control.</li>
        <li><strong>Instant Processing:</strong> Experience the power of client-side execution. The moment you click extract, your new document is generated and ready for download without any frustrating loading screens.</li>
        <li><strong>No File Size Limits:</strong> Unconstrained by server upload limits, our tool handles massive documents with ease. As long as your device has the RAM to load the file, our tool can extract pages from it.</li>
        <li><strong>Platform Independent:</strong> Whether you are on a Windows desktop, a MacBook, an iPad, or an Android phone, our responsive web interface provides a flawless experience without needing dedicated apps.</li>
        <li><strong>100% Free Forever:</strong> No paywalls, no subscription tiers, and no hidden 'premium' features. We believe essential document tools should be freely accessible to everyone.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-12 mb-6">How to Extract Pages from a PDF in 3 Simple Steps</h3>
      <p className="text-lg text-pdf-dark/80">
        Complexity is the enemy of productivity. We've stripped away the clutter to provide a seamless, frictionless user experience.
      </p>
      
      <div className="not-prose space-y-6 mt-6">
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 rounded-full bg-pdf-primary text-white flex items-center justify-center font-bold text-xl shrink-0">1</div>
          <div>
            <h4 className="text-xl font-bold text-pdf-dark mb-2">Upload Your Document</h4>
            <p className="text-pdf-dark/80 text-base">Drag and drop your PDF file into the designated upload zone, or click the area to browse your local file system. The file loads instantly into your browser's memory.</p>
          </div>
        </div>
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 rounded-full bg-pdf-primary text-white flex items-center justify-center font-bold text-xl shrink-0">2</div>
          <div>
            <h4 className="text-xl font-bold text-pdf-dark mb-2">Define Your Pages</h4>
            <p className="text-pdf-dark/80 text-base">In the input field, type the specific page numbers or ranges you wish to extract. For example, entering '1, 4-6, 9' will pull those five specific pages from the document.</p>
          </div>
        </div>
        <div className="flex gap-6 items-start">
          <div className="w-12 h-12 rounded-full bg-pdf-primary text-white flex items-center justify-center font-bold text-xl shrink-0">3</div>
          <div>
            <h4 className="text-xl font-bold text-pdf-dark mb-2">Extract and Download</h4>
            <p className="text-pdf-dark/80 text-base">Click the 'Extract Pages' button. Our powerful engine isolates your selected pages instantly. You can then immediately download your new, streamlined PDF file.</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-6">Real-World Applications Across Industries</h3>
      <p className="text-lg text-pdf-dark/80">
        The ability to <strong>separate PDF pages</strong> is a universal necessity. Here is how different professions leverage this tool to optimize their daily operations:
      </p>

      <ul className="space-y-4 text-lg text-pdf-dark/80 mt-6">
        <li><strong>Legal Professionals:</strong> Lawyers frequently deal with massive case files and discovery documents. Extracting specific contracts, exhibits, or testimonies to send to opposing counsel or clients is crucial for clarity and maintaining confidentiality of unrelated information.</li>
        <li><strong>Students & Academics:</strong> Instead of navigating a 800-page digital textbook every time you need to study a specific chapter, students can extract the relevant chapters for the current semester. It makes studying more focused and file sharing with study groups significantly easier.</li>
        <li><strong>Financial Analysts:</strong> Annual reports and financial prospectuses are notoriously dense. Analysts can extract just the balance sheets, income statements, or specific departmental summaries needed for a focused presentation to stakeholders.</li>
        <li><strong>Sales & Marketing:</strong> Marketers often have comprehensive product catalogs. When pitching to a specific client, they can extract only the pages featuring products relevant to that client's industry, creating a tailored, highly effective pitch deck.</li>
        <li><strong>Human Resources:</strong> HR departments receive massive employee handbooks or benefit guides. They can easily extract the specific forms a new hire needs to sign, streamlining the onboarding process and reducing confusion.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-12 mb-6">The Environmental and Efficiency Impact</h3>
      <p className="text-lg text-pdf-dark/80">
        While digital, optimizing document size has tangible benefits. Sending a 3-page extracted PDF instead of a 100-page original reduces bandwidth consumption, speeds up email delivery, and saves storage space on both your outbox and the recipient's inbox. Furthermore, if the document ultimately needs to be printed, providing an extracted version ensures that only the necessary pages consume paper and ink, contributing to a more sustainable office environment.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-6">Conclusion: Take Control of Your Documents</h3>
      <p className="text-lg text-pdf-dark/80">
        Stop wrestling with oversized documents and sending irrelevant information. Our <strong>Extract PDF Pages</strong> tool provides a professional, highly secure, and lightning-fast solution for document management. By processing everything locally in your browser, we guarantee your privacy while delivering unmatched performance.
      </p>
      <p className="text-lg text-pdf-dark/80 mt-4">
        Whether you are refining a presentation, isolating critical legal clauses, or simply organizing your digital library, our tool empowers you to work smarter. Bookmark this utility today and experience the easiest way to manipulate and manage your PDF files.
      </p>

      {/* FAQ Section */}
      <h3 className="text-3xl font-bold text-pdf-dark mt-16 mb-8 flex items-center gap-3">
        <HelpCircle className="text-pdf-primary" /> Frequently Asked Questions
      </h3>
      <div className="not-prose space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group border border-pdf-gray rounded-2xl p-6 bg-pdf-white transition-all hover:border-pdf-primary shadow-sm cursor-pointer">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-lg">
              {faq.q}
              <span className="group-open:rotate-180 transition-transform text-pdf-primary">▼</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-base leading-relaxed border-t border-pdf-gray/50 pt-4">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
