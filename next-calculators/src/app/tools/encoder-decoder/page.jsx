import Link from 'next/link';
import EncoderDecoderMainSeo from "@/components/tools/EncoderDecoderMainSeo";
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
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema, createFaqSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Encoder/Decoder Tools - Free Online Encoding & Decoding',
  description:
    'Free online encoder and decoder tools for Base64, URL, HTML, JWT, SHA-256, hex, and Bcrypt hashing. 100% private, client-side data transformation.',
  path: '/tools/encoder-decoder',
  keywords: ['base64 encoder', 'base64 decoder', 'url encoder', 'url decoder', 'jwt decoder', 'md5 generator', 'sha256 generator', 'hex encoder', 'binary encoder'],
});

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
    status: "active"
  },
  {
    title: "URL Decoder",
    description: "Decode URL-encoded strings back to readable format.",
    icon: <LinkIcon className="w-6 h-6" />,
    iconBg: "bg-teal-100 text-teal-600",
    link: "/tools/encoder-decoder/url-decoder",
    status: "active"
  },
  {
    title: "HTML Encoder",
    description: "Encode HTML characters to prevent XSS attacks in web applications.",
    icon: <FileCode className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/tools/encoder-decoder/html-encoder",
    status: "active"
  },
  {
    title: "HTML Decoder",
    description: "Decode HTML entities back to their original characters.",
    icon: <FileCode className="w-6 h-6" />,
    iconBg: "bg-amber-100 text-amber-600",
    link: "/tools/encoder-decoder/html-decoder",
    status: "active"
  },
  {
    title: "JWT Decoder",
    description: "Decode and verify JSON Web Tokens to inspect payload and claims.",
    icon: <Shield className="w-6 h-6" />,
    iconBg: "bg-rose-100 text-rose-600",
    link: "/tools/encoder-decoder/jwt-decoder",
    status: "active"
  },
  {
    title: "JWT Generator",
    description: "Generate signed JWT tokens with custom payload and claims.",
    icon: <Key className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    link: "/tools/encoder-decoder/jwt-generator",
    status: "active"
  },
  {
    title: "MD5 Hash Generator",
    description: "Generate MD5 hash for file integrity checks and data verification.",
    icon: <Fingerprint className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/tools/encoder-decoder/md5-hash-generator",
    status: "active"
  },
  {
    title: "SHA1 Hash Generator",
    description: "Generate SHA-1 hash for secure data verification and checksums.",
    icon: <Fingerprint className="w-6 h-6" />,
    iconBg: "bg-violet-100 text-violet-600",
    link: "/tools/encoder-decoder/sha1-hash-generator",
    status: "active"
  },
  {
    title: "SHA256 Hash Generator",
    description: "Generate SHA-256 hash for strong cryptographic security.",
    icon: <Fingerprint className="w-6 h-6" />,
    iconBg: "bg-fuchsia-100 text-fuchsia-600",
    link: "/tools/encoder-decoder/sha256-hash-generator",
    status: "active"
  },
  {
    title: "Bcrypt Hash Generator",
    description: "Generate bcrypt hashes for secure password storage and authentication.",
    icon: <Lock className="w-6 h-6" />,
    iconBg: "bg-red-100 text-red-600",
    link: "/tools/encoder-decoder/bcrypt-hash-generator",
    status: "active"
  },
  {
    title: "String Encoder",
    description: "Encode strings with various encoding schemes for data obfuscation.",
    icon: <FileText className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    link: "/tools/encoder-decoder/string-encoder",
    status: "active"
  },
  {
    title: "Unicode Encoder",
    description: "Convert text to Unicode escape sequences for JSON and JavaScript.",
    icon: <Globe className="w-6 h-6" />,
    iconBg: "bg-sky-100 text-sky-600",
    link: "/tools/encoder-decoder/unicode-encoder",
    status: "active"
  },
  {
    title: "Unicode Decoder",
    description: "Decode Unicode escape sequences back to readable text.",
    icon: <Globe className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/encoder-decoder/unicode-decoder",
    status: "active"
  },
  {
    title: "ROT13 Encoder",
    description: "Apply ROT13 cipher to encode text with simple letter rotation.",
    icon: <RefreshCw className="w-6 h-6" />,
    iconBg: "bg-lime-100 text-lime-600",
    link: "/tools/encoder-decoder/rot13-encoder",
    status: "active"
  },
  {
    title: "Hex Encoder",
    description: "Convert text to hexadecimal representation for debugging.",
    icon: <Hash className="w-6 h-6" />,
    iconBg: "bg-green-100 text-green-600",
    link: "/tools/encoder-decoder/hex-encoder",
    status: "active"
  },
  {
    title: "Hex Decoder",
    description: "Decode hexadecimal strings back to original text or binary.",
    icon: <Hash className="w-6 h-6" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    link: "/tools/encoder-decoder/hex-decoder",
    status: "active"
  },
  {
    title: "Binary Encoder",
    description: "Convert text to binary format for low-level data processing.",
    icon: <Binary className="w-6 h-6" />,
    iconBg: "bg-slate-100 text-slate-600",
    link: "/tools/encoder-decoder/binary-encoder",
    status: "active"
  },
  {
    title: "Binary Decoder",
    description: "Decode binary data back to readable text format.",
    icon: <Binary className="w-6 h-6" />,
    iconBg: "bg-gray-100 text-gray-600",
    link: "/tools/encoder-decoder/binary-decoder",
    status: "active"
  }
];


