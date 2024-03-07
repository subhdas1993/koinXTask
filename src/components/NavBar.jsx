import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen(!isOpen);
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-11/12 flex justify-between items-center'>
          <div>
            <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="koinX" />
          </div>
          <div className='w-1/2 font-bold max-lg:relative static'>
            <button className='lg:hidden float-right relative z-10' onClick={toggleDrawer}>
              {isOpen ? (<><IoCloseSharp size={30}/></>) : (<><FaBars size={30}/></>)}
            </button>
            <div className={`lg:w-full max-lg:h-[90svh] flex max-lg:flex-col max-lg:justify-evenly justify-between max-lg:items-end items-center max-lg:absolute transition-all ease-in-out duration-500 bg-[#FFFFFF90] max-lg:pr-3 ${isOpen ? 'right-[-10%] max-lg:w-screen' : 'right-[-110%] max-lg:w-0'}`}>
              <div>Crypto Taxes</div>
              <div>Free Tools</div>
              <div>Resource Center</div>
              <div><button className='bg-[rgb(0,82,254)] px-3 py-1 text-white font-normal rounded-md'>Get Started</button></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar