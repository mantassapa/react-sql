import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Paginator from './components/Paginator';
import { monsters } from './data/monsters';

const monstersPerPage = 6

function App() {
  const [currentPage, setCurrentPage]= useState(1)
  return (
    <div>

      <h1>Paginator</h1>
      <Paginator totalLenght={monsters.length} perPage={monstersPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <hr />
      <Main monstersPerPage={monstersPerPage}/>
    </div>
  );
}

export default App;
