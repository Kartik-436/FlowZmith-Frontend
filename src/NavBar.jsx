import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full h-[10vh]  backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 fixed top-0 left-0 z-[999]'>
        <div>
            <h1 className='text-white font-bold text-2xl'>React Flow</h1>   
        </div>
    </div>
  )
}

export default NavBar
