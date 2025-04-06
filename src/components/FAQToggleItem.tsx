"use client";

import React, { useState } from 'react';

interface FAQToggleItemProps {
  question: string;
  answer: string;
}

const FAQToggleItem: React.FC<FAQToggleItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <span className="text-text-dark font-bold text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-text-light">{answer}</p>
      </div>
    </div>
  );
};

export default FAQToggleItem;
