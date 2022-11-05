import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Monster} from '../types/Monster'

const App:React.FC= () =>  {
  

  //useState hooks
  // const [monster1, setMonster1] = useState<Monster>({name: "Monster 1"});
  // const [monster2, setMonster2] = useState<Monster>({name: "Monster 2"});
  // const [monster3, setMonster3] = useState<Monster>({name: "Monster 3"});

    //monster object
    const monsterArray= [
      {
        name: 'Monster 1'
      },
      {
        name: 'Monster 2'
      },
      {
        name: 'Monster 3'
      }
    ]

  const [monsters, setMonsters] = useState<Monster []>(monsterArray);

 useEffect(()=> {
  console.log(monsters);
 })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        {monsters.map((monster, index)=> {
          <p>{monster.name}</p>
        })}
        </div>
      {/* <button onClick={()=> setMonster1({name: 'Name Changed'})}>Change name</button> */}
      </header>
    </div>
  );
}

export default App;
