import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from '../types/User'
import { isConstructorDeclaration } from 'typescript';

const App:React.FC= () =>  {
  

  const [monsters, setMonsters] = useState<User []>([]);

    useEffect(()=> {
      console.log("UseEffect is called");
      getUserData();
    }, [])


    const getUserData = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);
      setMonsters(data);
    }

    const filterMonster = (value: string):void => {
      const targetValue = value.toLowerCase();
      const filteredMonster = monsters.filter((monster) => monster.name.toLowerCase().includes(targetValue));
      setMonsters(filteredMonster);
    }

  return (
    <div className="App">
        <input className= 'search-box' type= 'search' placeholder= 'search monsters' onChange={(e)=> {filterMonster(e.target.value)}}/>
        <div>
        {monsters.map((monster, index)=> {
          return <p key= {monster.name}>{monster.name}</p>
        })}
        </div>
      {/* <button onClick={()=> setMonster1({name: 'Name Changed'})}>Change name</button> */}
    </div>
  )
}

export default App;
