import React, { useState } from 'react'

const SortingComp = ({sortHandler}) => {
    const [select, setSelect] = useState(1)
  return (
    <header style={{height:"80px"}}>
        <h1>Sort by:</h1>
        <select value={select} onChange={(e)=> {
            setSelect(e.target.value)
            sortHandler(e.target.value)
            }}>
            <option value="a-z">A-Z weight</option>
            <option value="z-a">Z-A weight</option>
            <option value="name_a-z">A-Z name</option>
            <option value="name_z-a">Z-A name</option>
        </select>
    </header>
  )
}

export default SortingComp