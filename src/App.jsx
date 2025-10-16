import React, { useCallback, useEffect, useState } from "react";
import { useGame } from "./Hooks/useGame";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Controls from "./components/Controls";
import GameBoard from "./components/Gameboard";
import HelpModal from "./components/HelpModal";
import ResultModal from "./components/ResultModal";

export default function App() {
  const { state, dispatch } = useGame(4);
  const [helpOpen, setHelpOpen] = useState(true);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      try {
    
        if ("maxTouchPoints" in navigator && navigator.maxTouchPoints > 0)
          return true;
        if ("msMaxTouchPoints" in navigator && navigator.msMaxTouchPoints > 0)
          return true;
        if (
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)
        )
          return true;
        return false;
      } catch {
        return false;
      }
    };

    setIsTouchDevice(checkTouch());
  }, []);
  const handleKey = useCallback(
    (e) => {
      if (state.status !== "playing") return;
      const map = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down",
        a: "left",
        d: "right",
        w: "up",
        s: "down",
      };
      const dir = map[e.key];
      if (dir) {
        e.preventDefault();
        dispatch({ type: "MOVE", direction: dir });
      }
    },
    [dispatch, state.status]
  );

  const handleMove = useCallback(
    (direction) => {
      if (state.status !== "playing") return;
      dispatch({ type: "MOVE", direction });
    },
    [dispatch, state.status]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at top, #1b1f33 0%, #0e101a 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(6,182,212,0.3), transparent 40%), radial-gradient(circle at 80% 80%, rgba(164,94,255,0.25), transparent 40%)",
        }}
      />

      <div className="w-full max-w-3xl relative z-10 text-center text-white">
        <h1
          className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 tracking-wide"
          style={{
            color: "#06b6d4",
            textShadow:
              "0 0 15px rgba(6,182,212,0.7), 0 0 30px rgba(6,182,212,0.4)",
            letterSpacing: "1px",
          }}
        >
          2K48 <span style={{ color: "#a5b4fc" }}>Game</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-5 gap-3 px-2">
          <Header
            onOpenHelp={() => setHelpOpen(true)}
            onReset={() => dispatch({ type: "RESTART" })}
          />
          <Scoreboard score={state.score} best={state.bestScore} />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mb-5 sm:mb-6 px-2 text-textSoft/90 gap-2">
          <Controls
            onSizeChange={(s) => dispatch({ type: "SET_SIZE", size: s })}
          />
          {/* <div className="text-xs sm:text-sm italic text-cyan-300/90 mt-1 sm:mt-0">
            Use ↑ ↓ ← → or WASD keys
          </div> */}
          <div className="text-xs sm:text-sm italic text-cyan-300/90 mt-1 sm:mt-0">
            {isTouchDevice
              ? "Swipe in any direction to move tiles"
              : "Use ↑ ↓ ← → or WASD keys"}
          </div>
        </div>

        <div className="flex justify-center">
          <GameBoard
            board={state.board}
            lastSpawn={state.lastSpawn}
            onMove={handleMove}
          />
        </div>

        <div className="mt-5 sm:mt-6 text-center">
          <ResultModal
            status={state.status}
            onRestart={() => dispatch({ type: "RESTART" })}
            onContinue={() => {
              dispatch({ type: "SET_SIZE", size: state.size });
            }}
            onClose={() => {
              dispatch({ type: "SET_SIZE", size: state.size });
            }}
          />
        </div>
      </div>

      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  );
}
