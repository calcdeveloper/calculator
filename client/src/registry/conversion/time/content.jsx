import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Time Conversion Formulas</h2>
        <p className="mb-4">
          Time conversions are unique because they do not use a standard "base-10" decimal system. Instead, our clocks rely on a combination of base-60 math (60 seconds in a minute) and base-24 math (24 hours in a day) inherited from ancient civilizations!
        </p>
        <p>
          Whether you are tracking hours for a paycheck, converting a video length from seconds to minutes, or calculating exactly how many days are in a decade, understanding these precise formulas is essential. Below is a complete breakdown of every major time conversion formula.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Micro-Time Formulas (Milliseconds to Minutes)</h3>
        <p className="text-sm mb-4">These conversions are heavily used in programming, sports timing, and video editing.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Milliseconds (ms) & Seconds (s)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Second = 1,000 Milliseconds</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>ms to s:</strong> Divide by 1,000. <em>Example: 5,000 ms ÷ 1,000 = 5 seconds</em></li>
              <li><strong>s to ms:</strong> Multiply by 1,000. <em>Example: 3 seconds × 1,000 = 3,000 ms</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Seconds (s) & Minutes (min)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Minute = 60 Seconds</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>s to min:</strong> Divide by 60. <em>Example: 180 seconds ÷ 60 = 3 minutes</em></li>
              <li><strong>min to s:</strong> Multiply by 60. <em>Example: 5 minutes × 60 = 300 seconds</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Daily Time Formulas (Minutes to Days)</h3>
        <p className="text-sm mb-4">These formulas are the most commonly searched for calculating payroll, work shifts, and travel times.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Minutes (min) & Hours (hr)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Hour = 60 Minutes</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>min to hr:</strong> Divide by 60. <em>Example: 120 minutes ÷ 60 = 2 hours</em></li>
              <li><strong>hr to min:</strong> Multiply by 60. <em>Example: 4 hours × 60 = 240 minutes</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Hours (hr) & Days (d)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Day = 24 Hours</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>hr to d:</strong> Divide by 24. <em>Example: 72 hours ÷ 24 = 3 days</em></li>
              <li><strong>d to hr:</strong> Multiply by 24. <em>Example: 5 days × 24 = 120 hours</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Seconds (s) & Hours (hr)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Hour = 3,600 Seconds (60 minutes × 60 seconds)</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>s to hr:</strong> Divide by 3,600. <em>Example: 7,200 seconds ÷ 3,600 = 2 hours</em></li>
              <li><strong>hr to s:</strong> Multiply by 3,600. <em>Example: 3 hours × 3,600 = 10,800 seconds</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Calendar Time Formulas (Weeks to Centuries)</h3>
        <p className="text-sm mb-4">When converting large amounts of time, standard math assumes a "standard" non-leap year consisting of exactly 365 days.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Days (d) & Weeks (wk)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Week = 7 Days</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>d to wk:</strong> Divide by 7. <em>Example: 21 days ÷ 7 = 3 weeks</em></li>
              <li><strong>wk to d:</strong> Multiply by 7. <em>Example: 4 weeks × 7 = 28 days</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Days (d) & Years (yr)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Standard Year = 365 Days</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>d to yr:</strong> Divide by 365. <em>Example: 730 days ÷ 365 = 2 years</em></li>
              <li><strong>yr to d:</strong> Multiply by 365. <em>Example: 5 years × 365 = 1,825 days</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Months (mo) & Years (yr)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Year = 12 Months</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>mo to yr:</strong> Divide by 12. <em>Example: 48 months ÷ 12 = 4 years</em></li>
              <li><strong>yr to mo:</strong> Multiply by 12. <em>Example: 10 years × 12 = 120 months</em></li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Decades & Centuries</h4>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>1 Decade</strong> = 10 Years</li>
              <li><strong>1 Century</strong> = 100 Years (or 10 Decades)</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="space-y-4 mt-8">
        <h3 className="text-lg font-semibold text-gray-900">Why are months tricky to convert?</h3>
        <p className="text-sm">
          Unlike seconds or hours, a "month" is not a perfectly fixed amount of time—it can be 28, 29, 30, or 31 days long depending on the calendar! To make mathematical conversions possible, calculators and scientists use an <strong>average month length of 30.416 days</strong> (which is 365 days divided by 12 months).
        </p>
      </section>
    </div>
  );
}