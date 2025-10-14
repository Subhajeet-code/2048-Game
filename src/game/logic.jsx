export const createEmptyBoard = (size = 4) =>
  Array.from({ length: size }, () => Array(size).fill(0));

export const getEmptyCells = (board) => {
  const empties = [];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      if (!board[r][c]) empties.push([r, c]);
    }
  }
  return empties;
};

export const addRandomTile = (board) => {
  const empties = getEmptyCells(board);
  if (empties.length === 0) return board;
  const idx = Math.floor(Math.random() * empties.length);
  const [r, c] = empties[idx];
  const tile = Math.random() < 0.9 ? 2 : 4;
  const newBoard = board.map((row) => row.slice());
  newBoard[r][c] = tile;
  return newBoard;
};

export const initBoard = (size = 4) => {
  let b = createEmptyBoard(size);
  b = addRandomTile(b);
  b = addRandomTile(b);
  return b;
};

const compress = (row) => {
  const arr = row.filter((x) => x !== 0);
  while (arr.length < row.length) arr.push(0);
  return arr;
};

export const mergeRowLeft = (row) => {
  const size = row.length;
  let compressed = compress(row);
  let score = 0;
  let moved = false;

  for (let i = 0; i < size - 1; i++) {
    if (compressed[i] !== 0 && compressed[i] === compressed[i + 1]) {
      compressed[i] = compressed[i] * 2;
      compressed[i + 1] = 0;
      score += compressed[i];
      i++;
      moved = true;
    }
  }

  const newRow = compress(compressed);
  if (newRow.some((v, idx) => v !== row[idx])) moved = true;
  return { row: newRow, gainedScore: score, moved };
};

export const transpose = (board) =>
  board[0].map((_, c) => board.map((r) => r[c]));
export const reverseRows = (board) => board.map((row) => row.slice().reverse());

export const move = (board, direction) => {
  let b = board.map((row) => row.slice());
  let moved = false;
  let totalScore = 0;

  if (direction === "up" || direction === "down") b = transpose(b);
  if (direction === "right" || direction === "down") b = reverseRows(b);

  const newBoard = [];
  for (const row of b) {
    const { row: r, gainedScore, moved: rowMoved } = mergeRowLeft(row);
    newBoard.push(r);
    totalScore += gainedScore;
    if (rowMoved) moved = true;
  }

  let result = newBoard;
  if (direction === "right" || direction === "down")
    result = reverseRows(result);
  if (direction === "up" || direction === "down") result = transpose(result);

  return { board: result, gainedScore: totalScore, moved };
};

export const hasMoves = (board) => {
  for (let r = 0; r < board.length; r++)
    for (let c = 0; c < board.length; c++) if (board[r][c] === 0) return true;

  const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      for (const [dr, dc] of dirs) {
        const nr = r + dr,
          nc = c + dc;
        if (nr >= 0 && nc >= 0 && nr < board.length && nc < board.length) {
          if (board[r][c] === board[nr][nc]) return true;
        }
      }
    }
  }
  return false;
};
