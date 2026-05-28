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
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Design Tools - Color & Palette Utilities',
  description:
    'Free online design tools for color conversion, palette generation, contrast checking, and more. Fast, secure, and private browser-side design utilities.',
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
    status: "coming-soon"
  },
  {
    title: "Gradient Generator",
    description: "Create smooth color gradients with exportable CSS code.",
    icon: <Zap className="w-6 h-6" />,
    iconBg: "bg-green-100 text-green-600",
    link: "/tools/design/gradient-generator",
    status: "coming-soon"
  },
  {
    title: "Color Palette Generator",
    description: "Generate beautiful, harmonious color palettes automatically.",
    icon: <PaletteIcon className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/design/color-palette-generator",
    status: "coming-soon"
  },
  {
    title: "Contrast Checker",
    description: "Check WCAG contrast ratios for accessibility compliance.",
    icon: <Contrast className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/tools/design/contrast-checker",
    status: "coming-soon"
  },
  {
    title: "Color Converter",
    description: "Convert between RGB, HEX, HSL, and CMYK color formats.",
    icon: <Layers className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/tools/design/color-converter",
    status: "coming-soon"
  },
  {
    title: "CSS Color Generator",
    description: "Generate CSS color variables and custom property code.",
    icon: <Wand2 className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    link: "/tools/design/css-color-generator",
    status: "coming-soon"
  },
  {
    title: "Image Color Picker",
    description: "Extract dominant colors from uploaded images instantly.",
    icon: <Pipette className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    link: "/tools/design/image-color-picker",
    status: "coming-soon"
  },
  {
    title: "Random Color Generator",
    description: "Generate random colors with various customizable options.",
    icon: <Dice5 className="w-6 h-6" />,
    iconBg: "bg-rose-100 text-rose-600",
    link: "/tools/design/random-color-generator",
    status: "coming-soon"
  },
  {
    title: "Tailwind Color Picker",
    description: "Pick and copy official Tailwind CSS color codes effortlessly.",
    icon: <Eye className="w-6 h-6" />,
    iconBg: "bg-teal-100 text-teal-600",
    link: "/tools/design/tailwind-color-picker",
    status: "coming-soon"
  },
  {
    title: "Material Color Generator",
    description: "Generate complete Material Design color palette systems.",
    icon: <Palette className="w-6 h-6" />,
    iconBg: "bg-amber-100 text-amber-600",
    link: "/tools/design/material-color-generator",
    status: "coming-soon"
  },
  {
    title: "Color Mixer",
    description: "Mix multiple colors together to create new custom colors.",
    icon: <Droplets className="w-6 h-6" />,
    iconBg: "bg-violet-100 text-violet-600",
    link: "/tools/design/color-mixer",
    status: "coming-soon"
  },
  {
    title: "Opacity Calculator",
    description: "Calculate and convert color opacity and transparency values.",
    icon: <Eye className="w-6 h-6" />,
    iconBg: "bg-slate-100 text-slate-600",
    link: "/tools/design/opacity-calculator",
    status: "coming-soon"
  }
];

export default function DesignToolsPage() {
  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            Design Tools
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional color conversion, palette generation, and design utilities for creators and developers
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-conv-white rounded-2xl p-8 flex flex-col border border-conv-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-conv-dark mb-1">{tool.title}</h3>
                  <p className="text-conv-gray text-sm leading-relaxed">
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

        {/* SEO Article Section */}
        <div className="mt-24 pt-16 border-t border-conv-gray">
          <h2 className="text-3xl font-bold text-conv-dark mb-6">About Design Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-conv-gray leading-relaxed">
            <div>
              <p className="mb-4">
                <strong>Design Tools</strong> are essential utilities for modern web designers, UI/UX professionals, and developers. Whether you need to convert color formats for CSS, generate accessible color palettes, or extract colors from images, ToolsWizard provides comprehensive design utilities that streamline your workflow and save valuable time.
              </p>
              <p>
                Our color tools support all major formats including RGB, HEX, HSL, and CMYK. Convert between formats instantly, check accessibility compliance, and generate beautiful palettes that work harmoniously with your design systems. Whether you're building a personal project or enterprise application, our tools scale to meet your needs.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Every tool is designed with privacy and speed in mind. All color calculations, conversions, and palette generation happen instantly in your browser—your design data never leaves your device. No accounts, no limits, no subscriptions—just powerful design utilities available whenever you need them.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><Palette size={16} className="text-pink-600"/> <strong>Comprehensive:</strong> Support for RGB, HEX, HSL, CMYK, and more.</li>
                <li className="flex items-center gap-2"><Palette size={16} className="text-pink-600"/> <strong>Accessible:</strong> WCAG contrast checking and compliance tools.</li>
                <li className="flex items-center gap-2"><Palette size={16} className="text-pink-600"/> <strong>Fast & Private:</strong> 100% browser-based, zero data storage.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Breadcrumbs */}
      <footer className="bg-conv-white border-t border-conv-gray py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-conv-gray">
          <Link href="/" className="hover:text-conv-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-conv-dark font-medium">Design Tools</span>
        </div>
      </footer>
    </div>
  );
}