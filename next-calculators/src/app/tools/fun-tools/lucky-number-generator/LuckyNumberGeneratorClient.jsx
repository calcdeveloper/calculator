'use client';

import { useState } from 'react';
import { Sparkles, ChevronRight, Hash, Star, Trophy, Loader2 } from 'lucide-react';
import LuckyNumberGeneratorSeo from '@/components/tools/LuckyNumberGeneratorSeo';
import RelatedFunTools from '@/components/tools/RelatedFunTools';

export default function LuckyNumberGeneratorClient() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [luckyNumbers, setLuckyNumbers] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateLuckyNumbers = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name to find your lucky numbers!");
      return;
    }

    setIsGenerating(true);
    setLuckyNumbers([]);

    setTimeout(() => {
      // Create a deterministic seed based on name and date (if provided)
      const inputStr = name.toLowerCase() + (birthdate || '');
      let seed = 0;
      for (let i = 0; i < inputStr.length; i++) {
        seed += inputStr.charCodeAt(i) * (i + 1);
      }

      // Add a daily changing factor so numbers change each day for the same person
      const today = new Date().toDateString();
      for (let i = 0; i < today.length; i++) {
        seed += today.charCodeAt(i);
      }

      // Generate 6 numbers between 1 and 69 (like a standard lottery)
      const nums = new Set();
      let multiplier = 1;
      while (nums.size < 6) {
        // pseudo random logic based on seed
        const pseudoRandom = Math.abs(Math.sin(seed * multiplier++) * 10000);
        const num = Math.floor(pseudoRandom % 69) + 1;
        nums.add(num);
      }

      const sortedNums = Array.from(nums).sort((a, b) => a - b);
      setLuckyNumbers(sortedNums);
      setIsGenerating(false);
    }, 1500);
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
            <span className="text-fun-white font-medium">Lucky Number Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Sparkles size={40} />
            Lucky Number Generator
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Enter your details and let our cosmic algorithm calculate your personalized lucky numbers for the day.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray overflow-hidden p-6 md:p-8">
          
          <form onSubmit={generateLuckyNumbers} className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block font-bold text-fun-dark mb-2">Your Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  required
                  className="w-full p-4 border-2 border-fun-gray/30 rounded-xl focus:border-fun-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-bold text-fun-dark mb-2">Birth Date (Optional)</label>
                <input
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="w-full p-4 border-2 border-fun-gray/30 rounded-xl focus:border-fun-primary outline-none transition-colors text-fun-dark"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating || !name.trim()}
              className="w-full bg-fun-primary hover:bg-fun-primaryDark disabled:bg-fun-gray text-fun-white py-5 rounded-2xl font-black text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              {isGenerating ? <Loader2 className="animate-spin" size={28} /> : <Sparkles size={28} />}
              {isGenerating ? "Calculating the stars..." : "Get My Lucky Numbers!"}
            </button>
          </form>

          {luckyNumbers.length > 0 && !isGenerating && (
            <div className="mt-8 pt-10 border-t border-fun-gray/20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h3 className="text-2xl font-bold text-fun-dark mb-2">Your Lucky Numbers Today</h3>
              <p className="text-fun-gray mb-8">These numbers are uniquely calculated for {name} on {new Date().toLocaleDateString()}.</p>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {luckyNumbers.map((num, idx) => (
                  <div 
                    key={idx}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-black text-2xl md:text-3xl shadow-lg border-4 ${
                      idx === luckyNumbers.length - 1 
                      ? 'bg-amber-100 text-amber-600 border-amber-300' // The "Mega" or special ball
                      : 'bg-fun-primary text-fun-white border-fun-primaryDark'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>
              <p className="text-xs text-fun-gray mt-10">
                Disclaimer: For entertainment purposes only. Not financial or gambling advice.
              </p>
            </div>
          )}
        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fun-primary/10 text-fun-primary rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Star />
            </div>
            <h3 className="text-xl font-bold mb-2">Personalized</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Unlike a standard random generator, this algorithm uses your unique name and birth date to generate numbers specifically tied to you.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Sparkles />
            </div>
            <h3 className="text-xl font-bold mb-2">Changes Daily</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Because luck is always shifting, the algorithm incorporates today's date. Come back tomorrow for a fresh set of numbers!</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Trophy />
            </div>
            <h3 className="text-xl font-bold mb-2">Lottery Format</h3>
            <p className="text-fun-gray text-sm leading-relaxed">We format the output into 6 distinct numbers (including one special "golden" number) mimicking popular lotto formats.</p>
          </div>
        </section>

        <LuckyNumberGeneratorSeo />
        <RelatedFunTools currentPath="/tools/fun-tools/lucky-number-generator" />
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6 text-center">
        <p className="text-sm text-fun-gray">© {new Date().getFullYear()} ToolsWizard — Playful Tools for Everyone.</p>
      </footer>
    </div>
  );
}
