import React, { useEffect, useState, useCallback, useRef } from 'react';
import './PacManGame.scss';

enum CellType {
  Wall = 1,
  Dot = 2,
  Empty = 0,
}

interface Position {
  row: number;
  col: number;
}

const initialBoard: number[][] = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,1,2,1,1,1,2,1,1,1,2,1],
  [1,2,2,2,1,2,2,2,1,2,2,2,1,2,1],
  [1,1,1,2,1,1,1,2,1,1,1,2,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,1,2,1,1,1,2,1,1,1,2,1],
  [1,2,2,2,1,2,2,2,1,2,2,2,1,2,1],
  [1,1,1,2,1,1,1,2,1,1,1,2,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const GRID_ROWS = initialBoard.length;
const GRID_COLS = initialBoard[0].length;

const directions: { [key: string]: Position } = {
  ArrowUp: { row: -1, col: 0 },
  ArrowDown: { row: 1, col: 0 },
  ArrowLeft: { row: 0, col: -1 },
  ArrowRight: { row: 0, col: 1 },
};

const PacmanGame: React.FC = () => {
  const [board, setBoard] = useState<number[][]>(() =>
    initialBoard.map((row) => [...row])
  );
  const [pacmanPos, setPacmanPos] = useState<Position>({ row: 1, col: 1 });
  const [ghostPos, setGhostPos] = useState<Position>({ row: 5, col: 7 });
  const [score, setScore] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  const pacmanPosRef = useRef<Position>(pacmanPos);
  const ghostPosRef = useRef<Position>(ghostPos);
  const boardRef = useRef<number[][]>(board);
  const gameStatusRef = useRef(gameStatus);

  useEffect(() => { pacmanPosRef.current = pacmanPos; }, [pacmanPos]);
  useEffect(() => { ghostPosRef.current = ghostPos; }, [ghostPos]);
  useEffect(() => { boardRef.current = board; }, [board]);
  useEffect(() => { gameStatusRef.current = gameStatus; }, [gameStatus]);

  const canMove = useCallback((pos: Position) => {
    if (pos.row < 0 || pos.row >= GRID_ROWS || pos.col < 0 || pos.col >= GRID_COLS) {
      return false;
    }
    return board[pos.row][pos.col] !== CellType.Wall;
  }, [board]);

  const resetGame = () => {
    setBoard(initialBoard.map((row) => [...row]));
    setPacmanPos({ row: 1, col: 1 });
    setGhostPos({ row: 5, col: 7 });
    setScore(0);
    setTimeElapsed(0);
    setGameStatus('playing');
  };

  const checkWinCondition = (currentBoard: number[][]) => {
    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        if (currentBoard[row][col] === CellType.Dot) {
          return false;
        }
      }
    }
    return true;
  };

  // Clock Timer Engine
  useEffect(() => {
    if (gameStatus !== 'playing') return;
    const timerInterval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [gameStatus]);

  // Ghost Tracker Engine
  useEffect(() => {
    const ghostInterval = setInterval(() => {
      if (gameStatusRef.current !== 'playing') return;

      const currentGhost = ghostPosRef.current;
      const currentPacman = pacmanPosRef.current;
      const currentBoard = boardRef.current;
      const possibleDirs = Object.values(directions);

      const sortedDirs = possibleDirs.sort((dirA, dirB) => {
        const nextPosA = { row: currentGhost.row + dirA.row, col: currentGhost.col + dirA.col };
        const nextPosB = { row: currentGhost.row + dirB.row, col: currentGhost.col + dirB.col };
        const distA = Math.abs(nextPosA.row - currentPacman.row) + Math.abs(nextPosA.col - currentPacman.col);
        const distB = Math.abs(nextPosB.row - currentPacman.row) + Math.abs(nextPosB.col - currentPacman.col);
        return distA - distB;
      });

      let ghostMoved = false;
      const isSpaceWalkable = (pos: Position) => {
        if (pos.row < 0 || pos.row >= GRID_ROWS || pos.col < 0 || pos.col >= GRID_COLS) return false;
        return currentBoard[pos.row][pos.col] !== CellType.Wall;
      };

      for (const move of sortedDirs) {
        const newPos: Position = { row: currentGhost.row + move.row, col: currentGhost.col + move.col };
        if (isSpaceWalkable(newPos)) {
          setGhostPos(newPos);
          ghostMoved = true;
          if (newPos.row === currentPacman.row && newPos.col === currentPacman.col) {
            setGameStatus('lost');
            return;
          }
          break; 
        }
      }

      if (!ghostMoved) {
        for (const move of possibleDirs) {
          const newPos: Position = { row: currentGhost.row + move.row, col: currentGhost.col + move.col };
          if (isSpaceWalkable(newPos)) {
            setGhostPos(newPos);
            break;
          }
        }
      }
    }, 400);

    return () => clearInterval(ghostInterval);
  }, []);

  // Keyboard Navigation & Collision Pipeline
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (gameStatusRef.current !== 'playing') return;
    if (!directions[e.key]) return;
    
    const move = directions[e.key];
    const newPos: Position = { row: pacmanPosRef.current.row + move.row, col: pacmanPosRef.current.col + move.col };

    if (canMove(newPos)) {
      if (newPos.row === ghostPosRef.current.row && newPos.col === ghostPosRef.current.col) {
        setGameStatus('lost');
        return;
      }

      setBoard((prevBoard) => {
        const newBoard = prevBoard.map((row) => [...row]);
        if (newBoard[newPos.row][newPos.col] === CellType.Dot) {
          newBoard[newPos.row][newPos.col] = CellType.Empty;
          setScore((prevScore) => prevScore + 10);
        }
        
        if (checkWinCondition(newBoard)) {
          setGameStatus('won');
        }
        return newBoard;
      });
      
      setPacmanPos(newPos);
    }
  }, [canMove]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const renderCell = (row: number, col: number) => {
    let cellClass = "cell";
    const cellValue = board[row][col];
    if (cellValue === CellType.Wall) cellClass += " wall";
    else if (cellValue === CellType.Dot) cellClass += " dot";
    else cellClass += " empty";

    const isPacman = pacmanPos.row === row && pacmanPos.col === col;
    const isGhost = ghostPos.row === row && ghostPos.col === col;

    return (
      <div key={`${row}-${col}`} className={cellClass}>
        {isPacman && gameStatus !== 'lost' && <div className="pacman" />}
        {isGhost && <div className="ghost" />}
      </div>
    );
  };

  return (
    <div className="pacman-game">
      <h2>Pacman Game</h2>
      <div className="game-stats">
        <span>Score: {score}</span>
        <span>Time: {timeElapsed}s</span>
      </div>

      {/* Wrapping layout element to safely isolate overlay positionings */}
      <div className="board-wrapper">
        <div className="board">
          {board.map((rowData, row) =>
            rowData.map((_, col) => renderCell(row, col))
          )}
        </div>

        {/* Dynamic game status card engine */}
        {gameStatus !== 'playing' && (
          <div className="status-overlay">
            <div className="status-window">
              {gameStatus === 'won' ? (
                <>
                  <h1 className="win-text">GAME WON</h1>
                  <p>Time used: <strong>{timeElapsed}s</strong></p>
                  <p>Final score: <strong>{score}</strong></p>
                </>
              ) : (
                <>
                  <h1 className="lose-text">GAME OVER</h1>
                  <p>Survided for <strong>{timeElapsed}s</strong></p>
                </>
              )}
              <button onClick={resetGame}>Restart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PacmanGame;