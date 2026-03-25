import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- ENHANCED SEO TAGS --- */}
      <Helmet>
        <title>Pregnancy Due Date Calculator | Calculate EDD via LMP, Ultrasound, IVF & Conception</title>
        <meta 
          name="description" 
          content="Use our free Pregnancy Due Date Calculator to find your Estimated Due Date (EDD). Calculate using your Last Menstrual Period (LMP), Ultrasound, Conception date, or IVF transfer." 
        />
        <meta name="keywords" content="pregnancy due date calculator, EDD calculator, calculate pregnancy weeks, ultrasound due date, IVF transfer due date, conception date calculator, Naegele's rule" />
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Advanced Pregnancy Due Date Calculator | CalcPilot" />
        <meta property="og:description" content="Find your exact due date, trimester, and weekly pregnancy progress using LMP, Ultrasound, Conception, or IVF transfer dates." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- SEO RICH CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">How is Your Due Date Calculated?</h2>
        <p className="mb-4">
          An Estimated Due Date (EDD) is the projected date when a baby will be born. A standard pregnancy lasts about 280 days (or 40 weeks). Because every pregnancy and conception journey is unique, our calculator uses five different clinically recognized formulas to estimate your exact due date depending on the information you have available.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">The Calculation Methods & Formulas</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">1. First Day of Last Period (LMP)</h3>
            <p className="mb-3">This is the most common method, utilizing <strong>Naegele's Rule</strong>. It assumes conception occurs about two weeks after your period starts. Our advanced calculator also adjusts for your specific cycle length.</p>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 border-l-4 border-calc-green">
              Formula: EDD = LMP Date + 280 days + (Average Cycle Length - 28 days)
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">2. Ultrasound Date</h3>
            <p className="mb-3">Early ultrasounds (specifically in the first trimester) are considered the most accurate way to date a pregnancy. By measuring the fetus, your doctor determines exactly how many weeks and days pregnant you are on the day of the scan.</p>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 border-l-4 border-calc-green">
              Formula: EDD = Ultrasound Date + 280 days - (Current Gestational Age in Days)
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">3. Conception Date</h3>
            <p className="mb-3">If you were tracking ovulation closely and know the exact date of conception, the math becomes much simpler. The gestation period from the day of conception is exactly 38 weeks (266 days).</p>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 border-l-4 border-calc-green">
              Formula: EDD = Conception Date + 266 days
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">4. IVF Transfer Date</h3>
            <p className="mb-3">For In Vitro Fertilization (IVF), the due date is calculated using the exact transfer date and the age of the embryo (typically a Day 3 or Day 5 embryo). This is a highly precise calculation.</p>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 border-l-4 border-calc-green">
              Formula: EDD = Transfer Date + 266 days - Embryo Age (3 or 5 days)
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Pregnancy Trimesters Explained</h2>
        <p className="mb-3">Your pregnancy is divided into three major stages, known as trimesters:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>First Trimester (Weeks 1 – 13):</strong> The most crucial stage of early development where the baby's body structure and organ systems develop.</li>
          <li><strong>Second Trimester (Weeks 14 – 27):</strong> Often called the "honeymoon period" of pregnancy. Nausea typically subsides, and you will begin to feel the baby's first movements.</li>
          <li><strong>Third Trimester (Weeks 28 – Birth):</strong> The final stretch focused on fetal weight gain, brain development, and preparing the lungs for the outside world.</li>
        </ul>
      </section>

      <section>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 text-sm text-purple-900 rounded-r-lg">
          <strong>Medical Disclaimer:</strong> An Estimated Due Date (EDD) is only a guide. Roughly 4-5% of babies are born exactly on their due date. A normal, full-term delivery can occur anywhere between 37 and 42 weeks. Always consult your healthcare provider or obstetrician to confirm your dates and medical status.
        </div>
      </section>
    </div>
  );
}