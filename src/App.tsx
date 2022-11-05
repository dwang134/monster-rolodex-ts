import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  

  //useState hooks
  const [name, setName] = useState('Dylan');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name}</p>
      <button>Change name</button>
      </header>
    </div>
  );
}

export default App;
