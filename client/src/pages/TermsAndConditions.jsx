import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-calc-green">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: March 2026</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this Body Fat Calculator (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-red-600">2. Medical and Health Disclaimer</h2>
          <p className="mb-2">
            <strong>Not Medical Advice:</strong> The calculations, percentages, categories, and information provided by this Service are for educational and informational purposes only. They are not intended to be a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p>
            Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition, weight loss plan, or fitness regimen. Never disregard professional medical advice or delay in seeking it because of something you have read or calculated on this Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Accuracy of Calculations</h2>
          <p>
            This Service utilizes established anthropometric formulas (including but not limited to the U.S. Navy Method, YMCA Method, and Jackson-Pollock Skinfold method) to estimate body fat percentage and lean body mass. 
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>These formulas are <strong>estimates</strong> and inherently carry a margin of error.</li>
            <li>Results may vary significantly based on user input accuracy, hydration levels, and individual body composition anomalies.</li>
            <li>For exact clinical measurements, please consult a medical professional for a DEXA scan or hydrostatic weighing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Privacy</h2>
          <p>
            This calculator operates locally within your browser. The personal metrics you input (such as age, weight, height, and circumferences) are used solely for real-time mathematical calculations. We do not transmit, save, or store your personal health data on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p>
            In no event shall the developers, owners, or hosts of this Service be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of this calculator or reliance on its generated results.
          </p>
        </section>
      </div>
    </div>
  );
}