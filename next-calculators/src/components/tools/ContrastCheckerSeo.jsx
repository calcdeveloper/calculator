import React from 'react';

export default function ContrastCheckerSeo() {
  const faqs = [
    {
      q: 'What is the WCAG 2.1 Contrast standard?',
      a: 'The Web Content Accessibility Guidelines (WCAG) 2.1 is an internationally recognized set of standards that dictates how digital content must be designed to accommodate disabled users. Specifically, it establishes strict mathematical contrast ratios that must exist between the text color (foreground) and the background color to ensure legibility for individuals with visual impairments or color blindness.'
    },
    {
      q: 'What is the difference between AA and AAA compliance?',
      a: 'Level AA is the global baseline standard mandated by most government regulations (like the ADA in the US or the EAA in Europe). It requires a 4.5:1 ratio for normal text. Level AAA is the absolute gold standard for accessibility, requiring a much stricter 7.0:1 ratio. Achieving AAA is highly recommended for government websites, educational platforms, and healthcare portals.'
    },
    {
      q: 'Why does "Large Text" have lower contrast requirements?',
      a: 'Because large, bold text naturally has a significantly higher visual weight and physical surface area, the human eye can easily distinguish it from the background even if the colors are slightly similar. Therefore, WCAG mathematically lowers the requirement to a 3.0:1 ratio for any text that is 18pt (24px) or larger, or 14pt (18.5px) if it is bolded.'
    },
    {
      q: 'How is the contrast ratio mathematically calculated?',
      a: 'The formula is `(L1 + 0.05) / (L2 + 0.05)`, where `L1` is the relative luminance of the lighter color and `L2` is the relative luminance of the darker color. Luminance is calculated by converting the sRGB hexadecimal strings into linear RGB values, and weighting them based on human visual perception (where Green contributes 71%, Red contributes 21%, and Blue contributes 7%).'
    },
    {
      q: 'Can an automated tool perfectly audit my entire website?',
      a: 'No. Automated tools like Google Lighthouse can only catch basic CSS color declarations. They absolutely cannot calculate contrast if your text is positioned on top of a dynamic CSS gradient, a photograph, or an animated background video. In these complex scenarios, human developers must utilize manual contrast checkers to sample the lightest pixel of the background image.'
    }
  ];

  return (
    <article className="prose prose-slate max-w-none bg-conv-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-conv-gray mt-12">
      
      {/* TABLE OF CONTENTS */}
      <div className="p-6 bg-conv-bg/50 rounded-2xl border border-conv-gray/20">
        <h4 className="text-sm font-bold text-conv-dark mb-4 uppercase tracking-wider">Table of Contents</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-semibold text-pink-600 list-none p-0 m-0">
          <li>• <a href="#legal-compliance" className="hover:underline transition-colors">The Legal Imperative of Accessibility Compliance</a></li>
          <li>• <a href="#mathematical-luminance" className="hover:underline transition-colors">Understanding Mathematical Relative Luminance</a></li>
          <li>• <a href="#wcag-tiers" className="hover:underline transition-colors">Deconstructing the WCAG AA vs. AAA Tiers</a></li>
          <li>• <a href="#font-weight" className="hover:underline transition-colors">The Architectural Impact of Font Weight and Size</a></li>
          <li>• <a href="#color-blindness" className="hover:underline transition-colors">Mitigating Color Vision Deficiency (CVD)</a></li>
          <li>• <a href="#dark-mode" className="hover:underline transition-colors">Contrast Pitfalls in Dark Mode Design</a></li>
          <li>• <a href="#opacity-alpha" className="hover:underline transition-colors">Handling CSS Opacity and Alpha Channels</a></li>
          <li>• <a href="#seo-impact" className="hover:underline transition-colors">The Direct Impact of Accessibility on SEO</a></li>
        </ul>
      </div>

      <section id="legal-compliance" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">The Legal Imperative of Accessibility Compliance</h2>
        <p className="mb-4 text-lg text-conv-gray">
          In the early days of the internet, web accessibility was largely treated as an optional "nice-to-have" feature. Today, it is a strict, undeniable legal mandate. Massive corporations have faced multi-million dollar class-action lawsuits under the Americans with Disabilities Act (ADA) explicitly because their web applications utilized low-contrast color palettes that visually impaired users could not read.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          By utilizing a professional <strong>WCAG Contrast Checker</strong>, enterprise engineering teams can mathematically guarantee that their brand guidelines do not violate international civil rights laws. Every single color combination—from primary buttons to subtle footer text—must be aggressively audited and documented before the code is ever deployed to a production server.
        </p>
        <p className="text-lg text-conv-gray">
          This is not merely about avoiding litigation; it is about building ethical, inclusive technology. Approximately 15% of the global population experiences some form of disability. If a frontend engineer hardcodes a light gray text (`#999999`) on a white background (`#FFFFFF`), they are actively blocking millions of users from accessing their content, purchasing their products, or consuming their journalism.
        </p>
      </section>

      <section id="mathematical-luminance" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Understanding Mathematical Relative Luminance</h2>
        <p className="mb-4 text-lg text-conv-gray">
          The contrast ratio is not calculated by simply guessing how different two colors look. The W3C (World Wide Web Consortium) established an incredibly complex algorithmic formula based on the physics of light and human biology. The algorithm calculates the <strong>Relative Luminance</strong> of the two Hex codes.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          The human eye does not perceive all light wavelengths equally. Our biological photoreceptor cells are massively more sensitive to green light than to blue light. Therefore, the W3C algorithm applies strict mathematical weights to the sRGB channels. When calculating luminance, the Green channel dictates 71.5% of the final value, Red dictates 21.2%, and Blue dictates a mere 7.2%.
        </p>
        <p className="text-lg text-conv-gray">
          This biological weighting is precisely why a pure Blue (`#0000FF`) background allows for perfectly legible White text, but a pure Green (`#00FF00`) background completely washes out White text. Our client-side JavaScript engine executes this exact weighted sRGB algorithm instantaneously every time you adjust a Hex code, guaranteeing absolute precision in the final ratio output.
        </p>
      </section>

      <section id="wcag-tiers" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Deconstructing the WCAG AA vs. AAA Tiers</h2>
        <p className="mb-4 text-lg text-conv-gray">
          When auditing an interface, developers must target specific WCAG compliance tiers. <strong>Level AA</strong> is the global baseline standard. To pass Level AA, standard paragraph text must achieve a mathematical contrast ratio of at least <strong>4.5:1</strong>. This ensures that users with 20/40 vision (a common degree of visual loss, especially in the elderly) can read the interface without utilizing assistive screen-magnification software.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          <strong>Level AAA</strong> is the highest, strictest tier of accessibility. To achieve AAA certification, standard text must hit a massively difficult <strong>7.0:1</strong> ratio. This ratio was specifically chosen because it compensates for users with 20/80 vision. While forcing a 7.0:1 ratio across a modern, vibrant SAAS dashboard can be aesthetically challenging for designers, it is an absolute mandatory architectural requirement for government portals, medical software, and banking applications.
        </p>
        <p className="text-lg text-conv-gray">
          Our contrast checker provides immediate, dual-tier visual feedback. If a color pairing achieves a 5.0:1 ratio, the tool will instantly flag it as a "PASS" for Level AA, but a critical "FAIL" for Level AAA, empowering the developer to make highly informed architectural decisions based on their specific product's legal requirements.
        </p>
      </section>

      <section id="font-weight" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">The Architectural Impact of Font Weight and Size</h2>
        <p className="mb-4 text-lg text-conv-gray">
          A critical nuance of the WCAG algorithm is that contrast requirements are highly dependent on the physical surface area of the typography. The guidelines explicitly distinguish between "Normal Text" and "Large Text."
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          Large text is defined by the W3C as any typography rendered at 18pt (typically 24px in CSS) or larger, or 14pt (18.5px) if the font-weight is explicitly bold (e.g., `font-weight: 700`). Because large, thick text takes up significantly more physical pixels on the monitor, the human retina can discern the character boundaries with far less luminosity contrast.
        </p>
        <p className="text-lg text-conv-gray">
          Therefore, the WCAG standard aggressively lowers the threshold for Large Text. To pass Level AA, Large Text only needs a ratio of <strong>3.0:1</strong> (down from 4.5:1). To pass Level AAA, it only needs a ratio of <strong>4.5:1</strong> (down from 7.0:1). This loophole is a massive architectural weapon for UI designers, allowing them to utilize subtle, low-contrast pastel colors for massive H1 hero headers while keeping standard paragraph text strict and dark.
        </p>
      </section>

      <section id="color-blindness" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Mitigating Color Vision Deficiency (CVD)</h2>
        <p className="mb-4 text-lg text-conv-gray">
          Roughly 8% of men and 0.5% of women globally suffer from Color Vision Deficiency (CVD), commonly referred to as color blindness. The most common variant is Protanopia/Deuteranopia, an inability to accurately distinguish between Red and Green hues. 
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          If a developer attempts to convey a critical system error by simply turning the text red (`#FF0000`) on a dark gray background (`#333333`), a user with severe Protanopia will perceive the red text as dark brown, and it will completely blend into the gray background, resulting in a disastrous user experience.
        </p>
        <p className="text-lg text-conv-gray">
          By utilizing a strict luminance-based contrast checker, developers mathematically bypass hue-based color blindness entirely. The WCAG algorithm only calculates the difference in pure light intensity (luminance). If the contrast ratio is 4.5:1, the text will be perfectly legible to a color-blind user because the text is physically emitting significantly more (or less) light than the background, regardless of what actual hues their brain perceives.
        </p>
      </section>

      <section id="dark-mode" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Contrast Pitfalls in Dark Mode Design</h2>
        <p className="mb-4 text-lg text-conv-gray">
          The rapid global adoption of Dark Mode user interfaces has introduced massive accessibility challenges. In a standard light theme, achieving high contrast is trivial: simply use black text on a white background (which yields the maximum possible 21:1 ratio). However, in dark mode, developers often make the catastrophic mistake of using pure white text (`#FFFFFF`) on a pure black background (`#000000`).
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          While 21:1 contrast is technically mathematically perfect, it causes "Halation"—an optical illusion where the blinding white text physically bleeds into the black background, causing extreme eye strain and astigmatism flares for many users.
        </p>
        <p className="text-lg text-conv-gray">
          Professional dark mode architecture requires utilizing a slightly muted off-white for text (e.g., `#E2E8F0`) against a dark slate background (e.g., `#0F172A`). Using our contrast calculator, developers can perfectly thread the needle: lowering the contrast enough to eliminate the harsh Halation bleeding effect, while strictly maintaining a ratio above 7.0:1 to guarantee AAA legal compliance.
        </p>
      </section>

      <section id="opacity-alpha" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">Handling CSS Opacity and Alpha Channels</h2>
        <p className="mb-4 text-lg text-conv-gray">
          Modern UI components like modal overlays, sticky navbars, and glassmorphic cards frequently utilize CSS alpha transparency (e.g., `background: rgba(255,255,255,0.8)`). Because automated auditing algorithms cannot physically render the final composited pixels on the screen, they will almost always flag transparent backgrounds with false-positive accessibility errors.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          To correctly audit a transparent element, a frontend engineer must utilize a digital color picker (like the macOS Digital Color Meter) to sample the exact final flattened RGB value generated by the browser's graphics engine. 
        </p>
        <p className="text-lg text-conv-gray">
          Once the flattened, solid Hex code is extracted, the engineer must manually drop it into our checker to calculate the true mathematical contrast ratio. This manual auditing step is absolutely critical when placing text over complex background imagery or moving video elements.
        </p>
      </section>

      <section id="seo-impact" className="pt-4">
        <h2 className="text-3xl font-bold text-conv-dark mb-4 tracking-tight">The Direct Impact of Accessibility on SEO</h2>
        <p className="mb-4 text-lg text-conv-gray">
          Many developers fail to realize that web accessibility and Search Engine Optimization (SEO) are inextricably linked. Google's incredibly powerful Core Web Vitals and Lighthouse indexing algorithms aggressively audit the DOM for WCAG compliance during the crawling process.
        </p>
        <p className="mb-4 text-lg text-conv-gray">
          If Google's crawler detects that your website's primary paragraphs utilize a low-contrast `#AAAAAA` gray text on a `#FFFFFF` background, the algorithm will mathematically flag the site as actively hostile to visually impaired users. This triggers a massive, algorithmic penalty to your Page Experience score.
        </p>
        <p className="text-lg text-conv-gray">
          A poor Page Experience score prevents your application from ranking on the first page of Google Search results, devastating your organic traffic and revenue. Utilizing our free WCAG contrast calculator is not just a moral obligation; it is a critical, high-ROI technical SEO strategy designed to maximize your application's search visibility and dominance.
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
