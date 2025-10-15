// import React, { useMemo } from "react";

// /**
//  * gradientMap[value] = [startHex, endHex, textColor]
//  * Add/adjust colors as you like for stronger visual hierarchy.
//  */
// const gradientMap = {
//   0: ["#e9e6e1", "#e9e6e1", "#b8b2a8"],
//   2: ["#fbfbf7", "#f4efe8", "#776e65"],
//   4: ["#f7efe1", "#efe1c8", "#776e65"],
//   8: ["#ffd89b", "#f08a5d", "#ffffff"],
//   16: ["#ffb48f", "#ff7a66", "#ffffff"],
//   32: ["#ff9472", "#ff6b6b", "#ffffff"],
//   64: ["#ff7a7a", "#ff4b4b", "#ffffff"],
//   128: ["#ffd27f", "#ff9a66", "#ffffff"],
//   256: ["#ffd36b", "#ffb86b", "#ffffff"],
//   512: ["#ffd84a", "#ffb14a", "#ffffff"],
//   1024: ["#b7d7fe", "#6ea8fe", "#ffffff"],
//   2048: ["#ffb86b", "#ff6b6b", "#ffffff"],
// };

// export default function Tile({ value = 0, isSpawn = false }) {
//   const [start, end, textColor] = gradientMap[value] || [
//     "#3c3a32",
//     "#1f1f1f",
//     "#fff",
//   ];

//   // tile classes computed once per change
//   const cls = useMemo(() => {
//     let base =
//       "tile flex items-center justify-center font-semibold select-none";
//     base += " rounded-xl shadow-tile transform-gpu";
//     base += " transition-all duration-150 ease-out";
//     if (isSpawn) base += " tile-pop";
//     return base;
//   }, [isSpawn]);

//   const fontSize =
//     value >= 1024
//       ? "0.78rem"
//       : value >= 128
//       ? "1rem"
//       : value >= 16
//       ? "1.25rem"
//       : "1.4rem";

//   const opacity = value === 0 ? 0.95 : 1;

//   return (
//     <div
//       className={cls}
//       role="img"
//       aria-label={value === 0 ? "empty cell" : `tile ${value}`}
//       style={{
//         width: "100%",
//         height: "100%",
//         minWidth: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: `linear-gradient(135deg, ${start}, ${end})`,
//         color: textColor,
//         fontSize,
//         boxShadow:
//           value === 0
//             ? "none"
//             : "0 8px 18px rgba(16,24,40,0.12), inset 0 -4px 6px rgba(255,255,255,0.06)",
//         opacity,
//         padding: "6px",
//       }}
//     >
//       {value === 0 ? "" : value}
//     </div>
//   );
// }

import React, { useMemo } from "react";

/**
 * gradientMap[value] = [startHex, endHex, textColor, glow]
 */
const gradientMap = {
  0: ["#2B2D42", "#2B2D42", "#555a7a", "none"],
  2: ["#f4f7ff", "#dbeafe", "#374151", "0 0 8px rgba(147,197,253,0.3)"],
  4: ["#fef3c7", "#fde68a", "#374151", "0 0 8px rgba(250,204,21,0.3)"],
  8: ["#06b6d4", "#3b82f6", "#ffffff", "0 0 12px rgba(6,182,212,0.4)"],
  16: ["#3b82f6", "#6366f1", "#ffffff", "0 0 14px rgba(99,102,241,0.45)"],
  32: ["#6366f1", "#8b5cf6", "#ffffff", "0 0 14px rgba(139,92,246,0.5)"],
  64: ["#8b5cf6", "#a855f7", "#ffffff", "0 0 14px rgba(168,85,247,0.5)"],
  128: ["#a855f7", "#ec4899", "#ffffff", "0 0 16px rgba(236,72,153,0.55)"],
  256: ["#ec4899", "#f43f5e", "#ffffff", "0 0 18px rgba(244,63,94,0.55)"],
  512: ["#f59e0b", "#f97316", "#ffffff", "0 0 18px rgba(249,115,22,0.5)"],
  1024: ["#22c55e", "#16a34a", "#ffffff", "0 0 18px rgba(34,197,94,0.55)"],
  2048: ["#fde047", "#facc15", "#222", "0 0 22px rgba(250,204,21,0.65)"],
};

export default function Tile({ value = 0, isSpawn = false }) {
  const [start, end, textColor, glow] = gradientMap[value] || [
    "#3c3a32",
    "#1f1f1f",
    "#fff",
    "none",
  ];

  const cls = useMemo(() => {
    let base =
      "tile flex items-center justify-center font-bold select-none rounded-xl transform-gpu transition-all duration-300 ease-out";
    if (isSpawn) base += " scale-105";
    return base;
  }, [isSpawn]);

  const fontSize =
    value >= 1024
      ? "1rem"
      : value >= 128
      ? "1.25rem"
      : value >= 16
      ? "1.4rem"
      : "1.6rem";

  const opacity = value === 0 ? 0.08 : 1;

  return (
    <div
      className={cls}
      role="img"
      aria-label={value === 0 ? "empty cell" : `tile ${value}`}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          value === 0
            ? "rgba(255,255,255,0.03)"
            : `linear-gradient(135deg, ${start}, ${end})`,
        color: textColor,
        fontSize,
        boxShadow:
          value === 0
            ? "inset 0 0 8px rgba(255,255,255,0.02)"
            : `0 6px 14px rgba(0,0,0,0.45), inset 0 2px 4px rgba(255,255,255,0.08), ${glow}`,
        opacity,
        borderRadius: 12,
        transition: "all 0.25s ease",
      }}
    >
      {value === 0 ? "" : value}
    </div>
  );
}
