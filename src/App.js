import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App({}) {

  const [emotion, setEmotion] = useState("happy");

  console.log(emotion);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from {emotion}
        </p>
        <button onClick={() => setEmotion("sad")}>Sad</button>
        <button onClick={() => setEmotion("sad")}>Happy</button>
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
