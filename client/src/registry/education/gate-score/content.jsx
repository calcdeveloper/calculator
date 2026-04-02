import React from "react";

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-calc-darkGray mt-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-calc-black">
          How is the GATE Score Calculated?
        </h2>
        <p className="mb-4 leading-relaxed">
          The GATE Score is a normalized value used to compare the performance of candidates across different subjects and years. While your <strong>GATE Marks</strong> are the actual raw marks you obtain out of 100, the <strong>GATE Score</strong> is calculated out of 1000.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray">
        <h3 className="text-xl font-bold text-calc-black mb-4">
          The Official GATE Score Formula
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          The organizing IIT uses the following mathematical formula to determine your score:
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-calc-lightGray mb-4 overflow-x-auto text-center">
          <p className="font-bold text-calc-black mb-2">Formula:</p>
          <div className="my-4 font-mono text-lg text-calc-green font-bold">
            Score = Sq + (St - Sq) × [(M - Mq) / (Mt - Mq)]
          </div>
        </div>

        <h4 className="font-bold text-calc-black mb-2 mt-4 underline">Variable Definitions:</h4>
        <ul className="text-sm space-y-3 list-none pl-0">
          <li><strong>M:</strong> Marks obtained by the candidate (actual raw marks).</li>
          <li><strong>Mq:</strong> Qualifying marks for general category candidate in that paper.</li>
          <li><strong>Mt:</strong> Mean marks of top 0.1% or top 10 candidates (whichever is larger).</li>
          <li><strong>Sq:</strong> 350 (The score assigned to Mq).</li>
          <li><strong>St:</strong> 900 (The score assigned to Mt).</li>
        </ul>
      </section>

      <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h3 className="text-xl font-bold text-calc-black mb-4">Example Calculation</h3>
        <div className="text-sm space-y-2">
          <p>Assume the following values for a Computer Science paper:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Your Marks (M): <strong>65</strong></li>
            <li>Qualifying Marks (Mq): <strong>25</strong></li>
            <li>Top 0.1% Mean (Mt): <strong>85</strong></li>
          </ul>
          <p className="font-semibold">Calculation Steps:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Subtract Mq from M: 65 - 25 = 40</li>
            <li>Subtract Mq from Mt: 85 - 25 = 60</li>
            <li>Divide the results: 40 / 60 = 0.666</li>
            <li>Multiply by (St - Sq): 0.666 × (900 - 350) = 0.666 × 550 = 366.6</li>
            <li>Add Sq: 366.6 + 350 = <strong>716.6</strong></li>
          </ol>
          <p className="mt-2 text-blue-700 font-bold">Your GATE Score would be approximately 717.</p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-calc-black mb-4">Important Notes</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Validity:</strong> A GATE score is typically valid for 3 years from the date of announcement of results.</li>
          <li><strong>Normalization:</strong> For papers conducted in multiple sessions (like CS, ME, CE), marks are first normalized to account for variations in difficulty level before the score is calculated.</li>
          <li><strong>Qualifying:</strong> If your marks are less than the qualifying marks (Mq), your score is usually not generated or is set to a baseline.</li>
        </ul>
      </section>
    </div>
  );
}