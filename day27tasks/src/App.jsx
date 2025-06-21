import { useState } from 'react'
import './App.css'
import Proj1 from './components/Project1/Proj1';
import Proj2 from './components/Project2/Proj2';
import Proj3 from './components/Project3/Proj3';
import Proj4 from './components/Project4/Proj4';
import Task from './components/Task';

function App() {

  return (
    <> 
    <br /> <hr />
      <Task /><br /> <hr />
      <Proj1 /><br /> <hr />
      <Proj2 /><br /> <hr />
      <Proj3 /><br /> <hr />
      <Proj4 />
    </>
  )
}

export default App
