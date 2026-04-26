import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Free Word & Character Counter Online | Check Text Length
  2. META DESCRIPTION: Free online word and character counter. Instantly track your total words, characters (with and without spaces), and lines for essays, SEO, and social media.
  3. URL SLUG: /word-character-counter
  4. H1 TITLE: Free Online Word and Character Counter
  
  11. SEO KEYWORDS:
      - Primary keyword: Word and character counter
      - Secondary keywords: word count online, character counter tool, letter counter, character count without spaces, count lines of text, SEO character counter, essay word counter, social media character limit, count words in text, online text tool.
      - Long-tail keywords: how to check character count without spaces, free tool to count words and characters, word limit counter for upsc essay, instagram caption character counter, seo meta description length checker.
  =========================================
*/

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do spaces count as characters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, in standard formatting and coding, a space is a valid keystroke and counts as a single character. However, because many academic and professional application forms ask for 'Characters (without spaces)', our calculator explicitly provides both metrics."
        }
      },
      {
        "@type": "Question",
        "name": "Is my typed text saved or stored anywhere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Our word and character counter operates 100% locally in your browser (client-side). None of your text data is sent to our servers, saved, or tracked. It is completely safe for pasting confidential essays, business reports, or sensitive documents."
        }
      },
      {
        "@type": "Question",
        "name": "How many pages is 1,000 words?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Using standard formatting (12-point Arial or Times New Roman font, 1-inch margins), 1,000 words is approximately 2 pages single-spaced, or 4 pages double-spaced."
        }
      },
      {
        "@type": "Question",
        "name": "How does the tool calculate 'Words'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The tool counts words by identifying the blank spaces between groups of letters or numbers. For example, 'Hello-world' might be counted as one word depending on hyphenation rules, whereas 'Hello world' is counted as two."
        }
      },
      {
        "@type": "Question",
        "name": "What are the character limits for major social media platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently, standard Twitter (X) allows 280 characters. LinkedIn posts allow up to 3,000 characters. Instagram captions max out at 2,200 characters, and YouTube video titles are restricted to 100 characters."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I need to know the number of lines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Line counting is heavily used by programmers, poets, scriptwriters, and data entry professionals to gauge the vertical length of a text document. It tracks the exact number of 'hard returns' or paragraph breaks you have entered."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      {/* --- SEO SCHEMA --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Online Word and Character Counter</h1>
        <p className="mb-4 text-lg text-gray-600">
          In the digital age, precision in communication is strictly enforced by character and word limits. Whether you are a student drafting a 1,200-word essay for the UPSC Mains, a digital marketer crafting a strict 160-character SEO meta description, or a professional tweaking a 3,000-character LinkedIn post, hitting the exact text length is crucial.
        </p>
        <p className="mb-4">
          Most users rely on heavy, slow word processing software like Microsoft Word or Google Docs just to check their text metrics. This can be incredibly inefficient when you just need to quickly verify the length of an email, a tweet, or a short application answer. Furthermore, many online application portals (like Indian government job forms or university applications) strictly reject inputs that exceed a specific character count, often specifying <em>"Characters without spaces."</em>
        </p>
        <p className="mb-4">
          Our free, real-time <strong>Word & Character Counter</strong> is the ultimate lightweight text analysis tool. Designed for maximum privacy and speed, it instantly tracks your total words, raw characters, characters excluding spaces, and paragraph lines the millisecond you type or paste your text. Stop guessing your text length and start writing with absolute precision.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Text Metric Calculator</h2>
        <p className="mb-6">
          This tool requires zero installation and provides instant, client-side tracking. Follow these simple steps to analyze your document:
        </p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 1: Type or Paste Your Text</h3>
        <p className="mb-2 text-sm text-gray-600">Begin by providing the text you want to analyze.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Click inside the large text area provided in the calculator.</li>
          <li>You can either type directly into the box to see your metrics update in real-time, or copy-paste text from another document (like a PDF, Word file, or notepad).</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 2: Read Your 4 Core Metrics</h3>
        <p className="mb-2 text-sm text-gray-600">Instantly view the breakdown of your text structure.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li><strong>Characters:</strong> The absolute total number of keystrokes used, including letters, punctuation, and all blank spaces.</li>
          <li><strong>Words:</strong> The total number of recognized words, calculated by the spaces separating them.</li>
          <li><strong>Lines:</strong> The number of vertical lines or paragraph breaks (hard returns) in your text.</li>
          <li><strong>Characters (No Spaces):</strong> The dense character count. It subtracts all spaces and line breaks, giving you the pure letter and punctuation count.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 3: Clear and Restart</h3>
        <p className="mb-2 text-sm text-gray-600">Reset the tool for a new document.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Once you are done, simply click the red <strong>"Clear Text"</strong> button at the bottom right. This instantly wipes the text box clean and resets all four tracking metrics back to zero.</li>
        </ul>
      </section>

      {/* --- FORMULA / LOGIC SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Are The Text Metrics Calculated?</h2>
        <p className="mb-6">
          Unlike humans who might skip small words like "a" or "the" when counting manually, software uses strict programmatic logic to calculate these numbers. Here is a transparent look at how our tool interprets your text:
        </p>

        
        
        <div className="space-y-6 mt-6">
          {/* Metric 1 */}
          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Word Count Logic</h3>
            <p className="text-sm text-gray-700">
              A "word" is identified by looking for boundaries—specifically, white spaces or new lines that separate groups of letters and numbers. Punctuation attached to a word (like `hello,`) does not split it into two words. The formula essentially splits the entire text block by spaces and counts the resulting chunks.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">2. Absolute Character Count</h3>
            <p className="text-sm text-gray-700">
              This measures the pure string length. Every single keystroke matters. A letter "A", a comma ",", a spacebar press " ", and an "Enter" key press all count as exactly 1 character. This is the metric used by Twitter and SMS platforms.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">3. Characters (Without Spaces)</h3>
            <p className="text-sm text-gray-700">
              This is a derived metric. The tool takes the absolute character count and subtracts every instance of a spacebar input or line break. This is heavily used in academic writing, legal documents, and specific government forms in India (like SSC/UPSC online application portals) that do not want to penalize you for hitting the spacebar.
            </p>
          </div>

          {/* Metric 4 */}
          <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">4. Line Count</h3>
            <p className="text-sm text-gray-700">
              Line count looks for the specific `\n` (newline) character in your text. Every time you press the "Enter" or "Return" key to start a new paragraph or line of code, this counter increases by one.
            </p>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Text Examples</h2>
        <p className="mb-6">To fully understand how spaces and line breaks manipulate your final numbers, let us analyze two different types of text inputs.</p>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-indigo-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Example 1: A Standard Sentence</h3>
            <p className="mb-3 text-sm text-gray-600 italic">
              "The quick brown fox jumps over the lazy dog."
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Words:</strong> 9 (Nine distinct groups of letters).</li>
              <li><strong>Characters:</strong> 44 (35 letters + 1 period + 8 spaces).</li>
              <li><strong>Characters (No Spaces):</strong> 36 (44 total characters minus the 8 spaces).</li>
              <li><strong>Lines:</strong> 1 (No "Enter" key was pressed).</li>
            </ul>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-rose-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Example 2: A Formatted Address</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed font-mono bg-gray-50 p-3 rounded border border-gray-200">
              John Doe<br/>
              123 Main Street<br/>
              New Delhi
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Words:</strong> 7 (John, Doe, 123, Main, Street, New, Delhi).</li>
              <li><strong>Characters:</strong> 35 (Letters, numbers, spaces, and two invisible 'Enter' keystrokes).</li>
              <li><strong>Characters (No Spaces):</strong> 29 (Removing the spaces between the words and the line breaks).</li>
              <li><strong>Lines:</strong> 3 (Because the "Enter" key was pressed twice to create three distinct lines).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- LIMITS GUIDE --- */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-indigo-200 mt-12 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ultimate Guide to Platform Character & Word Limits</h2>
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          Why are you counting your characters? Whether you are optimizing for SEO or trying not to exceed a university application limit, keep these standard boundaries in mind:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm">
            <h4 className="font-bold text-indigo-900 border-b border-indigo-100 pb-2 mb-3">Academic & Career (India)</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>UPSC Mains Essay:</strong> 1000 - 1200 words</li>
              <li><strong>CAT WAT Exam:</strong> ~250 - 300 words</li>
              <li><strong>CBSE 12th Long Answers:</strong> 120 - 150 words</li>
              <li><strong>Standard Resume/CV:</strong> 400 - 600 words (1-2 pages)</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl border border-indigo-100 shadow-sm">
            <h4 className="font-bold text-indigo-900 border-b border-indigo-100 pb-2 mb-3">Social Media & SEO</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Twitter (X):</strong> 280 characters</li>
              <li><strong>LinkedIn Post:</strong> 3,000 characters</li>
              <li><strong>Instagram Caption:</strong> 2,200 characters</li>
              <li><strong>SEO Meta Title:</strong> 50 - 60 characters</li>
              <li><strong>SEO Meta Description:</strong> 150 - 160 characters</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Do spaces count as characters?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, in standard formatting and coding, a space is a valid keystroke and counts as a single character. However, because many academic and professional application forms ask for 'Characters (without spaces)', our calculator explicitly provides both metrics to ensure you meet specific criteria.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Is my typed text saved or stored anywhere?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. Our word and character counter operates 100% locally in your browser (client-side). None of your text data is sent to our servers, saved, logged, or tracked. It is completely safe for pasting confidential essays, business reports, or sensitive personal documents.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How many pages is 1,000 words?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Using standard academic formatting (12-point Arial or Times New Roman font, 1-inch margins), 1,000 words is approximately 2 full pages single-spaced, or about 4 pages double-spaced.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How does the tool calculate 'Words'?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The tool counts words by identifying the blank spaces or line breaks that separate groups of letters or numbers. For example, a hyphenated phrase like 'Hello-world' is typically counted as one word depending on software logic, whereas 'Hello world' is counted as two distinct words.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What are the character limits for major social media platforms?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Currently, a standard Twitter (X) tweet allows 280 characters. LinkedIn posts allow up to 3,000 characters. Instagram captions max out at 2,200 characters, and YouTube video titles are highly restricted to just 100 characters for optimal visibility.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Why do I need to know the number of lines?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Line counting is heavily used by programmers, scriptwriters, poets, and data entry professionals to gauge the vertical length of a text document. It tracks the exact number of 'hard returns' or paragraph breaks you have entered, which is crucial for specific formatting requirements.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-14">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Educational & Writing Tools</h3>
        <p className="text-sm mb-6 text-gray-600">Boost your productivity and streamline your academic tracking with our suite of free online tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/education/typing" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Typing Speed Calculator (WPM)</a>
          <a href="/calculator/education/typing-test" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Interactive Typing Test</a>
          <a href="/calculator/education/study-plan" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Exam Study Planner</a>
          <a href="/calculator/education/marks-percentage" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Marks to Percentage Calculator</a>
          <a href="/calculator/education/cgpa" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">CGPA to Percentage Converter</a>
          <a href="/calculator/education/cgpa-sgpa" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">SGPA to CGPA Calculator</a>
          <a href="/calculator/education/time-work" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Time & Work Calculator</a>
          <a href="/calculator/education/gate-score" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">GATE Score Predictor</a>
          <a href="/calculator/education/neet-rank" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">NEET Rank Predictor</a>
          <a href="/calculator/education/education-loan" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Education Loan EMI Calculator</a>
          <a href="/calculator/education/attendance" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Attendance Bunk Calculator</a>
        </div>
      </section>
    </div>
  );
}