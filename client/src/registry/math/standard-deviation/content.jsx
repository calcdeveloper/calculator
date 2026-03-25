import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Standard Deviation & Variance Calculator | Free Online Stats Tool</title>
        <meta 
          name="description" 
          content="Easily calculate the sample and population standard deviation, variance, and mean for any dataset with our free statistics calculator." 
        />
        <meta name="keywords" content="standard deviation calculator, variance calculator, population standard deviation, sample standard deviation, statistics calculator, calculate mean" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Understanding Standard Deviation</h2>
        <p className="mb-4">
          In statistics, <strong>Standard Deviation</strong> is a measure of the amount of variation or dispersion in a set of values. 
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>A <strong>low standard deviation</strong> indicates that the values tend to be close to the mean (average) of the set.</li>
          <li>A <strong>high standard deviation</strong> indicates that the values are spread out over a wider range.</li>
        </ul>
        <p>
          It is heavily used in finance to measure market volatility, in manufacturing for quality control, and in research to understand data distribution.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Sample vs. Population: Which should I use?</h2>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-6">
          <p className="mb-3">
            Our calculator provides results for both <em>Population</em> and <em>Sample</em> calculations. The difference lies in the dataset you are measuring:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-900 mb-2">Sample Standard Deviation ($s$)</h3>
              <p className="text-sm">Use this if your data represents only a small <strong>sample</strong> of a larger population. In the formula, we divide by $N-1$ (Bessel's correction) to give a more conservative, slightly larger estimate of the variation.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-calc-green">
              <h3 className="font-bold text-green-900 mb-2">Population Standard Deviation ($\sigma$)</h3>
              <p className="text-sm">Use this if your data represents the <strong>entire population</strong> you are studying (e.g., the exact grades of every student in a single class). In this formula, we divide exactly by $N$ (the total count).</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 text-sm text-gray-800 rounded-r-lg mt-6">
          <strong>What is Variance?</strong> Variance is simply the standard deviation squared. While standard deviation is expressed in the same units as your original data (e.g., dollars, inches), variance is expressed in <em>squared</em> units, making it harder to interpret directly but highly useful in deeper statistical formulas.
        </div>
      </section>
    </div>
  );
}