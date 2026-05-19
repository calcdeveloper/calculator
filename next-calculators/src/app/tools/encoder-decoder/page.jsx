import Link from 'next/link';
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
  Cpu, 
  ChevronRight,
  Fingerprint,
  Braces,
  ArrowRightLeft
} from 'lucide-react';

export const dynamic = "force-static";

export const metadata = {
  title: 'Encoder/Decoder Tools - Free Online Encoding & Decoding | ToolsWizard',
  description: 'Encode and decode Base64, URL, HTML, JWT, MD5, SHA, binary, hex, and more with our free online encoder/decoder tools. Fast, secure, and private browser-side processing.',
  keywords: ['base64 encoder', 'base64 decoder', 'url encoder', 'url decoder', 'jwt decoder', 'md5 generator', 'sha256 generator', 'hex encoder', 'binary encoder'],
};

const encoderDecoderTools = [
  {
    title: "Base64 Encoder",
    description: "Convert text or binary data to Base64 format for safe transmission.",
    icon: <Code className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/encoder-decoder/base64-encoder",
    status: "active"
  },
  {
    title: "Base64 Decoder",
    description: "Decode Base64 strings back to original text or binary data.",
    icon: <Code className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/tools/encoder-decoder/base64-decoder",
    status: "active"
  },
  {
    title: "URL Encoder",
    description: "Encode URLs to make them safe for transmission in web requests.",
    icon: <LinkIcon className="w-6 h-6" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    link: "/tools/encoder-decoder/url-encoder",
    status: "coming-soon"
  },
  {
    title: "URL Decoder",
    description: "Decode URL-encoded strings back to readable format.",
    icon: <LinkIcon className="w-6 h-6" />,
    iconBg: "bg-teal-100 text-teal-600",
    link: "/tools/encoder-decoder/url-decoder",
    status: "coming-soon"
  },
  {
    title: "HTML Encoder",
    description: "Encode HTML characters to prevent XSS attacks in web applications.",
    icon: <FileCode className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/tools/encoder-decoder/html-encoder",
    status: "coming-soon"
  },
  {
    title: "HTML Decoder",
    description: "Decode HTML entities back to their original characters.",
    icon: <FileCode className="w-6 h-6" />,
    iconBg: "bg-amber-100 text-amber-600",
    link: "/tools/encoder-decoder/html-decoder",
    status: "coming-soon"
  },
  {
    title: "JWT Decoder",
    description: "Decode and verify JSON Web Tokens to inspect payload and claims.",
    icon: <Shield className="w-6 h-6" />,
    iconBg: "bg-rose-100 text-rose-600",
    link: "/tools/encoder-decoder/jwt-decoder",
    status: "coming-soon"
  },
  {
    title: "JWT Generator",
    description: "Generate signed JWT tokens with custom payload and claims.",
    icon: <Key className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    link: "/tools/encoder-decoder/jwt-generator",
    status: "coming-soon"
  },
  {
    title: "MD5 Hash Generator",
    description: "Generate MD5 hash for file integrity checks and data verification.",
    icon: <Fingerprint className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/tools/encoder-decoder/md5-generator",
    status: "coming-soon"
  },
  {
    title: "SHA1 Hash Generator",
    description: "Generate SHA-1 hash for secure data verification and checksums.",
    icon: <Fingerprint className="w-6 h-6" />,
    iconBg: "bg-violet-100 text-violet-600",
    link: "/tools/encoder-decoder/sha1-generator",
    status: "coming-soon"
  },
  {
    title: "SHA256 Hash Generator",
    description: "Generate SHA-256 hash for strong cryptographic security.",
    icon: <Fingerprint className="w-6 h-6" />,
    iconBg: "bg-fuchsia-100 text-fuchsia-600",
    link: "/tools/encoder-decoder/sha256-generator",
    status: "coming-soon"
  },
  {
    title: "Bcrypt Hash Generator",
    description: "Generate bcrypt hashes for secure password storage and authentication.",
    icon: <Lock className="w-6 h-6" />,
    iconBg: "bg-red-100 text-red-600",
    link: "/tools/encoder-decoder/bcrypt-generator",
    status: "coming-soon"
  },
  {
    title: "String Encoder",
    description: "Encode strings with various encoding schemes for data obfuscation.",
    icon: <FileText className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    link: "/tools/encoder-decoder/string-encoder",
    status: "coming-soon"
  },
  {
    title: "Unicode Encoder",
    description: "Convert text to Unicode escape sequences for JSON and JavaScript.",
    icon: <Globe className="w-6 h-6" />,
    iconBg: "bg-sky-100 text-sky-600",
    link: "/tools/encoder-decoder/unicode-encoder",
    status: "coming-soon"
  },
  {
    title: "Unicode Decoder",
    description: "Decode Unicode escape sequences back to readable text.",
    icon: <Globe className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/encoder-decoder/unicode-decoder",
    status: "coming-soon"
  },
  {
    title: "ROT13 Encoder",
    description: "Apply ROT13 cipher to encode text with simple letter rotation.",
    icon: <RefreshCw className="w-6 h-6" />,
    iconBg: "bg-lime-100 text-lime-600",
    link: "/tools/encoder-decoder/rot13-encoder",
    status: "coming-soon"
  },
  {
    title: "Hex Encoder",
    description: "Convert text to hexadecimal representation for debugging.",
    icon: <Hash className="w-6 h-6" />,
    iconBg: "bg-green-100 text-green-600",
    link: "/tools/encoder-decoder/hex-encoder",
    status: "coming-soon"
  },
  {
    title: "Hex Decoder",
    description: "Decode hexadecimal strings back to original text or binary.",
    icon: <Hash className="w-6 h-6" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    link: "/tools/encoder-decoder/hex-decoder",
    status: "coming-soon"
  },
  {
    title: "Binary Encoder",
    description: "Convert text to binary format for low-level data processing.",
    icon: <Binary className="w-6 h-6" />,
    iconBg: "bg-slate-100 text-slate-600",
    link: "/tools/encoder-decoder/binary-encoder",
    status: "coming-soon"
  },
  {
    title: "Binary Decoder",
    description: "Decode binary data back to readable text format.",
    icon: <Binary className="w-6 h-6" />,
    iconBg: "bg-gray-100 text-gray-600",
    link: "/tools/encoder-decoder/binary-decoder",
    status: "coming-soon"
  }
];

