import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> TicTacToeMaster
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="game-container">
            <h1 className="title">TicTacToeMaster</h1>
            <p className="description">
              Classic two-player strategy game where players take turns marking X or O on a 3x3 grid.
              Get three of your marks in a row, column, or diagonal to win!
            </p>
            
            <TicTacToe />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;