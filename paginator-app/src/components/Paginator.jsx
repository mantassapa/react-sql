import React, { useEffect, useState } from 'react'

const Paginator = ({totalLenght,perPage,currentPage,setCurrentPage}) => {
  const [pages, setPages] = useState([])
  const [arrowLeft, setArrowLeft] = useState(false)
  const [arrowRight, setArrowRight] = useState(true)

  useEffect(()=>{
    if(currentPage<=1){
      setArrowLeft(false)
    }
    else{
      setArrowLeft(true)
    }
    if(currentPage>=Math.ceil(totalLenght/perPage)){
      setArrowRight(false)
    }
    else{
      setArrowRight(true)
    }

  },[currentPage])


  useEffect(()=>{
    const howManyPages = Math.ceil(totalLenght/perPage)

    const pagesArray=[]
    for(let index = 0; index<howManyPages; index++){
      pagesArray.push(index+1)
    }

    setPages(pagesArray)

  },[totalLenght, perPage])

  return (
    <div>
      <br />
      <h2>Esu {currentPage} puslapyje</h2>
      <button onClick={()=>setCurrentPage(currentPage-1)} style={{visibility: arrowLeft===true?"visible":'hidden'}}>{"<--"}</button>
      {pages.map((page)=>(
        <button key={page} onClick={()=>setCurrentPage(page)}>{page}</button>
      ))}
      <button onClick={()=>setCurrentPage(currentPage+1)} style={{visibility: arrowRight===true?"visible":'hidden'}}>{"-->"}</button>
      </div>
  )
}

export default Paginator