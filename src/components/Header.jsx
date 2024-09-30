
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center items-center relative top-3'>
        <nav className='flex gap-1 p-0.5 border border-pink rounded-full bg-greybg backdrop-blur'>
            <a href="#" className='px-4 py-1.5 rounded-full text-white/70 text-md hover:bg-white/15 hover:text-white transition duration-300'>Home</a>
            <a href="#" className='px-4 py-1.5 rounded-full text-white/70 text-md  hover:bg-white/15 hover:text-white transition duration-300'>Experience</a>
            <a href="#" className='px-4 py-1.5 rounded-full text-white/70 text-md hover:bg-white/15 hover:text-white transition duration-300'>Projects</a>
            <a href="#" className='px-4 py-1.5 rounded-full text-white/70 text-md  hover:bg-white/15 hover:text-white transition duration-300'>Skills</a>
            <a href="#" className='px-4 py-1.5 rounded-full text-white/70 text-md   hover:bg-white/15 hover:text-white transition duration-300'>Contact</a>
         </nav>
    </div>
  )
}

export default Header