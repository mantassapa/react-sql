import React from 'react'
import Animal from './Animal'

const Animallist = ({animalList}) => {
    const handleDelete = () =>{

    }
    const setShowID = ()=>{
        
    }
  return (
    <div>
        {animalList.map((animal)=>(
            <Animal
            key={animal.id}
            animal={animal}
            handleDelete={handleDelete}
            setShowID={setShowID}
            />
            
        ))}
    </div>
  )
}

export default Animallist