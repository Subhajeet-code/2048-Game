import React from "react";
import Tile from "./Tile";

export default function GameBoard({ board, lastSpawn }) {
  const size = board.length;
  const gap = 4;
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: "#bbada0",
        display: "grid",
        gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
        gap: `${gap}px`,
        width: "min(520px, 92vw)",
        aspectRatio: "1 / 1",
      }}
    >
      {board.map((row, r) =>
        row.map((v, c) => {
          const isSpawn = lastSpawn && lastSpawn[0] === r && lastSpawn[1] === c;
          return (
            <div
              key={`${r}-${c}`}
              className="bg-[rgba(255,255,255,0.06)] rounded-md p-1 flex"
            >
              <Tile value={v} isSpawn={isSpawn} />
            </div>
          );
        })
      )}
    </div>
  );
}
