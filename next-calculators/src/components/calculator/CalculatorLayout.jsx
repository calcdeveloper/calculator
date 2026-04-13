import CalculatorClient from "./CalculatorClient";

export default function CalculatorLayout({ category, calculator, initialConfig, children }) {
  return (
    <CalculatorClient
      category={category}
      calculator={calculator}
      initialConfig={initialConfig}
    >
      {children}
    </CalculatorClient>
  );
}
