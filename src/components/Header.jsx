
import React , {useState} from 'react'
import Navlink from './helpers/NavLink';
const Header = () => {
  const [mobileNav, setMobileNav] =useState(false);
  return (
    
    <div className='flex justify-between items-center relative top-3 mb-7'>

      {/* Logo on the leftmost corner */}
    <div className='flex-shrink-0'>
        <img src="/assets/SadiyaLogoSmall.png" alt="Logo" className='w-20 h-20' />
    </div>

      {/* Navigation - Hidden on small screens */}
        <nav className='absolute left-1/2 transform -translate-x-1/2 hidden sm:flex gap-1 p-0.5 border border-pink rounded-full bg-greybg backdrop-blur'>
            <a href="#" className='px-4 py-1.5 rounded-full text-white/70 text-md hover:bg-white/15 hover:text-white transition duration-300'>Home</a>
            <a href="#" className='px-4 py-1.5 rounded-full text-white/70 text-md  hover:bg-white/15 hover:text-white transition duration-300'>Experience</a>
            <a href="#" className='px-4 py-1.5 rounded-full text-white/70 text-md hover:bg-white/15 hover:text-white transition duration-300'>Projects</a>
            <a href="#" className='px-4 py-1.5 rounded-full text-white/70 text-md  hover:bg-white/15 hover:text-white transition duration-300'>Skills</a>
            <a href="#" className='px-4 py-1.5 rounded-full text-white/70 text-md   hover:bg-white/15 hover:text-white transition duration-300'>Contact</a>
         </nav>

          {/* Hamburger Menu - Only visible on small screens */}
    <div className='sm:hidden'>
        <button className='text-pink p-2 ' onClick={() => setMobileNav(true)}>
            {/* Hamburger icon */}
            <svg className='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
        </button>

        {/* Mobile menu  */}
        {mobileNav && 
        (
          <div className='w-full h-screen overflow-y-hidden flex flex-col bg-black absolute bottom-0 left-0 right-0 top-0 justify-center items-center space-y-10 transition-all duration-1000 font-semibold z-40'
          style={{
            backgroundImage:
              'url("https://transparenttextures.com/patterns/batthern.png")',
          }}>
             <button
            className="absolute right-6 top-12 text-xl w-8 h-8 rounded-md border-[0.015rem] border-slate-200"
            onClick={() => setMobileNav(false)}
          >
            {" "}
            <i className="fa-solid fa-xmark text-white/70 cursor-pointer "></i>
          </button>
          <Navlink setMobileNav={setMobileNav} />
            </div>
        )}
    </div>
    </div>
 
  )
}

export default Header