'use client';

import { useState, useRef } from 'react';
import { RotateCw, ChevronRight, Plus, Trash2, Sparkles, Target, Zap } from 'lucide-react';
import RandomWheelSpinnerSeo from '@/components/tools/RandomWheelSpinnerSeo';
import RelatedFunTools from '@/components/tools/RelatedFunTools';

const COLORS = [
  '#FF595E', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93',
  '#FF9F1C', '#2EC4B6', '#E71D36', '#011627', '#F15BB5'
];

export default function RandomWheelSpinnerClient() {
  const [items, setItems] = useState([
    { id: 1, text: 'Pizza' },
    { id: 2, text: 'Burger' },
    { id: 3, text: 'Sushi' },
    { id: 4, text: 'Tacos' },
    { id: 5, text: 'Salad' },
    { id: 6, text: 'Pasta' }
  ]);
  const [newItemText, setNewItemText] = useState('');
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

  const addItem = (e) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    if (items.length >= 50) {
      alert("Maximum 50 items allowed.");
      return;
    }
    setItems([...items, { id: Date.now(), text: newItemText.trim() }]);
    setNewItemText('');
    setWinner(null);
  };

  const removeItem = (id) => {
    if (items.length <= 2) {
      alert("You need at least 2 items to spin the wheel.");
      return;
    }
    setItems(items.filter(item => item.id !== id));
    setWinner(null);
  };

  const spinWheel = () => {
    if (isSpinning || items.length < 2) return;
    
    setIsSpinning(true);
    setWinner(null);

    // Calculate rotation
    const spins = Math.floor(Math.random() * 5) + 5; // 5 to 9 full spins
    const degreesPerSlice = 360 / items.length;
    
    // Pick a random winner index
    const winnerIndex = Math.floor(Math.random() * items.length);
    
    // Calculate the exact angle to land in the center of the winning slice
    // The pointer is at the top (0 degrees or 360 degrees)
    // To land on winnerIndex, the wheel needs to rotate backwards so the slice aligns with the top.
    const sliceCenterAngle = winnerIndex * degreesPerSlice + (degreesPerSlice / 2);
    
    // We want the final absolute rotation to be exactly 360 - sliceCenterAngle (modulo 360)
    const currentSpins = Math.floor(rotation / 360);
    const targetAbsoluteRotation = (currentSpins + spins) * 360 + (360 - sliceCenterAngle);

    setRotation(targetAbsoluteRotation);

    // Wait for animation to finish (5 seconds)
    setTimeout(() => {
      setIsSpinning(false);
      setWinner(items[winnerIndex].text);
    }, 5000);
  };

  // SVG drawing logic
  const getCoordinatesForPercent = (percent) => {
    const x = Number((Math.cos(2 * Math.PI * percent) * 100).toFixed(5));
    const y = Number((Math.sin(2 * Math.PI * percent) * 100).toFixed(5));
    return [x, y];
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
            <span className="text-fun-white font-medium">Random Wheel Spinner</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <RotateCw size={40} />
            Random Wheel Spinner
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Can't make a decision? Input your options, spin the colorful wheel, and let fate decide instantly.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray overflow-hidden p-6 md:p-8">
          
          {/* Wheel Container */}
          <div className="flex-1 flex flex-col items-center justify-center relative">
            
            {/* The Pointer */}
            <div className="absolute top-[-10px] z-10 text-fun-dark">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="2" className="drop-shadow-md">
                <path d="M12 2L20 10H4L12 2Z" />
              </svg>
            </div>

            {/* The SVG Wheel */}
            <div 
              className="relative w-full max-w-[400px] aspect-square rounded-full overflow-hidden border-8 border-fun-bg shadow-inner transition-transform duration-[5000ms] ease-[cubic-bezier(0.15,0.85,0.25,1)]"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <svg viewBox="-100 -100 200 200" className="w-full h-full -rotate-90">
                {items.length === 2 && (
                  <>
                    <path d="M 0 0 L 100 0 A 100 100 0 0 1 -100 0 Z" fill={COLORS[0]} />
                    <path d="M 0 0 L -100 0 A 100 100 0 0 1 100 0 Z" fill={COLORS[1]} />
                    {items.map((item, index) => {
                      const angle = (index * 180) + 90;
                      return (
                        <g key={index} transform={`rotate(${angle})`}>
                          <text x="50" y="5" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" transform="rotate(0, 50, 0)">
                            {item.text.length > 12 ? item.text.substring(0,10)+'...' : item.text}
                          </text>
                        </g>
                      );
                    })}
                  </>
                )}
                {items.length > 2 && items.map((item, index) => {
                  const percent = 1 / items.length;
                  const startPercent = index * percent;
                  const endPercent = startPercent + percent;
                  
                  const [startX, startY] = getCoordinatesForPercent(startPercent);
                  const [endX, endY] = getCoordinatesForPercent(endPercent);
                  
                  const largeArcFlag = percent > 0.5 ? 1 : 0;
                  const pathData = `M 0 0 L ${startX} ${startY} A 100 100 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
                  
                  const color = COLORS[index % COLORS.length];

                  // Text rotation
                  const textAngle = (startPercent + (percent / 2)) * 360;

                  return (
                    <g key={item.id}>
                      <path d={pathData} fill={color} stroke="white" strokeWidth="0.5" />
                      <g transform={`rotate(${textAngle})`}>
                        <text x="60" y="4" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">
                          {item.text.length > 15 ? item.text.substring(0,13)+'...' : item.text}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>

            <button
              onClick={spinWheel}
              disabled={isSpinning || items.length < 2}
              className="mt-10 bg-fun-primary hover:bg-fun-primaryDark disabled:bg-fun-gray text-fun-white px-12 py-4 rounded-full font-black text-2xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative z-20"
            >
              {isSpinning ? 'Spinning...' : 'SPIN!'}
            </button>

            {/* Winner Announcement */}
            {winner && !isSpinning && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-fun-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border-4 border-fun-primary text-center z-30 animate-in zoom-in duration-300">
                <p className="text-sm font-bold text-fun-gray uppercase tracking-wider mb-1">Winner</p>
                <p className="text-3xl font-black text-fun-primary drop-shadow-sm">{winner}</p>
              </div>
            )}
          </div>

          {/* List Manager */}
          <div className="flex-1 flex flex-col border-t lg:border-t-0 lg:border-l border-fun-gray/20 pt-10 lg:pt-0 lg:pl-10">
            <h2 className="text-2xl font-bold text-fun-dark mb-6">Wheel Options</h2>
            
            <form onSubmit={addItem} className="flex gap-2 mb-6">
              <input
                type="text"
                value={newItemText}
                onChange={(e) => setNewItemText(e.target.value)}
                placeholder="Add new option..."
                className="flex-1 p-4 border-2 border-fun-gray/30 rounded-xl focus:border-fun-primary outline-none transition-colors font-medium"
              />
              <button
                type="submit"
                disabled={isSpinning || !newItemText.trim()}
                className="bg-fun-primary hover:bg-fun-primaryDark disabled:bg-fun-gray text-fun-white px-6 rounded-xl font-bold transition-all"
              >
                <Plus size={24} />
              </button>
            </form>

            <div className="flex-1 overflow-y-auto max-h-[300px] lg:max-h-[400px] pr-2 space-y-2 custom-scrollbar">
              {items.map((item, index) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-fun-bg rounded-xl border border-fun-gray/20">
                  <div className="flex items-center gap-3">
                    <span 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="font-semibold text-fun-dark">{item.text}</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    disabled={isSpinning}
                    className="text-fun-gray hover:text-red-500 transition-colors p-2 disabled:opacity-50"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-sm font-medium text-fun-gray text-center">
              Total items: {items.length} / 50
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fun-primary/10 text-fun-primary rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <RotateCw />
            </div>
            <h3 className="text-xl font-bold mb-2">Fair Physics</h3>
            <p className="text-fun-gray text-sm leading-relaxed">The winning slice is pre-calculated using a secure pseudo-random algorithm, ensuring an entirely fair and unbiased outcome every spin.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Target />
            </div>
            <h3 className="text-xl font-bold mb-2">Fully Customizable</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Add up to 50 unique items to the wheel. Perfect for picking restaurants, deciding who pays the bill, or choosing a movie.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Zap />
            </div>
            <h3 className="text-xl font-bold mb-2">Beautiful Animations</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Enjoy smooth, hardware-accelerated SVG animations that make spinning the wheel feel dramatic and highly satisfying.</p>
          </div>
        </section>

        <RandomWheelSpinnerSeo />
        <RelatedFunTools currentPath="/tools/fun-tools/random-wheel-spinner" />
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6 text-center">
        <p className="text-sm text-fun-gray">© {new Date().getFullYear()} ToolsWizard — Playful Tools for Everyone.</p>
      </footer>
    </div>
  );
}
