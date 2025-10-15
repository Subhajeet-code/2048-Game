import React from 'react';

export default function Scoreboard({ score, best }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative bg-white/95 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-white/40 transform hover:scale-105 transition-all duration-300">
          <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 tracking-wider mb-1">SCORE</div>
          <div className="text-2xl font-bold text-gray-800 tabular-nums">{score.toLocaleString()}</div>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative bg-white/95 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-white/40 transform hover:scale-105 transition-all duration-300">
          <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 tracking-wider mb-1">BEST</div>
          <div className="text-2xl font-bold text-gray-800 tabular-nums">{best.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}