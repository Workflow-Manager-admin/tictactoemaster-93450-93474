import React from 'react';

// PUBLIC_INTERFACE
/**
 * Square component represents an individual cell in the TicTacToe game grid
 * 
 * @param {object} props - Component properties
 * @param {string|null} props.value - The value to display (X, O, or null)
 * @param {function} props.onClick - Function to call when the square is clicked
 * @returns {JSX.Element} - A button representing a square in the grid
 */
const Square = ({ value, onClick }) => {
  return (
    <button 
      className="square" 
      onClick={onClick}
      aria-label={value ? `Square with ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
};

export default Square;
