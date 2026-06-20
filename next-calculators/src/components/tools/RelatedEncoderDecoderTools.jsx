"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Key, 
  Link as LinkIcon, 
  Code, 
  FileCode, 
  Hash, 
  Shield, 
  Lock, 
  FileText, 
  Globe, 
  RefreshCw, 
  Binary,
  ChevronRight
} from 'lucide-react';

const ENCODER_DECODER_TOOLS = [
  {
    title: "Base64 Encoder",
    description: "Convert text or binary data to Base64 format for safe transmission.",
    icon: <Code className="w-6 h-6" />,
    link: "/tools/encoder-decoder/base64-encoder",
  },
  {
    title: "Base64 Decoder",
    description: "Decode Base64 strings back to original text or binary data.",
    icon: <Code className="w-6 h-6" />,
    link: "/tools/encoder-decoder/base64-decoder",
  },
  {
    title: "URL Encoder",
    description: "Encode URLs to make them safe for transmission in web requests.",
    icon: <LinkIcon className="w-6 h-6" />,
    link: "/tools/encoder-decoder/url-encoder",
  },
  {
    title: "URL Decoder",
    description: "Decode URL-encoded strings back to readable format.",
    icon: <LinkIcon className="w-6 h-6" />,
    link: "/tools/encoder-decoder/url-decoder",
  },
  {
    title: "HTML Encoder",
    description: "Encode HTML characters to prevent XSS attacks in web applications.",
    icon: <FileCode className="w-6 h-6" />,
    link: "/tools/encoder-decoder/html-encoder",
  },
  {
    title: "HTML Decoder",
    description: "Decode HTML entities back to their original characters.",
    icon: <FileCode className="w-6 h-6" />,
    link: "/tools/encoder-decoder/html-decoder",
  },
  {
    title: "JWT Decoder",
    description: "Decode and verify JSON Web Tokens to inspect payload and claims.",
    icon: <Shield className="w-6 h-6" />,
    link: "/tools/encoder-decoder/jwt-decoder",
  },
  {
    title: "JWT Generator",
    description: "Generate signed JWT tokens with custom payload and claims.",
    icon: <Key className="w-6 h-6" />,
    link: "/tools/encoder-decoder/jwt-generator",
  },
  {
    title: "MD5 Hash Generator",
    description: "Generate MD5 hash for file integrity checks and data verification.",
    icon: <Hash className="w-6 h-6" />,
    link: "/tools/encoder-decoder/md5-hash-generator",
  },
  {
    title: "SHA1 Hash Generator",
    description: "Generate SHA-1 hash for secure data verification and checksums.",
    icon: <Hash className="w-6 h-6" />,
    link: "/tools/encoder-decoder/sha1-hash-generator",
  },
  {
    title: "SHA256 Hash Generator",
    description: "Generate SHA-256 hash for strong cryptographic security.",
    icon: <Hash className="w-6 h-6" />,
    link: "/tools/encoder-decoder/sha256-hash-generator",
  },
  {
    title: "Bcrypt Hash Generator",
    description: "Generate bcrypt hashes for secure password storage and authentication.",
    icon: <Lock className="w-6 h-6" />,
    link: "/tools/encoder-decoder/bcrypt-hash-generator",
  },
  {
    title: "String Encoder",
    description: "Encode strings with various encoding schemes for data obfuscation.",
    icon: <FileText className="w-6 h-6" />,
    link: "/tools/encoder-decoder/string-encoder",
  },
  {
    title: "Unicode Encoder",
    description: "Convert text to Unicode escape sequences for JSON and JavaScript.",
    icon: <Globe className="w-6 h-6" />,
    link: "/tools/encoder-decoder/unicode-encoder",
  },
  {
    title: "Unicode Decoder",
    description: "Decode Unicode escape sequences back to readable text.",
    icon: <Globe className="w-6 h-6" />,
    link: "/tools/encoder-decoder/unicode-decoder",
  },
  {
    title: "ROT13 Encoder",
    description: "Apply ROT13 cipher to encode text with simple letter rotation.",
    icon: <RefreshCw className="w-6 h-6" />,
    link: "/tools/encoder-decoder/rot13-encoder",
  },
  {
    title: "Hex Encoder",
    description: "Convert text to hexadecimal representation for debugging.",
    icon: <Hash className="w-6 h-6" />,
    link: "/tools/encoder-decoder/hex-encoder",
  },
  {
    title: "Hex Decoder",
    description: "Decode hexadecimal strings back to original text or binary.",
    icon: <Hash className="w-6 h-6" />,
    link: "/tools/encoder-decoder/hex-decoder",
  },
  {
    title: "Binary Encoder",
    description: "Convert text to binary format for low-level data processing.",
    icon: <Binary className="w-6 h-6" />,
    link: "/tools/encoder-decoder/binary-encoder",
  },
  {
    title: "Binary Decoder",
    description: "Decode binary data back to readable text format.",
    icon: <Binary className="w-6 h-6" />,
    link: "/tools/encoder-decoder/binary-decoder",
  }
];

export default function RelatedEncoderDecoderTools(props) {
  const currentPath = props.currentToolPath || props.currentPath || "";
  const [tools, setTools] = useState([]);

  useEffect(() => {
    if (!currentPath) {
      setTools(ENCODER_DECODER_TOOLS);
      return;
    }
    // Filter out the current tool
    const filteredTools = ENCODER_DECODER_TOOLS.filter(tool => tool.link !== currentPath && !tool.link.includes(currentPath));
    setTools(filteredTools);
  }, [currentPath]);

  if (tools.length === 0) return null;

  return (
    <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Encoder Decoder Tools</h3>
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