import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Event from './components/Event'
import Videocard from './components/Videocard'
import Buildit from './components/Buildit'
import OpenCat from './components/OpenCat'
import Innovate from './components/Innovate'
function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <Home></Home>
     <Event></Event>
     <Videocard></Videocard>
     <Buildit></Buildit>
     <OpenCat></OpenCat>
     <Innovate></Innovate>
    </>
  )
}

export default App
