// client/src/registry/everyday/basic-calculator/config.js

export const config = {
    id: "basic-calculator",
    name: "Scientific Calculator",
    description: "Free online basic and scientific calculator. Solve advanced math, trigonometry, logarithms, and fractions instantly.",
    category: "everyday",
    seoTitle: "Online Scientific Calculator | Basic & Advanced Math",
    seoDescription: "Use this free online scientific calculator to solve basic arithmetic, trigonometry, fractions, and logarithms. Includes formulas and step-by-step math guides.",
    seoKeywords: "scientific calculator online, basic calculator, math calculator, online calc, trigonometry calculator, exponent calculator, calculate logarithms",
    customComponent: true, // Tells your app to use index.jsx
    inputs: [], // <-- ADD THIS: Prevents the .forEach() crash in CalculatorLayout
  };