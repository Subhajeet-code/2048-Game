import React from 'react';

export default function Controls({ onSizeChange }) {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => onSizeChange(4)}
        className="px-3 py-1 text-sm rounded-md bg-white/90 shadow"
      >
        4×4
      </button>
      <button
        onClick={() => onSizeChange(5)}
        className="px-3 py-1 text-sm rounded-md bg-white/90 shadow"
      >
        5×5
      </button>
    </div>
  );
}
