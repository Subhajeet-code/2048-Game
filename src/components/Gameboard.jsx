import React from "react";
import Tile from "./Tile";

export default function GameBoard({ board, lastSpawn }) {
  const size = board.length;
  const gap = 8;

  return (
    <div
      className="rounded-3xl p-8 shadow-2xl backdrop-blur-xl flex flex-col items-center transition-all duration-500"
      style={{
        background:
          "linear-gradient(145deg, rgba(30,32,50,0.9), rgba(22,25,40,0.92))",
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="rounded-2xl relative transition-all duration-500"
        style={{
          width: "min(520px, 92vw)",
          aspectRatio: "1 / 1",
          background: "linear-gradient(145deg, #2f3454, #1b1f33)",
          padding: `${gap}px`,
          borderRadius: 24,
          boxShadow:
            "inset 0 5px 15px rgba(0,0,0,0.6), 0 0 25px rgba(6,182,212,0.25)",
          display: "grid",
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          gridAutoRows: "1fr",
          gap: `${gap}px`,
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {board.map((row, r) =>
          row.map((v, c) => {
            const isSpawn =
              lastSpawn && lastSpawn[0] === r && lastSpawn[1] === c;
            return (
              <div
                key={`${r}-${c}`}
                className="rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  boxShadow:
                    "inset 0 0 10px rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.6)",
                  padding: 6,
                  transform: isSpawn ? "scale(1.07)" : "scale(1)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(3px)",
                }}
              >
                <Tile value={v} isSpawn={isSpawn} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
