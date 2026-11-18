import BcryptHashGeneratorClient from './BcryptHashGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Bcrypt Hash Generator - Secure Salted Password Hashes',
  description:
    'Generate securely salted Bcrypt password hashes online with custom cost factors (4-14). Free developer tool with zero-trust local browser execution.',
  path: '/tools/encoder-decoder/bcrypt-hash-generator',
  keywords: [
    'bcrypt hash generator',
    'create bcrypt hash',
    'bcrypt password hashing',
    'generate secure password hash',
    'bcrypt calculator',
    'salt and hash password',
    'cost factor bcrypt',
    'bcrypt online',
    'salted hash generator'
  ],
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Bcrypt Hash Generator',
  description:
    'Generate securely salted Bcrypt password hashes online with custom cost factors (4-14). Free developer tool with zero-trust local browser execution.',
  path: '/tools/encoder-decoder/bcrypt-hash-generator',
  category: 'DeveloperApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Encoder & Decoder', path: '/tools/encoder-decoder' },
  { name: 'Bcrypt Hash Generator', path: '/tools/encoder-decoder/bcrypt-hash-generator' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does clicking Generate with the exact same password produce a completely different hash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bcrypt automatically generates a cryptographically secure 128-bit random salt for every single hashing operation. Because the salt is concatenated with the password before executing the Eksblowfish key schedule, identical input strings produce completely distinct 60-character output hashes, rendering precomputed Rainbow Table attacks computationally impossible.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the optimal Bcrypt Cost Factor for production systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The current industry standard cost factor is between 10 and 12. A cost factor of 10 requires 1,024 rounds of Eksblowfish, taking roughly 80 to 120 milliseconds on modern server hardware. This latency is imperceptible to legitimate users logging in, but it renders offline brute-force attacks by attackers with GPU clusters economically and computationally infeasible.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can a Bcrypt hash be decrypted or reversed back to plaintext?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Bcrypt is a one-way cryptographic Key Derivation Function (KDF), not an encryption cipher. Information is deliberately destroyed through non-linear S-box substitution and Feistel rounds. To verify a password, authentication systems hash the incoming attempt using the embedded salt and compare the resulting digest.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the 72-byte password truncation limit in Bcrypt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bcrypt is built upon the Blowfish cipher, which has an internal P-array key expansion limit of 576 bits (72 bytes). Any character beyond the 72nd byte is completely ignored by standard Bcrypt parsers. Modern systems mitigate this by pre-hashing passwords using SHA-256 before passing the resulting 32-byte binary digest into Bcrypt.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between $2a$, $2b$, and $2y$ Bcrypt identifiers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '$2a$ is the classic specification with UTF-8 support. $2y$ was introduced by PHP to correct a specific crypt_blowfish integer wraparound bug. $2b$ was established by OpenBSD in 2014 to patch length-handling bugs across 255-character strings and represents the modern universal standard.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is Bcrypt preferred over fast hashes like SHA-256 or MD5 for passwords?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fast hash functions like SHA-256 and MD5 were engineered for high-throughput data integrity verification, allowing attackers using parallel GPU rigs to test hundreds of billions of combinations per second. Bcrypt is intentionally slow and requires 4KB of state memory per thread, frustrating GPU parallelization.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to generate production password hashes in this web tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our tool is architected on a zero-trust client-side foundation. The Bcrypt mathematical algorithms execute 100% locally within your browser JavaScript engine sandbox. Your plaintext passwords and generated hashes are never dispatched over the internet to remote servers.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does a backend server verify a Bcrypt hash without storing a separate salt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 60-character Modular Crypt Format stores the 128-bit salt directly inside characters 7 through 28 of the hash string. When a user submits a password during login, the verification function extracts the salt and cost factor from the stored hash and re-computes the algorithm to confirm equality.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Bcrypt compare to Argon2id and PBKDF2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Argon2id won the 2015 Password Hashing Competition and provides configurable memory hardness against custom ASIC hardware. PBKDF2 is standard in FIPS compliance but vulnerable to GPU acceleration. Bcrypt remains the most battle-tested, widely supported algorithm across global enterprise stacks.'
      }
    },
    {
      '@type': 'Question',
      name: 'How should applications handle legacy passwords with lower cost factors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern authentication frameworks implement dynamic work factor re-hashing. When a user successfully authenticates using an older hash (e.g., cost 8), the server checks if the hash requires an upgrade, automatically re-hashes the valid plaintext with the current standard (e.g., cost 12), and updates the database.'
      }
    }
  ]
};

export default function BcryptHashGenerator() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <BcryptHashGeneratorClient />
    </>
  );
}
