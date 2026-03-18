export default function BmrContent() {
    return (
      <>
        <h2>Understanding Your Daily Calorie Needs: BMR and TDEE</h2>
        <p>
          Whether your goal is to lose weight, build muscle, or simply maintain a healthy lifestyle, understanding your daily energy expenditure is the crucial first step. Our advanced <strong>BMR and TDEE calculator</strong> takes the guesswork out of your nutrition by providing highly accurate, personalized calorie and macronutrient targets based on your unique body metrics and lifestyle.
        </p>
  
        <h3>What is Basal Metabolic Rate (BMR)?</h3>
        <p>
          Your <strong>Basal Metabolic Rate (BMR)</strong> represents the minimum number of calories your body requires to perform basic, life-sustaining functions while at rest. These functions include breathing, blood circulation, nutrient processing, and cell production. Even if you were to sleep in bed all day, your body would still burn this exact number of calories just to keep you alive.
        </p>
  
        <h3>What is Total Daily Energy Expenditure (TDEE)?</h3>
        <p>
          While BMR tells you what you burn at rest, your <strong>Total Daily Energy Expenditure (TDEE)</strong> calculates the total number of calories you burn in a 24-hour period by factoring in your physical movement. We calculate your TDEE by multiplying your BMR by an activity multiplier (ranging from sedentary to extra active). This number represents your <strong>maintenance calories</strong>.
        </p>
  
        <h3>How to Calculate BMR: The Mifflin-St Jeor Equation</h3>
        <p>
          To provide the most accurate results possible, our calculator uses the <strong>Mifflin-St Jeor equation</strong>. Introduced in 1990, it is widely endorsed by health, nutrition, and fitness professionals as the gold standard for predicting resting metabolic rate. 
        </p>
        <p>Here is the exact mathematical formula used to calculate your BMR:</p>
        
        <div className="bg-calc-lightGray/20 p-4 rounded-xl border border-calc-lightGray my-4">
          <p className="font-semibold mb-2">For Men:</p>
          <p className="text-center font-mono text-sm sm:text-base overflow-x-auto">
            BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
          </p>
          <p className="font-semibold mt-4 mb-2">For Women:</p>
          <p className="text-center font-mono text-sm sm:text-base overflow-x-auto">
            BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
          </p>
        </div>
  
        <h3>How is TDEE Calculated? (Activity Multipliers)</h3>
        <p>Once your BMR is established, it is multiplied by one of the following constants based on your lifestyle:</p>
        <ul>
          <li><strong>Sedentary (x 1.2):</strong> Little to no exercise, desk job.</li>
          <li><strong>Lightly Active (x 1.375):</strong> Light exercise or sports 1-3 days a week.</li>
          <li><strong>Moderately Active (x 1.55):</strong> Moderate exercise or sports 3-5 days a week.</li>
          <li><strong>Very Active (x 1.725):</strong> Hard exercise or sports 6-7 days a week.</li>
          <li><strong>Extra Active (x 1.9):</strong> Very hard exercise, physical job, or training twice a day.</li>
        </ul>
  
        <h3>How to Use Your Results to Reach Your Goals</h3>
        <p>
          Armed with your TDEE and the macronutrient breakdown (Carbohydrates, Protein, and Fat) provided in the chart above, you can confidently adjust your diet:
        </p>
        <ul>
          <li><strong>To Maintain Weight:</strong> Consume the exact number of calories shown in your TDEE result.</li>
          <li><strong>To Lose Weight:</strong> Create a <em>caloric deficit</em> by consuming 250 to 500 calories fewer than your TDEE. This typically results in a safe, sustainable weight loss of about 0.5 to 1 pound per week.</li>
          <li><strong>To Gain Muscle:</strong> Create a <em>caloric surplus</em> by consuming 250 to 500 calories more than your TDEE while consistently engaging in resistance and strength training.</li>
        </ul>
        
        <p className="text-sm text-calc-gray mt-6 italic">
          Disclaimer: This calculator provides estimates based on standard mathematical formulas. For personalized medical or nutritional advice, please consult with a qualified healthcare provider or registered dietitian.
        </p>
      </>
    );
  }