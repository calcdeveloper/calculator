'use client';

import { useState } from 'react';
import { HelpCircle, ChevronRight, Zap, Target, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import YesNoPickerSeo from '@/components/tools/YesNoPickerSeo';
import RelatedFunTools from '@/components/tools/RelatedFunTools';

export default function YesNoPickerClient() {
  const [result, setResult] = useState(null);
  const [isDeciding, setIsDeciding] = useState(false);
  const [tempText, setTempText] = useState('?');

  const makeDecision = () => {
    if (isDeciding) return;
    
    setIsDeciding(true);
    setResult(null);

    let counter = 0;
    const interval = setInterval(() => {
      setTempText(counter % 2 === 0 ? 'Yes' : 'No');
      counter++;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const finalResult = Math.random() < 0.5 ? 'Yes' : 'No';
      setResult(finalResult);
      setIsDeciding(false);
    }, 2500);
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
            <span className="text-fun-white font-medium">Yes/No Picker</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <HelpCircle size={40} />
            Yes or No Picker
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Can't make up your mind? Ask a question, click the button, and let the algorithm give you a definitive Yes or No.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray/30 p-6 md:p-12 mb-16 text-center">
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-fun-dark mb-2">Think of a question</h2>
            <p className="text-fun-gray">Focus on your dilemma, then click below to decide your fate.</p>
          </div>

          <div 
            className={`mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full border-[12px] flex flex-col items-center justify-center shadow-inner transition-all duration-300 ${
              isDeciding 
                ? 'border-fun-gray/20 bg-fun-bg animate-pulse scale-95' 
                : result === 'Yes' 
                  ? 'border-emerald-500 bg-emerald-50 scale-100 shadow-emerald-500/20 shadow-2xl' 
                  : result === 'No'
                    ? 'border-rose-500 bg-rose-50 scale-100 shadow-rose-500/20 shadow-2xl'
                    : 'border-fun-primary/20 bg-fun-bg shadow-lg'
            }`}
          >
            {isDeciding ? (
              <span className="text-6xl md:text-7xl font-black text-fun-gray/40 tracking-tight">
                {tempText}
              </span>
            ) : result ? (
              <div className="flex flex-col items-center animate-in zoom-in spin-in-12 duration-500">
                {result === 'Yes' ? (
                  <CheckCircle2 size={48} className="text-emerald-500 mb-4" />
                ) : (
                  <XCircle size={48} className="text-rose-500 mb-4" />
                )}
                <span className={`text-6xl md:text-7xl font-black tracking-tight ${result === 'Yes' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {result}
                </span>
              </div>
            ) : (
              <span className="text-8xl font-black text-fun-gray/30">?</span>
            )}
          </div>

          <button
            onClick={makeDecision}
            disabled={isDeciding}
            className="mt-12 w-full md:w-auto md:px-16 bg-fun-primary hover:bg-fun-primaryDark disabled:bg-fun-gray text-fun-white py-5 rounded-2xl font-black text-2xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {isDeciding ? 'Deciding...' : result ? 'Ask Another Question' : 'Decide For Me!'}
          </button>
        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fun-primary/10 text-fun-primary rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Zap />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Clarity</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Stop overthinking. Force a binary choice and instantly know what you actually want to do.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Target />
            </div>
            <h3 className="text-xl font-bold mb-2">Exactly 50/50</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Our algorithm ensures a perfect 50% chance of Yes and 50% chance of No every single time.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Sparkles />
            </div>
            <h3 className="text-xl font-bold mb-2">Suspenseful</h3>
            <p className="text-fun-gray text-sm leading-relaxed">The animated decision sequence builds anticipation, making it fun to share the outcome with friends.</p>
          </div>
        </section>

        <YesNoPickerSeo />
        <RelatedFunTools currentPath="/tools/fun-tools/yes-no-picker" />
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6 text-center">
        <p className="text-sm text-fun-gray">© {new Date().getFullYear()} ToolsWizard — Playful Tools for Everyone.</p>
      </footer>
    </div>
  );
}
