import React from 'react';

export default function TDEEContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Understanding Your Daily Calorie Burn</h2>
      <p>
        Whether you want to lose belly fat, build muscle, or just maintain a healthy weight, knowing your exact energy requirement is step one. An accurate <strong>TDEE calculator</strong> tells you exactly how many calories your body burns in a 24-hour period.
      </p>

      <h3>Important Fitness Abbreviations</h3>
      <ul>
        <li><strong>TDEE (Total Daily Energy Expenditure):</strong> The total number of calories you burn in a day, factoring in your resting body functions, daily movement, and workouts. Also known as your <strong>maintenance calories</strong>.</li>
        <li><strong>BMR (Basal Metabolic Rate):</strong> The calories your body burns just to stay alive (breathing, pumping blood, brain function) if you were to stay in bed all day without moving.</li>
        <li><strong>NEAT (Non-Exercise Activity Thermogenesis):</strong> The calories burned through daily movements that aren't structured workouts—like walking to the metro, typing, cooking, or even fidgeting.</li>
        <li><strong>TEF (Thermic Effect of Food):</strong> The energy your body uses to digest the food you eat. (Protein takes the most energy to digest!)</li>
      </ul>

      <hr className="my-6" />

      <h3>The Science Behind the Calculation</h3>
      <p>
        Our calculator uses the <strong>Mifflin-St Jeor Equation</strong>. Developed in 1990, it is widely considered by dietitians and medical professionals to be the most accurate formula for modern populations.
      </p>

      <h4>Step 1: Calculate Your BMR</h4>
      <p>The formula requires your weight in kilograms and your height in centimeters.</p>
      
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>For Men:</strong><br />
        BMR = (10 × weight) + (6.25 × height) - (5 × age) + 5
        <br /><br />
        <strong>For Women:</strong><br />
        BMR = (10 × weight) + (6.25 × height) - (5 × age) - 161
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Example (28-year-old Indian Male, 75 kg, 5'9" or 175 cm):</strong><br />
        (10 × 75) + (6.25 × 175) - (5 × 28) + 5<br />
        = 750 + 1093.75 - 140 + 5<br />
        = <strong>1,708.75 Calories (BMR)</strong>
      </div>

      <h4>Step 2: Apply the Activity Multiplier</h4>
      <p>
        Your BMR is just your resting state. To find your <strong>Total Daily Energy Expenditure (TDEE)</strong>, we multiply your BMR by an activity factor based on your lifestyle:
      </p>
      <ul>
        <li><strong>1.2 (Sedentary):</strong> Typical desk jobs in IT or corporate sectors with minimal walking.</li>
        <li><strong>1.375 (Lightly Active):</strong> 10k daily steps or light gym workouts 1-3 days a week.</li>
        <li><strong>1.55 (Moderately Active):</strong> Proper workout sessions 3-5 days a week.</li>
        <li><strong>1.725 (Very Active):</strong> Intense training 6 days a week or playing active sports.</li>
      </ul>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Completing the Example (Assuming a Sedentary IT Job):</strong><br />
        TDEE = 1,708.75 × 1.2<br />
        TDEE = <strong>2,050 Calories / Day</strong>
      </div>

      <hr className="my-6" />

      <h3>How to use your TDEE to reach your goals</h3>
      <p>
        Once you have your maintenance number (e.g., 2050 calories), adjusting your diet is simple math:
      </p>
      <ul>
        <li><strong>For Weight Loss (Calorie Deficit):</strong> Subtract 300 to 500 calories from your TDEE. Eating 500 calories less per day results in roughly 0.5 kg of fat loss per week. <em>(Target: 1550 kcal)</em></li>
        <li><strong>For Muscle Gain (Calorie Surplus):</strong> Add 200 to 300 calories to your TDEE. A small surplus ensures you build muscle without gaining excessive fat. <em>(Target: 2350 kcal)</em></li>
        <li><strong>For Maintenance:</strong> Eat exactly your TDEE. Your weight will stay the same.</li>
      </ul>
      
      <p className="mt-4 text-sm text-calc-darkGray italic">
        *Disclaimer: Calculators provide estimates based on averages. Your actual metabolism may vary slightly based on genetics, muscle mass, and medical conditions (like thyroid issues or PCOS). Monitor your weight for 2 weeks and adjust your calories as needed!
      </p>
    </div>
  );
}