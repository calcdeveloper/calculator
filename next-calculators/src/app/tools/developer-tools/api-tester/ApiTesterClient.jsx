'use client';

import React, { useState } from 'react';
import { Send, Plus, Trash2, RefreshCw, Globe, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export default function ApiTesterClient() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/1');
  const [method, setMethod] = useState('GET');
  const [headers, setHeaders] = useState([{ key: '', value: '' }]);
  const [body, setBody] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [response, setResponse] = useState(null); // { status, statusText, data, time, size, isError }
  const [activeTab, setActiveTab] = useState('headers'); // 'headers' | 'body'

  const handleAddHeader = () => {
    setHeaders([...headers, { key: '', value: '' }]);
  };

  const handleRemoveHeader = (index) => {
    const newHeaders = [...headers];
    newHeaders.splice(index, 1);
    setHeaders(newHeaders);
  };

  const handleHeaderChange = (index, field, val) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = val;
    setHeaders(newHeaders);
  };

  const handleSendRequest = async () => {
    if (!url.trim()) return;
    
    setIsSending(true);
    setResponse(null);
    const startTime = performance.now();

    try {
      const fetchHeaders = new Headers();
      headers.forEach(h => {
        if (h.key.trim() && h.value.trim()) {
          fetchHeaders.append(h.key.trim(), h.value.trim());
        }
      });

      const fetchOptions = {
        method,
        headers: fetchHeaders,
      };

      if (['POST', 'PUT', 'PATCH'].includes(method) && body.trim()) {
        fetchOptions.body = body;
        if (!fetchHeaders.has('Content-Type')) {
          // Attempt to guess if JSON
          try {
            JSON.parse(body);
            fetchHeaders.append('Content-Type', 'application/json');
          } catch(e) {}
        }
      }

      const res = await fetch(url, fetchOptions);
      const endTime = performance.now();
      
      let dataStr = '';
      const contentType = res.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        const jsonData = await res.json();
        dataStr = JSON.stringify(jsonData, null, 2);
      } else {
        dataStr = await res.text();
      }

      setResponse({
        status: res.status,
        statusText: res.statusText,
        data: dataStr,
        time: Math.round(endTime - startTime),
        size: new Blob([dataStr]).size,
        isError: !res.ok
      });
    } catch (err) {
      const endTime = performance.now();
      setResponse({
        status: 'Error',
        statusText: 'Network / CORS Failure',
        data: err.message + '\n\nNote: If the API does not support CORS (Cross-Origin Resource Sharing), the browser will actively block the request for security reasons.',
        time: Math.round(endTime - startTime),
        size: 0,
        isError: true
      });
    }
    
    setIsSending(false);
  };

  const handleClear = () => {
    setUrl('');
    setMethod('GET');
    setHeaders([{ key: '', value: '' }]);
    setBody('');
    setResponse(null);
  };

  return (
    <>
      <header className="bg-linear-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            API Tester
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Send RESTful HTTP requests directly from your browser. Test API endpoints, inspect headers, and analyze JSON responses.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        
        {/* Request Builder */}
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30">
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="bg-dev-white border border-dev-gray text-dev-dark font-bold rounded-xl focus:ring-dev-primary focus:border-dev-primary px-4 py-3 md:w-32"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="PATCH">PATCH</option>
              <option value="DELETE">DELETE</option>
            </select>
            
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Globe size={18} className="text-dev-gray" />
              </div>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://api.example.com/v1/users"
                className="w-full pl-10 pr-4 py-3 bg-dev-white border border-dev-gray text-dev-dark rounded-xl focus:ring-2 focus:ring-dev-primary focus:border-dev-primary focus:outline-hidden font-mono"
              />
            </div>
            
            <button
              onClick={handleSendRequest}
              disabled={!url || isSending}
              className="flex items-center justify-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-8 py-3 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <Send size={18} />
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>

        {/* Request Configurations */}
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-dev-gray/30">
          
          {/* Tabs Area */}
          <div className="flex-1 flex flex-col h-[400px]">
            <div className="flex border-b border-dev-gray/30 bg-dev-gray/5">
              <button
                onClick={() => setActiveTab('headers')}
                className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'headers' ? 'text-dev-primary border-b-2 border-dev-primary bg-dev-white' : 'text-dev-gray hover:text-dev-dark'
                }`}
              >
                Headers ({headers.filter(h => h.key || h.value).length})
              </button>
              <button
                onClick={() => setActiveTab('body')}
                className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'body' ? 'text-dev-primary border-b-2 border-dev-primary bg-dev-white' : 'text-dev-gray hover:text-dev-dark'
                }`}
              >
                Body Payload
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-dev-white">
              {activeTab === 'headers' && (
                <div className="p-4 space-y-3">
                  {headers.map((header, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Header Key (e.g., Authorization)"
                        value={header.key}
                        onChange={(e) => handleHeaderChange(index, 'key', e.target.value)}
                        className="flex-1 bg-dev-white border border-dev-gray text-dev-dark rounded-lg px-3 py-2 text-sm font-mono focus:outline-hidden focus:border-dev-primary"
                      />
                      <input
                        type="text"
                        placeholder="Value (e.g., Bearer token...)"
                        value={header.value}
                        onChange={(e) => handleHeaderChange(index, 'value', e.target.value)}
                        className="flex-1 bg-dev-white border border-dev-gray text-dev-dark rounded-lg px-3 py-2 text-sm font-mono focus:outline-hidden focus:border-dev-primary"
                      />
                      <button
                        onClick={() => handleRemoveHeader(index)}
                        className="p-2 text-dev-gray hover:text-red-500 transition-colors"
                        disabled={headers.length === 1}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={handleAddHeader}
                    className="flex items-center gap-2 text-dev-primary hover:text-dev-primaryDark font-semibold text-sm px-2 py-1 mt-2"
                  >
                    <Plus size={16} /> Add Header
                  </button>
                </div>
              )}
              
              {activeTab === 'body' && (
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="{\n  &quot;key&quot;: &quot;value&quot;\n}"
                  className="w-full h-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
                  spellCheck="false"
                  disabled={['GET', 'HEAD'].includes(method)}
                />
              )}
            </div>
          </div>
          
          {/* Response Area */}
          <div className="flex-1 flex flex-col h-[400px]">
            <div className="bg-dev-gray/5 py-3 px-4 border-b border-dev-gray/30 flex justify-between items-center h-[46px]">
              <span className="text-sm font-bold text-dev-dark uppercase tracking-wider">Response</span>
              {response && (
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className={`flex items-center gap-1 ${response.isError ? 'text-red-600' : 'text-emerald-600'}`}>
                    {response.isError ? <AlertCircle size={14} /> : <CheckCircle size={14} />}
                    {response.status} {response.statusText}
                  </span>
                  <span className="flex items-center gap-1 text-dev-gray">
                    <Clock size={14} /> {response.time} ms
                  </span>
                  <span className="text-dev-gray">{response.size} bytes</span>
                </div>
              )}
            </div>
            
            <div className="flex-1 bg-dev-white relative">
              {!response ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-dev-gray italic">
                  <Send size={32} className="mb-2 opacity-20" />
                  Hit Send to execute the request
                </div>
              ) : (
                <textarea
                  value={response.data}
                  readOnly
                  className={`w-full h-full p-4 bg-transparent font-mono text-sm resize-none focus:outline-hidden ${response.isError ? 'text-red-700 bg-red-50/10' : 'text-dev-dark'}`}
                  spellCheck="false"
                />
              )}
            </div>
          </div>

        </div>
      </div>
      </main>
    </>
  );
}
