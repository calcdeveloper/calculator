import React from 'react';

export default function Content() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Probability Basics</h2>
        <p className="mb-4">
          This calculator assumes events are <strong>independent</strong>, meaning the outcome of one event does not affect the outcome of another. Please enter all values as percentages (e.g., type 45 for 45%).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Single Events Glossary</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Intersection (A ∩ B):</strong> The probability that BOTH events happen. We multiply their probabilities.</li>
          <li><strong>Union (A ∪ B):</strong> The probability that AT LEAST ONE event happens (A, or B, or both).</li>
          <li><strong>Symmetric Difference (A Δ B):</strong> The probability that EXACTLY ONE event happens (A happens and B doesn't, OR B happens and A doesn't).</li>
          <li><strong>Complement (A'):</strong> The probability that event A does NOT happen.</li>
        </ul>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Series of Events (Trials)</h3>
        <p className="text-sm mb-4">
          When dealing with a series of repeated trials (like flipping a coin 10 times):
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold text-sm">Always Occurring</h4>
            <p className="font-mono text-center text-xs mt-2">{"$P = p^n$"}</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold text-sm">Never Occurring</h4>
            <p className="font-mono text-center text-xs mt-2">{"$P = (1-p)^n$"}</p>
          </div>
        </div>
      </section>
    </div>
  );
}