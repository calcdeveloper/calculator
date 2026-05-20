import Link from 'next/link';
import { Calculator, HeartPulse, Sigma, RefreshCw, Wrench, GraduationCap, Briefcase, Cpu } from 'lucide-react';
import HomeSearch from '../../components/home/HomeSearch';
import { calculators, getCategoryCount } from '../../utils/calculatorData';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Online Calculators - Finance, Health, Math & More',
  description:
    'Browse 120+ free online calculators for finance, health, math, engineering, construction, education, and everyday use. Fast, accurate, and mobile-friendly.',
  path: '/calculator',
  keywords: [
    'online calculator',
    'free calculator',
    'finance calculator',
    'bmi calculator',
    'emi calculator',
    'math calculator',
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

export default function CalculatorPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-calc-black mb-4">Smart Calculators for Everyday Problems</h1>
        <p className="text-lg text-calc-gray mb-8">500+ free calculators for finance, health, math and daily life.</p>
        
        <HomeSearch calculators={calculators} />
      </div>

      <div className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <Link href={`/category/${cat.path}`} key={index} className="bg-calc-white p-6 rounded-xl border border-calc-lightGray hover:border-calc-green hover:shadow-md transition-all flex flex-col items-center text-center">
              <div className="text-calc-green mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-calc-black text-lg">{cat.name}</h3>
              <p className="text-calc-gray text-sm mt-1">{getCategoryCount(cat.path)} Calculators</p> 
            </Link>
          ))}
        </div>
      </div>

      <div id="trending" className="scroll-mt-24">
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
    </main>
  );
}
