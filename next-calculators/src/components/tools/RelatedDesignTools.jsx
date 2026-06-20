import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Palette, Droplets, Zap, Eye, Palette as PaletteIcon, Wand2, Pipette, Dice5, Wind, Layers, Contrast
} from 'lucide-react';

const designTools = [
  {
    title: "RGB to Hex",
    description: "Convert RGB color values to hexadecimal format instantly.",
    icon: <Droplets className="w-5 h-5" />,
    iconBg: "bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white",
    link: "/tools/design/rgb-hex"
  },
  {
    title: "HSL to Hex",
    description: "Convert HSL color values to hexadecimal format for web design.",
    icon: <Palette className="w-5 h-5" />,
    iconBg: "bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
    link: "/tools/design/hsl-hex"
  },
  {
    title: "Hex to HSL",
    description: "Transform hexadecimal color codes into HSL representation.",
    icon: <Wind className="w-5 h-5" />,
    iconBg: "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white",
    link: "/tools/design/hex-to-hsl"
  },
  {
    title: "Gradient Generator",
    description: "Create smooth color gradients with exportable CSS code.",
    icon: <Zap className="w-5 h-5" />,
    iconBg: "bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white",
    link: "/tools/design/gradient-generator"
  },
  {
    title: "Color Palette Generator",
    description: "Generate beautiful, harmonious color palettes automatically.",
    icon: <PaletteIcon className="w-5 h-5" />,
    iconBg: "bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white",
    link: "/tools/design/color-palette-generator"
  },
  {
    title: "Contrast Checker",
    description: "Check WCAG contrast ratios for accessibility compliance.",
    icon: <Contrast className="w-5 h-5" />,
    iconBg: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white",
    link: "/tools/design/contrast-checker"
  },
  {
    title: "Color Converter",
    description: "Convert between RGB, HEX, HSL, and CMYK color formats.",
    icon: <Layers className="w-5 h-5" />,
    iconBg: "bg-purple-100 text-purple-600 group-hover:bg-purple-500 group-hover:text-white",
    link: "/tools/design/color-converter"
  },
  {
    title: "CSS Color Generator",
    description: "Generate CSS color variables and custom property code.",
    icon: <Wand2 className="w-5 h-5" />,
    iconBg: "bg-pink-100 text-pink-600 group-hover:bg-pink-500 group-hover:text-white",
    link: "/tools/design/css-color-generator"
  },
  {
    title: "Image Color Picker",
    description: "Extract dominant colors from uploaded images instantly.",
    icon: <Pipette className="w-5 h-5" />,
    iconBg: "bg-cyan-100 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white",
    link: "/tools/design/image-color-picker"
  },
  {
    title: "Random Color Generator",
    description: "Generate random colors with various customizable options.",
    icon: <Dice5 className="w-5 h-5" />,
    iconBg: "bg-rose-100 text-rose-600 group-hover:bg-rose-500 group-hover:text-white",
    link: "/tools/design/random-color-generator"
  },
  {
    title: "Tailwind Color Picker",
    description: "Pick and copy official Tailwind CSS color codes effortlessly.",
    icon: <Eye className="w-5 h-5" />,
    iconBg: "bg-teal-100 text-teal-600 group-hover:bg-teal-500 group-hover:text-white",
    link: "/tools/design/tailwind-color-picker"
  },
  {
    title: "Material Color Generator",
    description: "Generate complete Material Design color palette systems.",
    icon: <Palette className="w-5 h-5" />,
    iconBg: "bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    link: "/tools/design/material-color-generator"
  },
  {
    title: "Color Mixer",
    description: "Mix multiple colors together to create new custom colors.",
    icon: <Droplets className="w-5 h-5" />,
    iconBg: "bg-violet-100 text-violet-600 group-hover:bg-violet-500 group-hover:text-white",
    link: "/tools/design/color-mixer"
  },
  {
    title: "Opacity Calculator",
    description: "Calculate and convert color opacity and transparency values.",
    icon: <Eye className="w-5 h-5" />,
    iconBg: "bg-slate-100 text-slate-600 group-hover:bg-slate-500 group-hover:text-white",
    link: "/tools/design/opacity-calculator"
  }
];

export default function RelatedDesignTools(props) {
  const currentPath = props.currentToolPath || props.currentPath || "";
  const [tools, setTools] = useState([]);

  useEffect(() => {
    if (!currentPath) {
      setTools(designTools);
      return;
    }
    // Filter out the current tool
    const filteredTools = designTools.filter(tool => tool.link !== currentPath && !tool.link.includes(currentPath));
    setTools(filteredTools);
  }, [currentPath]);

  if (tools.length === 0) return null;

  return (
    <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Design Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          
          return (
            <Link
              key={index}
              href={tool.link}
              className="group flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 shadow-sm bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-gray-50 text-gray-500 group-hover:text-black group-hover:bg-gray-200">
                {React.isValidElement(tool.icon) ? tool.icon : <Icon size={20} />}
              </div>
              <span className="font-bold text-sm line-clamp-1 text-gray-700 group-hover:text-black">
                {tool.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}