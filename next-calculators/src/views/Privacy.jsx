import React from 'react';

export default function Privacy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-calc-black mb-2">Privacy Policy</h1>
      <p className="text-sm text-calc-gray mb-6">Last updated: {lastUpdated}</p>
      
      <div className="bg-calc-white p-8 rounded-xl border border-calc-lightGray shadow-sm text-calc-darkGray space-y-6 leading-relaxed">
        <p>
          At <strong>ToolsWizard</strong>, accessible from your domain, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ToolsWizard and how we use it.
        </p>

        <h2 className="text-2xl font-bold text-calc-black mt-6">1. Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>

        <h2 className="text-2xl font-bold text-calc-black mt-6">2. Information We Collect and How We Use It</h2>
        <p>
          The core functionality of our utility tools (including Calculator, Text, JSON, and Encoder/Decoder tools) runs entirely inside your internet browser via client-side scripts. <strong>We do not transmit, save, process, or store your personal file or data inputs on our servers.</strong> Your files, numbers, and strings remain strictly on your own device.
        </p>
        <p>
          If you contact us directly, we may receive additional information about you such as your name, email address, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. We use this information to operate, maintain, improve, and expand our website utilities.
        </p>

        <h2 className="text-2xl font-bold text-calc-black mt-6">3. Log Files and Analytical Data</h2>
        <p>
          ToolsWizard follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
        </p>

        <h2 className="text-2xl font-bold text-calc-black mt-6">4. Google DoubleClick DART Cookie & Third-Party Advertising</h2>
        <p>
          Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our platform and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-calc-green underline">https://policies.google.com/technologies/ads</a>
        </p>
        <p>
          Some of the advertisers on our site may use cookies and web beacons. Our advertising partners include <strong>Google AdSense</strong>. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on ToolsWizard, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
        </p>
        <p>
          Note that ToolsWizard has no access to or control over these cookies that are used by third-party advertisers. You can choose to disable cookies through your individual browser options.
        </p>

        <h2 className="text-2xl font-bold text-calc-black mt-6">5. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>
          Under the CCPA, among other rights, California consumers have the right to request that a business disclose the categories and specific pieces of personal data that a business has collected about consumers, request that a business delete any personal data about the consumer that a business has collected, and request that a business sell not the consumer's personal data. If you make a request, we have one month to respond to you. Please contact us if you wish to exercise any of these rights.
        </p>

        <h2 className="text-2xl font-bold text-calc-black mt-6">6. GDPR Data Protection Rights</h2>
        <p>
          We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
          <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
          <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
          <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data.</li>
          <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data.</li>
        </ul>

        <h2 className="text-2xl font-bold text-calc-black mt-6">7. Contact Infrastructure</h2>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through our official support channel at <strong>calcdeveloper@outlook.com</strong>.
        </p>
      </div>
    </main>
  );
}