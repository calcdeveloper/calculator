'use client';

import { useState, useEffect } from 'react';
import { Dices, ChevronRight, Settings2, Sparkles, Hash, Zap } from 'lucide-react';
import RandomNumberGeneratorSeo from '@/components/tools/RandomNumberGeneratorSeo';
import RelatedFunTools from '@/components/tools/RelatedFunTools';

export default function RandomNumberGeneratorClient() {
  const [min, setMin] = useState('1');
  const [max, setMax] = useState('100');
  const [quantity, setQuantity] = useState('1');
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  const [results, setResults] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateNumbers = () => {
    const minVal = parseInt(min, 10);
    const maxVal = parseInt(max, 10);
    const qty = parseInt(quantity, 10);

    if (isNaN(minVal) || isNaN(maxVal) || minVal > maxVal) {
      alert("Invalid range. Min must be less than or equal to Max.");
      return;
    }

    if (isNaN(qty) || qty < 1 || qty > 1000) {
      alert("Please enter a valid quantity between 1 and 1000.");
      return;
    }

    if (!allowDuplicates && qty > (maxVal - minVal + 1)) {
      alert("Cannot generate that many unique numbers within this range.");
      return;
    }

    setIsAnimating(true);
    
    // Simulate generation delay for visual effect
    setTimeout(() => {
      let nums = [];
      if (allowDuplicates) {
        for (let i = 0; i < qty; i++) {
          nums.push(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
        }
      } else {
        const available = [];
        for (let i = minVal; i <= maxVal; i++) available.push(i);
        
        for (let i = 0; i < qty; i++) {
          const randomIndex = Math.floor(Math.random() * available.length);
          nums.push(available[randomIndex]);
          available.splice(randomIndex, 1);
        }
      }
      setResults(nums);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-fun-bg font-sans text-fun-dark">
      <section className="bg-gradient-to-r from-fun-primary to-fun-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-fun-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Fun Tools</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-fun-white font-medium">Random Number Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Dices size={40} />
            Random Number Generator
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Generate truly random numbers within any range. Perfect for games, lotteries, statistical sampling, and fair decisions.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray/30 p-6 md:p-10 mb-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block font-bold text-fun-dark mb-2 text-sm uppercase tracking-wide">Min Value</label>
              <input
                type="number"
                value={min}
                onChange={(e) => setMin(e.target.value)}
                className="w-full p-4 text-xl border-2 border-fun-gray/30 rounded-xl focus:border-fun-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-bold text-fun-dark mb-2 text-sm uppercase tracking-wide">Max Value</label>
              <input
                type="number"
                value={max}
                onChange={(e) => setMax(e.target.value)}
                className="w-full p-4 text-xl border-2 border-fun-gray/30 rounded-xl focus:border-fun-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-bold text-fun-dark mb-2 text-sm uppercase tracking-wide">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                max="1000"
                className="w-full p-4 text-xl border-2 border-fun-gray/30 rounded-xl focus:border-fun-primary outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <input
              type="checkbox"
              id="duplicates"
              checked={allowDuplicates}
              onChange={(e) => setAllowDuplicates(e.target.checked)}
              className="w-5 h-5 accent-fun-primary cursor-pointer"
            />
            <label htmlFor="duplicates" className="text-fun-dark font-medium cursor-pointer">
              Allow duplicate numbers
            </label>
          </div>

          <button
            onClick={generateNumbers}
            disabled={isAnimating}
            className="w-full bg-fun-primary hover:bg-fun-primaryDark disabled:bg-fun-gray text-fun-white py-5 rounded-2xl font-black text-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-1"
          >
            {isAnimating ? <Settings2 className="animate-spin" size={28} /> : <Dices size={28} />}
            {isAnimating ? "Generating..." : "Generate Numbers"}
          </button>

          {results.length > 0 && (
            <div className="mt-12 pt-10 border-t border-fun-gray/20">
              <h3 className="text-sm font-bold text-fun-gray uppercase tracking-wider mb-6 text-center">Results</h3>
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                {results.length === 1 ? (
                  <div className="text-center">
                    <p className="text-8xl md:text-9xl font-black text-fun-primary tracking-tighter drop-shadow-md">
                      {results[0]}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3 justify-center">
                    {results.map((num, idx) => (
                      <div 
                        key={idx} 
                        className="bg-fun-bg border border-fun-gray/30 text-fun-dark font-bold text-2xl py-3 px-6 rounded-xl shadow-sm"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fun-primary/10 text-fun-primary rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Sparkles />
            </div>
            <h3 className="text-xl font-bold mb-2">Truly Random</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Uses secure browser-based Math APIs to ensure completely fair, unbiased, and unpredictable numeric generation.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Hash />
            </div>
            <h3 className="text-xl font-bold mb-2">Custom Ranges</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Whether you need a number from 1 to 10 or -5000 to 5000, our generator handles positive, negative, and massive ranges effortlessly.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Zap />
            </div>
            <h3 className="text-xl font-bold mb-2">Batch Processing</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Need 100 unique numbers instantly? Adjust the quantity and toggle duplicates to get exactly the dataset you require.</p>
          </div>
        </section>

        <RandomNumberGeneratorSeo />
        <RelatedFunTools currentPath="/tools/fun-tools/random-number-generator" />
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6 text-center">
        <p className="text-sm text-fun-gray">© {new Date().getFullYear()} ToolsWizard — Playful Tools for Everyone.</p>
      </footer>
    </div>
  );
}
