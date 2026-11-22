import React from 'react';
import Link from 'next/link';
import { Mail, Send, Clock, ShieldCheck, CheckCircle2, MessageSquare, ChevronRight, PhoneCall, HelpCircle, Layers } from 'lucide-react';
import ContactSeo from '@/components/contact/ContactSeo';

export default function Contact() {
  return (
    <div className="min-h-screen bg-text-bg font-sans text-text-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-emerald-700 to-teal-800 pt-16 pb-28 px-4">
        <nav className="flex justify-center space-x-2 text-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} className="self-center" />
          <span className="text-white font-medium">Contact &amp; Engineering Support</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Contact ToolsWizard Engineering
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Direct algorithmic verification, incident escalation, new computational engine proposals, and enterprise partnerships.
          </p>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 -mt-16 pb-20">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-text-gray/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-1">Direct Administration Desk</h3>
              <p className="text-xs text-text-gray leading-relaxed mb-4">
                Official email channel for general inquiries, algorithmic discrepancies, and feedback.
              </p>
            </div>
            <a
              href="mailto:support@toolswizard.in"
              className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
            >
              support@toolswizard.in &rarr;
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-text-gray/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-1">Response SLA Horizons</h3>
              <p className="text-xs text-text-gray leading-relaxed mb-4">
                P1 formula discrepancies and security issues triaged within 12h; standard inquiries within 24–48h.
              </p>
            </div>
            <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md self-start border border-emerald-200">
              Active Mon–Fri (08:00–18:00 UTC)
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-text-gray/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-1">Zero-Trust Telemetry</h3>
              <p className="text-xs text-text-gray leading-relaxed mb-4">
                No user input data is transmitted, retained, or logged on remote servers during tool execution.
              </p>
            </div>
            <Link
              href="/privacy"
              className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
            >
              Verify Privacy Proof &rarr;
            </Link>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-text-gray/30 shadow-xs mb-12">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold text-text-dark mb-2">Send an Engineering Dispatch</h2>
            <p className="text-text-gray text-sm leading-relaxed">
              Submit your algorithmic feedback, bug report, or enterprise integration inquiry below. Messages are routed directly to our on-call domain engineers. For self-service walkthroughs and FAQs, visit our <Link href="/help" className="text-emerald-600 font-semibold underline hover:text-emerald-700">Help Center &amp; User Guides</Link>.
            </p>
          </div>

          <form 
            className="space-y-6" 
            action="mailto:support@toolswizard.in" 
            method="post" 
            encType="text/plain"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full border border-text-gray/40 p-3.5 rounded-xl outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-text-dark bg-white text-sm transition-all" 
                  placeholder="e.g., Alex Chen" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full border border-text-gray/40 p-3.5 rounded-xl outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-text-dark bg-white text-sm transition-all" 
                  placeholder="alex@company.com" 
                  required 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-2">Inquiry Category &amp; Support Desk</label>
                <select 
                  name="category"
                  className="w-full border border-text-gray/40 p-3.5 rounded-xl outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-text-dark bg-white text-sm transition-all"
                >
                  <option>General Support &amp; Feedback</option>
                  <option>Algorithmic Discrepancy / Formula Bug</option>
                  <option>Request a New Calculator (RFC Proposal)</option>
                  <option>Security / Responsible Vulnerability Disclosure</option>
                  <option>Enterprise Integration &amp; Headless API</option>
                  <option>Academic &amp; Educational Licensing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-2">Subject / Affected Tool URL</label>
                <input 
                  type="text" 
                  name="subject"
                  className="w-full border border-text-gray/40 p-3.5 rounded-xl outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-text-dark bg-white text-sm transition-all" 
                  placeholder="e.g., /calculator/finance/loan-affordability" 
                  required 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-2">Message &amp; Diagnostic Details</label>
              <textarea 
                rows="5" 
                name="message"
                className="w-full border border-text-gray/40 p-3.5 rounded-xl outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-text-dark bg-white text-sm transition-all resize-none" 
                placeholder="Describe your inquiry, exact mathematical inputs, expected vs. actual output, and browser environment..."
                required
              ></textarea>
            </div>

            <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 text-xs text-text-gray leading-relaxed flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Zero-Spam &amp; Privacy Assurance:</strong> Information submitted through this channel is utilized exclusively to respond to your technical request and is never monetized, stored in tracking cookies, or shared with third parties.
              </span>
            </div>
            
            <button 
              type="submit" 
              className="w-full sm:w-auto px-8 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" /> Dispatch Message to Engineering Desk
            </button>
          </form>
        </div>

        {/* Deep Subject-Matter Content */}
        <ContactSeo />
      </main>
    </div>
  );
}
