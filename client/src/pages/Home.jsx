import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Calculator, HeartPulse, Sigma, RefreshCw, Wrench, GraduationCap, Briefcase, Cpu } from 'lucide-react';
import { calculators, getCategoryCount } from '../utils/calculatorData';
// 1. ADDED: Import Helmet for injecting our Schema Markup and meta tags into the <head>
import { Helmet } from 'react-helmet-async';

const categories = [
  { name: 'Finance', icon: <Calculator size={24} />, path: 'finance' },
  { name: 'Health', icon: <HeartPulse size={24} />, path: 'health' },
  { name: 'Maths', icon: <Sigma size={24} />, path: 'math' },
  { name: 'Conversion', icon: <RefreshCw size={24} />, path: 'conversion' },
  { name: 'Everyday Utility', icon: <Wrench size={24} />, path: 'everyday' },
  { name: 'Education', icon: <GraduationCap size={24} />, path: 'education' },
  { name: 'Business', icon: <Briefcase size={24} />, path: 'business' },
  { name: 'Engineering', icon: <Cpu size={24} />, path: 'engineering' },
];

const trendingCalculators = [
  { name: 'Age Calculator', desc: 'Calculate your exact age in years, months, and days.', path: '/calculator/everyday/age' },
  { name: 'BMI Calculator', desc: 'Check your Body Mass Index to monitor your health.', path: '/calculator/health/bmi' },
  { name: 'SIP Calculator', desc: 'Calculate returns on your mutual fund SIP investments.', path: '/calculator/finance/sip' },
  { name: 'EMI Calculator', desc: 'Calculate your monthly loan EMI payments easily.', path: '/calculator/finance/emi' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // 2. ADDED: Define the Schema Object for Google Rich Results
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CalcPilot",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "A comprehensive suite of smart, free calculators for finance, health, math, and everyday utility."
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const filtered = calculators.filter(calc => 
        calc.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* 3. ADDED: Inject Schema and basic SEO tags into the document head */}
      <Helmet>
        <title>CalcPilot | Free Smart Calculators</title>
        <meta name="description" content="500+ free calculators for finance, health, math and daily life." />
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
      </Helmet>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-calc-black mb-4">Smart Calculators for Everyday Problems</h1>
        <p className="text-lg text-calc-gray mb-8">500+ free calculators for finance, health, math and daily life.</p>
        
        {/* Live Search Bar */}
        <div className="relative max-w-2xl mx-auto z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-calc-gray" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="block w-full pl-10 pr-3 py-4 border border-calc-lightGray rounded-lg leading-5 bg-calc-white placeholder-calc-gray focus:outline-none focus:ring-2 focus:ring-calc-green transition-all shadow-sm text-lg"
            placeholder="Search calculator (e.g., SIP, BMI)..."
          />
          {/* Search Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className="absolute mt-2 w-full bg-calc-white border border-calc-lightGray rounded-lg shadow-lg overflow-hidden text-left">
              {suggestions.map((calc, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate(calc.path)}
                  className="w-full block px-4 py-3 text-calc-black hover:bg-calc-beige hover:text-calc-green transition border-b border-calc-lightGray last:border-0 text-left"
                >
                  {calc.name} <span className="text-sm text-calc-gray ml-2">in {calc.category}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Categories */}
      <div className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <Link to={`/category/${cat.path}`} key={index} className="bg-calc-white p-6 rounded-xl border border-calc-lightGray hover:border-calc-green hover:shadow-md transition-all flex flex-col items-center text-center">
              <div className="text-calc-green mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-calc-black text-lg">{cat.name}</h3>
              {/* THIS PULLS ACTUAL COUNT */}
              <p className="text-calc-gray text-sm mt-1">{getCategoryCount(cat.path)} Calculators</p> 
            </Link>
          ))}
        </div>
      </div>

      {/* Trending Section - ADDED ID AND SCROLL-MT HERE */}
      <div id="trending" className="scroll-mt-24">
        <h2 className="text-2xl font-bold text-calc-black mb-6 border-b border-calc-lightGray pb-2">Trending Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingCalculators.map((calc, index) => (
            <div key={index} className="bg-calc-white p-6 rounded-xl border border-calc-lightGray flex flex-col justify-between h-full hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-bold text-calc-black text-xl mb-2">{calc.name}</h3>
                <p className="text-calc-darkGray text-sm mb-6">{calc.desc}</p>
              </div>
              <Link to={calc.path} className="w-full bg-calc-green text-calc-white py-2 px-4 rounded-md font-medium hover:bg-calc-darkGreen transition-colors text-center">
                Click to open
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}