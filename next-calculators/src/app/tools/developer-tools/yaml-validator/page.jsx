import YAMLValidatorClient from './YAMLValidatorClient';
import YamlValidatorSeo from '@/components/tools/YamlValidatorSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'YAML Validator Online - Syntax Linter & Schema Checker',
  description:
    'Validate and lint YAML configuration files online with strict YAML 1.2 syntax checking, line error detection, and secure zero-trust browser processing.',
  path: '/tools/developer-tools/yaml-validator',
  keywords: [
    'YAML validator',
    'check YAML syntax',
    'YAML parser',
    'validate YAML online',
    'free YAML validator',
    'YAML linter',
    'developer tools YAML',
    'debug YAML',
    'kubernetes yaml validator',
    'docker compose validator'
  ],
});

const softwareSchema = createSoftwareAppSchema({
  name: 'YAML Validator',
  description:
    'Validate and lint YAML configuration files online with strict YAML 1.2 syntax checking, line error detection, and secure zero-trust browser processing.',
  path: '/tools/developer-tools/yaml-validator',
  category: 'DeveloperApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Developer Tools', path: '/tools/developer-tools' },
  { name: 'YAML Validator', path: '/tools/developer-tools/yaml-validator' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does YAML strictly forbid tab characters for indentation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The YAML specification prohibits tab characters (\\t) because different text editors, IDEs, and terminal environments render tabs with inconsistent column widths (such as 2, 4, or 8 spaces). Since YAML relies entirely on visual whitespace to determine object hierarchy, allowing tabs would cause identical files to compile into completely different data structures across different machines.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the infamous "Norway Problem" in YAML?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In YAML 1.1, unquoted strings matching "NO", "no", "yes", "true", or "false" are automatically parsed as booleans. When software developers write "country: NO" without quotes, the parser interprets "NO" as the boolean false rather than the ISO alpha-2 country code for Norway, causing silent data corruption in production databases.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does YAML 1.2 differ fundamentally from YAML 1.1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'YAML 1.2 was published to align YAML directly as a true mathematical superset of JSON. It eliminated dozens of confusing implicit boolean and sexagesimal literals (such as "yes", "no", "on", "off"), simplified core schemas, and standardized on JSON data types to eliminate parsing ambiguities.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between YAML anchors (&) and aliases (*)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An anchor (&name) assigns an identifier to a specific YAML block or node so that it can be reused later. An alias (*name) references that anchored block elsewhere in the document, allowing developers to avoid repeating large configuration blocks (DRY architecture) without duplicating data.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the pipe (|) and right arrow (>) multiline operators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The pipe operator (|) represents a literal block scalar, which preserves all newlines and line breaks verbatim. The right arrow operator (>) represents a folded block scalar, which folds consecutive lines into a single long string separated by spaces, only creating newlines on double line breaks.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why does unquoted version: 2.10 become version 2.1 in YAML?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'YAML parsers evaluate unquoted numbers with decimals as floating-point numerals. Because 2.10 is mathematically equivalent to 2.1, the trailing zero is discarded during serialization. To preserve version strings, semantic versions must always be wrapped in quotation marks ("2.10").'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my YAML code sent to an external server when using this tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our YAML Validator executes entirely client-side inside your browser sandbox using the JavaScript V8 engine. Your private Kubernetes secrets, Docker environment variables, API tokens, and cloud infrastructure manifests never leave your local computer.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are YAML chomping indicators (+ and -)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chomping indicators control how trailing whitespace and newlines at the end of block scalars are handled. The strip indicator (|-) removes all trailing newlines. The clip indicator (|, default) retains exactly one trailing newline. The keep indicator (|+) preserves all trailing newlines and whitespace.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can a YAML document contain multiple distinct configuration files?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. YAML natively supports multi-document streams. Distinct documents within a single physical file are separated by three dashes (---) at the start and optionally terminated by three dots (...) at the end, a pattern standard in Kubernetes manifests.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the "Billion Laughs" entity expansion vulnerability in YAML?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Billion Laughs attack in YAML exploits circular or deeply nested recursive aliases and anchors. By defining a tree of references where each node duplicates the previous one ten times, a small 1KB YAML file can expand into gigabytes of memory upon parsing, crashing production application servers.'
      }
    }
  ]
};

export default function YAMLValidatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <div className="min-h-screen bg-dev-bg">
        <YAMLValidatorClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <YamlValidatorSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/yaml-validator" />
        </div>
      </div>
    </>
  );
}
