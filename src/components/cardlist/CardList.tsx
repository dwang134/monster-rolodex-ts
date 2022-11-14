import React from 'react';
import {User} from '../../../types/User'

interface Props{
    monsters: User[]
}

const CardList:React.FC<Props> = ({monsters}) => {

    return(
        <div>
        {monsters.map((monster, index)=> 
            <h2 key= {index}>{monster.name}</h2>
        )}
        </div>
    )
}

export default CardList;