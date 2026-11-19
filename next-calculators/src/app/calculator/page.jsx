export const dynamic = "force-static";

import Link from 'next/link';
import { Calculator, HeartPulse, Sigma, RefreshCw, Wrench, GraduationCap, Briefcase, Cpu, ChevronRight, ArrowRight } from 'lucide-react';
import HomeSearch from '../../components/home/HomeSearch';
import { calculators, getCategoryCount } from '../../utils/calculatorData';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import CalculatorHubSeo from '../../components/calculator/CalculatorHubSeo';

export const metadata = createPageMetadata({
  title: 'Free Online Calculators - Finance, Health & Math Tools',
  description: 'Browse 150+ free online calculators for finance, health, math, and construction. Instant, private in-browser calculation with zero server data uploads.',
  path: '/calculator',
  keywords: [
    'online calculator',
    'free online calculators',
    'finance calculator',
    'bmi calculator',
    'emi calculator',
    'sip calculator',
    'math calculator',
    'construction calculator',
    'unit converter'
  ],
});

const categories = [
  { name: 'Finance', icon: <Calculator size={24} />, path: 'finance' },
  { name: 'Health', icon: <HeartPulse size={24} />, path: 'health' },
  { name: 'Maths', icon: <Sigma size={24} />, path: 'math' },
  { name: 'Conversion', icon: <RefreshCw size={24} />, path: 'conversion' },
  { name: 'Everyday Utility', icon: <Wrench size={24} />, path: 'everyday' },
  { name: 'Education', icon: <GraduationCap size={24} />, path: 'education' },
  { name: 'Construction', icon: <Briefcase size={24} />, path: 'construction' },
  { name: 'Engineering', icon: <Cpu size={24} />, path: 'engineering' },
];

const trendingCalculators = [
  { name: 'Age Calculator', desc: 'Calculate your exact age in years, months, and days.', path: '/calculator/everyday/age' },
  { name: 'BMI Calculator', desc: 'Check your Body Mass Index to monitor your health.', path: '/calculator/health/bmi' },
  { name: 'SIP Calculator', desc: 'Calculate returns on your mutual fund SIP investments.', path: '/calculator/finance/sip' },
  { name: 'EMI Calculator', desc: 'Calculate your monthly loan EMI payments easily.', path: '/calculator/finance/emi' },
];

const softwareSchema = createSoftwareAppSchema({
  name: 'ToolsWizard Free Online Calculators',
  description: 'Comprehensive suite of 150+ online calculators for finance, health, math, engineering, and everyday use.',
  path: '/calculator',
  category: 'EducationalApplication',
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Calculators', path: '/calculator' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does ToolsWizard prevent floating-point rounding errors in financial and scientific calculations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard JavaScript uses double-precision IEEE 754 floating-point numbers, which can introduce subtle binary rounding anomalies (e.g., 0.1 + 0.2 evaluating to 0.30000000000000004). ToolsWizard calculators employ scaled integer arithmetic and epsilon-bounded rounding techniques—such as multiplying monetary figures by 100 to execute calculations in whole cents/pennies before converting back—ensuring financial statements, tax liabilities, and compound interest calculations remain mathematically exact to the nearest decimal cent.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are the financial calculators updated for recent tax laws and regional rules?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our regional financial calculators (such as the Salary and Income Tax calculators) are continually calibrated to reflect active fiscal legislation, including the updated Indian New Tax Regime versus Old Tax Regime slabs under the Finance Act, Section 80C deduction caps, standard deductions, 18% GST surcharges on banking processing fees, and current Provident Fund (EPF/PPF) statutory interest rates.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my confidential salary, mortgage balance, or medical data sent to any cloud servers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. ToolsWizard operates on a pure zero-trust client-side architecture. Every calculation script runs locally inside your browser\'s isolated JavaScript memory sandbox. We do not store, log, analyze, or transmit your numeric inputs to any external cloud database or third-party advertising network. You can verify this by inspecting network activity in your browser developer tools or running our calculators in Airplane Mode.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between simple interest and compound interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple interest is calculated exclusively on the original principal sum throughout the entire investment tenure (Interest = P × r × t). Compound interest, conversely, calculates interest on both the initial principal and the accumulated interest from prior compounding cycles (A = P(1 + r/n)^(nt)). Over extended multi-year horizons, compound interest produces exponential capital growth, yielding significantly higher final wealth compared to linear simple interest.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do BMI calculations sometimes misclassify athletes and muscular individuals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Body Mass Index measures gross body mass relative to height squared without distinguishing between fat mass and lean muscle mass. Because skeletal muscle tissue is significantly denser than adipose tissue, highly trained athletes and bodybuilders frequently register BMI values in the "overweight" or "obese" ranges despite possessing low, healthy body fat percentages. For muscular individuals, combining BMI with waist-to-height ratio (WHtR) or US Navy body fat calculations provides a far more accurate assessment of metabolic health.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use ToolsWizard calculators offline without an internet connection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once you load any calculator page in your web browser, all mathematical scripts, UI components, and formula libraries are cached in your browser. You can disconnect your device from Wi-Fi or cellular data, and the calculator continues to accept inputs, recalculate outputs, and display interactive charts without interruption.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do construction calculators account for on-site material wastage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our civil and construction estimators (including brick, block, and concrete calculators) provide customizable wastage percentage inputs. Standard civil engineering practice assumes a 5% to 10% wastage allowance for brick and tile cutting, corner fitting, and transit breakage. The tool displays both the theoretical net material volume and the gross procurement volume including selected safety factors.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are all calculators 100% free with no hidden subscription fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every single tool across the ToolsWizard platform is 100% free for personal, educational, and commercial use. We do not enforce credit card requirements, daily query limits, artificial result locks, or subscription paywalls. All calculation engines are openly accessible to all users forever.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use ToolsWizard calculators on my smartphone or tablet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every calculator is designed with responsive mobile-first Tailwind layouts. Input sliders, numeric keypads, and amortization charts adapt dynamically to iOS, iPadOS, and Android touchscreens, delivering desktop-grade calculation performance on any handheld mobile device.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where can I find companion file converters and developer tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In addition to our 150+ calculators, ToolsWizard hosts an extensive suite of over 130 browser-based web utilities, including PDF compressors, image converters, Base64 encoders, JSON formatters, and password generators. You can explore the complete catalog directly on our Tools Directory.'
      }
    }
  ]
};

