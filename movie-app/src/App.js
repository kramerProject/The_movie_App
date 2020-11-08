import React from 'react'
import './App.css';
import Picture from './Picture'
import MovieContainer from './MovieContainer'

function App() {
  return (
    <div className="App">
      <header>
          <h1><i className="fas fa-film"></i>The Movie App</h1>
      </header>
      <Picture />
      <MovieContainer />
    </div>
  );
}

export default App;