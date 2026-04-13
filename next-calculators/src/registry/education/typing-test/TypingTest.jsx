"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function TypingTest() {
  const referenceText = "Typing tests help improve your speed, accuracy, and overall efficiency. Practice often to enhance your typing skills.";
  
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
  };

  return (
    <div className="max-w-3xl mx-auto my-8 font-sans">
      {/* Header matching the screenshot */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Typing Speed Test</h1>
        <p className="text-gray-600">Type the text below as fast and accurately as you can.</p>
      </div>

      {/* Main Calculator Card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-4">
        
        {/* Reference Text Box */}
        <div className="border border-gray-300 rounded-xl p-4 bg-white text-gray-900 text-lg leading-relaxed select-none">
          {referenceText}
        </div>

        {/* Typing Input Area */}
        <textarea
          ref={textAreaRef}
          value={typedText}
          onChange={handleInputChange}
          disabled={timeLeft === 0}
          placeholder="Start typing here..."
          className="w-full border border-gray-300 rounded-xl p-4 text-gray-800 text-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono transition-shadow disabled:bg-gray-50"
        ></textarea>

        {/* 2x2 Stats Grid */}
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-[#f3f4f6] rounded-xl p-6 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-blue-600 mb-1">{timeLeft}</span>
            <span className="text-sm text-gray-600 font-medium">Seconds Left</span>
          </div>
          <div className="bg-[#f3f4f6] rounded-xl p-6 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-blue-600 mb-1">{stats.wpm}</span>
            <span className="text-sm text-gray-600 font-medium">WPM</span>
          </div>
          <div className="bg-[#f3f4f6] rounded-xl p-6 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-blue-600 mb-1">{stats.cpm}</span>
            <span className="text-sm text-gray-600 font-medium">CPM</span>
          </div>
          <div className="bg-[#f3f4f6] rounded-xl p-6 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-blue-600 mb-1">{stats.accuracy}%</span>
            <span className="text-sm text-gray-600 font-medium">Accuracy</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mt-4">
          <button 
            onClick={handleStart}
            disabled={isActive || timeLeft < 60}
            className="w-full bg-[#3b62db] hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-4 rounded-xl transition-colors text-lg"
          >
            Start Test
          </button>
          <button 
            onClick={handleRestart}
            className="w-full bg-[#198031] hover:bg-green-800 text-white font-semibold py-4 rounded-xl transition-colors text-lg"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}