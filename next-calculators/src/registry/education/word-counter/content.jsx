import React from "react";

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-calc-darkGray mt-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-calc-black">
          Why Use a Word and Character Counter?
        </h2>
        <p className="mb-4 leading-relaxed">
          Whether you are a student writing an essay, a professional drafting a report, or a social media manager crafting the perfect tweet, knowing your exact word and character count is essential. Many platforms, applications, and academic guidelines have strict length limits. 
        </p>
        <p className="mb-4 leading-relaxed">
          Our free real-time word counter tool helps you track your text length instantly, ensuring you stay within your required limits without having to rely on heavy word processing software.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray">
        <h3 className="text-xl font-bold text-calc-black mb-4">
          Common Character Limits for Social Media
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Twitter (X):</strong> 280 characters (up to 10,000 for Premium users)</li>
          <li><strong>LinkedIn Posts:</strong> 3,000 characters</li>
          <li><strong>Instagram Captions:</strong> 2,200 characters</li>
          <li><strong>Facebook Posts:</strong> 63,206 characters</li>
          <li><strong>TikTok Descriptions:</strong> 2,200 characters</li>
          <li><strong>YouTube Titles:</strong> 100 characters</li>
          <li><strong>SEO Meta Descriptions:</strong> ~150 to 160 characters</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-calc-black mb-4">
          How Are The Metrics Calculated?
        </h3>
        <div className="space-y-4">
          <div>
            <strong className="text-calc-black">Words:</strong> Calculated by counting the spaces between blocks of letters or numbers. 
          </div>
          <div>
            <strong className="text-calc-black">Characters:</strong> The total sum of every single keystroke in your text, including letters, numbers, punctuation, and spaces.
          </div>
          <div>
            <strong className="text-calc-black">Characters (No Spaces):</strong> Important for certain academic or professional submissions that exclude blank space from their total count limits.
          </div>
          <div>
            <strong className="text-calc-black">Lines:</strong> The number of hard returns or paragraph breaks you have created in your text block.
          </div>
        </div>
      </section>
    </div>
  );
}