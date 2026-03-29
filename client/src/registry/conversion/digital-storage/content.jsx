import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Digital Storage Conversion Formulas</h2>
        <p className="mb-4">
          Understanding digital storage can be confusing because computers do not count the same way humans do! While humans use a "Base-10" decimal system (scaling by 10s, 100s, and 1000s), computer processors think in binary code (1s and 0s), which scales in a "Base-2" system.
        </p>
        <p>
          Because of this, standard computer memory scales by a factor of <strong>1024</strong> instead of a clean 1000. Below, you will find the exact formulas used by computer operating systems to convert everything from basic Bits and Bytes all the way up to massive Terabytes.
        </p>
        
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">The Foundation: Bits and Bytes</h3>
        <p className="text-sm mb-4">A "Bit" is a single binary digit (a 1 or a 0). It is the smallest unit of digital information possible. When you group 8 Bits together, they form a single "Byte," which is enough data to store a single letter of text.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Bits (b) & Bytes (B)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Byte = 8 Bits</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>Bytes to Bits:</strong> Multiply by 8. <em>Example: 5 Bytes × 8 = 40 Bits</em></li>
              <li><strong>Bits to Bytes:</strong> Divide by 8. <em>Example: 64 Bits ÷ 8 = 8 Bytes</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Storage Formulas (The "1024" Rule)</h3>
        <p className="text-sm mb-4">Once you move past Bytes, traditional computer science dictates that each step up the ladder is exactly 1,024 times larger than the previous step.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Bytes (B) & Kilobytes (KB)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Kilobyte = 1,024 Bytes</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>KB to Bytes:</strong> Multiply by 1024. <em>Example: 2 KB × 1024 = 2,048 Bytes</em></li>
              <li><strong>Bytes to KB:</strong> Divide by 1024. <em>Example: 4096 Bytes ÷ 1024 = 4 KB</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Kilobytes (KB) & Megabytes (MB)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Megabyte = 1,024 Kilobytes</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>MB to KB:</strong> Multiply by 1024. <em>Example: 5 MB × 1024 = 5,120 KB</em></li>
              <li><strong>KB to MB:</strong> Divide by 1024. <em>Example: 2048 KB ÷ 1024 = 2 MB</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Megabytes (MB) & Gigabytes (GB)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Gigabyte = 1,024 Megabytes</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>GB to MB:</strong> Multiply by 1024. <em>Example: 10 GB × 1024 = 10,240 MB</em></li>
              <li><strong>MB to GB:</strong> Divide by 1024. <em>Example: 5120 MB ÷ 1024 = 5 GB</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Gigabytes (GB) & Terabytes (TB)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Terabyte = 1,024 Gigabytes</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>TB to GB:</strong> Multiply by 1024. <em>Example: 2 TB × 1024 = 2,048 GB</em></li>
              <li><strong>GB to TB:</strong> Divide by 1024. <em>Example: 3072 GB ÷ 1024 = 3 TB</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4 mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Why does my new hard drive show less space than advertised?</h3>
        <p className="text-sm">
          If you buy a "500 GB" hard drive, plugging it into your Windows computer might show that it only has about 465 GB of usable space. Did you get scammed? No! You are witnessing the "Base-10 vs Base-2" conflict in real time.
        </p>
        <p className="text-sm">
          Hard drive manufacturers advertise using standard decimal math (Base-10), meaning they consider 1 Gigabyte to be exactly 1,000,000,000 Bytes. However, your computer's operating system reads data in binary (Base-2), meaning it divides that total by <strong>1,024</strong> multiple times to figure out the true gigabyte count. This discrepancy causes the drive to appear smaller when plugged into your system!
        </p>
      </section>
    </div>
  );
}