import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App:React.FC= () =>  {
  

  //useState hooks
  const [name, setName] = useState<string>('Dylan Wang');
  const [company, setComapny] = useState<string>('ZTM');
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My name is {name}, and I work at {company}</p>
      <button onClick={()=> setName('Name Changed')}>Change name</button>
      </header>
    </div>
  );
}

export default App;
