import React from 'react';
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

export default function RelatedFunTools({ currentPath }) {
  // Filter out the current tool
  const related = funTools.filter(tool => tool.link !== currentPath);

  return (
    <div className="mt-16 bg-fun-white rounded-3xl shadow-2xl border border-fun-gray/30 p-8">
      <div className="flex items-center justify-between mb-8 border-b border-fun-gray/20 pb-4">
        <h2 className="text-2xl font-bold text-fun-dark">Explore Other Fun Tools</h2>
        <Link 
          href="/tools/fun-tools" 
          className="text-fun-primary hover:text-fun-primaryDark font-semibold flex items-center gap-1 transition-colors text-sm"
        >
          View All <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((tool, index) => (
          <Link
            key={index}
            href={tool.link}
            className="group flex flex-col p-5 rounded-2xl border border-fun-gray/20 bg-fun-bg/30 hover:bg-fun-primary/5 hover:border-fun-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-fun-white shadow-sm flex items-center justify-center text-fun-primary group-hover:scale-110 group-hover:bg-fun-primary group-hover:text-fun-white transition-all duration-300">
                {tool.icon}
              </div>
              <h3 className="font-bold text-fun-dark text-lg group-hover:text-fun-primary transition-colors">
                {tool.title}
              </h3>
            </div>
            <p className="text-sm text-fun-gray leading-relaxed flex-grow">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
