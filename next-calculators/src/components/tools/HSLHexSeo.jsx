import React from 'react';

export default function HSLHexSeo() {
  return (
    <div className="mt-16 bg-design-white rounded-[2.5rem] shadow-sm p-8 md:p-16 border border-design-gray prose prose-slate max-w-none text-design-dark leading-relaxed space-y-8 font-sans">
      
      {/* What is HSL Section */}
      <section>
        <h2 className="text-3xl font-bold text-design-dark mb-6 tracking-tight">What is HSL Color Model?</h2>
        <div className="space-y-4 text-design-dark/80 text-lg">
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
      </section>

      {/* HSL Components Section */}
      <section>
        <h2 className="text-3xl font-bold text-design-dark mb-6 tracking-tight">Understanding HSL Components</h2>
        <div className="space-y-6 text-design-dark/80">
          <div className="border-l-4 border-design-primary pl-5 py-2">
            <h3 className="text-xl font-bold text-design-dark mb-2">Hue (0-360 degrees)</h3>
            <p className="text-lg">
              Hue is the color itself on the color wheel. It's measured in degrees from 0 to 360. Red is at 0°, green is at 120°, blue is at 240°, and it cycles back to red at 360°. The hue value determines which color you're working with. For example, 0° gives you pure red, 60° gives you yellow, 180° gives you cyan, and 300° gives you magenta. By adjusting the hue value, you can select any color on the color spectrum.
            </p>
          </div>
          <div className="border-l-4 border-design-primary pl-5 py-2">
            <h3 className="text-xl font-bold text-design-dark mb-2">Saturation (0-100%)</h3>
            <p className="text-lg">
              Saturation refers to the intensity or purity of the color. A saturation value of 0% means the color is completely desaturated (grayscale), while 100% means the color is fully saturated (most vivid). At 50% saturation, the color appears less vibrant than 100%, and at 0% saturation, any hue value will appear as a shade of gray. Think of saturation as controlling how "colorful" the color is.
            </p>
          </div>
          <div className="border-l-4 border-design-primary pl-5 py-2">
            <h3 className="text-xl font-bold text-design-dark mb-2">Lightness (0-100%)</h3>
            <p className="text-lg">
              Lightness controls the brightness of the color. A lightness value of 0% produces pure black regardless of the hue or saturation, while 100% produces pure white. A lightness value of 50% produces the most "natural" appearance of the hue. Values below 50% create darker shades of the color, while values above 50% create lighter tints. Lightness is essentially controlling how light or dark the color appears.
            </p>
          </div>
        </div>
      </section>

      {/* HSL vs Hex Section */}
      <section>
        <h2 className="text-3xl font-bold text-design-dark mb-6 tracking-tight">HSL vs Hex: What's the Difference?</h2>
        <p className="text-lg text-design-dark/80 mb-6">
          <strong>Hexadecimal (Hex)</strong> color codes are the most common way to specify colors in web design. They consist of a hash symbol (#) followed by six hexadecimal digits (0-9, A-F) that represent the red, green, and blue components of a color. For example, #FF0000 is pure red, #00FF00 is pure green, and #0000FF is pure blue.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          <div className="bg-design-bg/50 p-6 rounded-2xl border border-design-gray/50">
            <h3 className="text-xl font-bold text-design-dark mb-4">HSL Advantages</h3>
            <ul className="space-y-3 text-design-dark/80 font-medium">
              <li className="flex items-center gap-2"><span className="text-design-primary">✓</span> More intuitive for designers</li>
              <li className="flex items-center gap-2"><span className="text-design-primary">✓</span> Easy to create color variations</li>
              <li className="flex items-center gap-2"><span className="text-design-primary">✓</span> Simple to adjust brightness/saturation</li>
              <li className="flex items-center gap-2"><span className="text-design-primary">✓</span> Better for understanding colors</li>
              <li className="flex items-center gap-2"><span className="text-design-primary">✓</span> Great for CSS variables</li>
            </ul>
          </div>
          <div className="bg-design-bg/50 p-6 rounded-2xl border border-design-gray/50">
            <h3 className="text-xl font-bold text-design-dark mb-4">Hex Advantages</h3>
            <ul className="space-y-3 text-design-dark/80 font-medium">
              <li className="flex items-center gap-2"><span className="text-design-primary">✓</span> Universal web standard</li>
              <li className="flex items-center gap-2"><span className="text-design-primary">✓</span> Supported by all browsers</li>
              <li className="flex items-center gap-2"><span className="text-design-primary">✓</span> Compact format</li>
              <li className="flex items-center gap-2"><span className="text-design-primary">✓</span> Widely used in design tools</li>
              <li className="flex items-center gap-2"><span className="text-design-primary">✓</span> Better for color pickers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Use Our Converter Section */}
      <section>
        <h2 className="text-3xl font-bold text-design-dark mb-6 tracking-tight">Why Use Our HSL to Hex Converter?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-design-dark/80 text-lg">
          <div className="border-l-4 border-design-primary pl-4">
            <h3 className="text-xl font-bold text-design-dark mb-2">100% Free</h3>
            <p>Our HSL to Hex converter is completely free with no hidden charges, subscriptions, or premium features.</p>
          </div>
          <div className="border-l-4 border-design-primary pl-4">
            <h3 className="text-xl font-bold text-design-dark mb-2">No Registration</h3>
            <p>Start converting colors immediately without creating an account or providing personal information.</p>
          </div>
          <div className="border-l-4 border-design-primary pl-4">
            <h3 className="text-xl font-bold text-design-dark mb-2">Instant Results</h3>
            <p>Get instant conversion results as you adjust the sliders. See the color change in real-time.</p>
          </div>
          <div className="border-l-4 border-design-primary pl-4">
            <h3 className="text-xl font-bold text-design-dark mb-2">Private & Secure</h3>
            <p>All conversions happen in your browser. Your data never reaches any server, ensuring complete privacy.</p>
          </div>
          <div className="border-l-4 border-design-primary pl-4">
            <h3 className="text-xl font-bold text-design-dark mb-2">Accurate Conversion</h3>
            <p>Our conversion algorithm is accurate to the pixel, ensuring perfect color representation.</p>
          </div>
          <div className="border-l-4 border-design-primary pl-4">
            <h3 className="text-xl font-bold text-design-dark mb-2">Easy to Use</h3>
            <p>Simple, intuitive interface that anyone can use, regardless of technical expertise.</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section>
        <h2 className="text-3xl font-bold text-design-dark mb-6 tracking-tight">Common Use Cases for HSL to Hex</h2>
        <div className="space-y-6 text-design-dark/80 text-lg">
          <div>
            <h3 className="text-xl font-bold text-design-dark mb-2">Web Design & Development</h3>
            <p>Designers often work with HSL values in design tools, but web browsers and CSS need hex values. Our converter bridges this gap, allowing you to quickly convert colors from your design tool to web-ready hex codes.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-design-dark mb-2">Creating Color Palettes</h3>
            <p>When creating color palettes, HSL is much more convenient because you can easily adjust saturation and lightness to create harmonious color schemes. Convert these HSL values to hex for use in your projects.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-design-dark mb-2">CSS Variable Management</h3>
            <p>Many developers use CSS custom properties (variables) with hex colors. If you've defined your color scheme in HSL, our converter helps you get the equivalent hex values for your CSS code.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-design-dark mb-2">Brand Color Consistency</h3>
            <p>Maintain consistency across design tools and development by converting brand colors from one format to another. This ensures that the colors used in design match exactly with the colors in code.</p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section>
        <h2 className="text-3xl font-bold text-design-dark mb-6 tracking-tight">How to Convert HSL to Hex Colors</h2>
        <ol className="space-y-6 text-design-dark/80 text-lg list-none pl-0">
          <li className="flex gap-4">
            <span className="bg-design-primary text-design-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
            <div>
              <strong className="text-design-dark block mb-1">Adjust the Hue Slider</strong>
              <p className="m-0">Move the Hue slider to select the base color you want (0-360 degrees). The color wheel preview helps you visualize the selection.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="bg-design-primary text-design-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
            <div>
              <strong className="text-design-dark block mb-1">Set the Saturation Level</strong>
              <p className="m-0">Adjust the Saturation slider to control the color intensity. 0% gives grayscale, 100% gives vivid colors.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="bg-design-primary text-design-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
            <div>
              <strong className="text-design-dark block mb-1">Control the Lightness</strong>
              <p className="m-0">Adjust the Lightness slider to make the color brighter or darker. 0% is black, 50% is normal, 100% is white.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="bg-design-primary text-design-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
            <div>
              <strong className="text-design-dark block mb-1">Copy the Hex Code</strong>
              <p className="m-0">Click the "Copy" button to copy the generated hex code to your clipboard. Use it in your CSS, HTML, or design tools.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold text-design-dark mb-6 tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-4 not-prose">
          {[
            { q: "What is a hex color code?", a: "A hex color code is a six-digit code preceded by a hash symbol (#) that represents a color. For example, #FF0000 is red. Each pair of digits represents the intensity of red, green, and blue (RGB) components." },
            { q: "Is the conversion accurate?", a: "Yes, our conversion is 100% accurate. The mathematical algorithms used ensure perfect color conversion from HSL to Hex format." },
            { q: "Can I convert the other way (Hex to HSL)?", a: "Yes, colors can be converted from Hex to HSL using the reverse mathematical process. Check our other color conversion tools for this functionality." },
            { q: "Why would I use HSL instead of RGB or Hex?", a: "HSL is often more intuitive for designers because it separates color (hue) from intensity (saturation) and brightness (lightness), making it easier to create harmonious color schemes and variations." },
            { q: "Is my data safe when using this converter?", a: "Yes, absolutely. All conversions happen entirely in your browser. Your data never leaves your device, ensuring complete privacy and security." }
          ].map((faq, i) => (
            <details key={i} className="group border border-design-gray rounded-xl p-6 bg-design-bg/30 transition-all hover:bg-design-white hover:border-design-primary cursor-pointer">
              <summary className="font-bold list-none flex justify-between items-center text-design-dark text-lg">
                {faq.q}
                <span className="text-design-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-design-dark/80 text-base leading-relaxed border-t border-design-gray pt-4">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
}
