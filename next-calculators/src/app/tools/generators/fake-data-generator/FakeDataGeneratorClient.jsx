"use client";
import React, { useState, useEffect } from 'react';
import { Database, Download, RefreshCw, ChevronRight, Check, Copy } from 'lucide-react';
import { faker } from '@faker-js/faker';
import FakeDataGeneratorSeo from '@/components/tools/FakeDataGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

const DATA_FIELDS = {
  id: { label: 'UUID', generate: () => faker.string.uuid() },
  fullName: { label: 'Full Name', generate: () => faker.person.fullName() },
  firstName: { label: 'First Name', generate: () => faker.person.firstName() },
  lastName: { label: 'Last Name', generate: () => faker.person.lastName() },
  email: { label: 'Email Address', generate: () => faker.internet.email() },
  phone: { label: 'Phone Number', generate: () => faker.phone.number() },
  address: { label: 'Street Address', generate: () => faker.location.streetAddress() },
  city: { label: 'City', generate: () => faker.location.city() },
  state: { label: 'State', generate: () => faker.location.state() },
  zipCode: { label: 'Zip Code', generate: () => faker.location.zipCode() },
  country: { label: 'Country', generate: () => faker.location.country() },
  company: { label: 'Company Name', generate: () => faker.company.name() },
  jobTitle: { label: 'Job Title', generate: () => faker.person.jobTitle() },
  creditCard: { label: 'Credit Card', generate: () => faker.finance.creditCardNumber() },
  iban: { label: 'IBAN', generate: () => faker.finance.iban() },
  amount: { label: 'Amount ($)', generate: () => faker.finance.amount(10, 1000, 2, '$') },
  date: { label: 'Date', generate: () => faker.date.past().toISOString().split('T')[0] },
  ip: { label: 'IP Address', generate: () => faker.internet.ip() },
  mac: { label: 'MAC Address', generate: () => faker.internet.mac() },
  username: { label: 'Username', generate: () => faker.internet.userName() },
  password: { label: 'Password', generate: () => faker.internet.password() }
};

export default function FakeDataGeneratorClient() {
  const [count, setCount] = useState(10);
  const [format, setFormat] = useState('JSON');
  const [selectedFields, setSelectedFields] = useState([
    'id', 'fullName', 'email', 'phone', 'company', 'date'
  ]);
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const toggleField = (fieldKey) => {
    if (selectedFields.includes(fieldKey)) {
      setSelectedFields(selectedFields.filter(f => f !== fieldKey));
    } else {
      setSelectedFields([...selectedFields, fieldKey]);
    }
  };

  const generateData = () => {
    if (selectedFields.length === 0) {
      setOutput('Please select at least one field to generate data.');
      return;
    }

    const dataArray = [];
    for (let i = 0; i < count; i++) {
      const row = {};
      selectedFields.forEach(field => {
        row[field] = DATA_FIELDS[field].generate();
      });
      dataArray.push(row);
    }

    if (format === 'JSON') {
      setOutput(JSON.stringify(dataArray, null, 2));
    } else if (format === 'CSV') {
      const header = selectedFields.join(',');
      const rows = dataArray.map(obj => {
        return selectedFields.map(field => {
          let val = String(obj[field]);
          // Escape quotes and wrap in quotes if contains comma
          if (val.includes(',') || val.includes('"')) {
            val = `"${val.replace(/"/g, '""')}"`;
          }
          return val;
        }).join(',');
      });
      setOutput([header, ...rows].join('\n'));
    } else if (format === 'SQL') {
      const tableName = 'fake_users';
      const columns = selectedFields.join(', ');
      const rows = dataArray.map(obj => {
        const values = selectedFields.map(field => {
          let val = String(obj[field]);
          return `'${val.replace(/'/g, "''")}'`;
        }).join(', ');
        return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
      });
      setOutput(rows.join('\n'));
    }
  };

  useEffect(() => {
    generateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, format, selectedFields]);

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const downloadFile = () => {
    if (!output) return;
    
    let mimeType = 'text/plain';
    let extension = 'txt';
    
    if (format === 'JSON') {
      mimeType = 'application/json';
      extension = 'json';
    } else if (format === 'CSV') {
      mimeType = 'text/csv';
      extension = 'csv';
    } else if (format === 'SQL') {
      mimeType = 'application/sql';
      extension = 'sql';
    }

    const blob = new Blob([output], { type: mimeType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `fake-data.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gen-bg font-sans text-gen-dark">
      <section className="bg-gradient-to-r from-gen-primary to-gen-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-gen-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Generators</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-gen-white font-medium">Fake Data Generator</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Database size={40} />
            Fake Data Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Generate thousands of rows of realistic dummy data instantly. Export cleanly to JSON, CSV, or SQL formats.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Configuration Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Rows to Generate</label>
                <input
                  type="number"
                  min="1"
                  max="5000"
                  value={count}
                  onChange={(e) => setCount(Math.max(1, Math.min(5000, Number(e.target.value))))}
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Output Format</label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
                >
                  <option value="JSON">JSON (REST APIs)</option>
                  <option value="CSV">CSV (Excel/Spreadsheets)</option>
                  <option value="SQL">SQL (Database Insert)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gen-dark mb-3">Select Data Fields</label>
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {Object.entries(DATA_FIELDS).map(([key, field]) => (
                    <label key={key} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gen-bg/80 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/20">
                      <input
                        type="checkbox"
                        checked={selectedFields.includes(key)}
                        onChange={() => toggleField(key)}
                        className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary flex-shrink-0"
                      />
                      <span className="text-gen-dark font-medium text-sm">{field.label}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Preview and Actions */}
            <div className="lg:col-span-2 flex flex-col h-full">
              <div className="flex gap-4 mb-4">
                <button
                  onClick={generateData}
                  className="flex-1 bg-gen-primary text-gen-white py-3 px-6 rounded-xl font-bold hover:bg-gen-primaryDark transition-all flex items-center justify-center gap-2 shadow-lg shadow-gen-primary/20 active:scale-[0.98]"
                >
                  <RefreshCw size={18} />
                  Regenerate
                </button>
                <button
                  onClick={copyToClipboard}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-all ${
                    copied ? 'bg-emerald-500 text-white' : 'bg-gen-dark text-white hover:bg-black'
                  }`}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
                <button
                  onClick={downloadFile}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-all ${
                    downloaded ? 'bg-emerald-500 text-white' : 'bg-gen-secondary text-white hover:opacity-90'
                  }`}
                >
                  {downloaded ? <Check size={18} /> : <Download size={18} />}
                  Save File
                </button>
              </div>

              <div className="flex-1 min-h-[400px] relative">
                <textarea
                  value={output}
                  readOnly
                  className="w-full h-full px-5 py-4 bg-[#1e1e1e] border-0 rounded-2xl font-mono text-sm text-green-400 outline-none resize-none custom-scrollbar shadow-inner"
                  style={{ whiteSpace: 'pre', overflowWrap: 'normal', overflowX: 'auto' }}
                />
              </div>
            </div>

          </div>
        </div>

        <FakeDataGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
