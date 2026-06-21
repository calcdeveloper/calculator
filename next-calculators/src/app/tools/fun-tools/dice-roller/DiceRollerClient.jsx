'use client';

import { useState } from 'react';
import { Dices, ChevronRight, Hash, Sparkles, Target } from 'lucide-react';
import DiceRollerSeo from '@/components/tools/DiceRollerSeo';
import RelatedFunTools from '@/components/tools/RelatedFunTools';

const DOT_POSITIONS = {
  1: [{ top: '50%', left: '50%' }],
  2: [{ top: '25%', left: '25%' }, { top: '75%', left: '75%' }],
  3: [{ top: '25%', left: '25%' }, { top: '50%', left: '50%' }, { top: '75%', left: '75%' }],
  4: [{ top: '25%', left: '25%' }, { top: '25%', left: '75%' }, { top: '75%', left: '25%' }, { top: '75%', left: '75%' }],
  5: [{ top: '25%', left: '25%' }, { top: '25%', left: '75%' }, { top: '50%', left: '50%' }, { top: '75%', left: '25%' }, { top: '75%', left: '75%' }],
  6: [{ top: '25%', left: '25%' }, { top: '50%', left: '25%' }, { top: '75%', left: '25%' }, { top: '25%', left: '75%' }, { top: '50%', left: '75%' }, { top: '75%', left: '75%' }]
};

const Die = ({ value, isRolling }) => {
  const dots = DOT_POSITIONS[value] || [];

  return (
    <div className={`relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-[inset_0_-8px_0_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)] border border-gray-200 transition-all ${isRolling ? 'animate-bounce blur-[1px]' : ''}`}>
      {dots.map((pos, idx) => (
        <div
          key={idx}
          className="absolute w-5 h-5 md:w-6 md:h-6 bg-slate-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-inner"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}
    </div>
  );
};

export default function DiceRollerClient() {
  const [diceCount, setDiceCount] = useState(2);
  const [diceValues, setDiceValues] = useState([6, 6]);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return;
    
    setIsRolling(true);

    // Flashing rapid numbers animation
    let count = 0;
    const interval = setInterval(() => {
      const randoms = Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1);
      setDiceValues(randoms);
      count++;
    }, 100);

    // Final result
    setTimeout(() => {
      clearInterval(interval);
      const finals = Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1);
      setDiceValues(finals);
      setIsRolling(false);
    }, 800);
  };

  const handleCountChange = (count) => {
    if (isRolling) return;
    setDiceCount(count);
    setDiceValues(Array.from({ length: count }, () => 6));
  };

  const totalSum = diceValues.reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-fun-bg font-sans text-fun-dark">
      <section className="bg-gradient-to-r from-fun-primary to-fun-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-fun-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Fun Tools</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-fun-white font-medium">Dice Roller</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Dices size={40} />
            Virtual Dice Roller
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Roll up to 6 virtual dice instantly. Perfect for board games, RPGs, or anywhere you need a random number.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray overflow-hidden p-6 md:p-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-fun-gray/20 pb-8">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-fun-dark mb-2">How many dice?</h2>
              <p className="text-sm text-fun-gray">Choose between 1 and 6 dice.</p>
            </div>
            
            <div className="flex bg-fun-bg rounded-xl border border-fun-gray/20 p-1">
              {[1, 2, 3, 4, 5, 6].map(num => (
                <button
                  key={num}
                  onClick={() => handleCountChange(num)}
                  className={`w-12 h-12 rounded-lg font-bold text-lg transition-all ${diceCount === num ? 'bg-fun-primary text-fun-white shadow-md' : 'text-fun-dark hover:bg-fun-gray/10'}`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-5 md:p-10 mb-16 min-h-[150px]">
            {diceValues.map((val, idx) => (
              <Die key={idx} value={val} isRolling={isRolling} />
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl px-8 py-4 text-center min-w-[200px]">
              <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">Total Sum</p>
              <p className="text-5xl font-black text-amber-500">
                {isRolling ? '?' : totalSum}
              </p>
            </div>

            <button
              onClick={rollDice}
              disabled={isRolling}
              className="flex-1 w-full bg-fun-primary hover:bg-fun-primaryDark disabled:bg-fun-gray text-fun-white py-6 rounded-2xl font-black text-2xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Dices size={28} />
              {isRolling ? 'Rolling...' : 'Roll Dice!'}
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fun-primary/10 text-fun-primary rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Dices />
            </div>
            <h3 className="text-xl font-bold mb-2">Beautiful 3D Dice</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Enjoy high-quality, visually appealing virtual dice that bounce and randomize just like the real thing.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Hash />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Math</h3>
            <p className="text-fun-gray text-sm leading-relaxed">We automatically calculate the total sum of all rolled dice, so you never have to pause your game to do the math.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Sparkles />
            </div>
            <h3 className="text-xl font-bold mb-2">Fair & Random</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Powered by native browser APIs, ensuring every roll is mathematically fair without bias or loaded sides.</p>
          </div>
        </section>

        <DiceRollerSeo />
        <RelatedFunTools currentPath="/tools/fun-tools/dice-roller" />
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6 text-center">
        <p className="text-sm text-fun-gray">© {new Date().getFullYear()} ToolsWizard — Playful Tools for Everyone.</p>
      </footer>
    </div>
  );
}
