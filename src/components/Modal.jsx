import React from 'react'
import EditAnimal from './EditAnimal'

const Modal = ({id, setShow, showData, setEdit}) => {
  return (id===0?null : 
  <div>
    <div>
        <button onClick={()=>setShow(0)} id="update_form_exit">&times;</button>
    </div>

    <EditAnimal setShow={setShow} showData={showData()} setEdit={setEdit}/>
  </div>
  )
}

export default Modal