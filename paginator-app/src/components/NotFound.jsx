import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate(-2)}>{"<--"}</button>
        <h1>NotFound</h1>NotFound
    </div>
  )
}

export default NotFound