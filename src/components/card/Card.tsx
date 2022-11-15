import React from 'react'

interface Props{
    id: number,
    name: string,
    email: string
}

const Card:React.FC<Props> = ({id, name, email}) => {
  return (
    <div className="card-container" key= {id}>
    <img alt= {`monster ${name}`} src= {`https://robohash.org/${id}?set=set2&size=180x180`}/>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
  )
}

export default Card