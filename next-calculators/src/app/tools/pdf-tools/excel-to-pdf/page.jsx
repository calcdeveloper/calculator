import React from 'react';
import ExcelToPdfClient from './ExcelToPdfClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Excel to PDF Converter - Convert Spreadsheets Online Free',
  description:
    'Convert Excel spreadsheets (.xlsx, .xls, .csv) to high-quality PDF documents online. Free, secure client-side converter with custom page orientation.',
  path: '/tools/pdf-tools/excel-to-pdf',
  keywords: [
    'excel to pdf',
    'convert xlsx to pdf',
    'xls to pdf',
    'csv to pdf',
    'convert spreadsheet to pdf',
    'private excel to pdf',
    'client side excel converter',
    'free excel to pdf converter',
    'browser excel to pdf',
    'secure spreadsheet converter'
  ],
  openGraph: {
    title: 'Excel to PDF Converter - Convert Spreadsheets Online Free',
    description:
      'Convert Excel spreadsheets (.xlsx, .xls, .csv) to high-quality PDF documents online. Free, secure client-side converter with custom page orientation.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Excel to PDF Converter',
  description:
    'Convert Excel spreadsheets (.xlsx, .xls, .csv) to high-quality PDF documents online. Free, secure client-side converter with custom page orientation.',
  path: '/tools/pdf-tools/excel-to-pdf',
  category: 'BusinessApplication',
  featureList: [
    'Convert .xlsx, .xls, and .csv to PDF',
    '100% client-side zero-trust privacy',
    'Clean vector table formatting and auto-pagination',
    'Automatic AutoFit column width allocation',
    'Multi-sheet workbook support with section headers',
    'Instant local download with zero server uploads'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Excel to PDF', path: '/tools/pdf-tools/excel-to-pdf' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does in-browser Excel to PDF conversion work without Microsoft Office installed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our tool utilizes client-side JavaScript powered by open-source parsing and document compilation libraries. When you upload a workbook, the browser reads the file as a raw ArrayBuffer. The engine extracts the OpenXML ZIP container in local memory, parses sheet XML nodes, resolves shared strings, and calculates cell geometries. It then utilizes jsPDF and AutoTable vector graphics compilers to construct native PDF page streams, rendering table borders, headers, and cell values directly onto a PDF canvas purely inside your browser.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why are visual charts, graphs, and VBA macros omitted in the generated PDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our engine is intentionally optimized as a zero-trust tabular data compiler. Rendering complex Excel vector charts, sparklines, and graphical shapes requires embedding a heavyweight graphical office suite on a remote cloud server, which necessitates uploading your sensitive financial data over the internet. To guarantee 100% data privacy and lightning-fast sub-second conversion speeds on local devices, our engine strips away non-tabular graphics and compiles your raw cell data into a clean, professional vector table.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the converter handle wide tables that exceed standard page width?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The converter automatically initializes the document in Landscape orientation (841.89 pt width on standard A4), which provides significantly more horizontal canvas area than portrait mode. Furthermore, the layout engine executes an AutoFit column width distribution algorithm: it calculates the required width of each column based on text content, applies automated line-wrapping with proportional row height expansion, and adjusts cell padding to ensure multi-column financial tables fit cleanly without clipping.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens if my Excel workbook contains multiple worksheets or tabs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our engine loops sequentially through every readable worksheet tab declared in the workbook manifest. Empty sheets are automatically identified and skipped. For each populated sheet, the compiler generates a dedicated page section prefixed with an authoritative sheet title header (e.g. "Sheet: Balance Sheet") and compiles the tabular data into an independent vector table, preserving the multi-tab structure of your workbook.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are hidden rows, hidden columns, or hidden worksheets included in the PDF output?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During extraction, our parser evaluates row and column visibility attributes. Elements marked with zero height, zero width, or explicit hidden attributes (such as hidden="1") are omitted from the active layout tree. However, if your workbook contains sensitive staging calculations or confidential employee records, we strongly advise deleting those rows or tabs prior to export to eliminate any risk of accidental disclosure.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does the converter re-evaluate live Excel formulas like =VLOOKUP or =SUM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Modern OpenXML workbooks store both the raw formula string in the <f> tag and the precomputed cached numerical evaluation in the <v> tag. Our client-side engine extracts the cached value calculated by Microsoft Excel when the file was last saved. This guarantees 100% calculation consistency and prevents formula evaluation divergences that could occur if a third-party parser attempted to re-execute complex financial formulas.'
      }
    },
    {
      '@type': 'Question',
      name: 'What spreadsheet file formats are supported by this converter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We natively support modern Microsoft Excel OpenXML workbooks (.xlsx), legacy binary workbooks (.xls, Excel 97–2003), comma-separated values (.csv), and tab-delimited text files (.tsv, .txt). All formats are ingested and normalized into standardized tabular data models within browser memory before being compiled into PDF documents.'
      }
    },
    {
      '@type': 'Question',
      name: 'How are date serial numbers, currency formats, and percentages preserved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When parsing OpenXML sheets, the engine inspects the cell extended format (xf) index and cross-references the workbook style dictionary (xl/styles.xml). It detects whether a numeric float represents an Excel serial date, a currency figure with thousands separators, or a percentage, and formats the output string accordingly so that numbers display exactly as intended rather than unformatted raw decimals.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my confidential corporate financial data safe when converting on ToolsWizard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, 100%. ToolsWizard operates under an uncompromising Zero-Trust security architecture. The entire conversion pipeline—from file decompression, XML parsing, coordinate layout, to PDF stream compilation—runs entirely inside your browser local sandbox memory using your device CPU. Your spreadsheet is never transmitted to our servers or stored on external cloud infrastructure.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I compress or password-protect my generated PDF document after conversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After downloading your compiled PDF, you can seamlessly pass it into our companion utilities. Use our PDF Compress tool to optimize Deflate content streams and eliminate redundant font descriptors, our Protect PDF tool to apply 256-bit AES encryption with custom user and owner passwords, or our Merge PDF tool to bind your spreadsheet with corporate cover letters and executive summary documents.'
      }
    }
  ]
};

export default function ExcelToPdfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ExcelToPdfClient />
    </>
  );
}
