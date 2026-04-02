import React from "react";

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-calc-darkGray mt-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-calc-black">
          Understanding NEET Marks vs. Rank
        </h2>
        <p className="mb-4 leading-relaxed">
          The National Eligibility cum Entrance Test (NEET) is highly competitive. Because the difficulty of the paper changes every year, your raw score (out of 720) isn't the only thing that matters for medical college admissions. What truly matters is your <strong>All India Rank (AIR)</strong> and your <strong>Percentile</strong>.
        </p>
        <p className="mb-4 leading-relaxed">
          Our predictor uses historical data trends from the National Testing Agency (NTA) to estimate your standing among millions of candidates.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray">
        <h3 className="text-xl font-bold text-calc-black mb-4">
          How is the NEET Percentile Calculated?
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          Your percentile score indicates the percentage of candidates who scored equal to or less than you. It is a relative metric, not an absolute one.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-calc-lightGray mb-4 overflow-x-auto text-center">
          <p className="font-bold text-calc-black mb-2">The NTA Percentile Formula:</p>
          <div className="my-4 font-mono text-lg text-calc-green font-bold">
            Percentile = (Number of candidates with a score equal to or less than yours ÷ Total number of candidates) × 100
          </div>
        </div>

        <h4 className="font-bold text-calc-black mb-2 mt-6">Example Calculation:</h4>
        <ul className="text-sm space-y-2 list-disc pl-5">
          <li>Suppose <strong>2,500,000</strong> students appear for NEET.</li>
          <li>If your rank is <strong>25,000</strong>, it means 2,475,000 students scored less than or equal to you.</li>
          <li>Calculation: (2,475,000 ÷ 2,500,000) × 100 = <strong>99.00 Percentile</strong>.</li>
        </ul>
      </section>

      <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
        <h3 className="text-xl font-bold text-calc-black mb-4">
          The NTA Tie-Breaking Criteria
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          With millions of test-takers, it is very common for hundreds of students to score the exact same marks out of 720. To assign a unique All India Rank, the NTA uses a strict tie-breaking sequence. If two students score the same marks, the rank is decided by:
        </p>
        
        <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-800">
          <li>
            <strong>Biology Marks:</strong> The candidate with higher marks in Biology (Botany + Zoology) gets the higher rank.
          </li>
          <li>
            <strong>Chemistry Marks:</strong> If Biology marks are identical, the candidate with higher marks in Chemistry gets the higher rank.
          </li>
          <li>
            <strong>Physics Marks:</strong> If Chemistry marks are also identical, the candidate with higher marks in Physics is preferred.
          </li>
          <li>
            <strong>Fewer Incorrect Answers:</strong> If subject scores are still tied, the candidate with the lower proportion of incorrect answers across all subjects gets the higher rank.
          </li>
          <li>
            <strong>Age:</strong> Historically, older candidates were given preference, but the NTA frequently updates this specific rule, relying primarily on the subject and accuracy metrics first.
          </li>
        </ol>
      </section>
      
      <section>
        <h3 className="text-xl font-bold text-calc-black mb-4">What is the Qualifying Cut-off?</h3>
        <p className="text-sm leading-relaxed">
          To participate in medical counseling (MBBS/BDS), you must meet the minimum qualifying percentile. Generally, this is the <strong>50th Percentile</strong> for General/EWS categories, and the <strong>40th Percentile</strong> for OBC/SC/ST categories. Depending on the paper's difficulty, the 50th percentile usually translates to a raw score between 135 and 145 out of 720 marks.
        </p>
      </section>
    </div>
  );
}