import React from 'react';
import Square from './Square';

// PUBLIC_INTERFACE
/**
 * Board component renders the 3x3 grid of squares for the TicTacToe game
 * 
 * @param {object} props - Component properties
 * @param {Array<string|null>} props.squares - Array of 9 values representing the state of each square
 * @param {function} props.onClick - Function to call when a square is clicked, receives index of clicked square
 * @returns {JSX.Element} - A 3x3 grid of Square components
 */
const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  };

  return (
    <div className="board">
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
    </div>
  );
};

export default Board;
