"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function TypingTest({ config }) {
  // Import and render the content component
  const ContentComponent = React.lazy(() => import('./content.jsx'));
  // Array of text prompts to cycle through upon restart
  const referenceTexts = [
    "Typing tests help improve your speed, accuracy, and overall efficiency. Practice often to enhance your typing skills and build muscle memory.",
    "Technology has transformed how we communicate, work, and learn. Developing strong keyboarding skills is essential in the modern digital age.",
    "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is often used for typing practice."
  ];
  const [referenceText, setReferenceText] = useState(referenceTexts[0]);
  
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [stats, setStats] = useState({ wpm: 0, cpm: 0, accuracy: 0 });
  const textAreaRef = useRef(null);

  // Timer Logic
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  // Real-time Calculation Logic
  const calculateStats = (currentText) => {
    const timeSpent = 60 - timeLeft; // in seconds
    const timeSpentMin = timeSpent / 60;
    
    let correctChars = 0;
    for (let i = 0; i < currentText.length; i++) {
      if (currentText[i] === referenceText[i]) {
        correctChars++;
      }
    }

    let currentAccuracy = 0;
    if (currentText.length > 0) {
      currentAccuracy = Math.round((correctChars / currentText.length) * 100);
    }

    let currentCpm = 0;
    let currentWpm = 0;
    
    // FIX: Prevent division by zero (NaN) when timeSpent is 0
    if (timeSpent > 0) {
      currentCpm = Math.round(correctChars / timeSpentMin);
      currentWpm = Math.round((correctChars / 5) / timeSpentMin);
    }

    setStats({ wpm: currentWpm, cpm: currentCpm, accuracy: currentAccuracy });
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    
    // Auto-start timer on first keystroke
    if (!isActive && timeLeft === 60 && val.length > 0) {
      setIsActive(true);
    }
    
    // Prevent typing if time is up or max length reached
    if (timeLeft > 0 && val.length <= referenceText.length) {
      setTypedText(val);
      calculateStats(val);
    }
  };

  const handleStart = () => {
    setIsActive(true);
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  const handleRestart = () => {
    setIsActive(false);
    setTimeLeft(60);
    setTypedText("");
    setStats({ wpm: 0, cpm: 0, accuracy: 0 });
    // Pick a new random text on restart
    const randomText = referenceTexts[Math.floor(Math.random() * referenceTexts.length)];
    setReferenceText(randomText);
  };

  // Visual helper: Colors the text green for correct, red for incorrect
  const renderReferenceText = () => {
    return referenceText.split('').map((char, index) => {
      let colorClass = "text-gray-500";
      if (index < typedText.length) {
        colorClass = typedText[index] === char 
          ? "text-green-600 bg-green-50" 
          : "text-red-600 bg-red-100 underline decoration-red-400";
      } else if (index === typedText.length && isActive) {
        colorClass = "text-gray-900 bg-blue-100 border-b-2 border-blue-500"; // Current cursor position
      }
      return (
        <span key={index} className={colorClass}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="text-center mb-8">
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000', marginBottom: '0.5rem' }}>Interactive Typing Test</h2>
        <p style={{ color: '#6b7280' }}>Type the text below as fast and accurately as you can to determine your WPM.</p>
      </div>

      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '1rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', padding: '2rem', marginBottom: '1.5rem' }}>
        
        {/* Dynamic Reference Text Box */}
        <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-lg leading-relaxed select-none font-mono tracking-wide break-words shadow-inner">
          {renderReferenceText()}
        </div>

        {/* Typing Input Area */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Your Typing Test</label>
          <textarea
            ref={textAreaRef}
            value={typedText}
            onChange={handleInputChange}
            disabled={timeLeft === 0}
            placeholder="Start typing here to begin the 60-second test..."
            style={{
              width: '100%',
              border: '1px solid #d1d5db',
              borderRadius: '0.75rem',
              padding: '1.25rem',
              color: '#1f2937',
              fontSize: '1.125rem',
              height: '8rem',
              resize: 'none',
              fontFamily: 'monospace',
              backgroundColor: timeLeft === 0 ? '#f9fafb' : '#ffffff',
              cursor: timeLeft === 0 ? 'not-allowed' : 'text'
            }}
            spellCheck="false"
          ></textarea>
        </div>

        {/* 2x2 / 4x1 Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: '#eef2ff', border: '1px solid #e0e7ff', borderRadius: '0.75rem', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4f46e5', marginBottom: '0.25rem' }}>{timeLeft}</span>
            <span style={{ fontSize: '0.875rem', color: '#4338ca', fontWeight: '500' }}>Seconds Left</span>
          </div>
          <div style={{ backgroundColor: '#eff6ff', border: '1px solid #dbeafe', borderRadius: '0.75rem', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.25rem' }}>{stats.wpm}</span>
            <span style={{ fontSize: '0.875rem', color: '#1d4ed8', fontWeight: '500' }}>WPM (Words/Min)</span>
          </div>
          <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #d1fae5', borderRadius: '0.75rem', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669', marginBottom: '0.25rem' }}>{stats.cpm}</span>
            <span style={{ fontSize: '0.875rem', color: '#047857', fontWeight: '500' }}>CPM (Chars/Min)</span>
          </div>
          <div style={{ backgroundColor: '#faf5ff', border: '1px solid #f3e8ff', borderRadius: '0.75rem', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#9333ea', marginBottom: '0.25rem' }}>{stats.accuracy}%</span>
            <span style={{ fontSize: '0.875rem', color: '#7e22ce', fontWeight: '500' }}>Accuracy</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button 
            onClick={handleStart}
            disabled={isActive || timeLeft < 60}
            style={{
              flex: 1,
              backgroundColor: (isActive || timeLeft < 60) ? '#d1d5db' : '#2563eb',
              color: (isActive || timeLeft < 60) ? '#6b7280' : '#ffffff',
              fontWeight: '600',
              padding: '1rem',
              borderRadius: '0.75rem',
              fontSize: '1.125rem',
              cursor: (isActive || timeLeft < 60) ? 'not-allowed' : 'pointer',
              border: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Start Test Automatically
          </button>
          <button 
            onClick={handleRestart}
            style={{
              flex: 1,
              backgroundColor: '#1f2937',
              color: '#ffffff',
              fontWeight: '600',
              padding: '1rem',
              borderRadius: '0.75rem',
              fontSize: '1.125rem',
              cursor: 'pointer',
              border: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Restart & Change Text
          </button>
        </div>
      </div>
      
      {/* Content Section */}
      <React.Suspense fallback={<div>Loading content...</div>}>
        <ContentComponent />
      </React.Suspense>
    </div>
  );
}