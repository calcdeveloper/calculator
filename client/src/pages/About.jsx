export default function About() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
        <h1 className="text-4xl font-bold text-calc-black mb-6">About CalcPilot</h1>
        
        <div className="bg-calc-white p-8 rounded-xl border border-calc-lightGray shadow-sm text-calc-darkGray space-y-6 text-lg leading-relaxed">
          <p>
            Welcome to <strong className="text-calc-green">CalcPilot</strong>, your ultimate destination for smart, fast, and free online calculators. 
          </p>
  
          <h2 className="text-2xl font-bold text-calc-black mt-8">Our Mission</h2>
          <p>
            Whether you are a student solving complex math problems, a professional analyzing financial investments like SIPs and EMIs, or someone just looking to convert daily measurements, we believe that math shouldn't be a hassle. Our mission is to provide an ecosystem of <strong>500+ highly accurate calculators</strong> designed to solve everyday problems with zero friction.
          </p>
  
          <h2 className="text-2xl font-bold text-calc-black mt-8">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>100% Free Forever:</strong> No hidden fees, no subscriptions.</li>
            <li><strong>Lightning Fast:</strong> Built on modern web technologies to give you instant results.</li>
            <li><strong>Privacy First:</strong> Your calculations are processed directly in your browser. We do not store your financial or health data.</li>
            <li><strong>Mobile Optimized:</strong> A beautiful, seamless experience on any device.</li>
          </ul>
  
          <h2 className="text-2xl font-bold text-calc-black mt-8">Get in Touch</h2>
          <p>
            CalcPilot is built for you. If you have an idea for a new calculator or just want to share your feedback, please visit our Contact page. We are always listening!
          </p>
        </div>
      </main>
    );
  }