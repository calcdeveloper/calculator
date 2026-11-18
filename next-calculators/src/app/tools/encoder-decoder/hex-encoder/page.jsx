import HexEncoderClient from './HexEncoderClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Hex Encoder - Convert Text & Binary to Hexadecimal Online',
  description:
    'Convert text, ASCII, and binary strings to hexadecimal (Base16) online. Fast, secure client-side hex encoder with custom delimiters and byte formatting.',
  path: '/tools/encoder-decoder/hex-encoder',
  keywords: [
    'hex encoder',
    'text to hex',
    'convert string to hexadecimal',
    'base16 encoder',
    'hexadecimal converter',
    'ascii to hex',
    'utf-8 to hex',
    'hex byte generator',
    'online hex tool'
  ],
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Hexadecimal Encoder',
  description:
    'Convert text, ASCII, and binary strings to hexadecimal (Base16) online. Fast, secure client-side hex encoder with custom delimiters and byte formatting.',
  path: '/tools/encoder-decoder/hex-encoder',
  category: 'DeveloperApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Encoder & Decoder', path: '/tools/encoder-decoder' },
  { name: 'Hex Encoder', path: '/tools/encoder-decoder/hex-encoder' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Hexadecimal (Base16) encoding and how does it represent digital data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hexadecimal is a base-16 positional numeral system that utilizes sixteen distinct symbols: numbers 0 through 9 and letters A through F (representing values 10 through 15). In digital computing, a single hexadecimal character maps directly to a 4-bit binary sequence (known as a nibble). Because an architectural byte consists of 8 bits, exactly two paired hexadecimal characters represent one complete byte of information, spanning values from 00 to FF (0 to 255 in decimal).'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do software engineers use Hexadecimal instead of pure Binary or Decimal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Binary notation requires eight characters (0s and 1s) for every single byte, creating enormous visual sprawl and making memory dumps unreadable. Decimal notation is awkward because a byte ranges from 0 to 255, resulting in variable-width representations (1 to 3 digits) that do not align on binary boundaries. Hexadecimal strikes the perfect balance: it is base-16 (an exact power of two, 2^4), meaning each byte is always exactly two characters long, aligns cleanly on word boundaries, and drastically reduces transcription errors.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does UTF-8 multi-byte encoding affect Hexadecimal conversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard 7-bit ASCII characters (0–127) encode into a single byte, producing two hex digits (e.g., A becomes 41). However, modern Unicode strings encompass over 150,000 characters. In UTF-8, characters require between 1 and 4 bytes. Accented letters like é require 2 bytes (C3 A9, 4 hex characters), symbols like the Euro sign € require 3 bytes (E2 82 AC, 6 hex characters), and emoji like 🚀 require 4 bytes (F0 9F 9A 80, 8 hex characters). Our tool uses browser TextEncoder to guarantee accurate UTF-8 multi-byte byte serialization.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between uppercase and lowercase hexadecimal strings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Functionally and mathematically, uppercase and lowercase hex strings are 100% identical: 4a represents the exact same numerical byte value as 4A (decimal 74). While RFC 4648 recommends uppercase for canonical Base16 representation, lowercase hex is widely favored in cryptographic hash digests (such as SHA-256 and MD5) and Git commit IDs. Our encoder outputs clean hex with selectable delimiter spacing to match your specific runtime conventions.'
      }
    },
    {
      '@type': 'Question',
      name: 'What do common hexadecimal prefixes like 0x, #, and \\x signify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prefixes identify the numeral base across distinct language parsers and technical contexts. The 0x prefix originated in C and is universally used in C++, Java, JavaScript, Python, Rust, and Go to inform compilers that a numeric literal is base-16. The # prefix signifies hex color values in CSS, HTML, and design software. The \\x and \\u prefixes represent escaped byte sequences in string literals and regular expressions to insert non-printable or arbitrary binary bytes.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Endianness impact hexadecimal memory representation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Endianness dictates the storage order of multi-byte numeric words in physical memory. Big-Endian architectures (such as network protocols) store the Most Significant Byte (MSB) at the lowest memory address, whereas Little-Endian architectures (x86, x64, ARM) store the Least Significant Byte (LSB) first. For instance, the 32-bit integer 0x12345678 is stored as 12 34 56 78 in Big-Endian and 78 56 34 12 in Little-Endian. Sequential text strings are byte arrays and are always ordered index-by-index regardless of CPU endianness.'
      }
    },
    {
      '@type': 'Question',
      name: 'How is Hexadecimal used in digital forensics and file magic numbers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every standardized file format embeds a distinctive hexadecimal byte sequence at its start, known as a magic number or file signature. For example, PNG images begin with 89 50 4E 47 0D 0A 1A 0A, PDF documents begin with 25 50 44 46 (%PDF), and ZIP archives begin with 50 4B 03 04. Digital forensic analysts and security firewalls examine raw hex headers to verify genuine file types and detect malware attempting to hide behind spoofed extensions.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can a hexadecimal encoded string be reversed back to plain text?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Hexadecimal encoding is a bidirectional, lossless representation of binary data, not an encryption cipher or one-way cryptographic hash. Anyone possessing a hex string can decode it back to the original plaintext using a companion Hex Decoder, provided the original character encoding scheme (typically UTF-8) is known and applied.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is Hexadecimal encoding safe for storing passwords or securing sensitive data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Hexadecimal is merely an alternative numeral representation of bytes, providing zero cryptographic confidentiality or integrity. Converting a password into hex is the mathematical equivalent of writing a word in uppercase—it offers no security. Passwords must never be stored in hex; they must be hashed using slow, salted Key Derivation Functions like our Bcrypt Hash Generator or Argon2id.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to paste proprietary code or security keys into this online Hex Encoder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our Hex Encoder is engineered with a strict zero-trust client-side architecture. All conversion logic executes locally within your browser using native JavaScript TextEncoder and Uint8Array primitives. Your input text and output hexadecimal strings never traverse the network and are never logged, cached, or transmitted to any external server.'
      }
    }
  ]
};

export default function HexEncoder() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <HexEncoderClient />
    </>
  );
}
