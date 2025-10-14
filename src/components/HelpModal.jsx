import React from 'react';

export default function HelpModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">How to play</h3>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>

        <div className="mt-4 text-sm text-gray-700 space-y-3">
          <p><strong>Goal:</strong> Merge tiles to create the <strong>2048</strong> tile.</p>
          <p><strong>Controls:</strong> Arrow keys or <strong>W A S D</strong> to move tiles.</p>
          <p>Equal tiles merge into their sum. Every move spawns a 2 or 4 in a random empty cell.</p>
          <p><strong>Win:</strong> reach 2048. <strong>Lose:</strong> no valid moves left.</p>
          <p><strong>Tips:</strong> Keep your largest tile in one corner; plan ahead and avoid random moves.</p>
        </div>

        <div className="mt-5 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-accent text-white rounded-md">Got it</button>
        </div>
      </div>
    </div>
  );
}
