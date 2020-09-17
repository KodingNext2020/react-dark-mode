import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeContext } from './themeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="App">
      <header className="App-header" style={{ background: theme.background, cursor: 'pointer' }}>
        <div onClick={toggleTheme}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p style={{ color: theme.text }}>
          Press the logo for change the theme
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
