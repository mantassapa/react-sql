import React from 'react'

const Animal = ({animal, handleDelete, setShowID}) => {
    const {id, name, type, weight, lives} = animal
  return (
    <li>
        <span>{id}</span>
        <span>{name}</span>
        <span>{type}</span>
        <span>{weight}</span>
        <span>{lives}</span>
        <div>
            <button onClick={()=>setShowID(id)}>Edit</button>
            <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    </li>
  )
}

export default Animal