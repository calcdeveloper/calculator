export default function Contact() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-calc-gray mb-8">Have a question or request for a new calculator? Let us know.</p>
        <form className="bg-calc-white p-8 rounded-xl border border-calc-lightGray shadow-sm space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full border border-calc-lightGray p-3 rounded-md outline-none focus:border-calc-green" placeholder="John Doe" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input type="email" className="w-full border border-calc-lightGray p-3 rounded-md outline-none focus:border-calc-green" placeholder="john@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Why are you contacting us?</label>
            <select className="w-full border border-calc-lightGray p-3 rounded-md outline-none focus:border-calc-green">
              <option>General Inquiry</option>
              <option>Report a Bug / Error</option>
              <option>Request a New Calculator</option>
              <option>Business / Partnership</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea rows="5" className="w-full border border-calc-lightGray p-3 rounded-md outline-none focus:border-calc-green" placeholder="Type your message here..."></textarea>
          </div>
          <button type="submit" className="w-full bg-calc-green text-calc-white py-3 rounded-md font-bold hover:bg-calc-darkGreen">Send Message</button>
        </form>
      </main>
    );
  }