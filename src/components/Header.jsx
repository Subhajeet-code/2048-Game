import React from "react";
import { Info, RotateCcw } from "lucide-react";

export default function Header({ onOpenHelp, onReset, onShare }) {
  return (
    <header className="flex items-start justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenHelp}
          className="relative p-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 shadow-lg scale-105 transition-all duration-300"
          title="How to play"
        >
          <Info
            size={20}
            className="text-purple-500 drop-shadow-[0_0_6px_rgba(168,85,247,0.6)] transition-colors"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 pointer-events-none"></div>
        </button>

        <button
          onClick={onReset}
          className="group relative px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <RotateCcw
              size={18}
              className="group-hover:rotate-180 transition-transform duration-500"
            />
            Restart
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </header>
  );
}
