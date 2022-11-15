import { useState } from 'react';

import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (tempSquares: any) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (tempSquares[a] && tempSquares[a] === tempSquares[b] && tempSquares[a] === tempSquares[c]) {
        return tempSquares[a];
      }
    }
    return null;
  };

  const handleClick = (i: any) => {
    const tempSquares = squares.slice();
    if (calculateWinner(tempSquares) || tempSquares[i]) {
      return;
    }
    tempSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(tempSquares);
    setXIsNext(!xIsNext);
  }

  const renderSquare = (i: any) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (<div>
    <div className="status">{status}</div>
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  </div>)
};

export default Board;