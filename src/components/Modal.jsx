import React from 'react'
import EditAnimal from './EditAnimal'

const Modal = ({id, setShow}) => {
  return (id===0?null : 
  <div>
    <div>
        <button onClick={()=>setShow(0)}>&times;</button>
    </div>

    <EditAnimal/>
  </div>
  )
}

export default Modal