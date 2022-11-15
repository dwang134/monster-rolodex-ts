import React from 'react';
import {User} from '../../../types/User'
import './CardList.css'
import Card from '../card/Card'

interface Props{
    monsters: User[]
}

const CardList:React.FC<Props> = ({monsters}) => {

    return(
        <div className= "card-list"> 
            {monsters.map((monster, index)=>
                <Card id={monster.id} name= {monster.name} email= {monster.email}/>
            )}
        </div>
    )
}

export default CardList;