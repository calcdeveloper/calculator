import React from "react";


export default function PregnancyCalculatorContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Accurate Pregnancy Due Date Calculator India | Track Your EDD
  // META DESCRIPTION: Calculate your exact pregnancy due date using LMP, ultrasound, conception, or IVF transfer dates. Track trimester milestones with our free online calculator.
  // URL SLUG: /pregnancy-due-date-calculator-india
  // PRIMARY KEYWORD: pregnancy due date calculator india
  // SECONDARY KEYWORDS: EDD calculator, calculate delivery date, pregnancy tracker online, week by week pregnancy calculator, trimester calculator, exact due date calculator, conception date calculator, IVF due date calculator, ultrasound due date
  // LONG-TAIL KEYWORDS: how to calculate pregnancy due date from last period, early pregnancy due date calculator in india, how to calculate due date from IVF transfer, calculate due date with irregular periods, ultrasound pregnancy calculator

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is the estimated due date (EDD) calculated from my last period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The estimated due date is universally calculated using Naegele's rule, which adds 280 days (or 40 weeks) to the first day of your last menstrual period (LMP). This assumes a standard 28-day cycle. Our calculator adjusts this if your cycle is longer or shorter."
        }
      },
      {
        "@type": "Question",
        "name": "Can my due date change after an ultrasound?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While calculating from your LMP provides a strong baseline, early dating ultrasounds (usually done in the first trimester) measure the fetus's crown-rump length (CRL). If the ultrasound date differs significantly from your LMP date, your doctor may officially change your EDD."
        }
      },
      {
        "@type": "Question",
        "name": "How does the IVF due date calculation work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IVF due dates are highly accurate because the exact date of fertilization is known. The calculation depends on whether you had a 3-day or 5-day embryo transfer. The formula generally adds 266 days to the transfer date, minus the age of the embryo."
        }
      },
      {
        "@type": "Question",
        "name": "Is it normal for babies to be born on their exact due date?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Surprisingly, no. Only about 4% to 5% of babies are born precisely on their estimated due date. An EDD is merely a rough estimate. It is completely normal for delivery to occur anywhere between 37 weeks and 42 weeks of pregnancy."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't know the exact date of my last period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you cannot remember the exact start date of your last period, provide your best guess to get an initial estimate. However, you should consult your doctor as soon as possible. They will perform an early ultrasound to accurately date your pregnancy."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      

      {/* --- ON-PAGE CONTENT --- */}

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Pregnancy Due Date Calculator</h1>
        <p className="mb-4">
          Discovering you are pregnant is an incredibly exciting milestone. Almost immediately, the first question that comes to mind is: <strong>"When is my baby due?"</strong> Our advanced, free <strong>Pregnancy Due Date Calculator</strong> is designed to give you a highly accurate estimate of your delivery date, customized for users in India.
        </p>
        <p className="mb-4">
          Unlike basic tools that only assume every woman has a standard 28-day cycle, our calculator is a comprehensive medical tool. Whether you conceived naturally, know your exact conception date, underwent IVF, or have a dating ultrasound from your gynecologist, this tool adapts to your specific medical timeline to provide a precise Estimated Due Date (EDD). It also breaks down your pregnancy into manageable milestones, tracking exactly how many weeks and days along you are.
        </p>
        <p>
          Whether you are preparing the nursery, scheduling doctor's appointments, planning maternity leave, or arranging family visits for the big day, knowing your precise timeline helps you stay organized and stress-free throughout this beautiful journey.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Pregnancy Calculator</h2>
        <p className="mb-4">To get your personalized pregnancy timeline, simply select the method that best matches the information you have available, and follow these easy steps:</p>
        
        <ol className="list-decimal pl-6 space-y-4 mb-6">
          <li>
            <strong>Select Your Calculation Method:</strong> Click the dropdown to choose from five highly accurate dating methods:
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600">
              <li><strong>First Day of Last Period:</strong> The standard medical method. Choose this if you know when your last period started.</li>
              <li><strong>Known Due Date:</strong> Choose this if your doctor has already given you an EDD and you simply want to track your week-by-week progress and trimester milestones.</li>
              <li><strong>Ultrasound Date:</strong> Choose this if you have had an early dating ultrasound. You will input the date of the scan and the gestational age measured by the technician.</li>
              <li><strong>Conception Date:</strong> Choose this if you tracked your ovulation closely and know the exact day conception occurred.</li>
              <li><strong>IVF Transfer Date:</strong> Choose this if you underwent In Vitro Fertilization. You will input the transfer date and the age of the embryo (e.g., 3-day or 5-day).</li>
            </ul>
          </li>
          <li><strong>Input Your Dates:</strong> Use the calendar selector to choose the exact dates requested based on your selected method.</li>
          <li><strong>Adjust Variables (If Applicable):</strong> If you chose "Last Period," use the slider to input the average number of days your cycle lasts. If you chose "IVF," select your embryo age.</li>
        </ol>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
          <h3 className="font-bold text-green-800 mb-1">Understanding Your Results</h3>
          <p className="text-sm text-green-900">
            Upon calculation, the large green banner will display your <strong>Estimated Due Date (EDD)</strong>. Below that, you will find a dashboard detailing your <strong>Current Progress</strong> (in exact weeks and days), your <strong>Current Stage</strong> (which trimester you are in), and the exact countdown of <strong>Days Remaining</strong> until delivery. A detailed table also outlines your upcoming trimester milestones.
          </p>
        </div>
      </section>

      {/* SCIENCE & FORMULA SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Medical Formulas Behind Your Due Date</h2>
        <p className="mb-5">Our calculator uses the standard mathematical formulas employed by obstetricians, fertility clinics, and gynecologists worldwide. Here is how your body's data translates into a definitive due date across all five calculation methods:</p>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">1. First Day of Last Period (Naegele's Rule)</h3>
            <p className="mb-3 text-sm text-gray-600">
              For a typical 28-day cycle, pregnancy is calculated to last exactly 280 days from the start of the last menstrual period. If your cycle is shorter or longer, we adjust the 280-day rule to match your specific ovulation window (since the second half of the cycle is almost always 14 days).
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm font-mono text-gray-800 border-l-4 border-blue-500 overflow-x-auto">
              <strong>Formula:</strong> Due Date = LMP + 280 Days + (Your Cycle Length - 28 Days)
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Conception Date Calculation</h3>
            <p className="mb-3 text-sm text-gray-600">
              If you know the exact day you conceived (usually the day of ovulation), the calculation is slightly shorter. Since conception typically happens about 14 days after the start of a period, we subtract 14 from the standard 280 days.
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm font-mono text-gray-800 border-l-4 border-blue-500 overflow-x-auto">
              <strong>Formula:</strong> Due Date = Conception Date + 266 Days
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">3. IVF Transfer Date Calculation</h3>
            <p className="mb-3 text-sm text-gray-600">
              IVF provides the most precise due date because the exact age of the embryo at transfer is known. The calculation starts with the standard conception timeline (266 days) and subtracts the days the embryo grew in the lab.
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm font-mono text-gray-800 border-l-4 border-blue-500 overflow-x-auto">
              <strong>Formula:</strong> Due Date = Transfer Date + 266 Days - (Embryo Age in Days)
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Ultrasound Dating</h3>
            <p className="mb-3 text-sm text-gray-600">
              Early ultrasounds measure the baby's size to determine gestational age in weeks and days. We subtract that age from the total 280-day duration of a standard pregnancy, and add the remaining days to the date of your ultrasound appointment.
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm font-mono text-gray-800 border-l-4 border-blue-500 overflow-x-auto">
              <strong>Formula:</strong> Due Date = Ultrasound Date + [280 Days - Gestational Age (in days) on scan date]
            </div>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING TRIMESTERS */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Trimester Milestones</h2>
        <p className="mb-4">Pregnancy is divided into three distinct phases called trimesters. Our calculator outlines these for you so you know exactly what biological stage your baby is passing through:</p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
          <li><strong>1st Trimester (Weeks 1 to 13):</strong> This is the most crucial period for early development. The baby's body structure and major organ systems begin to form. For mothers, this is often the time of morning sickness, fatigue, and rapid hormonal changes.</li>
          <li><strong>2nd Trimester (Weeks 14 to 27):</strong> Often called the "honeymoon phase" of pregnancy. Nausea typically subsides, energy returns, and you will begin to feel the baby's first fluttering movements (quickening). The baby is undergoing rapid, steady growth.</li>
          <li><strong>3rd Trimester (Weeks 28 to 40+):</strong> The final stretch. The baby undergoes final maturation, significant weight gain, and prepares for birth by moving head-down. Mothers may experience physical discomfort, backaches, and Braxton Hicks contractions as the body preps for labor.</li>
        </ul>
      </section>

      {/* WORKED EXAMPLES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Calculation Examples</h2>
        <p className="mb-6">Let us look at how different dating methods change the calculation process.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 bg-white p-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Example 1: The Irregular Menstrual Cycle</h3>
            <p className="mb-4 text-sm text-gray-600">Priya has a shorter cycle, averaging 24 days. Her last period started on April 11th, 2026.</p>
            <ul className="list-none space-y-2 text-sm text-gray-800 font-medium">
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span> <strong>Calculation:</strong> Because her cycle is 4 days shorter than the standard 28 days (28 - 24 = 4), she ovulated 4 days earlier. We subtract 4 days from the standard 280-day Naegele's rule.</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span> <strong>Standard Date:</strong> January 16, 2027.</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span> <strong>Adjusted Due Date:</strong> January 12, 2027.</li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-500 bg-white p-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Example 2: IVF Embryo Transfer</h3>
            <p className="mb-4 text-sm text-gray-600">Neha underwent IVF and had a 5-day embryo transferred on May 1st, 2026.</p>
            <ul className="list-none space-y-2 text-sm text-gray-800 font-medium">
              <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> <strong>Calculation:</strong> Transfer Date (May 1) + 266 days - 5 days (embryo age).</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> <strong>Base Conception Math:</strong> May 1 + 261 Days.</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> <strong>Estimated Due Date:</strong> January 17, 2027.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How is the estimated due date (EDD) calculated from my last period?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The estimated due date is universally calculated using Naegele's rule, which adds 280 days (or 40 weeks) to the first day of your last menstrual period (LMP). This assumes a standard 28-day cycle. Our calculator intelligently adjusts this date if you indicate your cycle is longer or shorter.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can my due date change after an ultrasound?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. While calculating from your LMP provides a strong mathematical baseline, early dating ultrasounds (usually done in the first trimester) measure the fetus's crown-rump length (CRL). If the ultrasound measurements dictate a date that differs significantly from your LMP calculation, your gynecologist may officially alter your EDD.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How does the IVF due date calculation work?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              IVF due dates are highly accurate because the exact date of fertilization is known. The calculation depends on whether you had a 3-day or 5-day embryo transfer. The formula generally adds 266 days to the transfer date, and then subtracts the age of the embryo (3 or 5 days) to find the exact delivery date.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is it normal for babies to be born on their exact due date?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Surprisingly, no. Only about 4% to 5% of babies are born precisely on their exact estimated due date. An EDD is merely a target week. Medically, a pregnancy is considered "full term" anywhere between 37 weeks and 42 weeks, and it is completely normal to deliver at any point within that timeframe.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What if I don't know the exact date of my last period?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              If you cannot remember the exact start date of your last period, provide your best guess to get an initial rough estimate. However, you should book an appointment with your doctor as soon as possible. They will perform a dating ultrasound, which is the most highly accurate way to date a pregnancy when LMP is unknown.
            </div>
          </details>
        </div>
      </section>

      {/* INTERNAL LINKING / RELATED CALCULATORS */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Health & Fitness Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Pregnancy brings many changes to your body. Keep your health on track before, during, and after your pregnancy with our complete suite of free lifestyle calculators:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/health/bmi" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">BMI Calculator</a>
          <a href="/calculator/health/bmr" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">BMR Calculator</a>
          <a href="/calculator/health/body-fat" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Body Fat Calculator</a>
          <a href="/calculator/health/calorie" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Daily Calorie Calculator</a>
          <a href="/calculator/health/calories-burned" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Calories Burned Calculator</a>
          <a href="/calculator/health/ideal-weight" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Ideal Weight Calculator</a>
          <a href="/calculator/health/macros" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Macros Calculator</a>
          <a href="/calculator/health/period-cycle" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Period Cycle Tracker</a>
          <a href="/calculator/health/tdee" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">TDEE Calculator</a>
          <a href="/calculator/health/water-intake" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Water Intake Calculator</a>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mt-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 text-sm text-yellow-900 rounded-r-lg">
          <strong>Medical Disclaimer:</strong> This pregnancy due date calculator provides mathematical estimates based on standard human physiology and the data you input. It is not a substitute for professional medical care, diagnosis, or clinical ultrasound dating. Every pregnancy is unique. Always consult with your obstetrician, gynecologist, or certified midwife to confirm your due date and receive appropriate prenatal care.
        </div>
      </section>
      
    </div>
  );
}