"use client";
import React, { useState, useRef } from 'react';
import { FileText, Printer, ChevronRight, Plus, Trash2, Download } from 'lucide-react';
import InvoiceGeneratorSeo from '@/components/tools/InvoiceGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

export default function InvoiceGeneratorClient() {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: 'INV-2026-001',
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
    companyName: 'Your Company LLC',
    companyDetails: '123 Business Rd.\nTech City, TC 10101\ncontact@yourcompany.com',
    clientName: 'Acme Corporation',
    clientDetails: '456 Client Ave.\nIndustry Town, IT 20202\nbilling@acmecorp.com',
    currency: '$',
    taxRate: 0,
    notes: 'Thank you for your business. Please pay within 14 days.',
  });

  const [items, setItems] = useState([
    { id: 1, description: 'Web Development Services', quantity: 40, rate: 150 },
    { id: 2, description: 'Server Hosting (Annual)', quantity: 1, rate: 1200 },
  ]);

  const handleDataChange = (field, value) => {
    setInvoiceData({ ...invoiceData, [field]: value });
  };

  const handleItemChange = (id, field, value) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addItem = () => {
    setItems([...items, { id: Date.now(), description: 'New Item', quantity: 1, rate: 0 }]);
  };

  const removeItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + (Number(item.quantity) * Number(item.rate)), 0);
  const taxAmount = subtotal * (Number(invoiceData.taxRate) / 100);
  const total = subtotal + taxAmount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gen-bg font-sans text-gen-dark print:bg-white print:min-h-0">
      
      {/* Hide on print */}
      <section className="bg-gradient-to-r from-gen-primary to-gen-primaryDark pt-16 pb-32 px-4 print:hidden">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-gen-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Generators</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-gen-white font-medium">Invoice Generator</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <FileText size={40} />
            Professional Invoice Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Create completely custom, mathematically accurate invoices instantly in your browser. Perfect for freelancers and small businesses. Print or save directly to PDF.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        
        {/* Editor Controls - Hidden on Print */}
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray overflow-hidden p-6 md:p-8">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gen-gray mb-1">Currency Symbol</label>
              <input 
                type="text" 
                value={invoiceData.currency} 
                onChange={(e) => handleDataChange('currency', e.target.value)}
                className="w-16 px-3 py-2 border rounded-lg font-bold text-center"
                maxLength="5"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gen-gray mb-1">Tax Rate (%)</label>
              <input 
                type="number" 
                min="0" max="100"
                value={invoiceData.taxRate} 
                onChange={(e) => handleDataChange('taxRate', e.target.value)}
                className="w-20 px-3 py-2 border rounded-lg font-bold text-center"
              />
            </div>
          </div>
          
          <button
            onClick={handlePrint}
            className="bg-gen-primary text-white py-3 px-6 rounded-xl font-bold hover:bg-gen-primaryDark transition-all flex items-center gap-2 shadow-lg shadow-gen-primary/30"
          >
            <Printer size={18} />
            Print / Save as PDF
          </button>
        </div>

        {/* The Invoice Paper */}
        <div className="bg-white rounded-b-3xl print:rounded-none shadow-2xl print:shadow-none p-8 md:p-12 mb-12 border border-gen-gray/20 print:border-none print:w-full">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-gray-200 pb-8 mb-8">
            <div className="w-full md:w-1/2 space-y-4">
              <input 
                type="text" 
                value={invoiceData.companyName}
                onChange={(e) => handleDataChange('companyName', e.target.value)}
                className="text-3xl font-extrabold text-gray-900 w-full outline-none border-b border-transparent hover:border-gray-200 focus:border-gen-primary transition-colors bg-transparent"
                placeholder="Your Company Name"
              />
              <textarea 
                value={invoiceData.companyDetails}
                onChange={(e) => handleDataChange('companyDetails', e.target.value)}
                className="text-gray-600 w-full h-24 outline-none border border-transparent hover:border-gray-200 focus:border-gen-primary rounded p-2 transition-colors resize-none bg-transparent"
                placeholder="Your Company Details"
              />
            </div>
            <div className="w-full md:w-auto text-left md:text-right space-y-4">
              <h2 className="text-4xl font-extrabold text-gray-200 uppercase tracking-widest">INVOICE</h2>
              <div className="flex items-center md:justify-end gap-2">
                <span className="font-bold text-gray-500">Invoice #:</span>
                <input 
                  type="text" 
                  value={invoiceData.invoiceNumber}
                  onChange={(e) => handleDataChange('invoiceNumber', e.target.value)}
                  className="font-bold text-gray-900 outline-none border-b border-transparent hover:border-gray-200 focus:border-gen-primary w-32 md:text-right bg-transparent"
                />
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <span className="font-bold text-gray-500">Date:</span>
                <input 
                  type="date" 
                  value={invoiceData.date}
                  onChange={(e) => handleDataChange('date', e.target.value)}
                  className="font-medium text-gray-900 outline-none border-b border-transparent hover:border-gray-200 focus:border-gen-primary bg-transparent"
                />
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <span className="font-bold text-gray-500">Due Date:</span>
                <input 
                  type="date" 
                  value={invoiceData.dueDate}
                  onChange={(e) => handleDataChange('dueDate', e.target.value)}
                  className="font-medium text-gray-900 outline-none border-b border-transparent hover:border-gray-200 focus:border-gen-primary bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Billed To */}
          <div className="mb-12">
            <h3 className="font-bold text-gray-400 uppercase tracking-wider mb-2 text-sm">Bill To:</h3>
            <input 
              type="text" 
              value={invoiceData.clientName}
              onChange={(e) => handleDataChange('clientName', e.target.value)}
              className="text-xl font-bold text-gray-900 w-full outline-none border-b border-transparent hover:border-gray-200 focus:border-gen-primary transition-colors bg-transparent mb-2"
              placeholder="Client Name"
            />
            <textarea 
              value={invoiceData.clientDetails}
              onChange={(e) => handleDataChange('clientDetails', e.target.value)}
              className="text-gray-600 w-full md:w-1/2 h-24 outline-none border border-transparent hover:border-gray-200 focus:border-gen-primary rounded p-2 transition-colors resize-none bg-transparent"
              placeholder="Client Details / Address"
            />
          </div>

          {/* Line Items */}
          <div className="mb-8">
            <div className="grid grid-cols-12 gap-2 font-bold text-gray-500 border-b-2 border-gray-800 pb-2 mb-4 text-sm uppercase">
              <div className="col-span-6 md:col-span-7">Description</div>
              <div className="col-span-2 text-right">Qty</div>
              <div className="col-span-2 text-right">Rate</div>
              <div className="col-span-2 text-right">Amount</div>
            </div>

            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 items-center group">
                  <div className="col-span-6 md:col-span-7 relative">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="absolute -left-6 top-1/2 -translate-y-1/2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity print:hidden hover:bg-red-50 p-1 rounded"
                      title="Remove Item"
                    >
                      <Trash2 size={14} />
                    </button>
                    <input 
                      type="text" 
                      value={item.description}
                      onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                      className="w-full outline-none border-b border-transparent hover:border-gray-200 focus:border-gen-primary bg-transparent py-1 font-medium text-gray-900"
                      placeholder="Item description"
                    />
                  </div>
                  <div className="col-span-2 text-right">
                    <input 
                      type="number" 
                      value={item.quantity}
                      onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                      className="w-full outline-none border-b border-transparent hover:border-gray-200 focus:border-gen-primary text-right bg-transparent py-1 font-medium text-gray-900"
                    />
                  </div>
                  <div className="col-span-2 text-right">
                    <input 
                      type="number" 
                      value={item.rate}
                      onChange={(e) => handleItemChange(item.id, 'rate', e.target.value)}
                      className="w-full outline-none border-b border-transparent hover:border-gray-200 focus:border-gen-primary text-right bg-transparent py-1 font-medium text-gray-900"
                    />
                  </div>
                  <div className="col-span-2 text-right font-bold text-gray-900 py-1">
                    {invoiceData.currency}{(Number(item.quantity) * Number(item.rate)).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={addItem}
              className="mt-4 text-gen-primary font-bold text-sm flex items-center gap-1 hover:text-gen-primaryDark print:hidden px-3 py-2 rounded-lg hover:bg-gen-primary/5 transition-colors"
            >
              <Plus size={16} /> Add Line Item
            </button>
          </div>

          {/* Totals */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-12 border-t border-gray-200 pt-8">
            <div className="w-full md:w-1/2">
              <h3 className="font-bold text-gray-400 uppercase tracking-wider mb-2 text-sm">Notes / Instructions</h3>
              <textarea 
                value={invoiceData.notes}
                onChange={(e) => handleDataChange('notes', e.target.value)}
                className="text-gray-600 w-full h-24 outline-none border border-transparent hover:border-gray-200 focus:border-gen-primary rounded p-2 transition-colors resize-none bg-transparent"
                placeholder="Payment instructions or thank you note..."
              />
            </div>
            <div className="w-full md:w-1/3 space-y-3">
              <div className="flex justify-between items-center text-gray-600 font-medium">
                <span>Subtotal</span>
                <span>{invoiceData.currency}{subtotal.toFixed(2)}</span>
              </div>
              {Number(invoiceData.taxRate) > 0 && (
                <div className="flex justify-between items-center text-gray-600 font-medium">
                  <span>Tax ({invoiceData.taxRate}%)</span>
                  <span>{invoiceData.currency}{taxAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-xl font-extrabold text-gray-900 border-t-2 border-gray-800 pt-3">
                <span>Total Due</span>
                <span>{invoiceData.currency}{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="print:hidden">
          <InvoiceGeneratorSeo />
          <RelatedGeneratorsTools />
        </div>
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12 print:hidden">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>

      {/* Print Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * {
            visibility: hidden;
          }
          main, main * {
            visibility: visible;
          }
          main {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          input, textarea {
            border: none !important;
            resize: none !important;
            outline: none !important;
            box-shadow: none !important;
            background: transparent !important;
          }
          textarea {
            overflow: hidden !important;
          }
        }
      `}} />
    </div>
  );
}
