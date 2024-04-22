import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Paginator02 = ({totalLenght,perPage,currentPage}) => {
  const [pages, setPages] = useState([])
  const [arrowLeft, setArrowLeft] = useState(0)
  const [arrowRight, setArrowRight] = useState(0)


  useEffect(()=>{
    if(currentPage<=1){
      setArrowLeft(0)
    }
    else{
      setArrowLeft(currentPage-1)
    }
    if(currentPage>=Math.ceil(totalLenght/perPage)){
      setArrowRight(0)
    }
    else{
      setArrowRight(currentPage+1)
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
      <Link to={"/"+arrowLeft} style={{visibility: arrowLeft?"visible":'hidden'}}>{"<--"}</Link>
      {pages.map((page)=>(
        <Link to={"/"+page} key={page}>{page}</Link>
      ))}
      <Link to={"/"+arrowRight} style={{visibility: arrowRight?"visible":'hidden'}}>{"-->"}</Link>
      </div>
  )
}

export default Paginator02