export default function EncoderDecoderPage() {
  return (
    <div className="min-h-screen bg-enc-bg font-sans text-enc-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-enc-primary to-enc-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-enc-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight">
            Encoder/Decoder Tools
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Encode and decode data in various formats with our secure, browser-side tools
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {encoderDecoderTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-enc-white rounded-2xl p-8 flex flex-col border border-enc-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-enc-dark mb-1">{tool.title}</h3>
                  <p className="text-enc-gray text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>

              {tool.status === "active" ? (
                <Link 
                  href={tool.link}
                  className="mt-auto w-full bg-enc-primary hover:bg-enc-primaryDark text-enc-white text-center py-3 rounded-lg font-bold transition-colors shadow-sm"
                >
                  Use Tool
                </Link>
              ) : (
                <button 
                  disabled
                  className="mt-auto w-full bg-enc-gray/20 text-enc-gray text-center py-3 rounded-lg font-bold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        {/* SEO & About Section */}
        <div className="mt-24 pt-16 border-t border-enc-gray">
          <h2 className="text-3xl font-bold text-enc-dark mb-6">About Encoder/Decoder Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-enc-gray leading-relaxed">
            <div>
              <p className="mb-4">
                Our encoder/decoder tools provide instant data transformation for developers, security professionals, and data analysts. Whether you need to <strong>encode Base64</strong> for API requests, <strong>decode JWT tokens</strong> for debugging, or <strong>generate cryptographic hashes</strong> for verification, our tools deliver results in milliseconds.
              </p>
              <p>
                All operations happen entirely in your browser, ensuring your sensitive data never leaves your device. This makes our tools perfect for processing <strong>passwords</strong>, <strong>API keys</strong>, <strong>personal information</strong>, and other confidential data without privacy concerns.
              </p>
            </div>
            <div>
              <p className="mb-4">
                From simple text encoding to complex cryptographic operations, our suite covers all common encoding and decoding needs. Use our <strong>URL encoder</strong> to prepare data for web requests, or our <strong>HTML encoder</strong> to prevent XSS vulnerabilities in your applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><ArrowRightLeft size={16} className="text-enc-primary"/> <strong>Fast:</strong> Instant processing without delay</li>
                <li className="flex items-center gap-2"><ArrowRightLeft size={16} className="text-enc-primary"/> <strong>Secure:</strong> Browser-side processing only</li>
                <li className="flex items-center gap-2"><ArrowRightLeft size={16} className="text-enc-primary"/> <strong>Private:</strong> Zero server-side data storage</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Breadcrumb Navigation for SEO */}
      <footer className="bg-enc-white border-t border-enc-gray py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-enc-gray">
          <Link href="/" className="hover:text-enc-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-enc-dark font-medium">Encoder/Decoder</span>
        </div>
      </footer>
    </div>
  );
}
