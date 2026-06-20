import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Heart,
  Users,
  Cake,
  Dices,
  RotateCw,
  HelpCircle,
  Coins,
  Palette,
  Sparkles,
  Grid3X3,
  Target,
  ArrowRight
} from 'lucide-react';

const funTools = [
  {
    title: 'Love Percentage Calculator',
    description: 'Discover a playful compatibility score between two names—instant fun for couples and friends.',
    icon: <Heart className="w-5 h-5" />,
    link: '/tools/fun-tools/love-percentage',
  },
  {
    title: 'Friendship Calculator',
    description: 'See how strong your friendship bond might be based on two names.',
    icon: <Users className="w-5 h-5" />,
    link: '/tools/fun-tools/friendship-calculator',
  },
  {
    title: 'Guess Your Age Tool',
    description: 'Answer a few fun questions and get a lighthearted age guess.',
    icon: <Cake className="w-5 h-5" />,
    link: '/tools/fun-tools/guess-your-age',
  },
  {
    title: 'Random Number Generator',
    description: 'Generate random numbers within any range for games and decisions.',
    icon: <Dices className="w-5 h-5" />,
    link: '/tools/fun-tools/random-number-generator',
  },
  {
    title: 'Random Wheel Spinner',
    description: 'Spin a colorful wheel to pick winners, tasks, or random choices.',
    icon: <RotateCw className="w-5 h-5" />,
    link: '/tools/fun-tools/random-wheel-spinner',
  },
  {
    title: 'Yes/No Picker',
    description: 'Stuck on a decision? Let fate choose yes or no for you instantly.',
    icon: <HelpCircle className="w-5 h-5" />,
    link: '/tools/fun-tools/yes-no-picker',
  },
  {
    title: 'Dice Roller',
    description: 'Roll virtual dice for board games, RPGs, and party games.',
    icon: <Dices className="w-5 h-5" />,
    link: '/tools/fun-tools/dice-roller',
  },
  {
    title: 'Coin Flip',
    description: 'Flip a virtual coin for heads or tails—fair and instant.',
    icon: <Coins className="w-5 h-5" />,
    link: '/tools/fun-tools/coin-flip',
  },
  {
    title: 'Random Color Generator',
    description: 'Get surprise hex colors for design inspiration and creative prompts.',
    icon: <Palette className="w-5 h-5" />,
    link: '/tools/fun-tools/random-color-generator',
  },
  {
    title: 'Lucky Number Generator',
    description: 'Pick lucky numbers for fun, raffles, and casual superstition.',
    icon: <Sparkles className="w-5 h-5" />,
    link: '/tools/fun-tools/lucky-number-generator',
  },
  {
    title: 'Tic Tac Toe',
    description: 'Play classic tic tac toe against the computer in your browser.',
    icon: <Grid3X3 className="w-5 h-5" />,
    link: '/tools/fun-tools/tic-tac-toe',
  },
  {
    title: 'Number Guessing Game',
    description: 'Guess the secret number with hints—how few tries can you use?',
    icon: <Target className="w-5 h-5" />,
    link: '/tools/fun-tools/number-guessing-game',
  },
];

export default function RelatedFunTools(props) {
  const currentPath = props.currentToolPath || props.currentPath || "";
  const [tools, setTools] = useState([]);

  useEffect(() => {
    if (!currentPath) {
      setTools(funTools);
      return;
    }
    // Filter out the current tool
    const filteredTools = funTools.filter(tool => tool.link !== currentPath && !tool.link.includes(currentPath));
    setTools(filteredTools);
  }, [currentPath]);

  if (tools.length === 0) return null;

  return (
    <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Fun Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          
          return (
            <Link
              key={index}
              href={tool.link}
              className="group flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 shadow-sm bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-gray-50 text-gray-500 group-hover:text-black group-hover:bg-gray-200">
                {React.isValidElement(tool.icon) ? tool.icon : <Icon size={20} />}
              </div>
              <span className="font-bold text-sm line-clamp-1 text-gray-700 group-hover:text-black">
                {tool.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}