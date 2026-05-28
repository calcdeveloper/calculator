"use client";

import { useState } from "react";
import { Heart, RefreshCw, Share2 } from "lucide-react";

export default function FriendshipCalculatorClient() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const calculateFriendship = () => {
    if (!name1.trim() || !name2.trim()) return;

    // Fun algorithm to calculate friendship percentage
    const combinedNames = (name1 + name2).toLowerCase().replace(/\s/g, "");
    let sum = 0;
    for (let i = 0; i < combinedNames.length; i++) {
      sum += combinedNames.charCodeAt(i);
    }
    const percentage = (sum % 101); // Ensure it's between 0-100

    setResult({
      percentage,
      message: getMessage(percentage),
    });
    setShowResult(true);
  };

  const getMessage = (percentage) => {
    if (percentage >= 90) return "Best Friends Forever! 💖";
    if (percentage >= 80) return "Great Friends! 💕";
    if (percentage >= 70) return "Good Friends! 💝";
    if (percentage >= 60) return "Friends! 💗";
    if (percentage >= 50) return "Acquaintances! 💓";
    if (percentage >= 40) return "Getting to know each other! 💞";
    if (percentage >= 30) return "Strangers turning into friends! 💘";
    if (percentage >= 20) return "Potential friends! 💙";
    if (percentage >= 10) return "Keep trying! 💚";
    return "Friendship takes time! 💛";
  };

  const resetCalculator = () => {
    setName1("");
    setName2("");
    setResult(null);
    setShowResult(false);
  };

  const shareResult = () => {
    if (!result) return;
    const text = `${name1} ❤️ ${name2} = ${result.percentage}% Friendship! ${result.message}`;
    if (navigator.share) {
      navigator.share({
        title: "Friendship Calculator Result",
        text: text,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert("Result copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Heart className="text-pink-500" size={40} />
            Friendship Calculator
          </h1>
          <p className="text-xl text-gray-600">Calculate your friendship percentage!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                placeholder="Enter first name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Second Name
              </label>
              <input
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                placeholder="Enter second name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={calculateFriendship}
              disabled={!name1.trim() || !name2.trim()}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
            >
              <Heart size={24} />
              Calculate Friendship
            </button>
          </div>
        </div>

        {showResult && result && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-pulse">
            <div className="text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
                {result.percentage}%
              </div>
              <div className="text-2xl font-semibold text-gray-800 mb-6">
                {result.message}
              </div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={shareResult}
                  className="flex items-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  <Share2 size={20} />
                  Share
                </button>
                <button
                  onClick={resetCalculator}
                  className="flex items-center gap-2 bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                >
                  <RefreshCw size={20} />
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Friendship Calculator</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              This friendship calculator is a fun tool that calculates the friendship percentage between two names. It's perfect for entertainment and sharing with friends!
            </p>
            <p className="text-sm text-gray-500 italic">
              Disclaimer: This is for entertainment purposes only. Real friendship depends on many factors beyond names and cannot be calculated by any algorithm.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How to Use</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enter two names in the input fields</li>
              <li>Click the "Calculate Friendship" button</li>
              <li>See your friendship percentage and message</li>
              <li>Share the result with your friends!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
