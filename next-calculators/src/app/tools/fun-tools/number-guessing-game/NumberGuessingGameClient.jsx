'use client';

import { useState, useEffect } from 'react';
import { Target, ChevronRight, RotateCcw, TrendingUp, TrendingDown, CheckCircle2, Zap, Trophy, Brain } from 'lucide-react';
import NumberGuessingGameSeo from '@/components/tools/NumberGuessingGameSeo';
import RelatedFunTools from '@/components/tools/RelatedFunTools';

export default function NumberGuessingGameClient() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [history, setHistory] = useState([]);

  const initGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
    setGameOver(false);
    setHistory([]);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleGuess = (e) => {
    e.preventDefault();
    if (gameOver || !guess) return;

    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      setMessage('Please enter a valid number between 1 and 100.');
      setGuess('');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    let status = '';
    let msgText = '';

    if (numGuess === targetNumber) {
      status = 'correct';
      msgText = `Congratulations! You guessed the number in ${newAttempts} tries!`;
      setGameOver(true);
    } else if (numGuess > targetNumber) {
      status = 'high';
      msgText = 'Too High!';
    } else {
      status = 'low';
      msgText = 'Too Low!';
    }

    setMessage(msgText);
    setHistory([{ guess: numGuess, status }, ...history]);
    setGuess('');
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
            <span className="text-fun-white font-medium">Number Guessing Game</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Target size={40} />
            Number Guessing Game
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            I am thinking of a number between 1 and 100. Can you guess it in the fewest tries possible?
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray/30 p-6 md:p-10 mb-16 flex flex-col md:flex-row gap-8">
          
          {/* Game Area */}
          <div className="flex-1">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-fun-dark mb-2">Guess the Secret Number</h2>
              <p className="text-fun-gray">Range: 1 to 100</p>
            </div>

            <form onSubmit={handleGuess} className="mb-8 relative">
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                disabled={gameOver}
                placeholder="Enter your guess..."
                className="w-full p-6 text-2xl text-center border-2 border-fun-gray/30 rounded-2xl focus:border-fun-primary outline-none transition-colors shadow-inner font-bold disabled:bg-fun-bg disabled:text-fun-gray"
                autoFocus
              />
              <button
                type="submit"
                disabled={gameOver || !guess}
                className="mt-4 w-full bg-fun-primary hover:bg-fun-primaryDark disabled:bg-fun-gray text-fun-white py-5 rounded-2xl font-black text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Submit Guess
              </button>
            </form>

            <div className="text-center min-h-[80px] flex items-center justify-center">
              {message && (
                <div className={`px-6 py-4 rounded-xl inline-flex items-center gap-3 text-xl font-bold animate-in zoom-in duration-300 ${
                  gameOver ? 'bg-emerald-100 text-emerald-700' : 
                  message === 'Too High!' ? 'bg-rose-100 text-rose-700' : 
                  message === 'Too Low!' ? 'bg-amber-100 text-amber-700' : 
                  'bg-fun-bg text-fun-dark'
                }`}>
                  {gameOver ? <Trophy size={28} /> : message === 'Too High!' ? <TrendingDown size={28} /> : <TrendingUp size={28} />}
                  {message}
                </div>
              )}
            </div>

            {gameOver && (
              <div className="mt-8 text-center animate-in fade-in duration-500">
                <button
                  onClick={initGame}
                  className="bg-fun-dark hover:bg-black text-fun-white py-4 px-8 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mx-auto"
                >
                  <RotateCcw size={20} /> Play Again
                </button>
              </div>
            )}
          </div>

          {/* History Sidebar */}
          <div className="md:w-64 border-t md:border-t-0 md:border-l border-fun-gray/20 pt-8 md:pt-0 md:pl-8 flex flex-col">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-lg font-bold text-fun-dark">Attempt History</h3>
              <span className="text-sm font-bold bg-fun-primary/10 text-fun-primary px-3 py-1 rounded-full">
                Total: {attempts}
              </span>
            </div>
            
            <div className="flex-1 overflow-y-auto max-h-[300px] md:max-h-[400px] pr-2 space-y-2 custom-scrollbar">
              {history.length === 0 ? (
                <p className="text-fun-gray text-sm italic text-center mt-10">No guesses yet. Make your first move!</p>
              ) : (
                history.map((h, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-fun-bg rounded-xl border border-fun-gray/20 text-sm font-bold">
                    <span className="text-fun-dark text-lg">{h.guess}</span>
                    <span className={`flex items-center gap-1 ${
                      h.status === 'high' ? 'text-rose-500' : 
                      h.status === 'low' ? 'text-amber-500' : 
                      'text-emerald-500'
                    }`}>
                      {h.status === 'high' ? <><TrendingDown size={14} /> High</> : 
                       h.status === 'low' ? <><TrendingUp size={14} /> Low</> : 
                       <><CheckCircle2 size={14} /> Correct</>}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fun-primary/10 text-fun-primary rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Brain />
            </div>
            <h3 className="text-xl font-bold mb-2">Sharpen Your Logic</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Practice binary search strategies! Every incorrect guess gives you the exact information you need to narrow down the range.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <RotateCcw />
            </div>
            <h3 className="text-xl font-bold mb-2">Track Your History</h3>
            <p className="text-fun-gray text-sm leading-relaxed">The built-in history panel logs every single guess you make, ensuring you never accidentally guess the same wrong number twice.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Zap />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Play</h3>
            <p className="text-fun-gray text-sm leading-relaxed">No downloads, no waiting. The random number is generated securely in your browser the second the page loads.</p>
          </div>
        </section>

        <NumberGuessingGameSeo />
        <RelatedFunTools currentPath="/tools/fun-tools/number-guessing-game" />
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6 text-center">
        <p className="text-sm text-fun-gray">© {new Date().getFullYear()} ToolsWizard — Playful Tools for Everyone.</p>
      </footer>
    </div>
  );
}
