'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Code, Minimize2, FileCode, Search, Database, FileJson, GitCompare, Sparkles,
  Shield, ShieldCheck, CheckCircle2, Globe, Clock, Layout, Braces,
  Settings2, Network, Layers, Table, Eraser, ChevronRight, FileSpreadsheet
} from 'lucide-react';

const allDeveloperTools = [
  { title: "HTML Formatter", link: "/tools/developer-tools/html-formatter", icon: Code, iconBg: "bg-orange-100 text-orange-600" },
  { title: "HTML Minifier", link: "/tools/developer-tools/html-minifier", icon: Minimize2, iconBg: "bg-red-100 text-red-600" },
  { title: "HTML Validator", link: "/tools/developer-tools/html-validator", icon: CheckCircle2, iconBg: "bg-green-100 text-green-600" },
  { title: "CSS Formatter", link: "/tools/developer-tools/css-formatter", icon: Layout, iconBg: "bg-blue-100 text-blue-600" },
  { title: "CSS Minifier", link: "/tools/developer-tools/css-minifier", icon: Minimize2, iconBg: "bg-indigo-100 text-indigo-600" },
  { title: "JavaScript Formatter", link: "/tools/developer-tools/js-formatter", icon: FileCode, iconBg: "bg-yellow-100 text-yellow-600" },
  { title: "JavaScript Minifier", link: "/tools/developer-tools/js-minifier", icon: Minimize2, iconBg: "bg-amber-100 text-amber-600" },
  { title: "JavaScript Obfuscator", link: "/tools/developer-tools/js-obfuscator", icon: Shield, iconBg: "bg-slate-100 text-slate-600" },
  { title: "Regex Tester", link: "/tools/developer-tools/regex-tester", icon: Search, iconBg: "bg-purple-100 text-purple-600" },
  { title: "SQL Formatter", link: "/tools/developer-tools/sql-formatter", icon: Database, iconBg: "bg-emerald-100 text-emerald-600" },
  { title: "XML Formatter", link: "/tools/developer-tools/xml-formatter", icon: FileJson, iconBg: "bg-teal-100 text-teal-600" },
  { title: "YAML Validator", link: "/tools/developer-tools/yaml-validator", icon: CheckCircle2, iconBg: "bg-cyan-100 text-cyan-600" },
  { title: "Code Diff Tool", link: "/tools/developer-tools/code-diff", icon: GitCompare, iconBg: "bg-rose-100 text-rose-600" },
  { title: "Code Beautifier", link: "/tools/developer-tools/code-beautifier", icon: Sparkles, iconBg: "bg-pink-100 text-pink-600" },
  { title: "API Tester", link: "/tools/developer-tools/api-tester", icon: Globe, iconBg: "bg-blue-100 text-blue-600" },
  { title: "Cron Generator", link: "/tools/developer-tools/cron-generator", icon: Clock, iconBg: "bg-orange-100 text-orange-600" },
  { title: "JSON Formatter", link: "/tools/developer-tools/json-formatter", icon: Code, iconBg: "bg-blue-100 text-blue-600" },
  { title: "JSON Minifier", link: "/tools/developer-tools/json-minifier", icon: Minimize2, iconBg: "bg-orange-100 text-orange-600" },
  { title: "JSON to XML", link: "/tools/developer-tools/json-xml", icon: FileCode, iconBg: "bg-indigo-100 text-indigo-600" },
  { title: "JSON to CSV", link: "/tools/developer-tools/json-csv", icon: FileSpreadsheet, iconBg: "bg-green-100 text-green-600" },
  { title: "JSON to YAML", link: "/tools/developer-tools/json-yaml", icon: Settings2, iconBg: "bg-purple-100 text-purple-600" }
];

export default function RelatedDeveloperTools(props) {
  const currentPath = props.currentToolPath || props.currentPath || "";
  const [tools, setTools] = useState([]);

  useEffect(() => {
    if (!currentPath) {
      setTools(allDeveloperTools);
      return;
    }
    // Filter out the current tool
    const filteredTools = allDeveloperTools.filter(tool => tool.link !== currentPath && !tool.link.includes(currentPath));
    setTools(filteredTools);
  }, [currentPath]);

  if (tools.length === 0) return null;

  return (
    <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Developer Tools</h3>
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