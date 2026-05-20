export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-calc-black">Contact Us</h1>
      <p className="text-calc-gray mb-8">
        Have a question, feedback, or a request for a new utility tools? Let us know. 
        You can reach our administration desk directly at <strong className="text-calc-green">support@toolswizard.in</strong> or submit your message below. We prioritize user feedback and aim to respond within 24–48 business hours.
      </p>
      
      {/* <form 
        className="bg-calc-white p-8 rounded-xl border border-calc-lightGray shadow-sm space-y-6" 
        action="mailto:support@toolswizard.in" 
        method="post" 
        encType="text/plain"
      >
        <div>
          <label className="block text-sm font-medium mb-2 text-calc-black">Name</label>
          <input 
            type="text" 
            className="w-full border border-calc-lightGray p-3 rounded-md outline-none focus:border-calc-green text-calc-darkGray bg-transparent" 
            placeholder="Full Name" 
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-calc-black">Email Address</label>
          <input 
            type="email" 
            className="w-full border border-calc-lightGray p-3 rounded-md outline-none focus:border-calc-green text-calc-darkGray bg-transparent" 
            placeholder="john@example.com" 
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-calc-black">Why are you contacting us?</label>
          <select className="w-full border border-calc-lightGray p-3 rounded-md outline-none focus:border-calc-green text-calc-darkGray bg-calc-white">
            <option>General Inquiry</option>
            <option>Report a Bug / Error</option>
            <option>Request a New Calculator</option>
            <option>Business / Partnership</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-calc-black">Message</label>
          <textarea 
            rows="5" 
            className="w-full border border-calc-lightGray p-3 rounded-md outline-none focus:border-calc-green text-calc-darkGray bg-transparent resize-none" 
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>

        <p className="text-xs text-calc-gray">
          * Note: Your privacy is vital to us. The information submitted through this standard configuration contact layout is processed strictly to respond to your direct request and is never shared with external third parties.
        </p>
        
        <button 
          type="submit" 
          className="w-full bg-calc-green text-calc-white py-3 rounded-md font-bold transition-colors duration-200 hover:bg-opacity-90 shadow-sm"
        >
          Send Message
        </button>
      </form> */}
    </main>
  );
}