import Link from "next/link";
import { Share2, Globe, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-calc-white border-t border-calc-lightGray pt-12 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="col-span-1 md:col-span-4">
            <Link href="/" className="text-2xl font-bold text-calc-black mb-4 block">ToolsWizard</Link>
            <p className="text-calc-gray mb-6 pr-4">Smart Tools for Everyday Uses</p>
            <div className="flex space-x-4 text-calc-gray">
              <a href="mailto:support@toolswizard.in" className="hover:text-[#EA4335] transition" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4">
            <h3 className="font-bold text-calc-black mb-4">Tools</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-calc-gray">
              <li><Link href="/calculator" className="hover:text-calc-green transition">Calculator Tools</Link></li>
              <li><Link href="/tools/generators" className="hover:text-calc-green transition">Generator Tools</Link></li>
              <li><Link href="/tools/pdf-tools" className="hover:text-calc-green transition">PDF Tools</Link></li>
              <li><Link href="/tools/text-tools" className="hover:text-calc-green transition">Text Tools</Link></li>
              <li><Link href="tools/json-tools" className="hover:text-calc-green transition">JSON Tools</Link></li>
              <li><Link href="tools/encoder-decoder" className="hover:text-calc-green transition">Encoder/Decoder</Link></li>
              <li><Link href="tools/converter" className="hover:text-calc-green transition">Converter Tools</Link></li>
              <li><Link href="tools/developer-tools" className="hover:text-calc-green transition">Developer Tools</Link></li>
              <li><Link href="tools/design" className="hover:text-calc-green transition">Design Tools</Link></li>
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
              <li><a href="mailto:rishikeshchauhan222@gmail.com?subject=ToolsWizard%20Feedback" className="hover:text-calc-green transition">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-calc-lightGray pt-8 text-center md:text-left text-calc-gray text-sm">
          <p>© 2026 ToolsWizard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
