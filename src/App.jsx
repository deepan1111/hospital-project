import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/signup' element= {<Signup/>}/>
      </Routes>
      
      </BrowserRouter>
   
    </div>
  )
}

export default App
