import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Event from './components/Event'
function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <Home></Home>
     <Event></Event>
    </>
  )
}

export default App
