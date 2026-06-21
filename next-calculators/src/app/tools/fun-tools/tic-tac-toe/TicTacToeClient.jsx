'use client';

import { useState, useEffect } from 'react';
import { Grid3X3, ChevronRight, RotateCcw, Target, Zap, Monitor } from 'lucide-react';
import TicTacToeSeo from '@/components/tools/TicTacToeSeo';
import RelatedFunTools from '@/components/tools/RelatedFunTools';

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6]             // diagonals
];

export default function TicTacToeClient() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameMode, setGameMode] = useState('computer'); // 'computer' or 'player'
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [winningLine, setWinningLine] = useState(null);

  useEffect(() => {
    checkWinner(board);
    
    // Computer's turn
    if (gameMode === 'computer' && !xIsNext && !winner && !isDraw) {
      const timer = setTimeout(() => {
        makeComputerMove(board);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [board, xIsNext, winner, isDraw, gameMode]);

  const checkWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_LINES.length; i++) {
      const [a, b, c] = WINNING_LINES[i];
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        setWinner(currentBoard[a]);
        setWinningLine(WINNING_LINES[i]);
        return;
      }
    }
    if (!currentBoard.includes(null)) {
      setIsDraw(true);
    }
  };

  const makeComputerMove = (currentBoard) => {
    const availableSpots = currentBoard.map((val, index) => val === null ? index : null).filter(val => val !== null);
    if (availableSpots.length === 0) return;

    // Very basic AI: Just pick a random spot. For a fun tool, this makes the computer beatable.
    const randomSpot = availableSpots[Math.floor(Math.random() * availableSpots.length)];
    const newBoard = [...currentBoard];
    newBoard[randomSpot] = 'O';
    setBoard(newBoard);
    setXIsNext(true);
  };

  const handleClick = (index) => {
    if (board[index] || winner || isDraw) return;
    if (gameMode === 'computer' && !xIsNext) return; // Ignore clicks during computer turn

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setIsDraw(false);
    setWinningLine(null);
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
            <span className="text-fun-white font-medium">Tic Tac Toe</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Grid3X3 size={40} />
            Tic Tac Toe
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Play the classic game of Xs and Os right in your browser. Play against a friend or challenge the computer.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray overflow-hidden p-6 md:p-8">
          
          {/* Game Mode Selector */}
          <div className="flex bg-fun-bg rounded-xl border border-fun-gray/20 p-1 mb-8 w-full max-w-sm">
            <button
              onClick={() => { setGameMode('computer'); resetGame(); }}
              className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${gameMode === 'computer' ? 'bg-fun-primary text-fun-white shadow-md' : 'text-fun-dark hover:bg-fun-gray/10'}`}
            >
              Vs Computer
            </button>
            <button
              onClick={() => { setGameMode('player'); resetGame(); }}
              className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${gameMode === 'player' ? 'bg-fun-primary text-fun-white shadow-md' : 'text-fun-dark hover:bg-fun-gray/10'}`}
            >
              2 Players
            </button>
          </div>

          {/* Status Display */}
          <div className="mb-8 text-center min-h-[40px]">
            {winner ? (
              <p className="text-3xl font-black text-fun-primary animate-bounce">
                {winner} Wins!
              </p>
            ) : isDraw ? (
              <p className="text-3xl font-black text-fun-gray">
                It's a Draw!
              </p>
            ) : (
              <p className="text-xl font-bold text-fun-dark">
                {gameMode === 'computer' && !xIsNext ? "Computer is thinking..." : `Turn: Player ${xIsNext ? 'X' : 'O'}`}
              </p>
            )}
          </div>

          {/* Game Board */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10 w-full max-w-[320px] sm:max-w-[400px]">
            {board.map((cell, index) => {
              const isWinningCell = winningLine?.includes(index);
              return (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  disabled={cell !== null || winner || isDraw || (gameMode === 'computer' && !xIsNext)}
                  className={`
                    h-24 sm:h-32 text-5xl sm:text-7xl font-black rounded-2xl flex items-center justify-center transition-all duration-300
                    ${cell === null && !winner ? 'bg-fun-bg hover:bg-fun-primary/10 cursor-pointer border-2 border-transparent' : ''}
                    ${cell !== null && !isWinningCell ? 'bg-fun-white border-2 border-fun-gray/20 cursor-default' : ''}
                    ${isWinningCell ? 'bg-emerald-100 text-emerald-600 border-2 border-emerald-400 scale-105 shadow-lg z-10' : ''}
                    ${cell === 'X' && !isWinningCell ? 'text-fun-primary' : ''}
                    ${cell === 'O' && !isWinningCell ? 'text-amber-500' : ''}
                  `}
                >
                  <span className={cell ? 'animate-in zoom-in duration-300' : ''}>
                    {cell}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={resetGame}
            className="bg-fun-bg hover:bg-fun-gray/20 text-fun-dark border border-fun-gray/30 py-4 px-10 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} /> Restart Game
          </button>
        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fun-primary/10 text-fun-primary rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Monitor />
            </div>
            <h3 className="text-xl font-bold mb-2">Beat the AI</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Practice your strategies against our built-in computer opponent. It plays randomly, so you always have a chance to win.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Target />
            </div>
            <h3 className="text-xl font-bold mb-2">Local 2-Player</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Switch to 2-Player mode to play locally with a friend on the same device. No paper or pens required.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Zap />
            </div>
            <h3 className="text-xl font-bold mb-2">Beautiful UI</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Enjoy smooth animations, clear victory indicators, and a responsive design that looks great on mobile.</p>
          </div>
        </section>

        <TicTacToeSeo />
        <RelatedFunTools currentPath="/tools/fun-tools/tic-tac-toe" />
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6 text-center">
        <p className="text-sm text-fun-gray">© {new Date().getFullYear()} ToolsWizard — Playful Tools for Everyone.</p>
      </footer>
    </div>
  );
}
