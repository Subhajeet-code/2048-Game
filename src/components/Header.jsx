import React from 'react';
import { HelpCircle, Github } from 'lucide-react';

export default function Header({ onOpenHelp, onReset, onShare }) {
  return (
    <header className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-extrabold text-textSoft">2048</div>
        <div className="text-sm text-textSoft/80">React · Tailwind</div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onOpenHelp}
          className="p-2 rounded-md bg-white/90 shadow hover:bg-white"
          title="How to play"
        >
          <HelpCircle size={18} />
        </button>
        <button
          onClick={onReset}
          className="px-3 py-2 rounded-md bg-accent text-white text-sm font-medium shadow hover:brightness-95"
        >
          Restart
        </button>
      </div>
    </header>
  );
}
