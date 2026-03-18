export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">What is Body Mass Index (BMI)?</h2>
        <p>Body Mass Index (BMI) is a simple medical screening tool that uses your height and weight to estimate how much body fat you have. It is used globally to quickly determine if a person is at a healthy weight, underweight, overweight, or obese.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">The BMI Formulas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm text-center">
            <p className="text-sm text-calc-darkGray mb-2">Metric System</p>
            <p className="text-lg font-mono font-bold text-calc-green">BMI = Weight (kg) / [Height (m)]²</p>
          </div>
          <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm text-center">
            <p className="text-sm text-calc-darkGray mb-2">US Standard System</p>
            <p className="text-lg font-mono font-bold text-calc-green">BMI = 703 × (Weight (lbs) / [Height (in)]²)</p>
          </div>
        </div>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Why do we ask for Age and Gender?</h3>
        <p>While the standard adult BMI formula does not change based on age or gender, providing this information allows us to calculate your <strong>Basal Metabolic Rate (BMR)</strong>. Your BMR is the exact number of calories your body burns at rest just to keep your organs functioning. If your goal is to reach your "Ideal Weight Range," knowing your BMR is the very first step in adjusting your diet!</p>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Limitations of the BMI Calculator</h3>
        <div className="bg-calc-white p-5 rounded-xl border border-calc-lightGray shadow-sm mt-4">
          <p className="text-sm text-calc-darkGray">While BMI is a great general indicator, it cannot distinguish between fat and muscle. Highly muscular athletes may classify as "Overweight" despite having very low body fat percentages. It also does not account for bone density or fat distribution.</p>
        </div>
      </div>
    );
  }