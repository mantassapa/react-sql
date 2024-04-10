import React, { useEffect, useState } from 'react';
import './App.css';
import Animallist from './components/Animallist';
import CreateAnimal from './components/CreateAnimal';
import axios from "axios"
import Modal from './components/Modal';

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

//DELETE
const handleDelete =(id)=>{
  axios
  .delete(`http://localhost:3003/zoo/${id}`)
  .then((res)=>setUpdateTime(Date.now()))
  .catch((err)=>console.log(err))
}

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

  return (
    <div className="App">
      <CreateAnimal setCreate={setCreate}/>
      <Animallist animalList={animalList} handleDelete={handleDelete} setShow={setShow}/>
      <Modal id={show} setShow={setShow}/>
    </div>
  );
}   

export default App;
