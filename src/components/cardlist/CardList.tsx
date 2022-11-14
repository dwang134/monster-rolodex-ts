import React from 'react';
import {User} from '../../../types/User'
import './CardList.css'

interface Props{
    monsters: User[]
}

const CardList:React.FC<Props> = ({monsters}) => {

    return(
        <div className= "card-list"> 
            {monsters.map((monster, index)=>
                <div className="card-container" key= {monster.id}>
                    <img alt= {`monster ${monster.name}`} src= {`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
                    <h2 key= {index}>{monster.name}</h2>
                    <p>{monster.email}</p>
                </div>
            )}
        </div>
    )
}

export default CardList;