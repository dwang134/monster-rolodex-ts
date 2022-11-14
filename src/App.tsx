import React, {useEffect, useState} from 'react';
import './App.css';
import {User} from '../types/User';
import CardList from './components/cardlist/CardList';
import Searchbox from './components/searchbox/Searchbox';


const App:React.FC= () =>  {
  

  const [monsterData, setMonsterData] = useState<User []>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<User []>([]);

    useEffect(()=> {
      console.log("UseEffect is called");
      getUserData();
    }, [])


    const getUserData = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);
      setMonsterData(data);  
      setFilteredMonsters(data);
    }

    const filterMonster = (value: string):void => {
      const targetValue = value.toLowerCase();
      const filteredData = monsterData.filter((monster) => monster.name.toLowerCase().includes(targetValue));
      setFilteredMonsters(filteredData);
    }

  return (
    <div className="App">
        <Searchbox filterMonster= {filterMonster}/>
        <div>
        <CardList monsters= {filteredMonsters} />
        </div>
    </div>
  )
}

export default App;
