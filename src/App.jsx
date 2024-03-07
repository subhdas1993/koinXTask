// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { lazy } from 'react'
import './App.css'
import Heading1 from './components/Heading1'
import MainSections from './components/MainSections'
import NavBar from './components/NavBar'

const YMAL = lazy(() => import('./components/YouMayAlsoLike'))
function App() {
  return (
    <>
      <div className='overflow-x-hidden h-svh'>
        <NavBar />
        <div className='bg-[#F1F1F1] py-3'>
          <Heading1 />
          <MainSections />
        </div>
        <YMAL />
      </div>
    </>
  )
}

export default App
