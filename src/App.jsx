import React from 'react'
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Parent from './Components/Parent/Parent';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/dineinoptions' element={<Parent/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App