export default function CalculatorPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-calc-gray mb-8">
        <Link href="/" className="hover:text-calc-green transition-colors">Home</Link>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-calc-black font-semibold">Calculators</span>
      </nav>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-calc-black mb-4">
          Free Online Calculators for Everyday Problems
        </h1>
        <p className="text-lg text-calc-gray mb-8">
          Browse 150+ free, accurate calculators for finance, health, math, engineering, and daily life.
        </p>
        
        <HomeSearch calculators={calculators} />
      </div>

      {/* Categories Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-calc-black mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <Link 
              href={`/calculator/${cat.path}`} 
              key={index} 
              className="bg-calc-white p-6 rounded-xl border border-calc-lightGray hover:border-calc-green hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <div className="text-calc-green mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="font-semibold text-calc-black text-lg group-hover:text-calc-green transition-colors">{cat.name}</h3>
              <p className="text-calc-gray text-sm mt-1">{getCategoryCount(cat.path)} Calculators</p> 
            </Link>
          ))}
        </div>
      </div>

      {/* Trending Calculators */}
      <div id="trending" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl font-bold text-calc-black mb-6 border-b border-calc-lightGray pb-2">Trending Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingCalculators.map((calc, index) => (
            <div key={index} className="bg-calc-white p-6 rounded-xl border border-calc-lightGray flex flex-col justify-between h-full hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-bold text-calc-black text-xl mb-2">{calc.name}</h3>
                <p className="text-calc-darkGray text-sm mb-6">{calc.desc}</p>
              </div>
              <Link href={calc.path} className="w-full bg-calc-green text-calc-white py-2 px-4 rounded-md font-medium hover:bg-calc-darkGreen transition-colors text-center">
                Click to open
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-Link Banner to Web Utilities */}
      <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Web Utilities, PDF Tools, or Encoders?</h2>
          <p className="text-gray-600 text-sm max-w-2xl">
            Explore our collection of 130+ free developer tools, converters, image and PDF editors, and generators with 100% private in-browser processing.
          </p>
        </div>
        <Link
          href="/tools"
          className="shrink-0 px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors shadow-sm flex items-center gap-2"
        >
          Explore All Tools <ArrowRight size={16} />
        </Link>
      </div>

      {/* Comprehensive Editorial SEO Knowledge Base */}
      <CalculatorHubSeo />
    </main>
  );
}
