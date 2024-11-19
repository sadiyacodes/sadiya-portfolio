import React from 'react'
import { ButtonWithIcons } from './Skills'
const About = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white/20" id="about">
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
            <p className="max-w-[600px] text-white/50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hey! I&apos;m Sadiya I&apos;m a  <span className="font-bold text-red-500 "> Full Stack Developer </span> with a passion for crafting beautiful and intuitive 
               user interfaces with <span className="font-bold text-red-500 ">1.5 years </span> of experience
            
            <br />
            <br />
            I&apos;m constantly exploring new ways to enhance my skills and deliver exceptional results.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl text-white font-bold">Work Experience</h3>
              <p className="text-white/50">
              <span className="font-bold text-red-500 "> Cognizant</span> 
              &nbsp; <span className='md:text-base/normal lg:text-sm/normal xl:text-base/relaxed'> (Aug 2021 - Jan 2023)</span>
              <p className='italic md:text-base/normal lg:text-sm/normal xl:text-base/relaxed '>Programmer Analyst</p>

              </p>
           </div>
           <div className="grid gap-1">
              <h3 className="text-xl text-white font-bold">Skills</h3>
                <ButtonWithIcons/>
            </div>
       </div>
       </div>
    </section>
  )
}

export default About