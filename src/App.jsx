import React, { useCallback, useEffect, useState } from "react";
import { useGame } from "./Hooks/useGame";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Controls from "./components/Controls";
import GameBoard from "./components/Gameboard";
import HelpModal from "./components/HelpModal";
import ResultModal from './components/ResultModal';

export default function App() {
  const { state, dispatch } = useGame(4);
  const [helpOpen, setHelpOpen] = useState(true);

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

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <div >
          <div className="flex items-center justify-between mb-4">
            <Header
              onOpenHelp={() => setHelpOpen(true)}
              onReset={() => dispatch({ type: "RESTART" })}
            />
            <Scoreboard score={state.score} best={state.bestScore} />
          </div>

          <div className="flex items-center justify-between mb-4">
            <Controls
              onSizeChange={(s) => dispatch({ type: "SET_SIZE", size: s })}
            />
            <div className="text-sm text-textSoft/80">Use arrows or WASD</div>
          </div>

          <div className="flex justify-center">
            <GameBoard board={state.board} lastSpawn={state.lastSpawn} />
          </div>

          <div className="mt-4 text-center">
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
      </div>

      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  );
}
