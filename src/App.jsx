import React, { useEffect, useState } from 'react';
import './App.css';
import Animallist from './components/Animallist';
import CreateAnimal from './components/CreateAnimal';
import axios from "axios"

const animalList = [
  {id:1, name:"liutas", type:"zinduolis", weight:"350", lives: 1},
  {id:2, name:"Begemotas", type:"zinduolis", weight:"750", lives: 0},
  {id:3, name:"Tiggras", type:"zinduolis", weight:"250", lives: 1},
  {id:4, name:"Papuga", type:"paukstis", weight:"5", lives: 1}
]

function App() {

  const [create, setCreate] = useState(null)
  const [updateTime, setUpdateTime] = useState(Date.now())

useEffect(()=>{
  if(create===null){
    return
  }

  axios
      .post("http://localhost/3003/zoo" ,create)
      .then((res)=>setUpdateTime(Date.now()))
}, [create])

useEffect(()=>{
  
})

  return (
    <div className="App">
      <CreateAnimal setCreate={setCreate}/>
      <Animallist animalList={animalList}/>
    </div>
  );
}

export default App;
