'use client';

import { useState } from 'react';
import { Coins, ChevronRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import CoinFlipSeo from '@/components/tools/CoinFlipSeo';

export default function CoinFlipClient() {
  const [result, setResult] = useState(null);
  const [flipping, setFlipping] = useState(false);
  const [history, setHistory] = useState([]);

  const flipCoin = () => {
    setFlipping(true);
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(outcome);
      setHistory((prev) => [outcome, ...prev].slice(0, 12));
      setFlipping(false);
    }, 600);
  };

  const headsCount = history.filter((h) => h === 'Heads').length;
  const tailsCount = history.length - headsCount;

  return (
    <div className="min-h-screen bg-fun-bg font-sans text-fun-dark">
      <section className="bg-gradient-to-r from-fun-primary to-fun-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-fun-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Fun Tools</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-fun-white font-medium">Coin Flip</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight">
            Coin Flip – Heads or Tails
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Flip a fair virtual coin instantly. Perfect for decisions, games, and classroom probability demos.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray/30 p-8 md:p-12 text-center">
          <div
            className={`mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-inner mb-8 transition-all duration-500 ${
              flipping ? 'animate-spin bg-amber-100 text-amber-800' : result === 'Heads' ? 'bg-yellow-400 text-yellow-900' : result === 'Tails' ? 'bg-slate-300 text-slate-800' : 'bg-fun-bg text-fun-gray border-2 border-dashed border-fun-gray/40'
            }`}
          >
            {flipping ? '…' : result || <Coins className="w-16 h-16 opacity-40" />}
          </div>

          {result && !flipping && (
            <p className="text-4xl font-extrabold text-fun-primary mb-6">{result}</p>
          )}

          <button
            type="button"
            onClick={flipCoin}
            disabled={flipping}
            className="bg-fun-primary hover:bg-fun-primaryDark disabled:opacity-60 text-fun-white px-12 py-4 rounded-2xl font-black text-lg transition-all inline-flex items-center gap-2"
          >
            <Coins size={22} /> {flipping ? 'Flipping…' : 'Flip Coin'}
          </button>

          {history.length > 0 && (
            <div className="mt-10 pt-8 border-t border-fun-gray/30 text-left">
              <div className="flex items-center gap-2 font-bold text-fun-dark mb-4">
                <BarChart3 size={20} className="text-fun-primary" /> Recent flips ({history.length})
              </div>
              <p className="text-sm text-fun-gray mb-3">
                Heads: {headsCount} · Tails: {tailsCount}
              </p>
              <div className="flex flex-wrap gap-2">
                {history.map((h, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      h === 'Heads' ? 'bg-yellow-100 text-yellow-800' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm">
            <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center mb-4">
              <Coins />
            </div>
            <h3 className="text-xl font-bold mb-2">50/50 Fair Toss</h3>
            <p className="text-fun-gray text-sm">Each flip is independent—great for quick binary decisions.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck />
            </div>
            <h3 className="text-xl font-bold mb-2">No Server Logs</h3>
            <p className="text-fun-gray text-sm">Flips run in your browser; history clears when you leave the page.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
              <Zap />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant</h3>
            <p className="text-fun-gray text-sm">Works on mobile and desktop without downloading an app.</p>
          </div>
        </section>

        <CoinFlipSeo />
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6">
        <p className="text-sm text-fun-gray text-center">© 2026 ToolsWizard — Fun Tools for everyone.</p>
      </footer>
    </div>
  );
}
