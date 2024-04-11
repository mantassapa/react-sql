import React from 'react'

const Animal = ({animal, handleDelete, setShow}) => {
    const {id, name, type, weight, lives} = animal
  return (
    <li>
        <span>{id}</span>
        <span>{name}</span>
        <span>{type}</span>
        <span>{weight}kg</span>
        <span>{lives}</span>
        <div>
            <button onClick={()=>setShow(id)} id="show_form_edit">Edit</button>
            <button onClick={()=>handleDelete(id)}id="show_form_delete">Delete</button>
        </div>
    </li>
  )
}

export default Animal