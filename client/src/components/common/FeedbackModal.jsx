import { useState } from 'react';
import { X, Star } from 'lucide-react';

export default function FeedbackModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-calc-black bg-opacity-50 z-[100] flex justify-center items-center p-4">
      <div className="bg-calc-white rounded-xl max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-calc-gray hover:text-calc-black">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-2">We Value Your Feedback</h2>
        <p className="text-calc-gray mb-6">How was your experience using CalcPilot?</p>
        
        {/* Star Rating */}
        <div className="flex space-x-2 mb-6 justify-center">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <button
                key={ratingValue}
                type="button"
                className="focus:outline-none"
                onClick={() => setRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              >
                <Star 
                  size={40} 
                  className={`transition-colors ${(hover || rating) >= ratingValue ? "text-[#f59e0b] fill-[#f59e0b]" : "text-calc-lightGray"}`} 
                />
              </button>
            );
          })}
        </div>
        
        <textarea className="w-full border border-calc-lightGray rounded-md p-3 focus:ring-2 focus:ring-calc-green outline-none mb-4" rows="4" placeholder="Tell us what we can improve..."></textarea>
        <button className="w-full bg-calc-green text-calc-white py-3 rounded-md font-bold hover:bg-calc-darkGreen" onClick={() => { alert('Feedback Sent!'); onClose(); }}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
}