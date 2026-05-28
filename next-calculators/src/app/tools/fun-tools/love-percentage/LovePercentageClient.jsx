'use client';

import { useState } from 'react';
import { Heart, ChevronRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import LovePercentageSeo from '@/components/tools/LovePercentageSeo';

function calculateLoveScore(name1, name2) {
  const clean = (s) => s.toLowerCase().replace(/[^a-z]/g, '');
  const a = clean(name1);
  const b = clean(name2);
  if (!a || !b) return null;

  const combined = (a + b).split('').sort().join('');
  let score = 0;
  for (let i = 0; i < combined.length; i++) {
    score += combined.charCodeAt(i) * (i + 1);
  }
  for (let i = 0; i < a.length; i++) score += a.charCodeAt(i) * 3;
  for (let i = 0; i < b.length; i++) score += b.charCodeAt(i) * 5;
  return (score % 55) + 45;
}

function getMessage(score) {
  if (score >= 90) return 'Soulmate energy! The universe is cheering for this pair.';
  if (score >= 75) return 'Strong chemistry—this connection has serious potential.';
  if (score >= 60) return 'Sweet sparks! Keep talking and see where it goes.';
  if (score >= 45) return 'Friendly vibes—romance might grow with time.';
  return 'Opposites attract! Sometimes the best stories start unexpected.';
}

export default function LovePercentageClient() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState('');

  const handleCalculate = () => {
    const result = calculateLoveScore(name1, name2);
    if (result === null) return;
    setScore(result);
    setMessage(getMessage(result));
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
            <span className="text-fun-white font-medium">Love Percentage</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight">
            Love Percentage Calculator
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Enter two names and get a fun compatibility score—for entertainment only, share the laughs!
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray/30 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block font-bold text-fun-dark mb-2">First Name</label>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                placeholder="e.g. Alex"
                className="w-full p-4 border border-fun-gray/40 rounded-xl focus:ring-2 focus:ring-fun-primary outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-fun-dark mb-2">Second Name</label>
              <input
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                placeholder="e.g. Sam"
                className="w-full p-4 border border-fun-gray/40 rounded-xl focus:ring-2 focus:ring-fun-primary outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleCalculate}
            disabled={!name1.trim() || !name2.trim()}
            className="w-full bg-fun-primary hover:bg-fun-primaryDark disabled:bg-fun-gray/30 text-fun-white py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2"
          >
            <Heart size={22} /> Calculate Love %
          </button>

          {score !== null && (
            <div className="mt-10 text-center p-8 bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl border border-rose-200">
              <p className="text-sm font-semibold text-rose-600 uppercase tracking-wide mb-2">Compatibility</p>
              <p className="text-6xl md:text-7xl font-black text-fun-primary mb-4">{score}%</p>
              <p className="text-lg text-fun-dark font-medium">{message}</p>
              <p className="text-xs text-fun-gray mt-4">
                For entertainment only — not scientific relationship advice.
              </p>
            </div>
          )}
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-4">
              <Sparkles />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Fun</h3>
            <p className="text-fun-gray text-sm">Get a playful score in one click—perfect for parties and chats.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck />
            </div>
            <h3 className="text-xl font-bold mb-2">Private</h3>
            <p className="text-fun-gray text-sm">Names stay in your browser—we never store them on a server.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
              <Zap />
            </div>
            <h3 className="text-xl font-bold mb-2">Shareable</h3>
            <p className="text-fun-gray text-sm">Screenshot your result and challenge friends to beat your score.</p>
          </div>
        </section>

        <LovePercentageSeo />
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6">
        <p className="text-sm text-fun-gray text-center">© 2026 ToolsWizard — Fun Tools for everyone.</p>
      </footer>
    </div>
  );
}
