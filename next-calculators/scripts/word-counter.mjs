import fs from 'fs';

export function countTextWords(text) {
  // Strip JSX/HTML tags
  let cleaned = text.replace(/<[^>]*>/g, ' ');
  // Strip import / export lines
  cleaned = cleaned.replace(/import\s+[^;]+;/g, ' ');
  cleaned = cleaned.replace(/export\s+default\s+function[^{]*\{/g, ' ');
  // Strip JSON schemas
  cleaned = cleaned.replace(/const\s+\w+Schema\s*=\s*\{[\s\S]*?\};/g, ' ');
  // Strip JSX expression braces and brackets
  cleaned = cleaned.replace(/\{[^}]*\}/g, ' ');
  // Remove markdown symbols or extra punctuation
  cleaned = cleaned.replace(/[\r\n\t]+/g, ' ');
  cleaned = cleaned.replace(/&[a-z]+;/gi, ' ');
  // Match standard words (alphanumeric sequences)
  const words = cleaned.trim().split(/\s+/).filter(w => w.length > 0 && !/^[^a-zA-Z0-9]+$/.test(w));
  return words.length;
}

if (process.argv[2]) {
  const content = fs.readFileSync(process.argv[2], 'utf8');
  console.log(`Word count for ${process.argv[2]}:`, countTextWords(content));
}
