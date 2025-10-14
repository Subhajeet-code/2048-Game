import React, { useEffect } from 'react';

export default function ResultModal({ status, onRestart, onContinue, onClose }) {
  // status: 'won' | 'lost' or null
  const open = status === 'won' || status === 'lost';
  useEffect(() => {
    if (!open) return;
    // optional: trap focus or disable page scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, [open]);

  if (!open) return null;

  const isWin = status === 'won';
  const title = isWin ? 'You reached 2048!' : "Game Over";
  const subtitle = isWin
    ? 'Incredible — you made the 2048 tile. Want to go further?'
    : "No valid moves remain. Try another strategy and beat your best score!";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      {/* confetti container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="confetti-layer">
          {/* a few confetti bits are pre-placed; CSS animates them */}
          <div className="confetti c1" />
          <div className="confetti c2" />
          <div className="confetti c3" />
          <div className="confetti c4" />
          <div className="confetti c5" />
          <div className="confetti c6" />
          <div className="confetti c7" />
          <div className="confetti c8" />
        </div>
      </div>

      {/* modal card */}
      <div
        className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-400 ease-out scale-95 opacity-0 animate-result-in"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${isWin ? 'bg-green-500' : 'bg-red-500'} shadow-lg`}>
            <div style={{ fontSize: 18 }}>{isWin ? '🎉' : '😞'}</div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {isWin && (
            <button
              onClick={() => { onContinue?.(); }}
              className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 font-medium hover:shadow-md"
            >
              Continue
            </button>
          )}

          <button
            onClick={() => { onRestart(); }}
            className={`px-4 py-2 rounded-lg font-medium ${isWin ? 'bg-yellow-500 text-white' : 'bg-red-600 text-white'} hover:brightness-95`}
          >
            Restart
          </button>

          <button
            onClick={() => {
              try {
                const text = `I just ${isWin ? 'won' : 'played'} 2048! Can you beat my score?`;
                navigator.share ? navigator.share({ text }) : (navigator.clipboard && navigator.clipboard.writeText(text));
                // optional feedback
                alert('Share text copied to clipboard!');
              } catch (e) {
                console.warn(e);
              }
            }}
            className="col-span-2 mt-1 px-4 py-2 rounded-lg bg-accent text-white font-medium hover:brightness-95"
          >
            Share / Copy message
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
