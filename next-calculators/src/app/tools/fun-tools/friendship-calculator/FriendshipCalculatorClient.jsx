"use client";

import { useState } from "react";
import { Heart, RefreshCw, Share2, ChevronRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import FriendshipCalculatorSeo from "@/components/tools/FriendshipCalculatorSeo";

export default function FriendshipCalculatorClient() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const calculateFriendship = () => {
    if (!name1.trim() || !name2.trim()) return;

    // Fun algorithm to calculate friendship percentage
    const combinedNames = (name1 + name2).toLowerCase().replace(/\s/g, "");
    let sum = 0;
    for (let i = 0; i < combinedNames.length; i++) {
      sum += combinedNames.charCodeAt(i);
    }
    const percentage = (sum % 101); // Ensure it's between 0-100

    setResult({
      percentage,
      message: getMessage(percentage),
    });
    setShowResult(true);
  };

  const getMessage = (percentage) => {
    if (percentage >= 90) return "Best Friends Forever! 💖";
    if (percentage >= 80) return "Great Friends! 💕";
    if (percentage >= 70) return "Good Friends! 💝";
    if (percentage >= 60) return "Friends! 💗";
    if (percentage >= 50) return "Acquaintances! 💓";
    if (percentage >= 40) return "Getting to know each other! 💞";
    if (percentage >= 30) return "Strangers turning into friends! 💘";
    if (percentage >= 20) return "Potential friends! 💙";
    if (percentage >= 10) return "Keep trying! 💚";
    return "Friendship takes time! 💛";
  };

  const resetCalculator = () => {
    setName1("");
    setName2("");
    setResult(null);
    setShowResult(false);
  };

  const shareResult = () => {
    if (!result) return;
    const text = `${name1} & ${name2} = ${result.percentage}% Friendship! ${result.message}`;
    if (navigator.share) {
      navigator.share({
        title: "Friendship Calculator Result",
        text: text,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert("Result copied to clipboard!");
    }
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
            <span className="text-fun-white font-medium">Friendship Calculator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Heart size={40} />
            Friendship Calculator
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Enter two names to calculate your friendship percentage! Perfect for testing your bond with friends.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray/30 p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block font-bold text-fun-dark mb-2">
                First Name
              </label>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                placeholder="e.g. Alex"
                className="w-full p-4 border border-fun-gray/40 rounded-xl focus:ring-2 focus:ring-fun-primary outline-none transition-all"
              />
            </div>

            <div>
              <label className="block font-bold text-fun-dark mb-2">
                Second Name
              </label>
              <input
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                placeholder="e.g. Sam"
                className="w-full p-4 border border-fun-gray/40 rounded-xl focus:ring-2 focus:ring-fun-primary outline-none transition-all"
              />
            </div>
          </div>

          <button
            onClick={calculateFriendship}
            disabled={!name1.trim() || !name2.trim()}
            className="w-full bg-fun-primary text-fun-white py-4 px-6 rounded-xl font-bold hover:bg-fun-primaryDark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg shadow-lg shadow-fun-primary/30"
          >
            <Heart size={24} />
            Calculate Friendship
          </button>
        </div>

        {showResult && result && (
          <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray/30 p-8 mb-8 animate-pulse">
            <div className="text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fun-primary to-fun-secondary mb-4">
                {result.percentage}%
              </div>
              <div className="text-2xl font-semibold text-fun-dark mb-6">
                {result.message}
              </div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={shareResult}
                  className="flex items-center gap-2 bg-fun-secondary text-fun-white py-3 px-6 rounded-xl font-bold hover:bg-fun-primary transition-colors shadow-lg shadow-fun-secondary/20"
                >
                  <Share2 size={20} />
                  Share
                </button>
                <button
                  onClick={resetCalculator}
                  className="flex items-center gap-2 bg-fun-dark text-fun-white py-3 px-6 rounded-xl font-bold hover:bg-black transition-colors shadow-lg"
                >
                  <RefreshCw size={20} />
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm">
            <div className="w-12 h-12 bg-fun-primary/10 text-fun-primary rounded-xl flex items-center justify-center mb-4">
              <Sparkles />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Fun</h3>
            <p className="text-fun-gray text-sm">Get a playful score in one click—perfect for parties and chats.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm">
            <div className="w-12 h-12 bg-fun-primary/10 text-fun-primary rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck />
            </div>
            <h3 className="text-xl font-bold mb-2">Private</h3>
            <p className="text-fun-gray text-sm">Names stay in your browser—we never store them on a server.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm">
            <div className="w-12 h-12 bg-fun-secondary/20 text-fun-primary rounded-xl flex items-center justify-center mb-4">
              <Zap />
            </div>
            <h3 className="text-xl font-bold mb-2">Shareable</h3>
            <p className="text-fun-gray text-sm">Screenshot your result and challenge friends to beat your score.</p>
          </div>
        </section>

        <FriendshipCalculatorSeo />

        {/* INTERNAL TOOLS CROSS LINKING DIRECTORY HUB */}
        <div className="mt-8 p-6 bg-fun-white rounded-2xl shadow-md border border-fun-gray">
          <h4 className="text-sm font-bold text-fun-dark mb-3 uppercase tracking-wider">Explore Related Tools</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <a href="/tools/generators/uuid-generator" className="px-3 py-1.5 bg-fun-bg hover:bg-fun-bg/80 rounded-md border border-fun-gray text-fun-gray hover:text-fun-primary transition-colors font-medium">UUID Generator</a>
            <a href="/tools/fun-tools/love-percentage" className="px-3 py-1.5 bg-fun-bg hover:bg-fun-bg/80 rounded-md border border-fun-gray text-fun-gray hover:text-fun-primary transition-colors font-medium">Love Percentage</a>
            <a href="/tools/fun-tools/coin-flip" className="px-3 py-1.5 bg-fun-bg hover:bg-fun-bg/80 rounded-md border border-fun-gray text-fun-gray hover:text-fun-primary transition-colors font-medium">Coin Flip</a>
            <a href="/tools/text-tools/case-converter" className="px-3 py-1.5 bg-fun-bg hover:bg-fun-bg/80 rounded-md border border-fun-gray text-fun-gray hover:text-fun-primary transition-colors font-medium">Case Converter</a>
          </div>
        </div>
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6">
        <p className="text-sm text-fun-gray text-center">© 2026 ToolsWizard — Fun Tools for everyone.</p>
      </footer>
    </div>
  );
}
