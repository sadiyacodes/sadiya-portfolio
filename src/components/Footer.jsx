import React from 'react'

const Footer = () => {
  return (
    
    <div id="contact" className='mt-5 mb-6 flex flex-col justify-center items-center w-full md:w-full lg:w-2/3 mx-auto '>
      < p className='text-gray-400 mt-6 text-2xl mb-4'>
        Connect with me
      </p>
      <div className='flex space-x-6'>
       <a href='mailto:sadiya2409@gmail.com' target='_blank' rel='noopener noreferrer'> 
        <i className='fa-classic fa-solid fa-envelope  text-xl md:text-2xl text-zinc-500 cursor-pointer transition-transform transform-gpu hover:scale-150'></i>
        </a>
        <a href="https://github.com/sadiyacodes" target="_blank" rel='noopener noreferrer'>
          <i className="fa-brands fa-github  text-xl md:text-2xl text-zinc-500  cursor-pointer transition-transform transform-gpu hover:scale-150"></i>
        </a>
        <a href="https://in.linkedin.com/in/sadiya-parveen-1181521ab?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel='noopener noreferrer'>
          <i className="fa-brands fa-linkedin  text-xl md:text-2xl text-zinc-500  cursor-pointer transition-transform transform-gpu hover:scale-150"></i>
        </a>
       </div>

    {/* credits */}

     <div className="text-center mt-2 w-full flex space-x-2 justify-center items-center  text-zinc-600 ">
      <span>Designed with </span>
      <img src="assets/tailwind-css.svg" className="w-6 h-6 " />
      <span>&</span>
      <i className="fa-brands fa-react text-cyan-500 text-lg"></i>
      </div>

    </div>
  )
}

export default Footer

{/* <div class="relative text-center inline sm:px-1.5 sm:mx-1.5"><div class="relative z-10 inline text-black">Secret Management</div><div class="absolute bottom-0 left-0 w-full bg-primary mb-0.5 md:mb-2.5 h-1/3 md:h-1/3"></div></div> */}