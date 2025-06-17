import React, { useEffect, useState, useCallback, useRef } from 'react';
import './TetrisGame.scss';

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 25;

// Create an empty board
const createBoard = (): number[][] =>
  Array.from({ length: ROWS }, () => Array(COLS).fill(0));

// Define base tetromino shapes and colors
const TETROMINOS: { [key: string]: { shape: number[][]; color: string } } = {
  I: { shape: [[1, 1, 1, 1]], color: '#00f0f0' },
  J: { shape: [
      [1, 0, 0],
      [1, 1, 1]
    ], color: '#0000f0' },
  L: { shape: [
      [0, 0, 1],
      [1, 1, 1]
    ], color: '#f0a000' },
  O: { shape: [
      [1, 1],
      [1, 1]
    ], color: '#f0f000' },
  S: { shape: [
      [0, 1, 1],
      [1, 1, 0]
    ], color: '#00f000' },
  T: { shape: [
      [0, 1, 0],
      [1, 1, 1]
    ], color: '#a000f0' },
  Z: { shape: [
      [1, 1, 0],
      [0, 1, 1]
    ], color: '#f00000' }
};

// Define an interface for the tetromino piece
interface Tetromino {
  type: string;
  pos: { x: number; y: number };
  rotation: number; // rotation index from 0 to 3
  color: string;
}

// Utility: Get the current rotated shape from a piece without modifying its base shape.
const getPieceShape = (piece: Tetromino): number[][] => {
  const baseShape = TETROMINOS[piece.type].shape;
  let shape = baseShape;
  for (let i = 0; i < piece.rotation; i++) {
    shape = rotate(shape);
  }
  return shape;
};

// Rotate a matrix clockwise
const rotate = (matrix: number[][]): number[][] => {
  return matrix[0].map((_, index) => matrix.map(row => row[index]).reverse());
};

// Utility function to generate a random tetromino with an initial rotation of 0.
const randomTetromino = (): Tetromino => {
  const tetrominos = Object.keys(TETROMINOS);
  const rand = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  const shape = TETROMINOS[rand].shape;
  return {
    type: rand,
    pos: {
      x: Math.floor(COLS / 2) - Math.ceil(shape[0].length / 2),
      y: 0
    },
    rotation: 0,
    color: TETROMINOS[rand].color
  };
};

