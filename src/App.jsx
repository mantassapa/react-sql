import React, { useEffect, useState } from 'react';
import './App.css';
import Animallist from './components/Animallist';
import CreateAnimal from './components/CreateAnimal';
import axios from "axios"
import Modal from './components/Modal';
import SortingComp from './components/SortingComp';

// const animalList = [
//   {id:1, name:"liutas", type:"zinduolis", weight:"350", lives: 1},
//   {id:2, name:"Begemotas", type:"zinduolis", weight:"750", lives: 0},
//   {id:3, name:"Tiggras", type:"zinduolis", weight:"250", lives: 1},
//   {id:4, name:"Papuga", type:"paukstis", weight:"5", lives: 1}
// ]

function App() {

  const [create, setCreate] = useState(null)
  const [updateTime, setUpdateTime] = useState(Date.now())
  const [animalList, setAnimalList] = useState([])
  const [show, setShow] = useState(0)
  const [edit, setEdit] = useState(null)

//DELETE
const handleDelete =(id)=>{
  axios
  .delete(`http://localhost:3003/zoo/${id}`)
  .then((res)=>setUpdateTime(Date.now()))
  .catch((err)=>console.log(err))
}

//UPDATE
const showData =()=>{
  return animalList.find(animal=>animal.id===show)
}
//UPDATE_EDIT
useEffect(()=>{
  if(edit===null){
    return
  }

  axios
      .put(`http://localhost:3003/zoo/${edit.id}`, edit)
      .then((res)=>setUpdateTime(Date.now()))

},[edit])
//POST
useEffect(()=>{
  if(create===null){
    return
  }
  axios
      .post("http://localhost:3003/zoo", create)
      .then((res)=>setUpdateTime(Date.now()))
      .catch((err)=>console.log(err))
}, [create])

//GET
useEffect(()=>{
  axios
      .get("http://localhost:3003/zoo")
      .then((res)=>setAnimalList(res.data))
}, [updateTime])

//SORTING

const sortHandler =(value)=>{
  const copy=[...animalList]

  switch(value){
    case "a-z":
      setAnimalList(copy.sort((a,b)=>a.weight - b.weight))
      break
    case "z-a":
      setAnimalList(copy.sort((a,b)=>b.weight - a.weight))
      break
    case "name_a-z":
      setAnimalList((animals)=>{animals.sort((a,b)=>{
        if(a.name>b.name){
          return 1
        }
        if(a.name<b.name){
          return -1
        }
        return 0
      })
    return [...animals]
    })
    break
    case "name_z-a":
      setAnimalList((animals)=>{animals.sort((a,b)=>{
        if(a.name>b.name){
          return -1
        }
        if(a.name<b.name){
          return 1
        }
        return 0
      })
    return [...animals]
    })
    break
    default:
    
  }
}

  return (
    <div className="App">
      <SortingComp sortHandler={sortHandler}/>
      <CreateAnimal setCreate={setCreate}/>
      <Animallist animalList={animalList} handleDelete={handleDelete} setShow={setShow}/>
      <Modal id={show} setShow={setShow} showData={showData} setEdit={setEdit}/>
    </div>
  );
}   

export default App; 
