import Link from 'next/link';
import { Zap, Hash, Key, FileText, RefreshCw } from 'lucide-react';

export const dynamic = "force-static";

const generators = [
  { 
    name: 'UUID Generator', 
    path: '/tools/generators/uuid-generator', 
    desc: 'Generate unique UUID v4 identifiers instantly',
    icon: <Hash size={24} />,
    status: 'Available'
  },
  { 
    name: 'QR Code Generator', 
    path: '/tools/qr-generator', 
    desc: 'Generate QR codes for URLs, text, and more',
    icon: <Hash size={24} />,
    status: 'Coming Soon'
  },
  { 
    name: 'Password Generator', 
    path: '/tools/password-generator', 
    desc: 'Generate secure, random passwords',
    icon: <Key size={24} />,
    status: 'Coming Soon'
  },
  { 
    name: 'Random Text Generator', 
    path: '#', 
    desc: 'Generate random text content for testing',
    icon: <FileText size={24} />,
    status: 'Coming Soon'
  },
  { 
    name: 'Lorem Ipsum Generator', 
    path: '#', 
    desc: 'Generate placeholder text for design',
    icon: <FileText size={24} />,
    status: 'Coming Soon'
  },
  { 
    name: 'Random Number Generator', 
    path: '#', 
    desc: 'Generate random numbers in custom ranges',
    icon: <RefreshCw size={24} />,
    status: 'Coming Soon'
  },
];

export default function GeneratorsPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Generator Tools</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Create content, codes, and random data instantly</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {generators.map((tool, index) => (
            <div key={tool.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${
                  tool.status === 'Available' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                } mr-4`}>
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.desc}</p>
                </div>
              </div>
              
              {tool.status === 'Available' ? (
                <Link 
                  href={tool.path}
                  className="block w-full bg-green-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-green-700 transition-colors"
                >
                  Use Generator
                </Link>
              ) : (
                <button 
                  disabled
                  className="block w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg text-center font-medium cursor-not-allowed"
                >
                  {tool.status}
                </button>
              )}
            </div>
          ))}
        </div>
        
        {/* SEO Content Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Generator Tools</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Our generator tools help you create unique identifiers, secure passwords, QR codes, and random data 
              instantly. Perfect for developers, designers, and anyone who needs quick content generation.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Generators</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>UUID Generator:</strong> Create cryptographically secure UUID v4 identifiers</li>
              <li><strong>QR Code Generator:</strong> Generate QR codes for URLs, text, and other data</li>
              <li><strong>Password Generator:</strong> Create secure passwords with customizable options</li>
              <li><strong>Random Text Generator:</strong> Generate random text for testing purposes</li>
              <li><strong>Lorem Ipsum Generator:</strong> Create placeholder text for design mockups</li>
              <li><strong>Random Number Generator:</strong> Generate random numbers in custom ranges</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Why Use Our Generators?</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Free to Use:</strong> All generators are completely free with no limits</li>
              <li><strong>Secure:</strong> Cryptographically secure random generation</li>
              <li><strong>Fast:</strong> Instant generation without registration</li>
              <li><strong>Mobile Friendly:</strong> Works perfectly on all devices</li>
              <li><strong>No Tracking:</strong> Your data stays on your device</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
