import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { monsters } from '../data/monsters'
import Paginator02 from './Paginator02'

const MasterRouteComponent = ({monstersPerPage, currentPage, setCurrentPage}) => {
    const {pageNow} = useParams()
    const [visibleNames, setVisibleNames]= useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const parsedPageNow = parseInt(pageNow)
        const howManyPages = Math.ceil(monsters.length/monstersPerPage)

        if(isNaN(parsedPageNow)||parsedPageNow<1||parsedPageNow>howManyPages){
            navigate("/404")
            // navigate(-1) vienu puslapiu atgal 
            return
        }

        const start = (parseInt(pageNow) -1) * monstersPerPage
        const end = parseInt(pageNow) * monstersPerPage

        const monstersToShow=monsters.slice(start, end)
        setVisibleNames(monstersToShow)
    },[pageNow, monstersPerPage, monsters, navigate])
  return (
    <div>
        <h1>This is {pageNow} page</h1>
        <ol>{visibleNames.map((name)=>
            <li key={name.id}>{name.name}</li>
        )}</ol>
        <Paginator02 
        totalLenght={monsters.length}
        perPage={monstersPerPage} 
        currentPage={parseInt(pageNow)}/>
    </div>
  )
}

export default MasterRouteComponent