const softwareSchema = createSoftwareAppSchema({
  name: 'Encoder/Decoder Tools',
  description: 'Encode and decode Base64, URL, HTML, JWT, MD5, SHA, binary, hex, and more with our free online encoder/decoder tools. Fast, secure, and private browser-side processing.',
  path: '/tools/encoder-decoder',
  category: 'SoftwareApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Encoder/Decoder Tools', path: '/tools/encoder-decoder' }
]);

const faqSchema = createFaqSchema([
  {
    question: "What is the fundamental architectural difference between encoding, encryption, and hashing?",
    answer: "Encoding is a reversible, publicly standardized translation process (like Base64 or Hex) designed for data compatibility across text-based network protocols; it provides zero confidentiality. Encryption is a reversible mathematical operation requiring a secret cryptographic key (such as AES-256) designed to ensure strict data confidentiality. Hashing is a strictly one-way mathematical function (like SHA-256 or Bcrypt) that produces a fixed-length digital fingerprint designed for integrity verification and password derivation; it is mathematically impossible to reverse a hash back to its plaintext source."
  },
  {
    question: "Can a SHA-256 or MD5 cryptographic hash be reversed or decrypted?",
    answer: "No. Cryptographic hash functions are mathematically one-way compression algorithms. A hash function takes an input of arbitrary length (which could be a 10 GB file) and compresses it into a fixed-length digest (e.g., 256 bits for SHA-256). Because infinite potential messages map to finite hash states, original data is discarded during the compression rounds. A hash cannot be \"decrypted\"; you can only verify a candidate message by computing its hash and testing for an exact match."
  },
  {
    question: "Why does Base64 encoding increase binary file size by approximately 33.3%?",
    answer: "Base64 represents binary data using an alphabet of 64 printable ASCII characters. Because each Base64 character carries only 6 bits of information (2^6 = 64), encoding three 8-bit bytes (24 bits) requires four Base64 characters (4 × 6 = 24 bits). This mathematical 4/3 ratio causes an exact 33.3% increase in data volume, excluding optional MIME line breaks. This makes Base64 ideal for small inline SVG icons and data URIs, but suboptimal for large multi-megabyte media assets."
  },
  {
    question: "What is the difference between URL encoding and Base64URL encoding?",
    answer: "URL encoding (Percent-Encoding / RFC 3986) replaces reserved and non-ASCII characters with a percent symbol followed by their two-digit hexadecimal byte code (e.g., space becomes %20). Base64URL (RFC 4648 Section 5) is a modified variant of standard Base64 that substitutes the plus sign (+) with a hyphen (-) and the forward slash (/) with an underscore (_), while stripping trailing equal-sign (=) padding. This allows Base64 data to be safely embedded inside URL paths and JWT tokens without conflicting with URI delimiters."
  },
  {
    question: "How does HTML entity encoding prevent Cross-Site Scripting (XSS) attacks?",
    answer: "Cross-Site Scripting occurs when a browser interprets user-supplied input as executable HTML tags or JavaScript scripts. HTML entity encoding converts syntactic markup characters into inert character references (e.g., converting < into &lt; and > into &gt;). When the browser encounters these entities, it renders them visually as text glyphs on the screen without transitioning into an executable script tag parser state, completely neutralizing the attack vector."
  },
  {
    question: "Is the payload inside a JSON Web Token (JWT) private and encrypted?",
    answer: "No. A standard signed JWT (JWS / RFC 7515) is merely Base64URL encoded, not encrypted. Anyone who intercepts a JWT can paste it into the ToolsWizard JWT Decoder and read every single claim in plaintext (including user IDs, roles, and emails). The cryptographic signature guarantees data integrity and authenticity—proving the token was not tampered with—but provides zero confidentiality. Sensitive secrets must never be placed inside a standard JWT payload."
  },
  {
    question: "Why should developers never use MD5 or SHA-256 for storing user passwords?",
    answer: "MD5 and SHA-256 are general-purpose cryptographic hash functions engineered for high-throughput data integrity. Modern graphics cards (GPUs) can compute tens of billions of SHA-256 hashes per second. If an attacker acquires a database dump, they can rapidly crack millions of passwords using pre-computed Rainbow Tables and automated dictionary attacks. Passwords must be hashed using adaptive, slow key-derivation algorithms like Bcrypt, Argon2, or PBKDF2 that incorporate automatic salts and configurable work factors."
  },
  {
    question: "How does the Bcrypt work factor protect against brute-force GPU cracking?",
    answer: "Bcrypt features a configurable work factor parameter that executes 2^cost iterations of the Eksblowfish key expansion algorithm. A work factor of 12 executes 4,096 rounds, requiring roughly 250 to 350 milliseconds of CPU computation per password verification. This intentional computational cost is negligible for authenticating a single human user logging in, but completely cripples offline brute-force attacks, reducing an attacker's cracking throughput from billions of guesses per second down to just a few hundred."
  },
  {
    question: "Is it safe to decode private JWT tokens or generate hashes on ToolsWizard?",
    answer: "Yes, 100% safe. ToolsWizard operates on a pure zero-trust client-side architecture. All cryptographic hashing, Base64 encoding, URL percent-encoding, and JWT token parsing execute locally within your browser using the native Web Crypto API and V8 JavaScript engine. Your inputs, tokens, and credentials are never transmitted across external networks, stored in cloud databases, or logged on remote servers."
  },
  {
    question: "Are all ToolsWizard encoder and decoder utilities free for commercial engineering use?",
    answer: "Yes. All twenty encoder, decoder, hash generator, and cryptographic token utilities on ToolsWizard are completely free forever for developers, students, and enterprise organizations. There are no daily usage limits, no credit card requirements, no account registrations, and no tracking scripts. You can utilize all tools freely in commercial and production workflows without restriction."
  }
]);

export default function EncoderDecoderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <div className="min-h-screen bg-enc-bg font-sans text-enc-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-enc-primary to-enc-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-enc-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight">
            Encoder/Decoder Tools
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Encode and decode data in various formats with our secure, browser-side tools
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {encoderDecoderTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-enc-white rounded-2xl p-8 flex flex-col border border-enc-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 [&>svg]:w-5 [&>svg]:h-5 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-enc-dark mb-1 line-clamp-1">{tool.title}</h3>
                  <p className="text-enc-gray text-sm leading-relaxed line-clamp-2">
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

        <EncoderDecoderMainSeo />
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
  
    </>
  );
}
