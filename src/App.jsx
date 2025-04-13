import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './Components/DaisyNav'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
   
      <header>
        <Navbar></Navbar>
        <DaisyNav></DaisyNav>
      <h1 className='text-3xl text-center font-bold my-4 poppins'>Vite + React</h1>
      </header>
      <main>

      </main>

      
      
    </>
  )
}

export default App
