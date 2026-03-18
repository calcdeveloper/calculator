import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';
import FeedbackModal from '../common/FeedbackModal';

export default function Footer() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <>
      <footer className="bg-calc-white border-t border-calc-lightGray pt-12 pb-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
            
            {/* Socials */}
            <div className="col-span-1 md:col-span-4">
              <Link to="/" className="text-2xl font-bold text-calc-black mb-4 block">CalcPilot</Link>
              <p className="text-calc-gray mb-6 pr-4">Smart Calculators for Everyday Problems</p>
              <div className="flex space-x-4 text-calc-gray">
                <a href="https://www.instagram.com/ayush.shreyashkar?igsh=Zm4zMHc0cDc3dDB1" target="_blank" rel="noreferrer" className="hover:text-[#E1306C] transition"><Instagram size={20} /></a>
                <a href="https://wa.me/9962495139" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition"><MessageCircle size={20} /></a>
                <a href="https://www.facebook.com/share/18FSKJmG4b/" target="_blank" rel="noreferrer" className="hover:text-[#1877F2] transition"><Facebook size={20} /></a>
                <a href="mailto:rishikeshchauhan222@gmail.com" className="hover:text-[#EA4335] transition"><Mail size={20} /></a>
              </div>
            </div>

            {/* Categories */}
            <div className="col-span-1 md:col-span-4">
              <h3 className="font-bold text-calc-black mb-4">Calculator Categories</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-calc-gray">
                <li><Link to="/category/finance" className="hover:text-calc-green transition">Finance</Link></li>
                <li><Link to="/category/health" className="hover:text-calc-green transition">Health</Link></li>
                <li><Link to="/category/math" className="hover:text-calc-green transition">Math</Link></li>
                <li><Link to="/category/conversion" className="hover:text-calc-green transition">Conversion</Link></li>
                <li><Link to="/category/utility" className="hover:text-calc-green transition">Everyday Utility</Link></li>
                <li><Link to="/category/education" className="hover:text-calc-green transition">Education</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-bold text-calc-black mb-4">Company</h3>
              <ul className="space-y-2 text-calc-gray">
                <li><Link to="/about" className="hover:text-calc-green transition">About Us</Link></li>
                <li><Link to="/privacy" className="hover:text-calc-green transition">Privacy & Policy</Link></li>
                {/* ADDED TERMS AND CONDITIONS HERE */}
                <li><Link to="/terms" className="hover:text-calc-green transition">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-bold text-calc-black mb-4">Support</h3>
              <ul className="space-y-2 text-calc-gray">
                <li><Link to="/contact" className="hover:text-calc-green transition">Contact us</Link></li>
                <li><Link to="/help" className="hover:text-calc-green transition">Help Center</Link></li>
                <li><button onClick={() => setIsFeedbackOpen(true)} className="hover:text-calc-green transition">Feedback</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-calc-lightGray pt-8 text-center md:text-left text-calc-gray text-sm">
            <p>© 2026 CalcPilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Pop-up Modal Component */}
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </>
  );
}