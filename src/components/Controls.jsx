import React from 'react';

export default function Controls({ onSizeChange }) {
  const [activeSize, setActiveSize] = React.useState(4);

  const handleSizeChange = (size) => {
    setActiveSize(size);
    onSizeChange(size);
  };

  return (
    <div className="relative flex gap-2 items-center p-1.5 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl">
      {[4, 5, 6].map((size) => (
        <button
          key={size}
          onClick={() => handleSizeChange(size)}
          className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
            activeSize === size
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
              : 'bg-white/60 text-gray-700 hover:bg-white/80 hover:scale-105'
          }`}
        >
          <span className="relative z-10">{size}×{size}</span>
          {activeSize === size && (
            <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
          )}
        </button>
      ))}
    </div>
  );
}
