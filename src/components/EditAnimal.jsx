import React, { useEffect, useState } from 'react'

const EditAnimal = ({setShow, showData, setEdit}) => {
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [weight, setWeight] = useState("")
  const [lives, setLives] = useState(0)

  const handleSubmit = (e)=>{
      e.preventDefault()
      setEdit({name, type, weight, lives, id:showData.id})

      console.log(name, type, weight, lives);
      setName("")
      setType("")
      setWeight("")
      setLives(0)
      setShow(0)

  }

  useEffect(()=>{
    setName(showData.name)
    setType(showData.type)
    setWeight(showData.weight)
    setLives(showData.lives)
  },[showData])

  return (
    <div className='update_form' onSubmit={handleSubmit}>
        <h1>Update animal record</h1>

        <form >
            <label>Animal name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

            <label>Animal type</label>
            <input type="text" value={type} onChange={(e)=>setType(e.target.value)}/>

            <label>Animal weight</label>
            <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)}/>

            <label>Does animal lives in LT zoo?</label>
            <input type="checkbox" checked={lives} onChange={()=>setLives((prev)=>(prev?0:1))}/>

            <button>Update</button>
        </form>
    </div>
  )
}

export default EditAnimal