const Tetris: React.FC = () => {
  const [board, setBoard] = useState<number[][]>(createBoard());
  const [currentPiece, setCurrentPiece] = useState<Tetromino>(randomTetromino());
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const dropInterval = useRef<number | null>(null);
  const timerInterval = useRef<number | null>(null);

  // Checks if a given piece would collide with fixed blocks or board boundaries after an offset move.
  const checkCollision = useCallback((piece: Tetromino, offsetX: number, offsetY: number): boolean => {
    const shape = getPieceShape(piece);
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] !== 0) {
          const newX = piece.pos.x + x + offsetX;
          const newY = piece.pos.y + y + offsetY;
          // Check board boundaries
          if (newX < 0 || newX >= COLS || newY >= ROWS) {
            return true;
          }
          // Check if the cell is already occupied
          if (newY >= 0 && board[newY][newX] !== 0) {
            return true;
          }
        }
      }
    }
    return false;
  }, [board]);

  // Merges the current tetromino onto the board when it can no longer move down.
  const mergePiece = useCallback(() => {
    const newBoard = board.map(row => [...row]);
    const shape = getPieceShape(currentPiece);
    let gameOverFlag = false;
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] !== 0) {
          const boardY = currentPiece.pos.y + y;
          const boardX = currentPiece.pos.x + x;
          if (boardY < 0) {
            // Game over condition if part of the piece is above the board
            setGameOver(true);
            return;
          }
          newBoard[boardY][boardX] = 1;
        }
      }
    }
    // Check for game over: if any cell in the top row is filled after merging
    if (newBoard[0].some(cell => cell !== 0)) {
      setBoard(newBoard);
      setGameOver(true);
      return;
    }
    setBoard(clearLines(newBoard));
    setCurrentPiece(randomTetromino());
  }, [board, currentPiece]);

  // Clears completed lines from the board and updates score.
  const clearLines = (board: number[][]): number[][] => {
    const newBoard = board.filter(row => row.some(cell => cell === 0));
    const clearedLines = ROWS - newBoard.length;
    if (clearedLines > 0) {
      // Scoring: 1 line = 100, 2 lines = 300, 3 lines = 500, 4 lines = 800
      const lineScores = [0, 100, 300, 500, 800];
      setScore(prev => prev + lineScores[clearedLines] || (clearedLines * 100));
    }
    for (let i = 0; i < clearedLines; i++) {
      newBoard.unshift(Array(COLS).fill(0));
    }
    return newBoard;
  };

  // Moves the current piece down one row; if it collides, merge the piece into the board.
  const drop = useCallback(() => {
    if (!checkCollision(currentPiece, 0, 1)) {
      setCurrentPiece(prev => ({
        ...prev,
        pos: { ...prev.pos, y: prev.pos.y + 1 }
      }));
    } else {
      mergePiece();
    }
  }, [checkCollision, currentPiece, mergePiece]);

  // Moves the current piece left or right by one column.
  const movePiece = (dir: number) => {
    if (!checkCollision(currentPiece, dir, 0)) {
      setCurrentPiece(prev => ({
        ...prev,
        pos: { ...prev.pos, x: prev.pos.x + dir }
      }));
    }
  };

  // Rotates the current piece by updating its rotation index (modulo 4).
  const rotatePiece = () => {
    const newRotation = (currentPiece.rotation + 1) % 4;
    const rotatedPiece: Tetromino = { ...currentPiece, rotation: newRotation };
    if (!checkCollision(rotatedPiece, 0, 0)) {
      setCurrentPiece(rotatedPiece);
    }
  };

  // Handle keyboard input for controlling the piece.
  const handleKeyDown = (e: KeyboardEvent) => {
    if (gameOver) return;
    switch (e.code) {
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowDown':
      case 'ArrowUp':
        e.preventDefault(); // Prevent page scroll
        break;
      default:
        break;
    }
    switch (e.code) {
      case 'ArrowLeft':
        movePiece(-1);
        break;
      case 'ArrowRight':
        movePiece(1);
        break;
      case 'ArrowDown':
        drop();
        break;
      case 'ArrowUp':
        rotatePiece();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    dropInterval.current = window.setInterval(() => {
      drop();
    }, 1000);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (dropInterval.current) window.clearInterval(dropInterval.current);
    };
  }, [drop]);

  // Timer interval only depends on gameOver
  useEffect(() => {
    if (!gameOver) {
      timerInterval.current = window.setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (timerInterval.current) window.clearInterval(timerInterval.current);
    };
  }, [gameOver]);

  // Reset timer and score on restart
  useEffect(() => {
    if (!gameOver && timer !== 0) {
      setTimer(0);
      setScore(0);
    }
  }, [gameOver]);

  // Renders the board and overlays the current falling piece.
  const renderBoard = () => {
    // Copy board to overlay current piece
    const displayBoard = board.map(row => [...row]);
    const shape = getPieceShape(currentPiece);
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] !== 0) {
          const boardY = currentPiece.pos.y + y;
          const boardX = currentPiece.pos.x + x;
          if (boardY >= 0 && boardY < ROWS && boardX >= 0 && boardX < COLS) {
            displayBoard[boardY][boardX] = 2; // 2 indicates the current active piece
          }
        }
      }
    }
    return displayBoard.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => (
          <div
            key={cellIndex}
            className={`cell ${cell === 0 ? '' : cell === 1 ? 'fixed' : 'active'}`}
          />
        ))}
      </div>
    ));
  };

  return (
    <div className="tetris-game">
      {gameOver ? (
        <div className="game-over">
          <h2>Game Over</h2>
          <div className="score-timer">
            <div>Score: {score}</div>
            <div>Time: {timer}s</div>
          </div>
          <button onClick={() => {
            setBoard(createBoard());
            setCurrentPiece(randomTetromino());
            setGameOver(false);
            setScore(0);
            setTimer(0);
          }}>Restart</button>
        </div>
      ) : (
        <>
          <div className="score-timer">
            <div>Score: {score}</div>
            <div>Time: {timer}s</div>
          </div>
          <div className="board" style={{ width: COLS * BLOCK_SIZE, height: ROWS * BLOCK_SIZE }}>
            {renderBoard()}
          </div>
          <div className="instructions">
            <p>Use the arrow keys to move and rotate the piece.</p>
            <div className="legend">
              <div><b>←</b> Move Left</div>
              <div><b>→</b> Move Right</div>
              <div><b>↓</b> Move Down (Drop faster)</div>
              <div><b>↑</b> Rotate</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Tetris;
