import { useState } from 'react';

import Board from './components/Board';
import './App.css';

const App = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
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
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(history.concat([{ squares }]));
    setXIsNext(!xIsNext);
  }

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <div className='game-board'>
        <Board squares={current.squares} onClick={(i: any) => handleClick(i)} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <div>{/* TODO */}</div>
      </div>
    </div>
  );
};

export default App;
