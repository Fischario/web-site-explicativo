import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Html from './pages/Html'
import Css from './pages/Css'
import JavaScript from './pages/JavaScript'
import React from './pages/React'
import Nodejs from './pages/Nodejs'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Html' element={<Html />}/>
        <Route path='/Css' element={<Css />}/>
        <Route path='/JavaScript' element={<JavaScript />}/>
        <Route path='/React' element={<React />}/>
        <Route path='/Nodejs' element={<Nodejs />}/>
      </Routes>
    </>
  )
}

export default App