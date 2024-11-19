import React from 'react'
import projectsData from "./projectsData.json";
import ProjectCard from './ProjectCard';
const Projects = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-white text-3xl font-bold tracking-tighter sm:text-5xl">Projects.<span className='text-3xl font-bold tracking-tighter sm:text-5xl text-pink'>
                    Built()
                </span>
                </h2>  
                <p className='max-w-[900px] text-white/50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                        Checkout some of the projects I have worked on. From simple websites to complex web applications, I've built a diverse portfolio showcasing my skills & creativity.
                </p> 
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Projects

{/* 
Projects.<span className='text-3xl font-bold tracking-tighter sm:text-5xl text-pink'>
                    Built()
                </span>
                </h2>  
                <p className='max-w-[750px] text-white/50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                        Checkout some of the projects I have worked on. From simple websites to complex web applications, I've built a diverse portfolio showcasing my skills & creativity.
                </p> */}