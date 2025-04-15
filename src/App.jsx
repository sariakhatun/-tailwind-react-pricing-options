import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './Components/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChart from './Components/DaisyPricingCard/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'
let pricingPromise=fetch('pricingData.json')
.then(res=>res.json())
let marksPromise=axios.get('data.json')
// let resultData = fetch('data.json')
// .then(res=>res.json());
function App() {

  return (
    <>
   
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-3xl text-center font-bold my-4 poppins'>Vite + React</h1>
      </header>
      <main>
          <Suspense fallback={<span className='loading loading-dots loading-xs'></span>}>
            <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
          </Suspense>
            <Suspense fallback={<span className='loading loading-dots loading-xs'></span>}>
            <MarksChart marksPromise={marksPromise}></MarksChart>
            </Suspense>

          <ResultsChart>

          </ResultsChart>
      </main>

      
      
    </>
  )
}

export default App
