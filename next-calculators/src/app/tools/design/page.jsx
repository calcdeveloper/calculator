import React from 'react';
import Link from 'next/link';
import { 
  Palette,
  Droplets,
  Zap,
  Eye,
  Palette as PaletteIcon,
  Wand2,
  Pipette,
  Dice5,
  Wind,
  Layers,
  ChevronRight,
  Contrast
} from 'lucide-react';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema, createFaqSchema } from '@/utils/seo';
import DesignHubSeo from '@/components/tools/DesignHubSeo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Design Tools - Free Color, Palette & Contrast Utilities',
  description:
    'Free online design tools for color conversion, palette generation, WCAG contrast checking, and CSS generators. 100% private, client-side design utilities.',
  path: '/tools/design',
  keywords: ['rgb to hex', 'color converter', 'palette generator', 'contrast checker', 'color picker', 'gradient generator'],
});

const designTools = [
  {
    title: "RGB to Hex",
    description: "Convert RGB color values to hexadecimal format instantly.",
    icon: <Droplets className="w-6 h-6" />,
    iconBg: "bg-red-100 text-red-600",
    link: "/tools/design/rgb-hex",
    status: "active"
  },
  {
    title: "HSL to Hex",
    description: "Convert HSL color values to hexadecimal format for web design.",
    icon: <Palette className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/tools/design/hsl-hex",
    status: "active"
  },
  {
    title: "Hex to HSL",
    description: "Transform hexadecimal color codes into HSL representation.",
    icon: <Wind className="w-6 h-6" />,
    iconBg: "bg-yellow-100 text-yellow-600",
    link: "/tools/design/hex-to-hsl",
    status: "active"
  },
  {
    title: "Gradient Generator",
    description: "Create smooth color gradients with exportable CSS code.",
    icon: <Zap className="w-6 h-6" />,
    iconBg: "bg-green-100 text-green-600",
    link: "/tools/design/gradient-generator",
    status: "active"
  },
  {
    title: "Color Palette Generator",
    description: "Generate beautiful, harmonious color palettes automatically.",
    icon: <PaletteIcon className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/design/color-palette-generator",
    status: "active"
  },
  {
    title: "Contrast Checker",
    description: "Check WCAG contrast ratios for accessibility compliance.",
    icon: <Contrast className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/tools/design/contrast-checker",
    status: "active"
  },
  {
    title: "Color Converter",
    description: "Convert between RGB, HEX, HSL, and CMYK color formats.",
    icon: <Layers className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/tools/design/color-converter",
    status: "active"
  },
  {
    title: "CSS Color Generator",
    description: "Generate CSS color variables and custom property code.",
    icon: <Wand2 className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    link: "/tools/design/css-color-generator",
    status: "active"
  },
  {
    title: "Image Color Picker",
    description: "Extract dominant colors from uploaded images instantly.",
    icon: <Pipette className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    link: "/tools/design/image-color-picker",
    status: "active"
  },
  {
    title: "Random Color Generator",
    description: "Generate random colors with various customizable options.",
    icon: <Dice5 className="w-6 h-6" />,
    iconBg: "bg-rose-100 text-rose-600",
    link: "/tools/design/random-color-generator",
    status: "active"
  },
  {
    title: "Tailwind Color Picker",
    description: "Pick and copy official Tailwind CSS color codes effortlessly.",
    icon: <Eye className="w-6 h-6" />,
    iconBg: "bg-teal-100 text-teal-600",
    link: "/tools/design/tailwind-color-picker",
    status: "active"
  },
  {
    title: "Material Color Generator",
    description: "Generate complete Material Design color palette systems.",
    icon: <Palette className="w-6 h-6" />,
    iconBg: "bg-amber-100 text-amber-600",
    link: "/tools/design/material-color-generator",
    status: "active"
  },
  {
    title: "Color Mixer",
    description: "Mix multiple colors together to create new custom colors.",
    icon: <Droplets className="w-6 h-6" />,
    iconBg: "bg-violet-100 text-violet-600",
    link: "/tools/design/color-mixer",
    status: "active"
  },
  {
    title: "Opacity Calculator",
    description: "Calculate and convert color opacity and transparency values.",
    icon: <Eye className="w-6 h-6" />,
    iconBg: "bg-slate-100 text-slate-600",
    link: "/tools/design/opacity-calculator",
    status: "active"
  }
];


const softwareSchema = createSoftwareAppSchema({
  name: 'Design Tools',
  description: 'Free online design tools for color conversion, palette generation, WCAG contrast checking, and CSS generators. 100% private, client-side design utilities.',
  path: '/tools/design',
  category: 'SoftwareApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' }
]);

