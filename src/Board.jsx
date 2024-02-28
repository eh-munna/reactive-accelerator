import { useState } from 'react';
import Square from './components/Square';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);

  return (
    <>
      <h1 className="text-3xl text-center my-2 font-semibold font-sans">
        Welcome to the TIC TAC TOE
      </h1>
      <div className="p-4 border border-purple-200">
        <div className="flex">
          <Square value={squares[0]} />
          <Square value={squares[1]} />
          <Square value={squares[2]} />
        </div>
        <div className="flex">
          <Square value={squares[3]} />
          <Square value={squares[4]} />
          <Square value={squares[5]} />
        </div>
        <div className="flex">
          <Square value={squares[6]} />
          <Square value={squares[7]} />
          <Square value={squares[8]} />
        </div>
      </div>
    </>
  );
}
