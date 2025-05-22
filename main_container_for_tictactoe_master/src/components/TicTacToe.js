import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner, getGameStatus } from '../utils/gameLogic';

// PUBLIC_INTERFACE
/**
 * TicTacToe game container component that manages the game state and logic
 * 
 * @returns {JSX.Element} - The complete TicTacToe game interface
 */
const TicTacToe = () => {
  // Game state - array of 9 squares, each can be 'X', 'O', or null
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  // Track whose turn it is
  const [xIsNext, setXIsNext] = useState(true);
  
  // Handle click on a square
  const handleClick = (i) => {
    // Create a copy of the squares array
    const squaresCopy = [...squares];
    
    // If square is already filled or someone has won, do nothing
    if (calculateWinner(squares) || squaresCopy[i]) {
      return;
    }
    
    // Set the value of the clicked square based on whose turn it is
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    
    // Update state
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };
  
  // Reset the game
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  // Get current game status
  const status = getGameStatus(squares, xIsNext);

  return (
    <div className="tic-tac-toe">
      <h2 className="game-title">Tic Tac Toe</h2>
      
      <div className="game-status">{status}</div>
      
      <Board 
        squares={squares} 
        onClick={handleClick} 
      />
      
      <button 
        className="btn reset-button" 
        onClick={resetGame}
      >
        New Game
      </button>
    </div>
  );
};

export default TicTacToe;
