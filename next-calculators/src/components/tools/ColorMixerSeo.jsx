import React from 'react';

export default function ColorMixerSeo() {
  const faqs = [
    {
      q: 'Does mixing CSS colors work like mixing physical paint?',
      a: 'No. This is a very common misconception. Mixing physical paint (like yellow and blue to create green) is a subtractive color process. Our CSS Color Mixer utilizes the Additive Color Model (RGB). We are mathematically interpolating between raw wavelengths of light emitted by a digital screen. Mixing a pure Red (`#FF0000`) light with a pure Green (`#00FF00`) light in the RGB space generates a pure Yellow (`#FFFF00`), which contradicts traditional elementary school art theory.'
    },
    {
      q: 'How does the underlying math actually blend the colors?',
      a: 'The algorithm executes a process called "Linear Interpolation." It first breaks down both Hex codes into their core Red, Green, and Blue integers (ranging from 0 to 255). It then applies your chosen percentage weight to each integer channel individually. If you choose a 50/50 mix between Red (255, 0, 0) and Black (0, 0, 0), the engine calculates `(255 * 0.5) + (0 * 0.5)` for the Red channel, resulting in Dark Red (127, 0, 0).'
    },
    {
      q: 'Can I natively mix colors using just standard CSS?',
      a: 'Historically, no. You had to use a CSS preprocessor like Sass (which had a built-in `mix($color1, $color2, $weight)` function). However, the modern CSS Color Module Level 5 introduced the native `color-mix()` function. You can now write `color: color-mix(in srgb, red 50%, blue);` directly in your stylesheet. Our tool is excellent for visualizing these mixtures and extracting a static Hex fallback for older browsers.'
    },
    {
      q: 'Why do two bright colors sometimes mix into a muddy gray?',
      a: 'If you mix two colors that sit on exactly opposite sides of the color wheel (called Complementary Colors, such as pure Red and pure Cyan), their RGB values mathematically cancel each other out during interpolation. The resulting integer average will naturally gravitate towards the exact center of the color space, which is a flat, desaturated gray (`#808080`).'
    },
    {
      q: 'Is it better to interpolate in RGB or HSL space?',
      a: 'Our tool utilizes sRGB interpolation because it is the industry standard for generating predictable, linear transition gradients in web browsers. However, interpolating in the cylindrical HSL space is sometimes preferred by artists because it maintains higher saturation during the transition. Mixing Red and Blue in HSL sweeps through the entire Purple spectrum, whereas mixing in RGB draws a straight mathematical line through a slightly desaturated middle zone.'
    }
  ];

  return (
    <div className="mt-12 bg-conv-white rounded-3xl shadow-xl p-8 md:p-12 border border-conv-gray/20 prose prose-slate max-w-none text-conv-dark leading-relaxed space-y-8 font-sans">
      
      {/* TABLE OF CONTENTS */}
      <div className="p-6 bg-conv-bg/50 rounded-2xl border border-conv-gray/20">
        <h4 className="text-sm font-bold text-conv-dark mb-4 uppercase tracking-wider">Table of Contents</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-semibold text-pink-600 list-none p-0 m-0">
          <li>• <a href="#linear-interpolation" className="hover:underline transition-colors">The Mathematics of Linear Interpolation (Lerp)</a></li>
          <li>• <a href="#color-mix" className="hover:underline transition-colors">The Modern CSS color-mix() Function</a></li>
          <li>• <a href="#opacity-alpha" className="hover:underline transition-colors">Simulating Alpha Opacity Overlays</a></li>
          <li>• <a href="#brand-blending" className="hover:underline transition-colors">Corporate Brand Mergers and Theming</a></li>
          <li>• <a href="#gradient-midpoints" className="hover:underline transition-colors">Calculating Perfect Gradient Midpoints</a></li>
          <li>• <a href="#gamut-spaces" className="hover:underline transition-colors">sRGB vs. Oklab Interpolation Architecture</a></li>
          <li>• <a href="#sass-migration" className="hover:underline transition-colors">Migrating Away from Legacy Sass Workflows</a></li>
          <li>• <a href="#ui-state" className="hover:underline transition-colors">Generating Dynamic UI Hover States</a></li>
        </ul>
      </div>

      <section id="linear-interpolation" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">The Mathematics of Linear Interpolation (Lerp)</h2>
        <p className="mb-4 text-lg text-conv-gray">
          At the core of all digital color blending is an algorithmic process known as Linear Interpolation, commonly abbreviated by software engineers as "Lerping." When you ask a computer to blend two hexadecimal strings, it cannot simply mash the letters together. It must execute precise, channel-by-channel mathematics.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          Our engine first decomposes the input Hex strings into their base-10 integer equivalents for the Red, Green, and Blue channels. Let us assume Color A is pure red (`255, 0, 0`) and Color B is pure white (`255, 255, 255`). If you set the slider to a 50% mix, the Lerp algorithm calculates the exact mathematical midpoint between the two values for every channel.
        </p>
        <p className="text-lg text-conv-gray">
          The Red channel remains `255` (because 255 and 255 average to 255). The Green channel averages 0 and 255 to `127`. The Blue channel averages 0 and 255 to `127`. The engine then repackages `255, 127, 127` back into a Hex string, outputting a perfect, mathematically accurate Pastel Pink (`#FF7F7F`). This exact logic powers every single pixel of our visual blending tool.
        </p>
      </section>

      <section id="color-mix" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">The Modern CSS color-mix() Function</h2>
        <p className="mb-4 text-lg text-conv-gray">
          Historically, the only way to achieve a blended color was to calculate the Hex string manually (or via a preprocessor) and hardcode it into the stylesheet. However, the W3C recently revolutionized CSS architecture by introducing the native `color-mix()` function in CSS Color Module Level 5.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          This function allows the browser to execute the Lerp algorithm in real-time on the client's machine. The syntax is incredibly powerful: `background-color: color-mix(in srgb, var(--brand-primary) 70%, white);`. This tells the browser to generate a background color consisting of 70% of the dynamic brand variable, tinted with 30% white.
        </p>
        <p className="text-lg text-conv-gray">
          While `color-mix()` is the future of frontend development, it is not supported on older legacy browsers (like early versions of Safari or Internet Explorer). Elite developers utilize our Color Mixer tool to visually prototype these precise percentage mixes during the design phase, and then extract the static Hex code to act as an unshakeable, cross-browser fallback declaration.
        </p>
      </section>

      <section id="opacity-alpha" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Simulating Alpha Opacity Overlays</h2>
        <p className="mb-4 text-lg text-conv-gray">
          A very common architectural problem in UI design is the usage of CSS Alpha transparency (e.g., `rgba(0, 0, 0, 0.5)`). While using transparency is easy, it causes massive performance penalties on the browser's Graphics Processing Unit (GPU). 
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          Every time the user scrolls the page, the GPU must constantly recalculate the physical pixels of the transparent overlay combined with whatever complex image or text happens to be scrolling underneath it. This causes "layout thrashing" and can instantly drop a mobile device's framerate below 60fps.
        </p>
        <p className="text-lg text-conv-gray">
          Senior performance engineers solve this by utilizing a Color Mixer to "flatten" the transparency. If you have a solid White background (`#FFFFFF`) and you want a 10% Black overlay, you simply mix White and Black at a 90/10 ratio in our tool. The tool outputs a solid Light Gray (`#E6E6E6`). By using this solid Hex code instead of CSS transparency, you completely eliminate the GPU composite penalty while achieving the exact same visual aesthetic.
        </p>
      </section>

      <section id="brand-blending" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Corporate Brand Mergers and Theming</h2>
        <p className="mb-4 text-lg text-conv-gray">
          When two enterprise corporations merge, or when a massive platform (like a sports betting app) needs to theme a specific UI dashboard for a specific sporting event, designers are often forced to reconcile two violently clashing primary brand colors.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          Attempting to place a harsh Corporate Red directly next to a harsh Corporate Blue often causes "Chromostereopsis," a painful optical illusion where the colors appear to vibrate against each other.
        </p>
        <p className="text-lg text-conv-gray">
          A highly sophisticated design solution is to utilize our mixer to generate a "Bridge Color." By mixing the Red and Blue at a 50/50 ratio, you extract a deep Purple. The designer can then use the original Red and Blue as accents, but utilize the mathematically generated Purple as the primary structural background. This subconsciously ties the two clashing brands together through an unbreakable, algorithmic mathematical bond.
        </p>
      </section>

      <section id="gradient-midpoints" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Calculating Perfect Gradient Midpoints</h2>
        <p className="mb-4 text-lg text-conv-gray">
          When constructing a standard CSS `linear-gradient()`, the browser automatically interpolates the transition between Color A and Color B. However, as previously mentioned, interpolating directly between two highly saturated opposing colors (like Red and Green) often results in a "dead zone"—a muddy, brownish-gray stripe directly in the center of the gradient.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          To fix this, elite UI developers utilize a Color Mixer to manually force a vibrant midpoint. They extract the 50/50 mixed hex code from our tool, and then manually adjust the Saturation and Lightness of that specific midpoint in a color converter to make it brighter.
        </p>
        <p className="text-lg text-conv-gray">
          They then inject this highly saturated, custom midpoint directly into the CSS string: `linear-gradient(to right, red, #FF8800, green);`. This completely overrides the browser's default, muddy interpolation engine, forcing the gradient to take a brighter, more aesthetically pleasing mathematical path through the color space.
        </p>
      </section>

      <section id="gamut-spaces" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">sRGB vs. Oklab Interpolation Architecture</h2>
        <p className="mb-4 text-lg text-conv-gray">
          The mathematics of color blending is currently undergoing a massive architectural shift in the W3C standards. Historically, all tools (including ours) execute interpolation within the standard sRGB color space.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          However, sRGB is biologically flawed. Mixing a bright Blue and a bright White in sRGB often results in a slightly purple, washed-out midpoint. This happens because the math does not accurately map to how the human retina perceives photons of light.
        </p>
        <p className="text-lg text-conv-gray">
          The absolute cutting-edge of CSS architecture is the introduction of the <strong>Oklab</strong> color space. Oklab was specifically engineered for "Perceptual Uniformity." By utilizing the modern CSS `color-mix(in oklab, blue, white)` function, the browser executes the Lerp algorithm in a mathematically corrected space, resulting in a perfectly smooth, biologically accurate transition without the purple "dead zone" artifact.
        </p>
      </section>

      <section id="sass-migration" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Migrating Away from Legacy Sass Workflows</h2>
        <p className="mb-4 text-lg text-conv-gray">
          For many years, the primary reason enterprise teams utilized the Sass preprocessor was to access its highly convenient `mix()` function for generating UI states. A developer could simply write `background: mix($primary, white, 20%);` to instantly generate a lighter version of their brand color for a hover state.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          As the industry aggressively pivots away from heavy Node.js preprocessors towards ultra-lightweight, native PostCSS and Tailwind architectures, developers lose access to that proprietary Sass `mix()` function.
        </p>
        <p className="text-lg text-conv-gray">
          Our visual Color Mixer serves as the perfect structural replacement during this migration phase. Instead of relying on a compiler to execute the math blindly on a server, the frontend engineer utilizes our browser interface to visually verify the 20% mix, guarantees it looks correct, and extracts the raw Hex code to hardcode directly into their modern, utility-first CSS framework.
        </p>
      </section>

      {/* FAQs Section */}
      <section className="pt-8 border-t border-conv-gray/20 mt-12">
        <h2 className="text-3xl font-bold text-conv-dark mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-conv-bg/50 border border-conv-gray/20 rounded-2xl open:shadow-md transition-all"
            >
              <summary className="font-bold px-6 py-5 cursor-pointer text-conv-dark text-lg flex justify-between items-center hover:bg-conv-white/50 transition-colors">
                {faq.q}
                <span className="text-pink-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-5 text-conv-gray text-base border-t border-conv-gray/10 pt-4 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
