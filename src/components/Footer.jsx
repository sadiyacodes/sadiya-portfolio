import React from 'react'

const Footer = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center  w-full md:w-full lg:w-2/3 mx-auto '>
      < p className='text-gray-400 mt-6 text-2xl mb-4'>
        Connect with me
      </p>
      <div className='flex space-x-6'>
       <a href='mailto:sadiya2409@gmail.com' target='_blank' rel='noopener noreferrer'> 
        <i className='fa-classic fa-solid fa-envelope  text-lg md:text-2xl text-zinc-500 cursor-pointer transition-transform transform-gpu hover:scale-150'></i>
        </a>
        <a href="https://github.com/sadiyacodes" target="_blank" rel='noopener noreferrer'>
          <i className="fa-brands fa-github  text-lg md:text-2xl text-zinc-500  cursor-pointer transition-transform transform-gpu hover:scale-150"></i>
        </a>
        <a href="https://in.linkedin.com/in/sadiya-parveen-1181521ab?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel='noopener noreferrer'>
          <i className="fa-brands fa-linkedin  text-lg md:text-2xl text-zinc-500  cursor-pointer transition-transform transform-gpu hover:scale-150"></i>
        </a>
       </div>

    {/* credits */}

     <div className="text-center w-full flex space-x-2 justify-center items-center  text-zinc-600 absolute bottom-4">
      <span>Designed with </span>
      <img src="assets/tailwind-css.svg" className="w-6 h-6 " />
      <span>&</span>
      <i className="fa-brands fa-react text-cyan-500 text-lg"></i>
      </div>

    </div>
  )
}

export default Footer