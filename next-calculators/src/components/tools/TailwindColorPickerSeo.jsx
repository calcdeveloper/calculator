import React from 'react';

export default function TailwindColorPickerSeo() {
  const faqs = [
    {
      q: 'What makes the Tailwind CSS color palette so special?',
      a: 'The Tailwind palette is not just a random assortment of colors. It was meticulously hand-crafted by expert designers (Adam Wathan and Steve Schoger) over thousands of hours. Every single color ramp (from 50 to 950) was mathematically tuned for perfect visual harmony, contrast, and saturation consistency. It has essentially become the open-source "Gold Standard" for modern web design color systems.'
    },
    {
      q: 'Why are there multiple shades of Gray (Slate, Zinc, Neutral, Stone)?',
      a: 'In professional UI design, pure grayscale (`#808080`) looks incredibly harsh and unnatural. Tailwind provides "temperature-tuned" grays. Slate has a cool blue undertone, perfect for high-tech SaaS dashboards. Stone has a warm, earthy brown undertone, ideal for editorial or organic brands. Neutral is the closest to true gray, while Zinc offers a very subtle, modern silver tint.'
    },
    {
      q: 'What do the numbers (50 through 950) represent?',
      a: 'The numbers represent the relative "Lightness" of the color within its specific ramp. `50` is the absolute lightest tint (nearly white, used for subtle backgrounds). `500` is the core, vibrant brand color. `950` is the absolute darkest shade (nearly black, used for high-contrast text). This numbered architecture allows developers to rapidly build dark modes by mathematically inverting the numbers.'
    },
    {
      q: 'Can I use these Hex codes if I am not using the Tailwind framework?',
      a: 'Absolutely. The Hex codes presented in our Tailwind Color Picker are completely universal. Even if your project is built with raw CSS, Sass, Bootstrap, or styled-components, you can copy the Hex codes from our tool and utilize Tailwind\'s world-class color theory directly within your own custom architecture.'
    },
    {
      q: 'How do I implement these colors in my React components?',
      a: 'If you have Tailwind CSS installed, you do not need to write CSS. You simply copy the utility class from our tool (e.g., `bg-blue-500`) and paste it directly into your React component\'s `className` attribute. The Tailwind compiler will detect the class and automatically generate the necessary underlying CSS.'
    }
  ];

  return (
    <article className="prose prose-slate max-w-none bg-conv-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-conv-gray mt-12">
      
      {/* TABLE OF CONTENTS */}
      <div className="p-6 bg-conv-bg/50 rounded-2xl border border-conv-gray/20">
        <h4 className="text-sm font-bold text-conv-dark mb-4 uppercase tracking-wider">Table of Contents</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-semibold text-pink-600 list-none p-0 m-0">
          <li>• <a href="#utility-first" className="hover:underline transition-colors">The Paradigm Shift of Utility-First CSS</a></li>
          <li>• <a href="#color-theory" className="hover:underline transition-colors">The Science Behind Tailwind's Color Theory</a></li>
          <li>• <a href="#naming-convention" className="hover:underline transition-colors">Deciphering the Semantic Naming Convention</a></li>
          <li>• <a href="#gray-temperatures" className="hover:underline transition-colors">Mastering Gray Temperatures</a></li>
          <li>• <a href="#dark-mode" className="hover:underline transition-colors">Architecting Dark Mode with 950 Shades</a></li>
          <li>• <a href="#customization" className="hover:underline transition-colors">Extending the Palette in tailwind.config.js</a></li>
          <li>• <a href="#accessibility" className="hover:underline transition-colors">WCAG Contrast within the Tailwind Ecosystem</a></li>
          <li>• <a href="#performance" className="hover:underline transition-colors">JIT Compiler Performance Implications</a></li>
        </ul>
      </div>

      <section id="utility-first" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">The Paradigm Shift of Utility-First CSS</h2>
        <p className="mb-4 text-lg text-conv-gray">
          Before Tailwind CSS dominated the frontend landscape, developers relied on semantic class naming (e.g., {"`<button class=\"primary-btn\">`"}). This required writing thousands of lines of custom CSS to define the background color, text color, and hover states for every single component. As applications scaled, stylesheets became bloated, unmaintainable, and prone to catastrophic cascading side effects.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          Tailwind introduced the "Utility-First" paradigm. Instead of writing custom CSS, developers compose UI by chaining together microscopic, single-purpose classes directly in the HTML. Instead of writing {"`.primary-btn { background-color: #3B82F6; color: white; }`"}, you simply write {"`<button class=\"bg-blue-500 text-white\">`"}.
        </p>
        <p className="text-lg text-conv-gray">
          Our <strong>Tailwind Color Picker</strong> serves as the ultimate visual companion for this workflow. By allowing developers to visually browse the entire official palette and instantly copy the exact utility class string, we dramatically accelerate the rapid-prototyping phase of modern web development.
        </p>
      </section>

      <section id="color-theory" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">The Science Behind Tailwind's Color Theory</h2>
        <p className="mb-4 text-lg text-conv-gray">
          The official Tailwind v3 palette consists of 22 standard colors, each broken down into 11 specific shades (50 through 950), resulting in exactly 242 mathematically curated Hex codes.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          This palette was not generated by a random math algorithm. The creators of Tailwind meticulously hand-tuned the Saturation and Lightness curves of every single color. If you blindly apply a mathematical formula to generate a "Yellow" ramp, the darker shades will inevitably turn into a putrid, muddy green. Tailwind\'s designers manually shifted the Hue of the darker yellow shades towards orange and brown to maintain a pleasing, warm aesthetic.
        </p>
        <p className="text-lg text-conv-gray">
          By utilizing our picker to extract these specific Hex codes, independent developers gain access to enterprise-grade color theory without needing to hire a senior UI/UX designer. The colors are virtually guaranteed to look harmonious when composed together on the screen.
        </p>
      </section>

      <section id="naming-convention" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Deciphering the Semantic Naming Convention</h2>
        <p className="mb-4 text-lg text-conv-gray">
          The structural genius of the Tailwind palette lies in its incredibly predictable, semantic naming convention. Every color follows the exact same numbered architecture, which acts as a universal language for frontend teams.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          The `50` and `100` shades are almost entirely white, specifically engineered for subtle background fills (e.g., `bg-blue-50`). The `500` shade is the primary, vibrant anchor color, used for prominent UI elements like primary call-to-action buttons (`bg-blue-500`). The `600` shade is specifically calibrated to act as the hover state for that button (`hover:bg-blue-600`).
        </p>
        <p className="text-lg text-conv-gray">
          The `800` and `900` shades are incredibly dark, designed specifically for high-contrast typography (`text-blue-900`) against the lighter `50` backgrounds. This strict architectural discipline completely eliminates the cognitive load of trying to guess which shade of blue should be used for a specific DOM element.
        </p>
      </section>

      <section id="gray-temperatures" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Mastering Gray Temperatures</h2>
        <p className="mb-4 text-lg text-conv-gray">
          One of the most profound design decisions in Tailwind is the inclusion of five distinctly "temperature-tuned" gray palettes: Slate, Gray, Zinc, Neutral, and Stone.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          Pure gray (`#808080`) contains exactly equal amounts of Red, Green, and Blue light. In UI design, this looks incredibly sterile and lifeless. Professional designers "tint" their grays to match the emotional aesthetic of the brand.
        </p>
        <p className="text-lg text-conv-gray">
          <strong>Slate</strong> and <strong>Gray</strong> contain subtle blue undertones, making them "cool." They pair perfectly with tech brands using Cyan or Indigo primary colors. <strong>Stone</strong> contains heavy yellow and brown undertones, making it "warm." It pairs beautifully with organic brands using Amber or Rose primary colors. <strong>Zinc</strong> and <strong>Neutral</strong> are the closest to true gray, providing a safe, sophisticated baseline for highly minimalist interfaces.
        </p>
      </section>

      <section id="dark-mode" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Architecting Dark Mode with 950 Shades</h2>
        <p className="mb-4 text-lg text-conv-gray">
          In Tailwind v3, the framework introduced the `950` shade across the entire palette. This was a direct architectural response to the massive global shift towards OLED screens and ultra-dark user interfaces.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          Previously, the `900` shade was the darkest available color. However, `slate-900` (`#0f172a`) was often not dark enough for the root background of a premium dark mode application, forcing developers to resort to absolute black (`#000000`).
        </p>
        <p className="text-lg text-conv-gray">
          The introduction of `slate-950` (`#020617`) solved this perfectly. It provides an incredibly deep, abyssal background color that is technically not pure black, retaining just enough blue hue to keep the interface feeling premium and integrated. Our color picker prominently features these critical 950 shades, allowing developers to instantly secure the perfect base layer for their dark mode architectures.
        </p>
      </section>

      <section id="customization" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Extending the Palette in tailwind.config.js</h2>
        <p className="mb-4 text-lg text-conv-gray">
          While the official Tailwind palette is robust, enterprise applications almost always require injecting custom corporate brand colors. The framework was explicitly designed to be extended via the `tailwind.config.js` configuration file.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          Developers frequently use our visual picker to browse the default palette, identify a shade that closely resembles their brand color (e.g., `emerald`), and then override specific hex codes within that ramp in the config file.
        </p>
        <p className="text-lg text-conv-gray">
          For example: {"`theme: { extend: { colors: { brand: { 500: '#10B981' } } } }`"}. This merges the custom `brand` color perfectly into the Tailwind utility engine, allowing the developer to instantly utilize generated classes like `bg-brand-500` or `text-brand-500` without writing a single line of custom CSS.
        </p>
      </section>

      <section id="accessibility" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">WCAG Contrast within the Tailwind Ecosystem</h2>
        <p className="mb-4 text-lg text-conv-gray">
          Tailwind's numbered architecture provides a highly predictable framework for achieving WCAG accessibility compliance. Because the Lightness curve is relatively standardized across all hues, developers can rely on mathematical "Rules of Thumb."
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          As a general rule, to achieve a strict 4.5:1 WCAG AA contrast ratio for standard text, there must be a difference of at least <strong>400</strong> steps between the background shade and the text shade.
        </p>
        <p className="text-lg text-conv-gray">
          For example, placing `text-slate-900` on top of a `bg-slate-100` surface yields a massive 800-step difference, guaranteeing a perfect AAA pass. Conversely, placing `text-blue-500` on top of a `bg-blue-300` surface yields only a 200-step difference, which will catastrophically fail accessibility audits. Understanding this step-logic completely revolutionizes the speed at which developers can compose accessible interfaces.
        </p>
      </section>

      <section id="performance" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">JIT Compiler Performance Implications</h2>
        <p className="mb-4 text-lg text-conv-gray">
          A common concern among developers transitioning to Tailwind is the fear of shipping massive stylesheets. Since there are 242 colors, and dozens of utilities for each color (bg, text, border, ring, etc.), wouldn't the resulting CSS file be gigabytes in size?
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          This is entirely solved by Tailwind's modern Just-In-Time (JIT) compiler. When you run your build script, the compiler scans your source code (React, Vue, HTML). If it sees that you copied `bg-emerald-500` from our tool and pasted it into a component, it generates only that single line of CSS. 
        </p>
        <p className="text-lg text-conv-gray">
          If you never use `bg-emerald-600`, it is mathematically purged from the final production bundle. This guarantees that your application only ships the absolute minimum required CSS to the browser, frequently resulting in stylesheets smaller than 10kb, triggering massive Google Lighthouse performance score increases.
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
    </article>
  );
}
