/**
 * Determines if a player has won the game by checking all possible winning combinations
 * 
 * @param {Array<string|null>} squares - Current state of the game board
 * @returns {string|null} - Returns 'X', 'O' if there's a winner, or null if no winner
 */
export const calculateWinner = (squares) => {
  // All possible winning combinations (rows, columns, diagonals)
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6], // diagonal top-right to bottom-left
  ];

  // Check each winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // If all three squares in a line have the same non-null value, we have a winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

/**
 * Determines if the game is a draw (all squares filled with no winner)
 * 
 * @param {Array<string|null>} squares - Current state of the game board
 * @returns {boolean} - True if the game is a draw, false otherwise
 */
export const isDraw = (squares) => {
  // If there's a winner, it's not a draw
  if (calculateWinner(squares)) {
    return false;
  }
  
  // If any square is still empty, game is not a draw
  return squares.every(square => square !== null);
};

/**
 * Gets the game status message based on current state
 * 
 * @param {Array<string|null>} squares - Current state of the game board
 * @param {boolean} xIsNext - Whether it's X's turn next
 * @returns {string} - Status message to display
 */
export const getGameStatus = (squares, xIsNext) => {
  const winner = calculateWinner(squares);
  
  if (winner) {
    return `Winner: ${winner}`;
  } else if (isDraw(squares)) {
    return 'Game ended in a draw!';
  } else {
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  }
};
