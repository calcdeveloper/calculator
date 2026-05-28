import Link from 'next/link';
import {
  Heart,
  Users,
  Cake,
  Dices,
  CircleDot,
  HelpCircle,
  RotateCw,
  Coins,
  Palette,
  Sparkles,
  Smile,
  Grid3X3,
  Target,
  ChevronRight,
} from 'lucide-react';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = 'force-static';

export const metadata = createPageMetadata({
  title: 'Fun Tools - Free Online Games & Entertainment Utilities',
  description:
    'Play with love calculators, coin flip, dice roller, random wheels, and more free fun tools on ToolsWizard. No signup, instant results, mobile-friendly.',
  path: '/tools/fun-tools',
  keywords: [
    'fun tools online',
    'love percentage calculator',
    'coin flip online',
    'random number generator',
    'yes or no picker',
    'dice roller',
    'friendship calculator',
  ],
});

const funTools = [
  {
    title: 'Love Percentage Calculator',
    description: 'Discover a playful compatibility score between two names—instant fun for couples and friends.',
    icon: <Heart className="w-6 h-6" />,
    iconBg: 'bg-rose-100 text-rose-600',
    link: '/tools/fun-tools/love-percentage',
    status: 'active',
  },
  {
    title: 'Friendship Calculator',
    description: 'See how strong your friendship bond might be based on two names.',
    icon: <Users className="w-6 h-6" />,
    iconBg: 'bg-blue-100 text-blue-600',
    link: '/tools/fun-tools/friendship-calculator',
    status: 'active',
  },
  {
    title: 'Guess Your Age Tool',
    description: 'Answer a few fun questions and get a lighthearted age guess.',
    icon: <Cake className="w-6 h-6" />,
    iconBg: 'bg-amber-100 text-amber-600',
    link: '/tools/fun-tools/guess-your-age',
    status: 'coming-soon',
  },
  {
    title: 'Random Number Generator',
    description: 'Generate random numbers within any range for games and decisions.',
    icon: <Dices className="w-6 h-6" />,
    iconBg: 'bg-violet-100 text-violet-600',
    link: '/tools/fun-tools/random-number-generator',
    status: 'coming-soon',
  },
  {
    title: 'Random Wheel Spinner',
    description: 'Spin a colorful wheel to pick winners, tasks, or random choices.',
    icon: <RotateCw className="w-6 h-6" />,
    iconBg: 'bg-indigo-100 text-indigo-600',
    link: '/tools/fun-tools/random-wheel-spinner',
    status: 'coming-soon',
  },
  {
    title: 'Yes/No Picker',
    description: 'Stuck on a decision? Let fate choose yes or no for you instantly.',
    icon: <HelpCircle className="w-6 h-6" />,
    iconBg: 'bg-teal-100 text-teal-600',
    link: '/tools/fun-tools/yes-no-picker',
    status: 'coming-soon',
  },
  {
    title: 'Dice Roller',
    description: 'Roll virtual dice for board games, RPGs, and party games.',
    icon: <Dices className="w-6 h-6" />,
    iconBg: 'bg-orange-100 text-orange-600',
    link: '/tools/fun-tools/dice-roller',
    status: 'coming-soon',
  },
  {
    title: 'Coin Flip',
    description: 'Flip a virtual coin for heads or tails—fair and instant.',
    icon: <Coins className="w-6 h-6" />,
    iconBg: 'bg-yellow-100 text-yellow-700',
    link: '/tools/fun-tools/coin-flip',
    status: 'active',
  },
  {
    title: 'Random Color Generator',
    description: 'Get surprise hex colors for design inspiration and creative prompts.',
    icon: <Palette className="w-6 h-6" />,
    iconBg: 'bg-pink-100 text-pink-600',
    link: '/tools/fun-tools/random-color-generator',
    status: 'coming-soon',
  },
  {
    title: 'Lucky Number Generator',
    description: 'Pick lucky numbers for fun, raffles, and casual superstition.',
    icon: <Sparkles className="w-6 h-6" />,
    iconBg: 'bg-fuchsia-100 text-fuchsia-600',
    link: '/tools/fun-tools/lucky-number-generator',
    status: 'coming-soon',
  },
  {
    title: 'Face Swap Tool',
    description: 'Swap faces in photos for hilarious results (coming soon).',
    icon: <Smile className="w-6 h-6" />,
    iconBg: 'bg-lime-100 text-lime-700',
    link: '/tools/fun-tools/face-swap',
    status: 'coming-soon',
  },
  {
    title: 'Tic Tac Toe',
    description: 'Play classic tic tac toe against the computer in your browser.',
    icon: <Grid3X3 className="w-6 h-6" />,
    iconBg: 'bg-cyan-100 text-cyan-700',
    link: '/tools/fun-tools/tic-tac-toe',
    status: 'coming-soon',
  },
  {
    title: 'Number Guessing Game',
    description: 'Guess the secret number with hints—how few tries can you use?',
    icon: <Target className="w-6 h-6" />,
    iconBg: 'bg-emerald-100 text-emerald-600',
    link: '/tools/fun-tools/number-guessing-game',
    status: 'coming-soon',
  },
];

export default function FunToolsPage() {
  return (
    <div className="min-h-screen bg-fun-bg font-sans text-fun-dark">
      <header className="bg-gradient-to-r from-fun-primary to-fun-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-fun-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Fun Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight">
            Fun Tools
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Free online games, randomizers, and playful calculators for entertainment and quick decisions
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funTools.map((tool, index) => (
            <div
              key={index}
              className="bg-fun-white rounded-2xl p-8 flex flex-col border border-fun-gray/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-300 ${tool.iconBg}`}
                >
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-fun-dark mb-1">{tool.title}</h3>
                  <p className="text-fun-gray text-sm leading-relaxed">{tool.description}</p>
                </div>
              </div>
              {tool.status === 'active' ? (
                <Link
                  href={tool.link}
                  className="mt-auto w-full bg-fun-primary hover:bg-fun-primaryDark text-fun-white text-center py-3 rounded-lg font-bold transition-colors shadow-sm"
                >
                  Use Tool
                </Link>
              ) : (
                <button
                  disabled
                  className="mt-auto w-full bg-fun-gray/20 text-fun-gray text-center py-3 rounded-lg font-bold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-fun-gray/30">
          <h2 className="text-3xl font-bold text-fun-dark mb-6">About Fun Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-fun-gray leading-relaxed">
            <p>
              ToolsWizard Fun Tools bring lighthearted utilities to your browser—love percentage calculators,
              coin flips, random pickers, and classic mini-games. Everything runs locally for privacy and speed,
              with no account required.
            </p>
            <p>
              Whether you need a quick <strong>heads or tails</strong> decision, a playful{' '}
              <strong>love compatibility score</strong>, or upcoming games like tic tac toe, our fun category is
              built for sharing laughs with friends and family online.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-fun-gray">
          <Link href="/" className="hover:text-fun-dark">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-fun-dark font-medium">Fun Tools</span>
        </div>
      </footer>
    </div>
  );
}
