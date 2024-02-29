import { useState } from 'react';
import Board from '../Board';
import History from './History';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[history.length - 1];
  //   console.log(history);
  //   console.log(currentSquares);
  const handlePlay = (nextSquares) => {
    setXIsNext(!xIsNext);
    setHistory([...history, nextSquares]);
  };

  const moves = history.map((squares, idx) => {
    // console.log(squares);
    let description;

    if (idx > 0) {
      description = `Go to move #${idx}`;
    } else {
      description = `Start the game`;
    }
    return (
      <li key={idx}>
        <button>{description}</button>
      </li>
    );
  });

  return (
    <>
      <h1 className="text-3xl text-center my-2 font-semibold font-sans">
        Welcome to the TIC TAC TOE
      </h1>
      <div className="grid grid-cols-2 gap-3 border border-purple-200 rounded-md m-4">
        <div className="p-4">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="p-4">
          <History moves={moves} />
        </div>
      </div>
    </>
  );
}
