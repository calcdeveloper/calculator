import React from 'react';

export default function ColorPaletteGeneratorSeo() {
  const faqs = [
    {
      q: 'Why do the generated colors always look visually pleasing together?',
      a: 'Unlike truly chaotic random color generators that utilize raw RGB math (which often produces muddy browns or eye-burning neons), our algorithmic engine operates strictly within the HSL (Hue, Saturation, Lightness) color space. We intentionally constrain the saturation levels between 40% and 100%, and the lightness between 20% and 80%, mathematically guaranteeing vibrant, harmonious palettes every single time you hit the spacebar.'
    },
    {
      q: 'How does the automatic text color contrast work?',
      a: 'When the generator outputs a deep, dark color (like Navy Blue), placing black text on top of it renders the Hex Code completely unreadable. To solve this, our JavaScript engine instantly executes the YIQ relative luminance formula. It mathematically calculates the exact perceived brightness of the generated background color and automatically switches the text overlay to stark white or deep black to ensure absolute W3C accessibility compliance.'
    },
    {
      q: 'Can I save or export the generated color palettes?',
      a: 'Currently, the fastest and most efficient way to save a color is to simply click the Hex Code overlay. This action instantly copies the exact 6-character hexadecimal string directly to your operating system\'s clipboard. You can then immediately paste that string into your Figma canvas, your TailwindCSS configuration file, or your Adobe Illustrator swatches panel.'
    },
    {
      q: 'What is a Hexadecimal Color Code?',
      a: 'A Hex Code (e.g., `#FF5733`) is the absolute global standard for defining colors on the internet. It is a 6-digit alphanumeric string where the first two characters define the intensity of Red, the middle two define Green, and the final two define Blue. `FF` represents the absolute maximum mathematical intensity, while `00` represents complete darkness (zero intensity).'
    },
    {
      q: 'Why does the tool require me to press the Spacebar?',
      a: 'Designing a brilliant user interface requires rapid, massive iteration. Clicking a tiny button with a mouse hundreds of times causes severe wrist fatigue and breaks a designer\'s creative flow. By binding the massive generation function directly to the Spacebar, we allow designers to sit back, rapidly cycle through hundreds of palettes in seconds, and lock their favorite colors instantaneously.'
    }
  ];

  return (
    <div className="mt-12 bg-gen-white rounded-3xl shadow-xl p-8 md:p-12 border border-gen-gray/20 prose prose-slate max-w-none text-gen-dark leading-relaxed space-y-8 font-sans">
      
      {/* TABLE OF CONTENTS */}
      <div className="p-6 bg-gen-bg/50 rounded-2xl border border-gen-gray/20">
        <h4 className="text-sm font-bold text-gen-dark mb-4 uppercase tracking-wider">Table of Contents</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-semibold text-gen-primary list-none p-0 m-0">
          <li>• <a href="#introduction" className="hover:underline transition-colors">The Psychology of Digital Color</a></li>
          <li>• <a href="#hsl-vs-rgb" className="hover:underline transition-colors">Why HSL Math Defeats RGB Math</a></li>
          <li>• <a href="#spacebar-ux" className="hover:underline transition-colors">The Spacebar UX Paradigm</a></li>
          <li>• <a href="#locking-mechanic" className="hover:underline transition-colors">The Iterative Locking Mechanic</a></li>
          <li>• <a href="#accessibility" className="hover:underline transition-colors">W3C Contrast and YIQ Luminance</a></li>
          <li>• <a href="#tailwind-css" className="hover:underline transition-colors">Integrating with Tailwind CSS Architecture</a></li>
          <li>• <a href="#brand-identity" className="hover:underline transition-colors">Establishing Corporate Brand Identity</a></li>
          <li>• <a href="#color-theory" className="hover:underline transition-colors">Understanding Analogous and Triadic Colors</a></li>
          <li>• <a href="#figma-workflow" className="hover:underline transition-colors">Accelerating the Figma Workflow</a></li>
        </ul>
      </div>

      <section id="introduction" className="pt-4">
        <h2 className="text-3xl font-bold text-gen-dark mb-4 tracking-tight">The Psychology of Digital Color</h2>
        <p className="mb-4 text-lg text-gen-gray">
          In the highly specialized discipline of frontend engineering and digital product design, color is not merely an aesthetic decoration; it is a profound psychological weapon. The specific hexadecimal code you assign to a primary "Submit" button fundamentally alters human behavior, massively impacting e-commerce conversion rates, user retention, and overall brand trust.
        </p>
        <p className="mb-4 text-lg text-gen-gray">
          If a banking application utilizes a chaotic array of neon greens and deep purples, users will subconsciously perceive the platform as unstable and refuse to deposit their funds. Conversely, utilizing heavily muted, harmonious shades of slate blue and emerald green instantly projects an aura of massive institutional security and mathematical precision.
        </p>
        <p className="text-lg text-gen-gray">
          Our professional <strong>Color Palette Generator</strong> is engineered to eliminate the paralyzing anxiety of staring at a blank design canvas. By algorithmically synthesizing infinite arrays of visually harmonious colors, we provide designers and frontend engineers with the exact mathematical hex codes required to rapidly prototype beautiful, emotionally resonant user interfaces.
        </p>
      </section>

      <section id="hsl-vs-rgb" className="pt-4">
        <h2 className="text-3xl font-bold text-gen-dark mb-4 tracking-tight">Why HSL Math Defeats RGB Math</h2>
        <p className="mb-4 text-lg text-gen-gray">
          The single most common mistake made when programming a random color generator is relying exclusively on raw RGB (Red, Green, Blue) mathematical randomization. If a JavaScript engine simply picks a random number between 0 and 255 for Red, Green, and Blue, the resulting color is almost always visually repulsive—typically a muddy brown, an aggressively dull gray, or a violently clashing neon.
        </p>
        <p className="mb-4 text-lg text-gen-gray">
          To solve this massive aesthetic problem, our generator entirely abandons RGB logic and operates strictly within the <strong>HSL (Hue, Saturation, Lightness)</strong> color space. The HSL spectrum aligns perfectly with how the human brain actually perceives color relationships.
        </p>
        <p className="text-lg text-gen-gray">
          The mathematical algorithm behind our tool randomizes the Hue across the full 360-degree color wheel, ensuring incredible diversity. However, it strictly clamps the Saturation and Lightness variables within highly specific mathematical boundaries (e.g., preventing Lightness from dropping below 20%). This brilliant algorithmic constraint guarantees that every single generated palette looks incredibly vibrant, highly professional, and perfectly suited for modern web typography.
        </p>
      </section>

      <section id="spacebar-ux" className="pt-4">
        <h2 className="text-3xl font-bold text-gen-dark mb-4 tracking-tight">The Spacebar UX Paradigm</h2>
        <p className="mb-4 text-lg text-gen-gray">
          When a senior art director or UI/UX designer is attempting to establish the fundamental color architecture for a new massive SaaS platform, they do not want to click a tiny UI button with their mouse four hundred times. Forcing a user to execute microscopic mouse targeting constantly completely shatters their creative "flow state."
        </p>
        <p className="mb-4 text-lg text-gen-gray">
          Our engineering team solved this interaction bottleneck by deeply implementing the "Spacebar Paradigm." By binding the core React generation function to a global JavaScript window event listener watching for the <code>Space</code> keycode, we transformed the web browser into an incredibly rapid iteration engine.
        </p>
        <p className="text-lg text-gen-gray">
          A designer can literally lean back in their ergonomic chair, close their eyes, and rhythmically tap the massive spacebar on their keyboard. The screen instantly flashes through dozens of brilliant palettes per second. When their brain subconsciously registers a color combination that perfectly matches the client's brand vision, they simply stop tapping. It is the absolute fastest method for breaking through creative block.
        </p>
      </section>

      <section id="locking-mechanic" className="pt-4">
        <h2 className="text-3xl font-bold text-gen-dark mb-4 tracking-tight">The Iterative Locking Mechanic</h2>
        <p className="mb-4 text-lg text-gen-gray">
          Designing a perfect 5-color palette is almost never a simultaneous, instantaneous occurrence. Usually, a designer generates a random palette and instantly falls in love with exactly one color—perhaps a stunning shade of "Midnight Cobalt." However, the other four colors in the generated array might be completely unusable for the specific project.
        </p>
        <p className="mb-4 text-lg text-gen-gray">
          If the designer hits the spacebar again, the beautiful Cobalt blue will be mathematically annihilated and lost forever. To prevent this catastrophe, our platform features a highly intuitive, incredibly powerful "Locking" architecture. 
        </p>
        <p className="text-lg text-gen-gray">
          By simply clicking the Lock icon (or tapping the color directly on a mobile device), the React state engine removes that specific array index from the randomization pool. When the user hits the spacebar again, the locked Midnight Cobalt remains perfectly frozen in place, while the engine violently randomizes the remaining four columns. This allows designers to meticulously, iteratively sculpt their perfect palette one color at a time.
        </p>
      </section>

      <section id="accessibility" className="pt-4">
        <h2 className="text-3xl font-bold text-gen-dark mb-4 tracking-tight">W3C Contrast and YIQ Luminance</h2>
        <p className="mb-4 text-lg text-gen-gray">
          A massive, highly complex engineering challenge when building a full-screen color generator is ensuring that the hexadecimal text overlay remains perfectly legible. If the engine generates a massive column of pure yellow (<code>#FFFF00</code>) and overlays white text, the text becomes mathematically invisible. If it generates pitch black (<code>#000000</code>) and overlays black text, the UI completely fails.
        </p>
        <p className="mb-4 text-lg text-gen-gray">
          To solve this without ruining the aesthetic with ugly drop-shadows, our frontend architecture dynamically executes the official YIQ relative luminance formula: <code>((R*299) + (G*587) + (B*114)) / 1000</code>. This incredibly precise mathematical equation analyzes the exact perceived brightness of the generated background color.
        </p>
        <p className="text-lg text-gen-gray">
          If the YIQ value drops below 128, the background is mathematically classified as "Dark," and the React engine instantly dynamically swaps the text color overlay to pure white. This ensures absolute compliance with strict W3C Web Content Accessibility Guidelines (WCAG), guaranteeing that visually impaired users can seamlessly read and copy the hex codes.
        </p>
      </section>

      <section id="tailwind-css" className="pt-4">
        <h2 className="text-3xl font-bold text-gen-dark mb-4 tracking-tight">Integrating with Tailwind CSS Architecture</h2>
        <p className="mb-4 text-lg text-gen-gray">
          In the modern ecosystem of frontend web development, utility-first CSS frameworks—specifically Tailwind CSS—have completely conquered the industry. When a developer utilizes our generator to finalize a beautiful 5-color palette, they must instantly transition those raw hexadecimal strings into their massive, highly complex application codebase.
        </p>
        <p className="mb-4 text-lg text-gen-gray">
          By utilizing our single-click clipboard architecture, developers can instantly copy a locked hex code (e.g., <code>#3B82F6</code>) and paste it directly into their <code>tailwind.config.js</code> file. They assign semantic naming conventions to the generated strings, such as mapping the darkest color to <code>theme.colors.primary.900</code> and the lightest color to <code>theme.colors.surface.100</code>.
        </p>
        <p className="text-lg text-gen-gray">
          This seamless workflow allows an engineering team to rapidly extract aesthetic beauty from our generator and permanently encode it into the absolute architectural foundation of their global design system.
        </p>
      </section>

      <section id="brand-identity" className="pt-4">
        <h2 className="text-3xl font-bold text-gen-dark mb-4 tracking-tight">Establishing Corporate Brand Identity</h2>
        <p className="mb-4 text-lg text-gen-gray">
          When a startup is in its absolute infancy, before they have hired a dedicated Chief Marketing Officer or an expensive boutique design agency, the founding engineers must establish the foundational Brand Identity. They need a logo, a primary brand color, and a secondary accent color to build their initial Minimum Viable Product (MVP).
        </p>
        <p className="mb-4 text-lg text-gen-gray">
          Our platform serves as an incredibly powerful, entirely free tool for early-stage founders to rapidly prototype their corporate visual identity. A founder building a healthcare startup can lock a highly trustworthy shade of "Medical Blue," and then rapidly hit the spacebar to algorithmically discover the perfect high-contrast "Action Orange" to utilize for their critical "Sign Up" buttons.
        </p>
        <p className="text-lg text-gen-gray">
          By establishing a strict, mathematically defined color palette early in the development lifecycle, startups ensure incredible visual consistency across their web application, their iOS app, and their investor pitch decks, projecting massive institutional professionalism.
        </p>
      </section>

      <section id="color-theory" className="pt-4">
        <h2 className="text-3xl font-bold text-gen-dark mb-4 tracking-tight">Understanding Analogous and Triadic Colors</h2>
        <p className="mb-4 text-lg text-gen-gray">
          While our generator excels at producing highly chaotic, brilliant random combinations, expert designers often utilize the tool to rapidly hunt for specific mathematical relationships defined by traditional Color Theory. 
        </p>
        <p className="mb-4 text-lg text-gen-gray">
          For example, a designer might hunt for an "Analogous" palette—three colors that sit directly next to each other on the 360-degree color wheel (such as Red, Orange, and Yellow). This creates an incredibly smooth, harmonious, low-contrast visual aesthetic perfect for calming, background-heavy applications like meditation apps or reading dashboards.
        </p>
        <p className="text-lg text-gen-gray">
          Conversely, they might hunt for a "Triadic" or "Complementary" palette—colors that sit at exact opposite ends of the color wheel (such as Blue and Orange). This mathematical relationship creates a violent, incredibly high-energy visual contrast that is absolutely perfect for aggressive e-commerce sale banners or high-intensity video game user interfaces.
        </p>
      </section>

      <section id="figma-workflow" className="pt-4">
        <h2 className="text-3xl font-bold text-gen-dark mb-4 tracking-tight">Accelerating the Figma Workflow</h2>
        <p className="mb-4 text-lg text-gen-gray">
          Figma has become the undisputed, absolute global monopoly for UI/UX design. However, populating a massive new Figma design file with local color styles from scratch is a tedious, highly manual process. 
        </p>
        <p className="mb-4 text-lg text-gen-gray">
          Our tool is explicitly designed to sit on a second monitor while the designer works inside Figma on their primary display. The designer utilizes our tool to algorithmically discover the perfect 5-color harmony. They then click the hex code, alt-tab to Figma, paste the hex string into a new Local Color Style, and repeat the process exactly four more times.
        </p>
        <p className="text-lg text-gen-gray">
          Within roughly 45 seconds, the designer has extracted five mathematically perfect colors from our generation engine and permanently anchored them as foundational design tokens within their massive Figma file, allowing them to instantly begin drawing high-fidelity web components with absolute visual confidence.
        </p>
      </section>

      {/* FAQs Section */}
      <section className="pt-8 border-t border-gen-gray/20 mt-12">
        <h2 className="text-3xl font-bold text-gen-dark mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-gen-bg/50 border border-gen-gray/20 rounded-2xl open:shadow-md transition-all"
            >
              <summary className="font-bold px-6 py-5 cursor-pointer text-gen-dark text-lg flex justify-between items-center hover:bg-gen-white/50 transition-colors">
                {faq.q}
                <span className="text-gen-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-5 text-gen-gray text-base border-t border-gen-gray/10 pt-4 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
