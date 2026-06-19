"use client";

import React from 'react';
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

export default function RelatedEncoderDecoderTools({ currentPath }) {
  const pathname = usePathname();
  const activePath = currentPath || pathname;
  
  // Filter out current path to only show related tools
  const relatedTools = ENCODER_DECODER_TOOLS.filter(tool => tool.link !== activePath);

  return (
    <div className="mt-16 bg-enc-white rounded-3xl shadow-xl border border-enc-gray/20 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-enc-dark mb-6">Explore Other Encoder & Decoder Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedTools.map((tool, index) => (
          <Link
            key={index}
            href={tool.link}
            className="group flex flex-col p-5 rounded-2xl border border-enc-gray/20 bg-enc-bg/30 hover:bg-enc-primary/5 hover:border-enc-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-enc-white shadow-sm flex items-center justify-center text-enc-primary group-hover:scale-110 group-hover:bg-enc-primary group-hover:text-enc-white transition-all duration-300">
                {tool.icon}
              </div>
              <h3 className="font-bold text-enc-dark text-lg group-hover:text-enc-primary transition-colors">
                {tool.title}
              </h3>
            </div>
            <p className="text-sm text-enc-gray leading-relaxed flex-grow">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
