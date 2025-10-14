import { useReducer } from 'react';
import { initBoard, move, addRandomTile, hasMoves } from '../game/logic';

const initialState = (size = 4) => ({
  board: initBoard(size),
  score: 0,
  bestScore: parseInt(localStorage.getItem('best2048') || '0', 10),
  size,
  status: 'playing', 
  lastSpawn: null, 
});

function reducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return initialState(action.size || state.size);
    case 'RESTART':
      return initialState(state.size);
    case 'MOVE': {
      const { direction } = action;
      const res = move(state.board, direction);
      if (!res.moved) return state;
      const newBoard = addRandomTile(res.board);
      const emptyBefore = state.board.flat().filter(x=>x===0).length;
      const emptyAfter = newBoard.flat().filter(x=>x===0).length;
      // find last spawned cell (difference)
      let lastSpawn = null;
      if (emptyAfter === emptyBefore - 1) {
        for (let r = 0; r < newBoard.length; r++) {
          for (let c = 0; c < newBoard.length; c++) {
            if (state.board[r][c] === 0 && newBoard[r][c] !== 0) {
              lastSpawn = [r, c];
            }
          }
        }
      }
      const newScore = state.score + res.gainedScore;
      const bestScore = Math.max(state.bestScore, newScore);
      const status = newBoard.flat().includes(2048) ? 'won' : (hasMoves(newBoard) ? 'playing' : 'lost');
      localStorage.setItem('best2048', String(bestScore));
      return { ...state, board: newBoard, score: newScore, bestScore, status, lastSpawn };
    }
    case 'SET_SIZE':
      return initialState(action.size);
    default:
      return state;
  }
}

export const useGame = (size = 4) => {
  const [state, dispatch] = useReducer(reducer, null, () => initialState(size));
  return { state, dispatch };
};
