import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Understanding Data Transfer Rate Conversions</h2>
        <p className="mb-4">
          If you have ever paid for a "100 Megabit" internet plan but noticed your downloads max out at 12.5 Megabytes per second, you are not alone! The world of data transfer rates is notorious for confusing consumers by mixing up <strong>bits</strong> and <strong>Bytes</strong>.
        </p>
        <p>
          Internet Service Providers (ISPs) and network hardware manufacturers advertise speeds in <strong>bits</strong> (using a lowercase 'b', like Mbps) because it makes the numbers look much larger. However, web browsers, video games, and operating systems measure file sizes and downloads in <strong>Bytes</strong> (using a capital 'B', like MB/s).
        </p>
        
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">The Golden Rule: Bits vs. Bytes</h3>
        <p className="text-sm mb-4">Because there are 8 bits in exactly 1 Byte, converting between network speeds and true download speeds simply requires multiplying or dividing by 8.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Megabits per sec (Mbps) to Megabytes per sec (MB/s)</h4>
            <p className="text-sm"><strong>Formula:</strong> Divide Mbps by 8 to get MB/s.</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>Example 1:</strong> A 100 Mbps internet plan ÷ 8 = 12.5 MB/s actual download speed.</li>
              <li><strong>Example 2:</strong> A 1,000 Mbps (Gigabit) internet plan ÷ 8 = 125 MB/s actual download speed.</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Megabytes per sec (MB/s) to Megabits per sec (Mbps)</h4>
            <p className="text-sm"><strong>Formula:</strong> Multiply MB/s by 8 to get Mbps.</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>Example:</strong> If your Steam game is downloading at 50 MB/s, you are actively utilizing 400 Mbps of your network bandwidth (50 × 8).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Scaling Up: Kilo, Mega, and Giga</h3>
        <p className="text-sm mb-4">Unlike computer hard drives which use binary math (scaling by 1024), network data rates use standard decimal math. This means you scale up and down by clean factors of 1,000.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Kilobits (Kbps) & Megabits (Mbps)</h4>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>Mbps to Kbps:</strong> Multiply by 1,000. <em>Example: 5 Mbps × 1,000 = 5,000 Kbps</em></li>
              <li><strong>Kbps to Mbps:</strong> Divide by 1,000. <em>Example: 15,000 Kbps ÷ 1,000 = 15 Mbps</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Megabits (Mbps) & Gigabits (Gbps)</h4>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>Gbps to Mbps:</strong> Multiply by 1,000. <em>Example: 2 Gbps × 1,000 = 2,000 Mbps</em></li>
              <li><strong>Mbps to Gbps:</strong> Divide by 1,000. <em>Example: 500 Mbps ÷ 1,000 = 0.5 Gbps</em></li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="space-y-4 mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Why does my download take longer than the math suggests?</h3>
        <p className="text-sm">
          Even if you correctly convert your 100 Mbps internet connection to 12.5 MB/s, you might notice your downloads are still a bit slower than that. Why? Because of <strong>network overhead</strong>! 
        </p>
        <p className="text-sm">
          When data travels across the internet, it gets wrapped in "packets" that include routing information, error-checking codes, and security headers. All of this extra invisible data consumes up to 10% of your total bandwidth, meaning your "true" usable speed will always be slightly lower than your mathematical maximum.
        </p>
      </section>
    </div>
  );
}