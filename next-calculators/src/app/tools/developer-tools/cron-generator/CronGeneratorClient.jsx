'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, Clock, Calendar, Hash, RefreshCw, AlertCircle } from 'lucide-react';
import cronstrue from 'cronstrue';

export default function CronGeneratorClient() {
  const [minute, setMinute] = useState('*');
  const [hour, setHour] = useState('*');
  const [dayOfMonth, setDayOfMonth] = useState('*');
  const [month, setMonth] = useState('*');
  const [dayOfWeek, setDayOfWeek] = useState('*');
  
  const [cronExpression, setCronExpression] = useState('* * * * *');
  const [humanReadable, setHumanReadable] = useState('');
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const expr = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
    setCronExpression(expr);
    try {
      const readable = cronstrue.toString(expr, { throwExceptionOnParseError: true });
      setHumanReadable(readable);
      setError(null);
    } catch (err) {
      setHumanReadable('');
      setError('Invalid cron expression. Please check your syntax.');
    }
  }, [minute, hour, dayOfMonth, month, dayOfWeek]);

  const handleCopy = () => {
    if (error) return;
    navigator.clipboard.writeText(cronExpression);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const setPreset = (preset) => {
    switch (preset) {
      case 'every-minute':
        setMinute('*'); setHour('*'); setDayOfMonth('*'); setMonth('*'); setDayOfWeek('*');
        break;
      case 'every-5-minutes':
        setMinute('*/5'); setHour('*'); setDayOfMonth('*'); setMonth('*'); setDayOfWeek('*');
        break;
      case 'every-hour':
        setMinute('0'); setHour('*'); setDayOfMonth('*'); setMonth('*'); setDayOfWeek('*');
        break;
      case 'daily-midnight':
        setMinute('0'); setHour('0'); setDayOfMonth('*'); setMonth('*'); setDayOfWeek('*');
        break;
      case 'weekly':
        setMinute('0'); setHour('0'); setDayOfMonth('*'); setMonth('*'); setDayOfWeek('0');
        break;
      case 'monthly':
        setMinute('0'); setHour('0'); setDayOfMonth('1'); setMonth('*'); setDayOfWeek('*');
        break;
      case 'weekdays':
        setMinute('0'); setHour('0'); setDayOfMonth('*'); setMonth('*'); setDayOfWeek('1-5');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <header className="bg-linear-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            Cron Job Generator
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Create, edit, and decipher complex Cron scheduling expressions for Linux, CI/CD, and DevOps pipelines.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        
        {/* Output Area */}
        <div className="bg-dev-dark p-8 md:p-12 text-center relative border-b-4 border-dev-primary">
          <div className="font-mono text-4xl md:text-6xl font-bold text-white mb-6 tracking-widest break-words flex flex-wrap justify-center gap-4">
            <span className="text-dev-primary">{minute}</span>
            <span className="text-emerald-400">{hour}</span>
            <span className="text-blue-400">{dayOfMonth}</span>
            <span className="text-purple-400">{month}</span>
            <span className="text-amber-400">{dayOfWeek}</span>
          </div>
          
          <div className="h-16 flex items-center justify-center">
            {error ? (
              <div className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-2 rounded-full text-lg">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            ) : (
              <p className="text-xl md:text-2xl text-dev-gray font-medium">
                "{humanReadable}"
              </p>
            )}
          </div>
          
          <button
            onClick={handleCopy}
            disabled={!!error}
            className={`absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all disabled:opacity-50 ${
              copied 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        {/* Presets */}
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30">
          <div className="flex flex-wrap gap-2 justify-center">
            <button onClick={() => setPreset('every-minute')} className="px-3 py-1.5 bg-dev-white border border-dev-gray rounded-lg text-sm font-semibold hover:border-dev-primary hover:text-dev-primary transition-colors">Every Minute</button>
            <button onClick={() => setPreset('every-5-minutes')} className="px-3 py-1.5 bg-dev-white border border-dev-gray rounded-lg text-sm font-semibold hover:border-dev-primary hover:text-dev-primary transition-colors">Every 5 Mins</button>
            <button onClick={() => setPreset('every-hour')} className="px-3 py-1.5 bg-dev-white border border-dev-gray rounded-lg text-sm font-semibold hover:border-dev-primary hover:text-dev-primary transition-colors">Every Hour</button>
            <button onClick={() => setPreset('daily-midnight')} className="px-3 py-1.5 bg-dev-white border border-dev-gray rounded-lg text-sm font-semibold hover:border-dev-primary hover:text-dev-primary transition-colors">Daily at Midnight</button>
            <button onClick={() => setPreset('weekly')} className="px-3 py-1.5 bg-dev-white border border-dev-gray rounded-lg text-sm font-semibold hover:border-dev-primary hover:text-dev-primary transition-colors">Weekly (Sunday)</button>
            <button onClick={() => setPreset('monthly')} className="px-3 py-1.5 bg-dev-white border border-dev-gray rounded-lg text-sm font-semibold hover:border-dev-primary hover:text-dev-primary transition-colors">Monthly (1st)</button>
            <button onClick={() => setPreset('weekdays')} className="px-3 py-1.5 bg-dev-white border border-dev-gray rounded-lg text-sm font-semibold hover:border-dev-primary hover:text-dev-primary transition-colors">Weekdays (Mon-Fri)</button>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-dev-gray/30 p-4">
          
          <div className="p-4 flex flex-col gap-2">
            <label className="text-xs font-bold text-dev-primary uppercase tracking-wider flex items-center gap-1"><Hash size={14}/> Minute</label>
            <input 
              type="text" 
              value={minute} 
              onChange={(e) => setMinute(e.target.value)}
              className="w-full bg-dev-gray/5 border border-dev-gray rounded-lg px-3 py-2 font-mono text-center focus:outline-hidden focus:border-dev-primary focus:ring-1 focus:ring-dev-primary"
            />
            <span className="text-xs text-dev-gray/80 text-center">0-59</span>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <label className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1"><Clock size={14}/> Hour</label>
            <input 
              type="text" 
              value={hour} 
              onChange={(e) => setHour(e.target.value)}
              className="w-full bg-dev-gray/5 border border-dev-gray rounded-lg px-3 py-2 font-mono text-center focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
            <span className="text-xs text-dev-gray/80 text-center">0-23</span>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <label className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1"><Calendar size={14}/> Day (Month)</label>
            <input 
              type="text" 
              value={dayOfMonth} 
              onChange={(e) => setDayOfMonth(e.target.value)}
              className="w-full bg-dev-gray/5 border border-dev-gray rounded-lg px-3 py-2 font-mono text-center focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <span className="text-xs text-dev-gray/80 text-center">1-31</span>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <label className="text-xs font-bold text-purple-600 uppercase tracking-wider flex items-center gap-1"><Calendar size={14}/> Month</label>
            <input 
              type="text" 
              value={month} 
              onChange={(e) => setMonth(e.target.value)}
              className="w-full bg-dev-gray/5 border border-dev-gray rounded-lg px-3 py-2 font-mono text-center focus:outline-hidden focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
            <span className="text-xs text-dev-gray/80 text-center">1-12</span>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <label className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1"><Calendar size={14}/> Day (Week)</label>
            <input 
              type="text" 
              value={dayOfWeek} 
              onChange={(e) => setDayOfWeek(e.target.value)}
              className="w-full bg-dev-gray/5 border border-dev-gray rounded-lg px-3 py-2 font-mono text-center focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
            <span className="text-xs text-dev-gray/80 text-center">0-6 (0=Sun)</span>
          </div>

        </div>

      </div>
      </main>
    </>
  );
}
