"use client";

import { useState } from "react";
import { Copy, RefreshCw, Palette, Download, Eye } from "lucide-react";

export default function HSLHexClient() {
  const [hue, setHue] = useState(180);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);
  const [hex, setHex] = useState("#80BFA0");
  const [copied, setCopied] = useState(false);

  const hslToHex = (h, s, l) => {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    const toHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  };

  const convert = () => {
    const hexValue = hslToHex(hue, saturation, lightness);
    setHex(hexValue);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const randomColor = () => {
    const randomHue = Math.floor(Math.random() * 360);
    const randomSat = Math.floor(Math.random() * 100);
    const randomLight = Math.floor(Math.random() * 100);
    setHue(randomHue);
    setSaturation(randomSat);
    setLightness(randomLight);
    const hexValue = hslToHex(randomHue, randomSat, randomLight);
    setHex(hexValue);
  };

  const downloadAsCSS = () => {
    const css = `/* HSL to Hex Color Conversion */\n:root {\n  --primary-color: ${hex};\n  --primary-hsl: hsl(${hue}, ${saturation}%, ${lightness}%);\n}`;
    const blob = new Blob([css], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "colors.css";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Palette className="text-purple-500" size={40} />
            HSL to Hex Color Converter
          </h1>
          <p className="text-xl text-gray-600 mb-3">
            Free Online Tool to Convert HSL Colors to Hexadecimal Format
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Instantly convert HSL (Hue, Saturation, Lightness) color values to Hex format. Perfect for web designers, developers, and anyone working with colors. Fast, accurate, and completely free.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Hue (0-360°)
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => setHue(parseInt(e.target.value))}
                className="w-full h-2 bg-linear-to-r from-red-500 via-green-500 to-blue-500 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-2 text-lg font-semibold text-gray-900">
                {hue}°
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Saturation (0-100%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={saturation}
                onChange={(e) => setSaturation(parseInt(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-gray-300 to-purple-500 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-2 text-lg font-semibold text-gray-900">
                {saturation}%
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lightness (0-100%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={lightness}
                onChange={(e) => setLightness(parseInt(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-black via-gray-500 to-white rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-2 text-lg font-semibold text-gray-900">
                {lightness}%
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Live Color Preview
              </label>
              <div
                className="w-full h-16 rounded-lg border-2 border-gray-300 shadow-md transition-all duration-200"
                style={{ backgroundColor: hex }}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={convert}
              className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw size={20} />
              Convert HSL to Hex
            </button>
            <button
              onClick={randomColor}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Palette size={20} />
              Random Color
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conversion Result</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div
              className="w-32 h-32 rounded-lg border-4 border-gray-300 shadow-lg"
              style={{ backgroundColor: hex }}
            />
            <div className="flex-1">
              <div className="text-4xl font-bold text-gray-900 mb-3 font-mono">{hex}</div>
              <div className="text-lg text-gray-600 mb-2">
                <strong>HSL Format:</strong> hsl({hue}, {saturation}%, {lightness}%)
              </div>
              <div className="text-sm text-gray-500">
                Click the copy button to copy the hex code to your clipboard
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={copyToClipboard}
                className={`${copied ? 'bg-green-600' : 'bg-green-600'} text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2`}
              >
                <Copy size={20} />
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button
                onClick={downloadAsCSS}
                className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Download size={20} />
                CSS File
              </button>
            </div>
          </div>
        </div>

        {/* Comprehensive SEO Content Section */}
        <div className="space-y-8">
          {/* What is HSL Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is HSL Color Model?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>HSL (Hue, Saturation, Lightness)</strong> is a cylindrical-coordinate representation of colors. It's an alternative to the RGB (Red, Green, Blue) color model that many people find more intuitive and user-friendly. The HSL color model represents colors in a way that's closer to how humans perceive and work with colors, making it extremely popular among designers and developers.
              </p>
              <p>
                The HSL color space is composed of three components: Hue, Saturation, and Lightness. Each component plays a crucial role in defining the final color. Understanding how these components work together is essential for anyone working with digital colors, whether you're a web designer, graphic artist, or web developer.
              </p>
              <p>
                Unlike RGB which requires knowledge of mixing red, green, and blue values, HSL allows you to think about colors more naturally. You can adjust the hue to change the color type, adjust saturation to make it more or less vibrant, and adjust lightness to make it brighter or darker.
              </p>
            </div>
          </div>

          {/* HSL Components Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding HSL Components
            </h2>
            <div className="space-y-6 text-gray-700">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hue (0-360 degrees)</h3>
                <p>
                  Hue is the color itself on the color wheel. It's measured in degrees from 0 to 360. Red is at 0°, green is at 120°, blue is at 240°, and it cycles back to red at 360°. The hue value determines which color you're working with. For example, 0° gives you pure red, 60° gives you yellow, 180° gives you cyan, and 300° gives you magenta. By adjusting the hue value, you can select any color on the color spectrum.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Saturation (0-100%)</h3>
                <p>
                  Saturation refers to the intensity or purity of the color. A saturation value of 0% means the color is completely desaturated (grayscale), while 100% means the color is fully saturated (most vivid). At 50% saturation, the color appears less vibrant than 100%, and at 0% saturation, any hue value will appear as a shade of gray. Think of saturation as controlling how "colorful" the color is.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lightness (0-100%)</h3>
                <p>
                  Lightness controls the brightness of the color. A lightness value of 0% produces pure black regardless of the hue or saturation, while 100% produces pure white. A lightness value of 50% produces the most "natural" appearance of the hue. Values below 50% create darker shades of the color, while values above 50% create lighter tints. Lightness is essentially controlling how light or dark the color appears.
                </p>
              </div>
            </div>
          </div>

          {/* HSL vs Hex Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              HSL vs Hex: What's the Difference?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Hexadecimal (Hex)</strong> color codes are the most common way to specify colors in web design. They consist of a hash symbol (#) followed by six hexadecimal digits (0-9, A-F) that represent the red, green, and blue components of a color. For example, #FF0000 is pure red, #00FF00 is pure green, and #0000FF is pure blue.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">HSL Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ More intuitive for designers</li>
                    <li>✓ Easy to create color variations</li>
                    <li>✓ Simple to adjust brightness/saturation</li>
                    <li>✓ Better for understanding colors</li>
                    <li>✓ Great for CSS variables</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Hex Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Universal web standard</li>
                    <li>✓ Supported by all browsers</li>
                    <li>✓ Compact format</li>
                    <li>✓ Widely used in design tools</li>
                    <li>✓ Better for color pickers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Why Use Our Converter Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Use Our HSL to Hex Converter?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">100% Free</h3>
                <p className="text-gray-700">
                  Our HSL to Hex converter is completely free with no hidden charges, subscriptions, or premium features.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">No Registration</h3>
                <p className="text-gray-700">
                  Start converting colors immediately without creating an account or providing personal information.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Results</h3>
                <p className="text-gray-700">
                  Get instant conversion results as you adjust the sliders. See the color change in real-time.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Private & Secure</h3>
                <p className="text-gray-700">
                  All conversions happen in your browser. Your data never reaches any server, ensuring complete privacy.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Accurate Conversion</h3>
                <p className="text-gray-700">
                  Our conversion algorithm is accurate to the pixel, ensuring perfect color representation.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Easy to Use</h3>
                <p className="text-gray-700">
                  Simple, intuitive interface that anyone can use, regardless of technical expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Use Cases for HSL to Hex Conversion
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web Design & Development</h3>
                <p>
                  Designers often work with HSL values in design tools, but web browsers and CSS need hex values. Our converter bridges this gap, allowing you to quickly convert colors from your design tool to web-ready hex codes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Creating Color Palettes</h3>
                <p>
                  When creating color palettes, HSL is much more convenient because you can easily adjust saturation and lightness to create harmonious color schemes. Convert these HSL values to hex for use in your projects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">CSS Variable Management</h3>
                <p>
                  Many developers use CSS custom properties (variables) with hex colors. If you've defined your color scheme in HSL, our converter helps you get the equivalent hex values for your CSS code.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Color Consistency</h3>
                <p>
                  Maintain consistency across design tools and development by converting brand colors from one format to another. This ensures that the colors used in design match exactly with the colors in code.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibility Compliance</h3>
                <p>
                  Use HSL to easily create color variations that meet accessibility standards. Convert them to hex for implementation in your website or application.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Design System Creation</h3>
                <p>
                  When building design systems, HSL makes it easy to define color relationships. Convert to hex values for documentation and code implementation.
                </p>
              </div>
            </div>
          </div>

          {/* How to Use Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Convert HSL to Hex Colors
            </h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-4">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Adjust the Hue Slider</strong>
                  <p>Move the Hue slider to select the base color you want (0-360 degrees). The color wheel preview helps you visualize the selection.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Set the Saturation Level</strong>
                  <p>Adjust the Saturation slider to control the color intensity. 0% gives grayscale, 100% gives vivid colors.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Control the Lightness</strong>
                  <p>Adjust the Lightness slider to make the color brighter or darker. 0% is black, 50% is normal, 100% is white.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Copy the Hex Code</strong>
                  <p>Click the "Copy" button to copy the generated hex code to your clipboard. Use it in your CSS, HTML, or design tools.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Technical Details Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Color Conversion Mathematics
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The conversion from HSL to Hex involves mathematical transformation of color values. While our tool handles this automatically, understanding the process can help you appreciate the accuracy and precision of digital color representation.
              </p>
              <p>
                <strong>The Conversion Process:</strong> HSL values are converted to RGB (Red, Green, Blue) values first, which are then converted to hexadecimal format. Each RGB component is a value between 0-255, which is then converted to its two-digit hexadecimal equivalent (00-FF).
              </p>
              <p>
                <strong>Example:</strong> An HSL value of hsl(180, 50%, 50%) represents a cyan color. This converts to RGB(64, 191, 191) and finally to the hex code #40BFBF. Our converter performs these calculations instantly and accurately.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What is a hex color code?</h3>
                <p className="text-gray-700">
                  A hex color code is a six-digit code preceded by a hash symbol (#) that represents a color. For example, #FF0000 is red. Each pair of digits represents the intensity of red, green, and blue (RGB) components.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is the conversion accurate?</h3>
                <p className="text-gray-700">
                  Yes, our conversion is 100% accurate. The mathematical algorithms used ensure perfect color conversion from HSL to Hex format.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I convert the other way (Hex to HSL)?</h3>
                <p className="text-gray-700">
                  Yes, colors can be converted from Hex to HSL using the reverse mathematical process. Check our other color conversion tools for this functionality.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Why would I use HSL instead of RGB or Hex?</h3>
                <p className="text-gray-700">
                  HSL is often more intuitive for designers because it separates color (hue) from intensity (saturation) and brightness (lightness), making it easier to create harmonious color schemes and variations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is my data safe when using this converter?</h3>
                <p className="text-gray-700">
                  Yes, absolutely. All conversions happen entirely in your browser. Your data never leaves your device, ensuring complete privacy and security.
                </p>
              </div>
            </div>
          </div>

          {/* Color Theory Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Color Theory & HSL Applications
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Understanding color theory is essential for effective design. HSL provides an excellent framework for applying color theory principles in web and graphic design.
              </p>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Monochromatic Color Schemes</h3>
                <p>
                  Keep the same hue while varying saturation and lightness to create monochromatic palettes. This approach provides visual harmony.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Complementary Colors</h3>
                <p>
                  Colors opposite each other on the color wheel (180 degrees apart) are complementary and create high contrast designs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Analogous Color Schemes</h3>
                <p>
                  Colors adjacent to each other on the color wheel (typically 30-60 degrees apart) are analogous and create harmonious designs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Accessibility Considerations</h3>
                <p>
                  When designing for accessibility, use sufficient contrast between colors. HSL makes it easy to adjust lightness values to ensure WCAG compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Start Converting HSL to Hex Colors Today
            </h2>
            <p className="text-lg mb-6">
              Our free HSL to Hex converter is the easiest way to transform color values for your design and development projects. Whether you're a professional designer, web developer, or hobbyist, get started now with zero hassle. No registration, no limits, completely free.
            </p>
            <p className="text-base opacity-90">
              ToolsWizard offers the fastest and most reliable HSL to Hex conversion tool online. Join thousands of users who trust us for their color conversion needs. Start creating beautiful color palettes and designs today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}