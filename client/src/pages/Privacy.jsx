export default function Privacy() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
        <h1 className="text-4xl font-bold text-calc-black mb-6">Privacy & Policy</h1>
        
        <div className="bg-calc-white p-8 rounded-xl border border-calc-lightGray shadow-sm text-calc-darkGray space-y-6 leading-relaxed">
          <p className="text-sm text-calc-gray">Last updated: March 2026</p>
          
          <p>
            At <strong>CalcPilot</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
          </p>
  
          <h2 className="text-xl font-bold text-calc-black mt-6">1. Information We Do Not Collect</h2>
          <p>
            The core functionality of our calculators (such as Finance, Health, and Math) runs entirely inside your internet browser using client-side JavaScript. <strong>We do not transmit, save, or store your personal inputs.</strong> Your financial numbers, health metrics (like BMI), and other calculations remain strictly on your own device.
          </p>
  
          <h2 className="text-xl font-bold text-calc-black mt-6">2. Information We Collect Automatically</h2>
          <p>
            Like most websites, we collect basic, non-personally identifiable information to improve our services. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Browser type and device type</li>
            <li>Pages visited and time spent on the site</li>
            <li>Referring websites</li>
          </ul>
  
          <h2 className="text-xl font-bold text-calc-black mt-6">3. Cookies</h2>
          <p>
            CalcPilot may use "cookies" to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
          </p>
  
          <h2 className="text-xl font-bold text-calc-black mt-6">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us via our Support page.
          </p>
        </div>
      </main>
    );
  }