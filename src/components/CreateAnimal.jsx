import React, { useState } from 'react'

const CreateAnimal = ({setCreate}) => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [weight, setWeight] = useState("")
    const [lives, setLives] = useState(0)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setCreate({name, type, weight, lives})

        console.log(name, type, weight, lives);
        setName("")
        setType("")
        setWeight("")
        setLives(0)

    }

  return (
    <div>
        <h1>create animal record</h1>

        <form onSubmit={handleSubmit}>
            <label>Animal name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

            <label>Animal type</label>
            <input type="text" value={type} onChange={(e)=>setType(e.target.value)}/>

            <label>Animal weight</label>
            <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)}/>

            <label>Does animal lives in LT zoo?</label>
            <input type="checkbox" checked={lives} onChange={()=>setLives((prev)=>(prev?0:1))}/>

            <button>Create</button>
        </form>
    </div>
  )
}

export default CreateAnimal