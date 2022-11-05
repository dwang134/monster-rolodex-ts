import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from '../types/Monster'

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

  const [monsters, setMonsters] = useState<User []>([]);

    useEffect(()=> {
      getUserData();
    }, [])


    const getUserData = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setMonsters(data);
    }


    // componentDidMount(
    //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //   const data = res.json();
      
    // );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        {monsters.map((monster, index)=> {
          return <p key= {monster.name}>{monster.name}</p>
        })}
        </div>
      {/* <button onClick={()=> setMonster1({name: 'Name Changed'})}>Change name</button> */}
      </header>
    </div>
  );
}

export default App;
