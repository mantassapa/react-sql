import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MasterRouteComponent from './MasterRouteComponent'
import NotFound from './NotFound'


const Main = ({monstersPerPage}) => {
  return (
    <BrowserRouter>
        <h1>Paginator02</h1>
        <Routes>
            <Route path={"/:pageNow"}
                    element={<MasterRouteComponent monstersPerPage={monstersPerPage}/>}>
            </Route>
            <Route path='/404' element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Main