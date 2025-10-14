import React from 'react';

export default function Scoreboard({ score, best }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="bg-white/95 px-3 py-2 rounded-md shadow text-center">
        <div className="text-xs text-textSoft">SCORE</div>
        <div className="text-lg font-bold">{score}</div>
      </div>
      <div className="bg-white/95 px-3 py-2 rounded-md shadow text-center">
        <div className="text-xs text-textSoft">BEST</div>
        <div className="text-lg font-bold">{best}</div>
      </div>
    </div>
  );
}
