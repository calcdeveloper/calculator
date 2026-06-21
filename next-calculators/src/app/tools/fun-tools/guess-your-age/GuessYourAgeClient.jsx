'use client';

import { useState } from 'react';
import { Cake, ChevronRight, Sparkles, RefreshCw, Star, Zap } from 'lucide-react';
import GuessYourAgeSeo from '@/components/tools/GuessYourAgeSeo';
import RelatedFunTools from '@/components/tools/RelatedFunTools';

const questions = [
  {
    id: 1,
    text: "What is your preferred Friday night activity?",
    options: [
      { text: "Going out clubbing or to a loud party", score: 18 },
      { text: "Binge-watching Netflix with snacks", score: 25 },
      { text: "A quiet dinner party with close friends", score: 35 },
      { text: "Asleep by 9:30 PM", score: 55 }
    ]
  },
  {
    id: 2,
    text: "How do you prefer to communicate?",
    options: [
      { text: "TikTok, Snapchat, or Instagram DMs", score: 16 },
      { text: "Texting (with lots of emojis)", score: 24 },
      { text: "A good old-fashioned phone call", score: 40 },
      { text: "Email or formal letters", score: 60 }
    ]
  },
  {
    id: 3,
    text: "What is your go-to beverage?",
    options: [
      { text: "Energy drinks or sweet sodas", score: 15 },
      { text: "Iced coffee or matcha lattes", score: 26 },
      { text: "A nice glass of wine or craft beer", score: 38 },
      { text: "Black coffee, tea, or just water", score: 50 }
    ]
  },
  {
    id: 4,
    text: "How do you feel about the latest technology?",
    options: [
      { text: "I line up to buy it on day one", score: 20 },
      { text: "I adopt it once everyone else has it", score: 30 },
      { text: "I ask younger people how to use it", score: 45 },
      { text: "What was wrong with the old way?", score: 65 }
    ]
  },
  {
    id: 5,
    text: "Choose your favorite music genre from these:",
    options: [
      { text: "Today's Top 40, EDM, or modern Hip Hop", score: 19 },
      { text: "Indie, Alternative, or 2000s Pop", score: 28 },
      { text: "Classic Rock or 80s/90s hits", score: 42 },
      { text: "Classical, Jazz, or Oldies", score: 60 }
    ]
  }
];

export default function GuessYourAgeClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [estimatedAge, setEstimatedAge] = useState(null);

  const handleOptionClick = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateAge(newAnswers);
    }
  };

  const calculateAge = (finalAnswers) => {
    const sum = finalAnswers.reduce((a, b) => a + b, 0);
    const average = Math.round(sum / finalAnswers.length);
    // Add a little randomness (+/- 2 years) for fun
    const randomModifier = Math.floor(Math.random() * 5) - 2;
    setEstimatedAge(average + randomModifier);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setEstimatedAge(null);
  };

  const getAgeMessage = (age) => {
    if (age < 20) return "You have the vibrant, unstoppable energy of a teenager!";
    if (age < 30) return "You're in your roaring twenties—adventurous but starting to appreciate a good nap.";
    if (age < 40) return "Thirties energy! You know what you want and you value your peace.";
    if (age < 50) return "Forties vibes! You've gathered wisdom and prefer quality over quantity.";
    return "You have a classic, mature soul with a timeless appreciation for life.";
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
            <span className="text-fun-white font-medium">Guess Your Age</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight">
            Guess Your Mental Age Tool
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Answer a few quick questions about your habits and let our playful algorithm guess your true "mental age".
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray overflow-hidden p-6 md:p-8">
          
          {estimatedAge === null ? (
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-sm font-bold text-fun-gray uppercase tracking-wider">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <div className="flex gap-1">
                  {questions.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-2 w-8 rounded-full ${idx <= currentStep ? 'bg-fun-primary' : 'bg-fun-gray/20'}`}
                    />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-fun-dark mb-8 text-center leading-snug">
                {questions[currentStep].text}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option.score)}
                    className="p-6 text-left border-2 border-fun-gray/20 rounded-2xl hover:border-fun-primary hover:bg-fun-primary/5 transition-all duration-300 font-medium text-fun-dark text-lg group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border-2 border-fun-gray/30 flex items-center justify-center group-hover:border-fun-primary group-hover:bg-fun-primary group-hover:text-fun-white transition-colors">
                        {String.fromCharCode(65 + idx)}
                      </div>
                      {option.text}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-amber-100 text-amber-500 rounded-full mb-6 shadow-inner">
                <Cake size={48} />
              </div>
              <h2 className="text-3xl font-extrabold text-fun-dark mb-2">Your Mental Age Is:</h2>
              <p className="text-7xl md:text-8xl font-black text-fun-primary mb-6 animate-pulse">
                {estimatedAge}
              </p>
              <p className="text-xl text-fun-dark font-medium max-w-lg mx-auto mb-10 leading-relaxed">
                {getAgeMessage(estimatedAge)}
              </p>
              
              <button
                onClick={handleReset}
                className="mx-auto bg-fun-primary hover:bg-fun-primaryDark text-fun-white py-4 px-8 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <RefreshCw size={20} /> Retake the Quiz
              </button>
            </div>
          )}

        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fun-primary/10 text-fun-primary rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Star />
            </div>
            <h3 className="text-xl font-bold mb-2">Lighthearted Fun</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Our quiz is designed purely for entertainment. Don't take it too seriously—enjoy the playful results!</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Zap />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Results</h3>
            <p className="text-fun-gray text-sm leading-relaxed">No sign-ups, no waiting. Get your mental age the moment you answer the last question.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Sparkles />
            </div>
            <h3 className="text-xl font-bold mb-2">Share With Friends</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Take the quiz together and see who has the oldest (or youngest) soul in your friend group.</p>
          </div>
        </section>

        <GuessYourAgeSeo />
        <RelatedFunTools currentPath="/tools/fun-tools/guess-your-age" />
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6 text-center">
        <p className="text-sm text-fun-gray">© {new Date().getFullYear()} ToolsWizard — Playful Tools for Everyone.</p>
      </footer>
    </div>
  );
}
