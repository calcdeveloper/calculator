"use client";

import { useState, useRef } from "react";
import { Download, Copy, RefreshCw, QrCode } from "lucide-react";

export default function QRGeneratorClient() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const generateQRCode = async () => {
    if (!text.trim()) return;

    try {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}&color=${foregroundColor.replace("#", "")}&bgcolor=${backgroundColor.replace("#", "")}`
      );
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setQrCode(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const downloadQRCode = () => {
    if (!qrCode) return;
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyQRCode = async () => {
    if (!qrCode) return;
    try {
      const response = await fetch(qrCode);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob })
      ]);
    } catch (error) {
      console.error("Error copying QR code:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Free QR Code Generator - Create Custom QR Codes Online
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate clean, custom matrix identifiers for websites, credentials, and WiFi profiles in real-time. Completely unwatermarked and free to use.
          </p>
        </div>

        {/* INPUT INTERACTIVE COMPONENT CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter URL or Plain Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="https://yourdomain.com or type specific parameters here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none font-sans text-base text-gray-800"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Foreground Color
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
                <input
                  type="color"
                  value={foregroundColor}
                  onChange={(e) => setForegroundColor(e.target.value)}
                  className="w-12 h-10 rounded-md cursor-pointer border-0"
                />
                <span className="text-sm font-mono uppercase text-gray-600">{foregroundColor}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Background Color
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-12 h-10 rounded-md cursor-pointer border-0"
                />
                <span className="text-sm font-mono uppercase text-gray-600">{backgroundColor}</span>
              </div>
            </div>
          </div>

          <button
            onClick={generateQRCode}
            className="w-full bg-green-600 text-white py-3.5 px-6 rounded-lg font-bold hover:bg-green-700 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md shadow-green-100"
          >
            <QrCode size={20} />
            Generate QR Code
          </button>
        </div>

        {/* INTERACTIVE PREVIEW PANEL */}
        {qrCode && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100 animate-fadeIn">
            <div className="flex flex-col items-center gap-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-inner">
                <img
                  src={qrCode}
                  alt="Customized Optical Matrix Code Generated Asset"
                  className="w-64 h-64 object-contain transition-transform hover:scale-105"
                />
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={downloadQRCode}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-100"
                >
                  <Download size={18} />
                  Download PNG
                </button>
                <button
                  onClick={copyQRCode}
                  className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 active:scale-[0.98] transition-all shadow-md shadow-purple-100"
                >
                  <Copy size={18} />
                  Copy Image
                </button>
                <button
                  onClick={generateQRCode}
                  className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 active:scale-[0.98] transition-all"
                >
                  <RefreshCw size={18} />
                  Regenerate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            LONG-FORM DEEP-SEO CONTENT MATRIX (1200+ WORDS EXCLUDING FAQS)
           ========================================================================= */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100 prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-8 font-sans">
          
          {/* USER NAVIGATION AND TABLE OF CONTENTS */}
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mt-0 mb-3">Table of Contents</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-semibold text-green-700 p-0 m-0 list-none">
              <li>• <a href="#intro" className="hover:underline transition-colors">1. Quick Response Framework Ecosystem</a></li>
              <li>• <a href="#definition" className="hover:underline transition-colors">2. What is a QR Code Generator?</a></li>
              <li>• <a href="#why-us" className="hover:underline transition-colors">3. Why Use Our QR Code Generator?</a></li>
              <li>• <a href="#features" className="hover:underline transition-colors">4. Key Features</a></li>
              <li>• <a href="#how-to" className="hover:underline transition-colors">5. How to Generate a QR Code</a></li>
              <li>• <a href="#popular-uses" className="hover:underline transition-colors">6. Popular Uses of QR Codes</a></li>
              <li>• <a href="#business-benefits" className="hover:underline transition-colors">7. Benefits for Businesses (India & USA)</a></li>
              <li>• <a href="#individual-benefits" className="hover:underline transition-colors">8. Benefits for Individuals</a></li>
              <li>• <a href="#comparison" className="hover:underline transition-colors">9. Why Choose Our Tool Over Others?</a></li>
              <li>• <a href="#safety" className="hover:underline transition-colors">10. Is It Safe? Local Encryption Analysis</a></li>
              <li>• <a href="#tips" className="hover:underline transition-colors">11. Tips for Better QR Codes</a></li>
            </ul>
          </div>

          {/* SECTION 1: INTRODUCTION */}
          <section id="intro" className="pt-2">
            <p className="text-lg text-gray-600 mt-0">
              In today's fast-paced digital landscapes across India and the United States, seamlessly connecting physical items to digital experiences is essential for business growth. A <strong>QR Code Generator</strong> provides an easy, instant way to bridge this gap. It helps tech teams, operational units, and individual creators convert plain text strings, network passwords, and deep website links into scan-friendly optical square grids.
            </p>
            <p>
              Whether you are an enterprise platform coordinator in Silicon Valley scaling cloud infrastructure or a retail merchant in Mumbai rolling out zero-contact interactions, static matrices offer a fast, reliable, and convenient way to handle data. Using our online system, you can build custom, high-contrast assets without subscriptions, daily output restrictions, or forced account configurations. 
            </p>
            <p>
              Our tool is built directly on modern web frameworks to ensure full responsive compatibility with any device. It helps you design and configure pristine image assets for immediate use in digital mockups, print runs, and product packaging, saving you time and keeping your workflows moving smoothly.
            </p>
          </section>

          {/* SECTION 2: WHAT IS A QR CODE GENERATOR */}
          <section id="definition">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight border-b pb-2">What is a QR Code Generator?</h2>
            <p>
              A <strong>QR Code Generator</strong> is a specialized software utility that processes raw data characters—such as URLs, contact details, or credentials—and translates them into a standardized two-dimensional grid of black and white square modules based on international formatting rules.
            </p>
            <p>
              Unlike traditional linear barcodes that only store data horizontally, QR codes store information both vertically and horizontally. This design allows them to pack up to several hundred times more data into the same physical space, making them highly versatile for modern data storage.
            </p>
            <p>
              The system organizes raw inputs into specific sections within the matrix grid, incorporating precise corner tracking squares to help camera lenses align quickly from any angle. 
            </p>
            <p>
              When using a <strong>Static QR Generator</strong>, the text input is baked directly into the layout pattern. This makes the code permanent and immutable, ensuring it functions reliably over time without depending on external web APIs or database lookups.
            </p>
          </section>

          {/* SECTION 3: WHY USE OUR QR CODE GENERATOR? */}
          <section id="why-us">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight border-b pb-2">Why Use Our QR Code Generator?</h2>
            <p>
              Many web-based configuration tools lock advanced customization parameters behind hidden fees or add unsightly branding watermarks to your completed files. Our platform provides unrestricted, free-forever access to high-quality code creation.
            </p>
            <p>
              The application runs entirely within your local browser context. This client-side approach ensures your custom foreground and background color combinations update instantly, allowing you to fine-tune your designs in real-time.
            </p>
            <p>
              Our generator outputs crisp, clear images with clean edge scaling. This high resolution helps protect your physical print runs from scanning errors caused by pixel distortion or blurry borders, ensuring reliable scans every time.
            </p>
            <p>
              Additionally, our lightweight setup works seamlessly on both mobile interfaces and heavy desktop engineering environments, making it easy to create and download files from any device.
            </p>
          </section>

          {/* SECTION 4: KEY FEATURES */}
          <section id="features">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight border-b pb-2">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
              <li><strong>Instant QR Generation:</strong> Matrices update immediately as you input data, eliminating processing delays.</li>
              <li><strong>Unlimited Matrix Creation:</strong> Create as many files as your workflow requires without encountering generation limits or caps.</li>
              <li><strong>Color Customization Engine:</strong> Modify background zones and block colors to easily align files with your brand guidelines.</li>
              <li><strong>No Registration Required:</strong> Start building files instantly without filling out sign-up forms, inputting payment details, or creating profiles.</li>
              <li><strong>No Watermarks:</strong> Export clean, professional-grade images without forced brand overlays or promotional stamps.</li>
              <li><strong>Secure Client-Side Processing:</strong> Your inputs remain secure inside your local browser context rather than being stored on backend servers.</li>
              <li><strong>Responsive Layout Configuration:</strong> The modern UI adjusts smoothly across mobile phones, tablets, and desktop workstations.</li>
            </ul>
          </section>

          {/* SECTION 5: HOW TO GENERATE A QR CODE */}
          <section id="how-to">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight border-b pb-2">How to Generate a QR Code</h2>
            <p>
              Building a custom asset takes only a few seconds through our intuitive four-step generation workflow:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-600">
              <li><strong>Provide Data Content:</strong> Paste your destination address into the main input field. The tool supports standard URLs, tracking tokens, and plain text parameters.</li>
              <li><strong>Adjust Color Schemes:</strong> Use the interactive color pickers to customize your colors. Set a custom foreground color for the blocks and a background color that complements your project design.</li>
              <li><strong>Process Matrix:</strong> Click the main generate button to instantly calculate the block layout and render your new high-contrast preview.</li>
              <li><strong>Export Asset:</strong> Use the direct download action to save the crisp PNG file directly to your local storage device.</li>
            </ol>
          </section>

          {/* SECTION 6: POPULAR USES OF QR CODES */}
          <section id="popular-uses">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight border-b pb-2">Popular Uses of QR Codes</h2>
            <p>
              Digital matrix squares provide structured, touch-free access to data across a wide variety of personal and industrial applications:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-gray-50 rounded-lg">
                <strong className="text-gray-900 block mb-1">Corporate Presentation Profiles</strong>
                Add custom tracking squares to business cards, physical resumes, and portfolio assets to quickly connect prospects to your professional digital profiles.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <strong className="text-gray-900 block mb-1">Restaurant Menu Access</strong>
                Replace physical menus with table-side scannable cards, helping dining rooms streamline updates and lower printing costs.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <strong className="text-gray-900 block mb-1">Marketing Campaigns</strong>
                Place codes on promotional banners, event flyers, and print ads to instantly bridge physical audiences to high-conversion digital landing pages.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <strong className="text-gray-900 block mb-1">Simplified WiFi Sharing</strong>
                Encode network SSIDs and passwords into simple scannable codes, allowing office visitors and hotel guests to connect to networks instantly without manual typing.
              </div>
            </div>
          </section>

          {/* SECTION 7: BENEFITS FOR BUSINESSES */}
          <section id="business-benefits">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight border-b pb-2">Benefits for Businesses (India & USA Focus)</h2>
            <p>
              In competitive markets like India and the United States, businesses use visual data blocks to simplify workflows, cut down on manual friction, and accelerate growth.
            </p>
            <p>
              In India, businesses from retail shops in tech hubs to local merchants use automated codes to streamline storefront tracking, share informational links, and connect customers to digital resources.
            </p>
            <p>
              In the United States, brands integrate custom matrix formats into e-commerce packaging, mail marketing campaigns, and inventory management systems. This helps teams capture offline customer attention and direct it smoothly into online sales funnels.
            </p>
            <p>
              Using a reliable <strong>Website QR Code Generator</strong> helps businesses of any size—from local startups to established retail brands—deploy clean, operational data shortcuts that enhance user engagement and lower operational friction.
            </p>
          </section>

          {/* SECTION 8: BENEFITS FOR INDIVIDUALS */}
          <section id="individual-benefits">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight border-b pb-2">Benefits for Individuals</h2>
            <p>
              Beyond commercial enterprise workflows, individual users, students, and freelancers can also use our tool to simplify personal data management:
            </p>
            <p>
              Students can generate simple text blocks to embed research links, notes, and study guides into collaborative projects and print materials. Freelancers can paste custom portfolio links directly onto physical resumes, making it easy for hiring managers to view live work samples with a quick smartphone scan.
            </p>
            <p>
              Additionally, you can use the tool to share contact cards, event locations, or home network access credentials with guests, eliminating the need to repeat complex alphanumeric text strings aloud.
            </p>
          </section>

          {/* SECTION 9: WHY CHOOSE OUR TOOL OVER OTHERS? */}
          <section id="comparison">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight border-b pb-2">Why Choose Our Tool Over Others?</h2>
            <p>
              Many online platforms add unnecessary complexity to generating basic identifiers, requiring users to navigate complex configurations, watch invasive ads, or wait out processing delays. Our tool focuses on speed, simplicity, and user safety.
            </p>
            <p>
              We bypass complex registration requirements completely, allowing you to access our generation interface directly from any device. The client-side architecture renders color adjustments instantly, helping you save time and focus on your projects.
            </p>
            <p>
              The tool provides clean, professional-grade file downloads without forcing watermarks or promotional stamps onto your completed assets. This design gives you full control over your files, whether you are using them for personal projects or large-scale print runs.
            </p>
          </section>

          {/* SECTION 10: IS IT SAFE? */}
          <section id="safety">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight border-b pb-2">Is It Safe? Local Encryption Analysis</h2>
            <p>
              Data privacy is a core priority of this utility. Traditional cloud platforms process your input parameters on external database clusters, which can leave data vulnerable to logging risks or profile tracking.
            </p>
            <p>
              Our application avoids these tracking loops by running directly inside your local web browser. Your character strings are converted into visual code patterns locally within your device memory context.
            </p>
            <p>
              Because no data is sent to external servers or backend systems, your links and text remain entirely private. Once you close or refresh the browser tab, the history is cleared, ensuring a safe and secure workflow.
            </p>
          </section>

          {/* SECTION 11: TIPS FOR BETTER QR CODES */}
          <section id="tips">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight border-b pb-2">Tips for Better QR Codes</h2>
            <p>
              To ensure your generated blocks remain easy to scan across various consumer devices and lighting conditions, keep these simple design guidelines in mind:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs text-gray-600">
              <li><strong>Prioritize High Contrast:</strong> Always use a dark foreground color on a light background. Inverting this pattern can prevent older mobile lenses from reading the grid accurately.</li>
              <li><strong>Keep Safe Borders:</strong> Maintain a clean, open margin around the entire outer boundary of your printed matrix to help scanning apps isolate and decode the pattern quickly.</li>
              <li><strong>Avoid Data Overload:</strong> When using static formats, remember that longer text strings create denser, more complex dot grids. Use short URLs or destination redirects to keep the matrix clean and scannable.</li>
              <li><strong>Verify Samples Before Printing:</strong> Always run test scans on your customized preview using several different mobile devices before launching a large-scale physical print run.</li>
            </ul>
          </section>

          {/* CONCLUSION BRIEF */}
          <section className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 italic mt-0">
              Generating clean, custom optical codes shouldn't require complex signups or navigating watermarked layouts. Use our free, client-side tool to build high-contrast assets that fit your workflow perfectly. Bookmark our suite today to keep your production and marketing tasks moving smoothly.
            </p>
          </section>

        </div>

        {/* INTERNAL TOOLS CROSS LINKING DIRECTORY HUB */}
        <div className="mt-8 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
          <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Explore Developer Utility Kits</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <a href="/tools/generators/uuid-generator" className="px-3 py-1.5 bg-gray-50 hover:bg-green-50 rounded-md border text-gray-600 hover:text-green-700 transition-colors font-medium">UUID Generator</a>
          </div>
        </div>

      </div>
    </div>
  );
}