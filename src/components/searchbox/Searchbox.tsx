import React from 'react';
import {User} from '../../../types/User'

interface Props{
    filterMonster: (value: string) => void
}

const Searchbox:React.FC<Props> = ({filterMonster}) => {
    return(
        <input className= 'search-box' type= 'search' placeholder= 'search monster' onChange= {(e) => filterMonster(e.target.value)}/>
    )
}

export default Searchbox;