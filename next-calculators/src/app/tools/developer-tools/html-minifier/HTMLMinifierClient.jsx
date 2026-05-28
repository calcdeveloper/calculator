"use client";

import { useState } from "react";
import { Copy, Download, RefreshCw, Minimize2, Maximize2, Zap, Shield, Clock } from "lucide-react";

export default function HTMLMinifierClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [minifiedSize, setMinifiedSize] = useState(0);
  const [copied, setCopied] = useState(false);

  const minifyHTML = () => {
    if (!input.trim()) return;

    const original = input;
    setOriginalSize(original.length);

    // Remove comments
    let minified = original.replace(/<!--[\s\S]*?-->/g, "");
    
    // Remove whitespace between tags
    minified = minified.replace(/>\s+</g, "><");
    
    // Remove leading/trailing whitespace
    minified = minified.replace(/^\s+|\s+$/g, "");
    
    // Remove multiple spaces within tags
    minified = minified.replace(/\s+/g, " ");

    setOutput(minified);
    setMinifiedSize(minified.length);
  };

  const copyToClipboard = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadMinified = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "minified.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const savings = originalSize > 0 ? ((originalSize - minifiedSize) / originalSize * 100).toFixed(2) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Minimize2 className="text-blue-500" size={40} />
            HTML Minifier
          </h1>
          <p className="text-xl text-gray-600 mb-3">
            Free Online Tool to Minify and Compress HTML Code
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Instantly reduce your HTML file size by removing unnecessary characters. Improve page load times, reduce bandwidth usage, and enhance overall website performance with our free HTML minification tool.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              HTML Input
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`<!DOCTYPE html>
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a sample HTML document.</p>
  </body>
</html>`}
              className="w-full h-80 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
            />
            <button
              onClick={() => setInput("")}
              className="mt-4 w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Clear Input
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Minified HTML Output
            </label>
            <textarea
              value={output}
              readOnly
              placeholder="Minified HTML will appear here..."
              className="w-full h-80 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 resize-none font-mono text-sm"
            />
            <div className="mt-4 flex gap-2">
              <button
                onClick={copyToClipboard}
                disabled={!output}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Copy size={18} />
                {copied ? "Copied!" : "Copy"}
              </button>
              <button
                onClick={downloadMinified}
                disabled={!output}
                className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={minifyHTML}
          disabled={!input.trim()}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg mb-8"
        >
          <Minimize2 size={24} />
          Minify HTML Now
        </button>

        {output && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Minification Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                <div className="text-sm text-gray-600 mb-1">Original Size</div>
                <div className="text-3xl font-bold text-orange-600">{formatSize(originalSize)}</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                <div className="text-sm text-gray-600 mb-1">Minified Size</div>
                <div className="text-3xl font-bold text-green-600">{formatSize(minifiedSize)}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                <div className="text-sm text-gray-600 mb-1">Size Reduction</div>
                <div className="text-3xl font-bold text-blue-600">{savings}%</div>
              </div>
            </div>
          </div>
        )}

        {/* Comprehensive SEO Content Section */}
        <div className="space-y-8">
          {/* What is HTML Minification */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is HTML Minification?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>HTML minification</strong> is the process of removing unnecessary characters from HTML code without changing its functionality. These unnecessary characters include whitespace, new line characters, HTML comments, and redundant attributes. By removing these elements, you can significantly reduce the file size of your HTML documents, leading to faster page load times and improved user experience.
              </p>
              <p>
                HTML minification is one of the most effective optimization techniques used in web development. It's especially important for websites that receive high traffic or serve users on slow connections. By reducing the size of HTML files, you can dramatically improve page load performance and reduce server bandwidth usage.
              </p>
              <p>
                Minified HTML files load faster because there's less data to transfer from the server to the user's browser. This means users see your content quicker, which improves user satisfaction and, according to various studies, can reduce bounce rates and increase conversions.
              </p>
            </div>
          </div>

          {/* Why HTML Minification Matters */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why HTML Minification Matters for Web Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Faster Page Load Times</h3>
                <p className="text-gray-700">
                  Smaller file sizes mean faster downloads. Even a few KB savings can translate to noticeable improvements in page load speed, especially for mobile users on slower connections.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reduced Bandwidth Usage</h3>
                <p className="text-gray-700">
                  Lower bandwidth consumption means reduced server costs and better resource utilization. For high-traffic websites, this can result in significant cost savings.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Improved SEO Rankings</h3>
                <p className="text-gray-700">
                  Google considers page speed as a ranking factor. Minified HTML contributes to faster page loads, which can positively impact your SEO performance and search visibility.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Better User Experience</h3>
                <p className="text-gray-700">
                  Faster loading pages provide a better user experience. Users are more likely to stay on your site and complete desired actions when pages load quickly.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Optimization</h3>
                <p className="text-gray-700">
                  Mobile users often have limited bandwidth. Minified HTML files are crucial for providing fast loading experiences on mobile devices.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Advantage</h3>
                <p className="text-gray-700">
                  Websites that load faster outperform competitors. Speed is now a critical factor in user retention and conversion rates.
                </p>
              </div>
            </div>
          </div>

          {/* What Gets Minified */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Gets Removed During HTML Minification?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Comments</h3>
                <p>
                  HTML comments ({"<!-- comment -->"}) are removed during minification as they serve no functional purpose in the rendered output. Comments are useful for developers but add unnecessary bytes to the file.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Whitespace</h3>
                <p>
                  Extra spaces, tabs, and newlines between tags are removed. While these improve readability in development, they don't affect how the HTML renders in browsers and only increase file size.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Line Breaks</h3>
                <p>
                  Unnecessary line breaks and indentation are eliminated. Modern minifiers intelligently preserve necessary spaces while removing redundant ones.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Attribute Quotes</h3>
                <p>
                  Some minifiers can remove unnecessary quotes around attribute values when they're not needed, though this must be done carefully to avoid breaking attributes.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Key Features of Our HTML Minifier
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">✓</span>
                <span><strong>Instant Processing:</strong> Minify your HTML in milliseconds with our optimized algorithm.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">✓</span>
                <span><strong>100% Free:</strong> No hidden charges, no registration required, completely free to use.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">✓</span>
                <span><strong>Privacy Protected:</strong> All processing happens in your browser. Your code never reaches our servers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">✓</span>
                <span><strong>Accurate Results:</strong> Removes unnecessary characters while preserving HTML functionality and validity.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">✓</span>
                <span><strong>Real-time Statistics:</strong> See file size reduction and compression ratio immediately after minification.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">✓</span>
                <span><strong>Copy & Download:</strong> Easily copy minified HTML to clipboard or download as a file.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">✓</span>
                <span><strong>No File Size Limits:</strong> Minify HTML files of any size without restrictions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">✓</span>
                <span><strong>User Friendly:</strong> Simple interface that anyone can use, regardless of technical expertise.</span>
              </li>
            </ul>
          </div>

          {/* How to Use */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Minify HTML: Step-by-Step Guide
            </h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-4">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Paste Your HTML Code</strong>
                  <p>Copy and paste your HTML code into the input textarea. You can paste entire HTML documents or individual sections.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Click the Minify Button</strong>
                  <p>Click the "Minify HTML Now" button to start the minification process instantly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <div>
                  <strong className="text-gray-900">View Results</strong>
                  <p>The minified HTML appears in the output textarea along with size reduction statistics.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Copy or Download</strong>
                  <p>Copy the minified code to clipboard or download it as an HTML file for use in your projects.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Use Cases */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Use Cases for HTML Minification
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Website Optimization</h3>
                <p>
                  Optimize your entire website's HTML files to improve page load speed and reduce server bandwidth usage. This is one of the quickest wins for improving web performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Static Site Generators</h3>
                <p>
                  Use HTML minification as part of your build process when deploying static sites generated by tools like Hugo, Jekyll, or Next.js.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Templates</h3>
                <p>
                  Minify HTML email templates to reduce file size and ensure faster delivery. This is especially important for email newsletters and marketing campaigns.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web Applications</h3>
                <p>
                  Improve the performance of single-page applications and web apps by minifying HTML templates and index files.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile-First Development</h3>
                <p>
                  Optimize HTML for mobile users who often have limited bandwidth. Minification is crucial for mobile performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Legacy Code Cleanup</h3>
                <p>
                  Clean up legacy HTML files and reduce their file size without requiring a complete rewrite.
                </p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              HTML Minification Best Practices
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Test After Minification</h3>
                <p>
                  Always test your minified HTML in multiple browsers to ensure it renders correctly. Minification should not affect functionality.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Keep Development Copies</h3>
                <p>
                  Maintain readable, non-minified versions of your HTML for development purposes. Minify only for production deployment.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Combine with Other Optimizations</h3>
                <p>
                  HTML minification works best when combined with other optimization techniques like CSS minification, JavaScript minification, image optimization, and gzip compression.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Use Gzip Compression</h3>
                <p>
                  Combine minification with server-side gzip compression for even greater file size reduction. Gzip compression can achieve 70-80% reduction on top of minification.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">Implement Automatic Minification</h3>
                <p>
                  Use build tools like Webpack, Gulp, or Grunt to automatically minify HTML as part of your deployment pipeline.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Does minification break my HTML?</h3>
                <p className="text-gray-700">
                  No, proper minification doesn't break HTML functionality. Our minifier carefully removes only unnecessary characters while preserving the structure and functionality of your code.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How much can I reduce file size?</h3>
                <p className="text-gray-700">
                  File size reduction depends on the original code's formatting. You can typically expect 10-30% reduction, with more savings from well-formatted or commented code.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is my code private?</h3>
                <p className="text-gray-700">
                  Yes, completely private. All minification happens in your browser. Your HTML code never leaves your device or reaches our servers.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I minify very large HTML files?</h3>
                <p className="text-gray-700">
                  Yes, our tool can handle large HTML files without limitations. Processing speed depends on file size and your browser's performance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Should I minify development code?</h3>
                <p className="text-gray-700">
                  No, it's best to keep development code readable and minify only for production. Minified code is harder to debug, so maintain separate versions for development and production.
                </p>
              </div>
            </div>
          </div>

          {/* Performance Impact */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Real-World Performance Impact of HTML Minification
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Studies show that reducing page load time by even one second can significantly improve user experience and conversion rates. HTML minification contributes directly to faster load times by reducing the amount of data that needs to be transferred.
              </p>
              <p>
                For a typical website with multiple HTML files, minification can save hundreds of kilobytes in bandwidth. When combined with CSS minification, JavaScript minification, and image optimization, the cumulative effect can be dramatic.
              </p>
              <p>
                On mobile networks where bandwidth is limited, minified HTML files can make a critical difference in user experience. Users with 3G or slower connections benefit the most from optimized HTML files.
              </p>
              <p>
                According to Google's research, improving page speed can improve conversion rates by 7% for every one-second improvement in load time. This makes HTML minification not just a technical optimization, but a business optimization.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Start Minifying Your HTML Today
            </h2>
            <p className="text-lg mb-6">
              Our free HTML minifier is the easiest way to optimize your HTML files and improve website performance. Whether you're a professional developer, web designer, or hobbyist, get started now with zero hassle. No registration required, no limits, completely free.
            </p>
            <p className="text-base opacity-90">
              ToolsWizard offers the fastest and most reliable HTML minification tool online. Join thousands of developers who trust us to optimize their website performance. Start minifying your HTML files now and see the difference in your page load times!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}