const faqSchema = createFaqSchema([
  {
    question: "What is the fundamental difference between RGB, HEX, HSL, and CMYK color models?",
    answer: "RGB (Red, Green, Blue) is an additive model used by hardware displays to emit photons across 24-bit channels (0 to 255). HEX is a 6-character hexadecimal representation of those exact three byte values, serving as the universal standard for CSS code. HSL (Hue, Saturation, Lightness) maps RGB values into cylindrical coordinates, making it intuitive for humans to tweak shades and tints. CMYK (Cyan, Magenta, Yellow, Black) is a subtractive model used in physical commercial printing that measures ink absorption against reflective paper."
  },
  {
    question: "Why does pure blue appear much darker than pure yellow in HSL when both have 50% lightness?",
    answer: "HSL defines 'Lightness' as an arbitrary mathematical average of the maximum and minimum RGB channel values, completely ignoring human biology. In the human retina, green and red cone receptors outnumber blue receptors dramatically; our eyes are over seven times more sensitive to green wavelengths (555 nm) than blue wavelengths (420 nm). Pure yellow combines full red and full green light, producing immense perceived luminance, while pure blue stimulates only the scarce S-cones. Modern color models like OKLCH resolve this flaw by modeling true human perceptual lightness."
  },
  {
    question: "How does the Web Content Accessibility Guidelines (WCAG) calculate contrast ratio?",
    answer: "WCAG contrast calculation begins by converting non-linear 8-bit sRGB color channels into linear radiometric values via gamma expansion. It computes Relative Luminance (L) using photopic weighting coefficients: L = 0.2126 × R + 0.7152 × G + 0.0722 × B. The contrast ratio between two colors is then calculated as (L1 + 0.05) / (L2 + 0.05), where L1 is the lighter color and L2 is the darker color. The constant +0.05 represents ambient display reflection."
  },
  {
    question: "What are the legal compliance risks of failing WCAG color contrast standards?",
    answer: "In the United States, Title III of the Americans with Disabilities Act (ADA) has resulted in thousands of federal lawsuits against commercial websites with inaccessible low-contrast text. In the European Union, the European Accessibility Act (EAA) enforces strict civil penalties for non-compliant e-commerce and banking portals. Passing WCAG 2.1 Level AA contrast standards (minimum 4.5:1 for body copy and 3.0:1 for large text and UI components) is a mandatory enterprise legal requirement."
  },
  {
    question: "How does the OKLCH color space revolutionize modern CSS and web design?",
    answer: "OKLCH is a perceptually uniform color space introduced in CSS Color Module Level 4. Unlike HSL, a given lightness value in OKLCH delivers identical perceived brightness across every single hue angle. Furthermore, OKLCH eliminates the Abney Effect (hue drift when saturation changes) and supports wide-gamut Display P3 hardware without artificial boundaries, allowing developers to craft accessible, mathematically consistent color systems across high-end screens."
  },
  {
    question: "How can developers configure custom brand colors in Tailwind CSS while preserving opacity modifier classes?",
    answer: "If you define a custom color in tailwind.config.js as a raw hex string, Tailwind cannot inject its dynamic slash opacity modifiers (e.g., bg-brand/50). To preserve opacity support, define your color in CSS as space-separated RGB channel integers (e.g., --color-brand: 236 72 153;) and reference it in your Tailwind config using the <alpha-value> placeholder: 'rgb(var(--color-brand) / <alpha-value>)'."
  },
  {
    question: "Is it secure to upload proprietary brand photos or client screenshots to the Image Color Picker?",
    answer: "Yes, 100% secure. ToolsWizard operates on a pure zero-trust client-side architecture. When you upload an image to the Image Color Picker, the file is read into volatile browser RAM via the HTML5 FileReader API and rendered onto an in-memory HTML5 Canvas element. The pixel scanning and color quantization execute entirely on your computer's local CPU without sending any network requests or persisting data on remote cloud servers."
  },
  {
    question: "What mathematical algorithm is used to extract dominant color palettes from an image?",
    answer: "Our Image Color Picker utilizes the Median Cut Color Quantization algorithm. It treats all pixels in an image as a 3D point cloud in RGB color space. The algorithm identifies the color channel with the greatest statistical variance, sorts the pixels along that axis, and splits them at the median into two sub-cubes. This process repeats recursively until the target number of palette boxes is formed, with each box's centroid representing a dominant harmonious swatch."
  },
  {
    question: "How does display hardware gamut (sRGB vs. Display P3) affect color rendering on modern screens?",
    answer: "A color gamut defines the complete range of colors a physical display can emit. The legacy sRGB standard covers roughly 35.9% of the visible spectrum. Apple Display P3 and DCI-P3 cover about 45.5% of the spectrum—a 25% larger color volume—yielding significantly richer, more luminous greens and reds. When wide-gamut colors are displayed on older sRGB monitors, color management engines must clip or compress out-of-gamut shades to prevent harsh distortion."
  },
  {
    question: "Are all ToolsWizard design and color utilities free for commercial and enterprise production use?",
    answer: "Yes. All fourteen design tools, palette generators, contrast checkers, and color space converters on ToolsWizard are 100% free for individual designers, engineering teams, and enterprise organizations. There are no daily usage limits, no credit card requirements, no paywalled features, and no tracking scripts. You can utilize all generated CSS, Tailwind configurations, and color tokens freely in proprietary and commercial projects."
  }
]);

export default function DesignToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            Design Tools
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional color conversion, palette generation, and design utilities for creators and developers
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-conv-white rounded-2xl p-8 flex flex-col border border-conv-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 [&>svg]:w-5 [&>svg]:h-5 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-conv-dark mb-1 line-clamp-1">{tool.title}</h3>
                  <p className="text-conv-gray text-sm leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                </div>
              </div>

              {tool.status === "active" ? (
                <Link 
                  href={tool.link}
                  className="mt-auto w-full bg-pink-600 hover:bg-pink-700 text-conv-white text-center py-3 rounded-lg font-bold transition-colors shadow-sm"
                >
                  Use Tool
                </Link>
              ) : (
                <button 
                  disabled
                  className="mt-auto w-full bg-conv-gray/20 text-conv-gray text-center py-3 rounded-lg font-bold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Comprehensive SEO Content */}
        <DesignHubSeo />
      </main>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-conv-white border-t border-conv-gray py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-conv-gray">
          <Link href="/" className="hover:text-conv-dark">Home</Link>
          <ChevronRight size={14} />
          <Link href="/tools" className="hover:text-conv-dark">Tools</Link>
          <ChevronRight size={14} />
          <span className="text-conv-dark font-medium">Design Tools</span>
        </div>
      </nav>
    </div>
  
    </>
  );
}