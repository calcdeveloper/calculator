"use client";

import React, { useState, useCallback } from 'react';
import { 
  Palette, Copy, CheckCircle2, ShieldCheck, 
  Zap, Info, ChevronRight, Droplets, Lock, Globe, 
  RefreshCw, Eye
} from 'lucide-react';

export default function RGBHexClient() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [hexOutput, setHexOutput] = useState('#000000');
  const [copySuccess, setCopySuccess] = useState(false);

  const rgbToHex = useCallback((r, g, b) => {
    const toHex = (c) => {
      const hex = Math.max(0, Math.min(255, c)).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  }, []);

  const handleConvert = () => {
    const hex = rgbToHex(red, green, blue);
    setHexOutput(hex);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hexOutput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setRed(r);
    setGreen(g);
    setBlue(b);
    setHexOutput(rgbToHex(r, g, b));
  };

  const handleSliderChange = (color, value) => {
    const numValue = parseInt(value);
    if (color === 'red') setRed(numValue);
    if (color === 'green') setGreen(numValue);
    if (color === 'blue') setBlue(numValue);
    
    setHexOutput(rgbToHex(
      color === 'red' ? numValue : red,
      color === 'green' ? numValue : green,
      color === 'blue' ? numValue : blue
    ));
  };

  return (
    <div className="min-h-screen bg-design-bg font-sans text-design-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-design-primary to-design-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-design-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">RGB to Hex</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-design-white mb-6 tracking-tight">
            RGB to Hex Converter
          </h1>
          <p className="text-xl text-design-white/90 max-w-2xl mx-auto leading-relaxed">
            Convert RGB color values to Hex format instantly. Secure, fast, and processed entirely in your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-design-white rounded-3xl shadow-2xl border border-design-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-design-dark flex items-center gap-2">
                <Droplets size={20} className="text-design-primary" /> RGB Values
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-design-gray mb-2">Red (0-255)</label>
                  <input 
                    type="range"
                    min="0"
                    max="255"
                    value={red}
                    onChange={(e) => handleSliderChange('red', e.target.value)}
                    className="w-full h-2 bg-red-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <input 
                      type="number"
                      min="0"
                      max="255"
                      value={red}
                      onChange={(e) => handleSliderChange('red', e.target.value)}
                      className="w-20 px-3 py-2 bg-design-bg/50 border border-design-gray rounded-lg focus:ring-2 focus:ring-design-primary outline-none"
                    />
                    <div className="w-12 h-12 rounded-lg bg-red-500" style={{ backgroundColor: `rgb(${red}, 0, 0)` }}></div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-design-gray mb-2">Green (0-255)</label>
                  <input 
                    type="range"
                    min="0"
                    max="255"
                    value={green}
                    onChange={(e) => handleSliderChange('green', e.target.value)}
                    className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <input 
                      type="number"
                      min="0"
                      max="255"
                      value={green}
                      onChange={(e) => handleSliderChange('green', e.target.value)}
                      className="w-20 px-3 py-2 bg-design-bg/50 border border-design-gray rounded-lg focus:ring-2 focus:ring-design-primary outline-none"
                    />
                    <div className="w-12 h-12 rounded-lg bg-green-500" style={{ backgroundColor: `rgb(0, ${green}, 0)` }}></div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-design-gray mb-2">Blue (0-255)</label>
                  <input 
                    type="range"
                    min="0"
                    max="255"
                    value={blue}
                    onChange={(e) => handleSliderChange('blue', e.target.value)}
                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <input 
                      type="number"
                      min="0"
                      max="255"
                      value={blue}
                      onChange={(e) => handleSliderChange('blue', e.target.value)}
                      className="w-20 px-3 py-2 bg-design-bg/50 border border-design-gray rounded-lg focus:ring-2 focus:ring-design-primary outline-none"
                    />
                    <div className="w-12 h-12 rounded-lg bg-blue-500" style={{ backgroundColor: `rgb(0, 0, ${blue})` }}></div>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleRandomColor}
                className="w-full bg-design-gray/20 hover:bg-design-gray/30 text-design-dark py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} /> Random Color
              </button>
            </div>

            {/* Output Side */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-design-dark flex items-center gap-2">
                <Palette size={20} className="text-design-primary" /> Hex Output
              </h3>

              <div className="space-y-4">
                <div 
                  className="w-full h-32 rounded-2xl border-4 border-design-gray transition-all"
                  style={{ backgroundColor: hexOutput }}
                ></div>

                <div className="flex items-center gap-4">
                  <input 
                    readOnly
                    value={hexOutput}
                    className="flex-1 px-4 py-3 bg-design-bg/50 border border-design-gray rounded-xl font-mono text-lg font-bold outline-none"
                  />
                  <button 
                    onClick={handleCopy}
                    className="p-3 bg-design-primary hover:bg-design-primaryDark text-design-white rounded-xl transition-colors"
                    title="Copy to Clipboard"
                  >
                    {copySuccess ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                  </button>
                </div>

                <div className="p-4 bg-design-bg/30 rounded-xl">
                  <p className="text-sm text-design-gray">
                    <strong>RGB:</strong> rgb({red}, {green}, {blue})<br />
                    <strong>Hex:</strong> {hexOutput}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-design-white p-8 rounded-3xl border border-design-gray shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6"><ShieldCheck /></div>
            <h3 className="text-xl font-bold mb-3">Browser-Side Security</h3>
            <p className="text-design-gray leading-relaxed text-sm">Your color values are processed locally. We never transmit your data to our servers, keeping your design work private and secure.</p>
          </div>
          <div className="bg-design-white p-8 rounded-3xl border border-design-gray shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Conversion</h3>
            <p className="text-design-gray leading-relaxed text-sm">Real-time RGB to Hex conversion as you adjust sliders. No waiting or loading times for instant color matching.</p>
          </div>
          <div className="bg-design-white p-8 rounded-3xl border border-design-gray shadow-sm">
            <div className="w-12 h-12 bg-design-primary/10 text-design-primary rounded-xl flex items-center justify-center mb-6"><Eye /></div>
            <h3 className="text-xl font-bold mb-3">Visual Preview</h3>
            <p className="text-design-gray leading-relaxed text-sm">See your color in real-time with a live preview. Perfect for matching colors and visualizing your design choices.</p>
          </div>
        </section>

        {/* Long-form SEO Content */}
        <article className="prose prose-slate max-w-none bg-design-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-design-gray">
          <h2 className="text-3xl font-bold text-design-dark">Introduction to RGB to Hex Conversion</h2>
          <p>
            RGB to Hex conversion is a fundamental process in web design and development, transforming RGB color values into hexadecimal color codes used across digital platforms. Whether you're a designer creating stunning visual experiences, a developer building user interfaces, or simply need to convert colors for your projects, our <strong>RGB to Hex converter</strong> provides a fast, secure, and user-friendly solution for all your color conversion needs.
          </p>

          <p>
            RGB (Red, Green, Blue) is a color model that represents colors as combinations of red, green, and blue light. Each channel ranges from 0 to 255, creating over 16 million possible color combinations. Hexadecimal color codes, on the other hand, are six-digit codes preceded by a hash symbol (#) that represent the same RGB values in a format widely used in web development, CSS, and design tools.
          </p>

          <h3 className="text-2xl font-bold mt-10">Benefits of Using Our RGB to Hex Converter</h3>
          <p>
            Choosing the right RGB to Hex converter can significantly impact your design workflow and color accuracy. Our tool offers several key advantages that set it apart from other online converters:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-design-primary/5 rounded-2xl border border-design-primary/10">
              <h4 className="font-bold text-design-primary mb-3 flex items-center gap-2"><Lock size={18} /> Complete Privacy</h4>
              <ul className="text-sm space-y-2 text-design-gray">
                <li>• 100% browser-side processing</li>
                <li>• No color data sent to servers</li>
                <li>• No registration required</li>
                <li>• Zero data retention</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2"><Zap size={18} /> Lightning Fast</h4>
              <ul className="text-sm space-y-2 text-design-gray">
                <li>• Real-time conversion</li>
                <li>• Instant color preview</li>
                <li>• No upload/download delays</li>
                <li>• Optimized performance</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10">How to Use Our RGB to Hex Converter</h3>
          <p>
            Using our RGB to Hex converter is incredibly simple, designed for both technical and non-technical users. The intuitive interface allows you to convert colors in multiple ways:
          </p>

          <ol className="space-y-4 text-design-gray">
            <li><strong>Method 1: Slider Controls</strong> - Use the red, green, and blue sliders to adjust each color channel from 0 to 255. The Hex code updates in real-time as you move the sliders.</li>
            <li><strong>Method 2: Direct Input</strong> - Enter specific RGB values (0-255) in the number input fields for precise color control.</li>
            <li><strong>Method 3: Random Color</strong> - Click the "Random Color" button to generate a random RGB color and see its Hex equivalent.</li>
            <li><strong>Copy Hex Code</strong> - Once you have your desired color, click the copy button to copy the Hex code to your clipboard for immediate use in your projects.</li>
          </ol>

          <h3 className="text-2xl font-bold mt-10">Key Features of Our Tool</h3>
          <p>
            Our RGB to Hex converter is packed with features designed to enhance your color conversion experience and provide maximum utility for various design and development tasks:
          </p>

          <ul className="space-y-3 text-design-gray">
            <li><strong>Real-time Conversion:</strong> See your Hex code update instantly as you adjust RGB values, with no waiting or loading times.</li>
            <li><strong>Visual Color Preview:</strong> Live preview of your color helps you visualize the result before copying the code.</li>
            <li><strong>Multiple Input Methods:</strong> Use sliders, number inputs, or random generation for flexible color selection.</li>
            <li><strong>Copy to Clipboard:</strong> One-click copying makes it easy to transfer Hex codes to your design tools or code editors.</li>
            <li><strong>RGB Display:</strong> Shows both RGB and Hex values for easy reference and cross-verification.</li>
            <li><strong>Responsive Design:</strong> Works seamlessly on desktop, tablet, and mobile devices.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10">Common Use Cases for RGB to Hex Conversion</h3>
          <p>
            RGB to Hex conversion serves numerous practical purposes across different industries and applications. Understanding these use cases can help you leverage our tool effectively:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-8 my-8">
            <div className="p-6 bg-design-bg/30 rounded-2xl border border-design-gray">
              <h4 className="font-bold text-design-dark mb-3 flex items-center gap-2"><Palette size={18} /> Web Design</h4>
              <ul className="text-sm space-y-2 text-design-gray">
                <li>• Creating color palettes</li>
                <li>• CSS color values</li>
                <li>• Brand color matching</li>
                <li>• UI design prototyping</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2"><Droplets size={18} /> Development</h4>
              <ul className="text-sm space-y-2 text-design-gray">
                <li>• Frontend development</li>
                <li>• App interface design</li>
                <li>• Theme customization</li>
                <li>• Color scheme implementation</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10">Why Choose Our RGB to Hex Converter</h3>
          <p>
            With numerous RGB to Hex converters available online, you might wonder what makes our tool the superior choice. The answer lies in our commitment to privacy, performance, and user experience:
          </p>

          <p>
            Unlike many online converters that require you to upload color data to their servers, our RGB to Hex converter operates entirely within your browser. This means your color choices and design work never leave your device. This client-side processing approach not only ensures maximum security but also eliminates network latency, providing instant results regardless of your internet connection speed.
          </p>

          <p>
            Furthermore, our tool is completely free with no hidden costs, registration requirements, or usage limits. Whether you need to convert a single color or experiment with multiple color combinations, our RGB to Hex converter handles everything without any restrictions. The clean, intuitive interface requires no learning curve, making it accessible to users of all technical backgrounds.
          </p>

          <h3 className="text-2xl font-bold mt-10">Frequently Asked Questions</h3>
          <div className="not-prose space-y-4 mt-6">
            {[
              { q: "What is the difference between RGB and Hex?", a: "RGB uses three numerical values (0-255) for red, green, and blue, while Hex uses a six-digit code preceded by # to represent the same color values in hexadecimal format." },
              { q: "What is the RGB color range?", a: "Each RGB channel (Red, Green, Blue) ranges from 0 to 255, creating 256 possible values per channel and over 16.7 million total color combinations." },
              { q: "Is my color data secure when using this converter?", a: "Yes, absolutely. Our RGB to Hex converter processes all data entirely in your browser. Your color values never leave your device, ensuring complete privacy and security." },
              { q: "Can I use this for professional design work?", a: "Yes, our converter provides accurate RGB to Hex conversion suitable for professional web design, UI/UX work, and development projects." },
              { q: "What is a Hex color code?", a: "A Hex color code is a six-digit hexadecimal number preceded by # that represents RGB color values. For example, #FF0000 represents pure red (255, 0, 0)." },
              { q: "How do I convert Hex back to RGB?", a: "To convert Hex to RGB, split the six-digit code into three pairs (e.g., FF0000 → FF, 00, 00), convert each pair from hexadecimal to decimal (255, 0, 0)." }
            ].map((faq, i) => (
              <details key={i} className="group border border-design-gray rounded-xl p-5 bg-design-bg/30 transition-all hover:bg-white hover:border-design-primary">
                <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-design-dark">
                  {faq.q}
                  <span className="text-design-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-design-gray text-sm leading-relaxed border-t border-design-gray pt-4">{faq.a}</p>
              </details>
            ))}
          </div>

          <h3 className="text-2xl font-bold mt-10">Conclusion</h3>
          <p>
            RGB to Hex conversion is an essential skill for anyone working with digital colors, whether in web design, development, or creative projects. Our free online converter provides the perfect tool for transforming RGB values into Hex codes with accuracy and ease.
          </p>

          <p>
            With its focus on privacy, speed, and user experience, our RGB to Hex converter stands out as the ideal choice for all your color conversion needs. Experience the convenience of instant, secure conversion without any installation or registration. Try our tool today and see how simple color conversion can be.
          </p>
        </article>
      </main>

      <footer className="bg-design-white border-t border-design-gray py-8 px-6">
        <p className="text-sm text-design-gray text-center">© 2026 CalcPilot - Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
