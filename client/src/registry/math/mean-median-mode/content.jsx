import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Mean, Median, Mode & Range Calculator | Free Statistics Tool</title>
        <meta 
          name="description" 
          content="Calculate the mean, median, mode, and range of any dataset instantly. Free online statistics calculator for students and professionals." 
        />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Understanding the Averages</h2>
        <p className="mb-4">
          In statistics, "average" can mean different things depending on how you look at the data. <strong>Mean</strong>, <strong>Median</strong>, and <strong>Mode</strong> are the three primary ways to measure the central tendency of a dataset. 
        </p>
      </section>

      <section>
        <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-6 space-y-8">
          
          {/* MEAN SECTION */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">1. Mean (The True Average)</h3>
            <p className="text-sm mb-4">
              The <strong>mean</strong> is what most people think of when they hear the word "average." You find it by adding up all the numbers in your dataset, then dividing by the total count of numbers (<i>n</i>).
            </p>
            
            {/* Mean Formula */}
            <div className="bg-blue-50/50 p-4 rounded-lg flex justify-center text-lg text-calc-black border border-blue-100 font-semibold mb-4 overflow-x-auto">
              <div className="flex items-center gap-3">
                <span>Mean (<i>x̄</i>) =</span>
                <div className="flex flex-col items-center">
                  <span className="border-b-2 border-calc-black px-2 pb-1">
                    &Sigma;<i>x</i>
                  </span>
                  <span className="pt-1"><i>n</i></span>
                </div>
              </div>
            </div>

            <ul className="list-disc pl-6 text-sm space-y-1">
              <li><strong>&Sigma;<i>x</i> :</strong> The sum of all the values in your dataset.</li>
              <li><strong><i>n</i> :</strong> The total number of values.</li>
              <li><strong>Best used when:</strong> Your data does not have extreme outliers (unusually high or low numbers), as outliers can heavily skew the mean.</li>
            </ul>
          </div>

          {/* MEDIAN SECTION */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-xl font-bold text-green-800 mb-2">2. Median (The Middle Value)</h3>
            <p className="text-sm mb-4">
              The <strong>median</strong> is the exact middle number when you line up all your data from smallest to largest. The formula changes slightly depending on whether you have an odd or even amount of numbers.
            </p>

            {/* Median Formula */}
            <div className="bg-green-50/50 p-4 rounded-lg flex flex-col items-center text-lg text-calc-black border border-green-100 font-semibold mb-4 overflow-x-auto gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-normal mr-2">If <i>n</i> is odd:</span>
                <span>Median = <i>x</i><sub>(<i>n</i>+1)/2</sub></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 font-normal mr-2">If <i>n</i> is even:</span>
                <span>Median =</span>
                <div className="flex flex-col items-center">
                  <span className="border-b-2 border-calc-black px-2 pb-1">
                    <i>x</i><sub>(<i>n</i>/2)</sub> + <i>x</i><sub>(<i>n</i>/2)+1</sub>
                  </span>
                  <span className="pt-1">2</span>
                </div>
              </div>
            </div>

            <ul className="list-disc pl-6 text-sm space-y-1">
              <li><strong><i>x</i><sub>position</sub> :</strong> The value at that specific position in your sorted list.</li>
              <li><strong>Best used when:</strong> You have extreme outliers (like calculating average household income), because the median is not skewed by a few massive numbers.</li>
            </ul>
          </div>

          {/* MODE SECTION */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-xl font-bold text-orange-800 mb-2">3. Mode (The Most Frequent)</h3>
            <p className="text-sm mb-4">
              The <strong>mode</strong> is simply the number that appears the most often in your dataset. While there isn't a complex algebraic equation for raw data, it is defined conceptually:
            </p>

            {/* Mode Formula Concept */}
            <div className="bg-orange-50/50 p-4 rounded-lg flex justify-center text-lg text-calc-black border border-orange-100 font-semibold mb-4 text-center">
              Mode = The value(s) of x with the maximum frequency
            </div>

            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>A dataset can have one mode, multiple modes (bimodal/multimodal), or "None" if every number only appears once.</li>
              <li><strong>Best used when:</strong> You want to know the most common or popular occurrence in a dataset.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* RANGE SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is the Range?</h2>
        <p className="mb-4">
          The <strong>Range</strong> measures how spread out your data is. You calculate it simply by subtracting the smallest number in your dataset from the largest number.
        </p>
        
        <div className="bg-calc-lightGray/20 p-4 rounded-lg flex justify-center text-lg text-calc-black border border-calc-lightGray font-semibold mb-4">
          Range = Maximum Value - Minimum Value
        </div>

        <p>
          A small range means your numbers are tightly grouped together, while a large range means they are widely dispersed.
        </p>
      </section>
    </div>
  );
}