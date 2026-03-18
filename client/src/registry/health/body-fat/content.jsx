export default function BodyFatContent() {
    return (
      <>
        <h2>How to Calculate Your Body Fat Percentage</h2>
        <p>
          Knowing your body fat percentage gives you a much better picture of your overall health than simply stepping on a scale. Weight alone doesn't tell you how much of your body is composed of muscle versus fat. Our <strong>Advanced Body Fat Calculator</strong> allows you to estimate your body composition using the most popular mathematical methods available.
        </p>
  
        <h3>The Science & Formulas Behind the Methods</h3>
        <p>
          There are many ways to measure body fat. While clinical methods like DEXA scans and hydrostatic weighing are the most accurate, at-home calculations rely on extensively tested anthropometric formulas. Below are the formulas utilized by our calculator, and how your <strong>Age</strong>, <strong>Gender</strong>, and <strong>Measurements</strong> impact the results:
        </p>
  
        <div className="space-y-4 my-6">
          
          {/* U.S. NAVY METHOD */}
          <div className="bg-calc-lightGray/20 p-5 rounded-xl border border-calc-lightGray">
            <h4 className="font-bold text-lg mb-2 text-calc-green">U.S. Navy Method</h4>
            <p className="text-sm mb-3">Uses a tape measure to track circumference. While age dictates military acceptance standards, the raw physical calculation relies strictly on structural dimensions.</p>
            <div className="bg-white p-3 rounded text-sm font-mono overflow-x-auto">
              <p className="font-semibold text-gray-700 mb-1">Men:</p>
              <p>BF% = 495 / (1.0324 - 0.19077 × log10(waist - neck) + 0.15456 × log10(height)) - 450</p>
              <p className="font-semibold text-gray-700 mt-3 mb-1">Women:</p>
              <p>BF% = 495 / (1.29579 - 0.35004 × log10(waist + hip - neck) + 0.22100 × log10(height)) - 450</p>
            </div>
          </div>
  
          {/* YMCA METHOD */}
          <div className="bg-calc-lightGray/20 p-5 rounded-xl border border-calc-lightGray">
            <h4 className="font-bold text-lg mb-2 text-calc-green">YMCA / Covert Bailey Method</h4>
            <p className="text-sm mb-3">A simplified formula requiring only weight and waist girth to estimate fat distribution.</p>
            <div className="bg-white p-3 rounded text-sm font-mono overflow-x-auto">
              <p className="font-semibold text-gray-700 mb-1">Men:</p>
              <p>BF% = ((-98.42 + 4.15 × waist[in] - 0.082 × weight[lbs]) / weight[lbs]) × 100</p>
              <p className="font-semibold text-gray-700 mt-3 mb-1">Women:</p>
              <p>BF% = ((-76.76 + 4.15 × waist[in] - 0.082 × weight[lbs]) / weight[lbs]) × 100</p>
            </div>
          </div>
  
          {/* BMI ESTIMATE */}
          <div className="bg-calc-lightGray/20 p-5 rounded-xl border border-calc-lightGray">
            <h4 className="font-bold text-lg mb-2 text-calc-green">Estimate from BMI</h4>
            <p className="text-sm mb-3">Uses your Body Mass Index as a baseline, directly adjusted by your <strong>Age</strong> and Gender.</p>
            <div className="bg-white p-3 rounded text-sm font-mono overflow-x-auto">
              <p>BF% = (1.20 × BMI) + (0.23 × Age) - (10.8 × SexModifier) - 5.4</p>
              <p className="text-xs text-gray-500 mt-1">*SexModifier: Men = 1, Women = 0</p>
            </div>
          </div>
  
          {/* JACKSON POLLOCK */}
          <div className="bg-calc-lightGray/20 p-5 rounded-xl border border-calc-lightGray">
            <h4 className="font-bold text-lg mb-2 text-calc-green">Jackson-Pollock 3-Site (Skinfold)</h4>
            <p className="text-sm mb-3">Uses skinfold calipers to determine Body Density (BD). Because skin elasticity and fat distribution change over time, <strong>Age</strong> is a required variable.</p>
            <div className="bg-white p-3 rounded text-sm font-mono overflow-x-auto">
              <p className="font-semibold text-gray-700 mb-1">Men (Chest, Abdomen, Thigh):</p>
              <p>BD = 1.10938 - (0.0008267 × Sum) + (0.0000016 × Sum²) - (0.0002574 × Age)</p>
              <p className="font-semibold text-gray-700 mt-3 mb-1">Women (Tricep, Suprailiac, Thigh):</p>
              <p>BD = 1.0994921 - (0.0009929 × Sum) + (0.0000023 × Sum²) - (0.0001392 × Age)</p>
              <p className="font-semibold text-gray-700 mt-3 mb-1">Final Calculation:</p>
              <p>BF% = (495 / BD) - 450</p>
            </div>
          </div>
  
        </div>
  
        <h3>Lean Body Mass vs. Fat Mass</h3>
        <p>
          When you use our calculator to input your weight, you will see your weight divided into two categories in the results chart: <strong>Fat Mass</strong> and <strong>Lean Body Mass (LBM)</strong>. Fat Mass is the actual physical weight of the fat on your body. Lean Body Mass is everything else: your bones, organs, blood, skin, and most importantly, your muscle tissue. 
        </p>
        <p>
          If your goal is fitness or weight loss, your aim should be to reduce Fat Mass while preserving or increasing your Lean Body Mass through sufficient protein intake and strength training.
        </p>
      </>
    );
  }