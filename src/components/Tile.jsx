import React, { useMemo } from "react";

const colorMap = {
  0: ["#cdc1b4", "#776e65"],
  2: ["#eee4da", "#776e65"],
  4: ["#ede0c8", "#776e65"],
  8: ["#f2b179", "#fff"],
  16: ["#f59563", "#fff"],
  32: ["#f67c5f", "#fff"],
  64: ["#f65e3b", "#fff"],
  128: ["#edcf72", "#fff"],
  256: ["#edcc61", "#fff"],
  512: ["#edc850", "#fff"],
  1024: ["#edc53f", "#fff"],
  2048: ["#edc22e", "#fff"],
};

export default function Tile({ value, isSpawn }) {
  const [bg, color] = colorMap[value] || ["#3c3a32", "#fff"];
  const cls = useMemo(() => {
    let base = "flex items-center justify-center font-bold rounded-md";
    base += " transition-transform duration-100";
    if (isSpawn) base += " scale-105";
    return base;
  }, [isSpawn]);

  return (
    <div
      className={cls}
      style={{
        background: bg,
        color,
        minWidth: 0,
        width: "100%",
        height: "100%",
        fontSize: value >= 1024 ? "0.9rem" : "1.2rem",
      }}
    >
      {value === 0 ? "" : value}
    </div>
  );
}
