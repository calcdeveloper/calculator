import Link from "next/link";
import { Share2, Globe, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-calc-white border-t border-calc-lightGray pt-12 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="col-span-1 md:col-span-4">
            <Link href="/" className="text-2xl font-bold text-calc-black mb-4 block">CalcPilot</Link>
            <p className="text-calc-gray mb-6 pr-4">Smart Calculators for Everyday Problems</p>
            <div className="flex space-x-4 text-calc-gray">
              <a href="https://www.instagram.com/ayush.shreyashkar?igsh=Zm4zMHc0cDc3dDB1" target="_blank" rel="noreferrer" className="hover:text-[#E1306C] transition" aria-label="Instagram">
                <Share2 size={20} />
              </a>
              <a href="https://wa.me/9962495139" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
              <a href="https://www.facebook.com/share/18FSKJmG4b/" target="_blank" rel="noreferrer" className="hover:text-[#1877F2] transition" aria-label="Facebook">
                <Globe size={20} />
              </a>
              <a href="mailto:rishikeshchauhan222@gmail.com" className="hover:text-[#EA4335] transition" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4">
            <h3 className="font-bold text-calc-black mb-4">Calculator Categories</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-calc-gray">
              <li><Link href="/category/finance" className="hover:text-calc-green transition">Finance</Link></li>
              <li><Link href="/category/health" className="hover:text-calc-green transition">Health</Link></li>
              <li><Link href="/category/math" className="hover:text-calc-green transition">Math</Link></li>
              <li><Link href="/category/conversion" className="hover:text-calc-green transition">Conversion</Link></li>
              <li><Link href="/category/everyday" className="hover:text-calc-green transition">Everyday Utility</Link></li>
              <li><Link href="/category/education" className="hover:text-calc-green transition">Education</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-calc-black mb-4">Company</h3>
            <ul className="space-y-2 text-calc-gray">
              <li><Link href="/about" className="hover:text-calc-green transition">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-calc-green transition">Privacy & Policy</Link></li>
              <li><Link href="/terms" className="hover:text-calc-green transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-calc-black mb-4">Support</h3>
            <ul className="space-y-2 text-calc-gray">
              <li><Link href="/contact" className="hover:text-calc-green transition">Contact us</Link></li>
              <li><Link href="/help" className="hover:text-calc-green transition">Help Center</Link></li>
              <li><a href="mailto:rishikeshchauhan222@gmail.com?subject=CalcPilot%20Feedback" className="hover:text-calc-green transition">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-calc-lightGray pt-8 text-center md:text-left text-calc-gray text-sm">
          <p>© 2026 CalcPilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
