import React from 'react'
import { ShimmerButtonDemo } from './DownloadResBtn'
import {ShimmerButtonDemo2} from "./ContactBtn"
const HeroSection = () => {
  return (
    <div className="relative mt-24 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-black bg-background md:shadow-xl">
        <span className="pointer-events-none z-10 whitespace-pre-wrap  bg-gradient-to-r from-blue-300 to-yellow-300 bg-clip-text text-center text-5xl md:text-7xl font-bold leading-normal md:leading-normal tracking-tighter text-transparent">
        Sadiya Parveen
          </span>
         <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-white/90 text-3xl md:text-4xl font-bold text-center tracking-tight">Full Stack Developer</h1>
          <p className=" text-white/90 text-lg md:text-xl text-center">
            Crafting seamless experiences with expertise in both frontend and backend development.
          </p>
          <div class="flex md:ml-0 flex-row justify-center w-full md:mb-0 space-x-2 sm:space-x-4">
            <a target="_blank" rel="noopener noreferrer" href="download" class="relative inline-block text-sm md:text-lg group">
                <ShimmerButtonDemo/>
           </a>
          <a rel="noopener noreferrer" href="#contact" class="relative inline-block text-sm md:text-lg group">
            <ShimmerButtonDemo2/>
            </a></div>
        </div>
    </div>

  )
}

export default HeroSection

