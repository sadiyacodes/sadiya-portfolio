import React from 'react'
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import projectsData from "./projectsData.json";
const techIcons = {
  HTML : { name: "HTML", icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E34F26]">
        <path fill="currentColor" d="M1.5 0L0 3h3L2 12h4l1.5-3h5l1.5 3h4l1.5-3h4l1.5-3h-6.75L21 0H1.5z" />
      </svg>
    ) 
  },
  CSS : { name: "CSS", icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1572B6]">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </svg>
    )
  },
 Javascript: { name: "JavaScript", icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F7DF1E]">
        <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm1.116 17.067h-2.232c-.24 0-.455-.078-.635-.236-.182-.158-.27-.367-.27-.617v-6.058c0-.261.086-.476.271-.634.181-.158.396-.236.635-.236h2.232c.242 0 .456.078.635.236.182.158.271.373.271.634v6.058c0 .261-.086.459-.271.617-.179.158-.393.236-.635.236zm-.916-1.368h.02v-4.233h-.02v4.233zm3.174 1.368c-.44 0-.834-.18-1.143-.49-.308-.31-.486-.722-.486-1.141V7.996c0-.418.177-.83.486-1.141.308-.31.703-.491 1.143-.491.43 0 .834.18 1.141.491.309.311.487.723.487 1.141v7.132c0 .419-.178.831-.487 1.141-.307.31-.711.49-1.141.49z" />
      </svg>
    )
  },
  React:{ name: "React", icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#61DAFB]">
        <path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.174.225.392.465.773.705 1.146-.694.11-1.355.24-2.006.387-.64-.21-1.316-.437-2.002-.658 0-.14.07-.54.25-1.082.44-.086 1.025-.17 1.745-.26.165.06.309.12.47.19.467.074.927.162 1.36.253.51.4.919.867 1.215 1.43zm-1.897 1.254c.33.24.665.493.998.756.33-.262.663-.515.994-.756-.33-.242-.664-.493-.994-.756-.333.262-.668.515-.998.756z" />
      </svg>
    )
  },
  NodeJS: { name: "Node.js", icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#8CC84B]">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </svg>
    )
  },
  MongoDB: { name: "MongoDB", icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#47A248]">
        <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm3 17.927V6.074l-3 1.5v8.853l3 1.5zm-6 0V6.074l-3 1.5v8.853l3 1.5z" />
      </svg>
    )
  },
  Git:{ name: "Git", icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F05032]">
        <path fill="currentColor" d="M12 0c-1.456 0-2.829.451-3.93 1.218l-.052.035-1.838 1.108c-.303.183-.54.426-.76.633l-1.367 1.276c-.67.626-1.074 1.482-1.074 2.33s.404 1.704 1.074 2.33c.146.134.269.292.387.463l.652.764c-.009.055-.023.109-.023.164 0 1.139.532 2.097 1.348 2.61l.213.107c.182.09.372.139.564.139h2.004c.397 0 .789-.107 1.126-.3l2.161-1.177c.689.428 1.634.714 2.579.714 2.256 0 4.084-1.57 4.084-3.5s-1.828-3.5-4.084-3.5c-.571 0-1.093.126-1.582.317L10.5 6.905c.055-.297.09-.601.09-.903 0-.772-.097-1.527-.284-2.259-.396-.006-.81-.033-1.208.047-.715.125-1.45.54-2.022 1.07-.716.691-1.083 1.617-1.083 2.52v3.118c-.577-.183-1.275-.294-1.953-.294-2.257 0-4.084 1.569-4.084 3.5 0 1.403.701 2.637 1.763 3.441l1.138 1.025 2.097-1.096c.211-.115.469-.147.726-.082 0 0 .092.044.235.097l.087.035c-.004.025-.007.052-.007.077v1.057c0 1.93 1.828 3.5 4.084 3.5 1.007 0 1.957-.394 2.664-1.063.555.496 1.303.832 2.059.832h2.004c.486 0 .975-.052 1.453-.139.389-.03.684-.172.972-.372.473-.317.822-.775 1.069-1.283l-2.111-1.44c-.143-.095-.34-.077-.473.027l-.588.5c-1.207 1.041-2.993 1.008-4.174-.042-.358-.283-.549-.679-.549-1.086v-3.047l2.82-1.716c.236-.147.528-.173.794-.073L16.5 11l.5-1-1.5-1-1 1 .5.5-2.5 1.5-1.5-1 1-1-1-1.5c-1.065-.627-2.294-.583-3.21.182-.807.716-1.254 1.568-1.254 2.557 0 2.448 2.445 4.5 5.5 4.5 1.02 0 2.04-.167 3-.496l-.238-.464c-.494-.983-.958-1.782-1.397-2.473-.458-.667-1.129-1.094-1.838-1.094-.89 0-1.703.392-2.23 1.021-.232.24-.398.517-.5.83-.102.312-.095.627-.012.932.27 1.092.947 1.556 1.851 1.556.43 0 .878-.075 1.224-.231 0 0 2.127-1.113 2.73-1.393l1.04 2.097c.059.117.122.234.199.346.174.235.465.465.81.487.032 0 .063.005.096.005h.01c.021 0 .046-.004.075-.004.354-.034.678-.227.871-.53.191-.297.251-.646.151-.994-.045-.156-.101-.308-.161-.458l.943-1.5c.05-.084.078-.182.078-.278 0-.372-.168-.743-.482-.956-.185-.137-.388-.191-.575-.239.232-.126.468-.245.707-.366.052-.027.099-.063.152-.085 1.3-.647 2.608-1.277 4.23-1.277.194 0 .393.015.594.042 1.362.104 2.478.679 3.11 1.542.082.157.155.306.231.469 0 .006.005.013.008.02.43.82 1.293 1.295 2.251 1.295 1.306 0 2.321-.815 2.321-2.024 0-1.203-1.147-1.828-2.321-1.828-.949 0-1.876.224-2.767.633-1.653.666-3.021 1.883-3.021 3.128z" />
      </svg>
    )
  },
};



const ProjectCard = () => {
  return (
    <div className='group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl'>
       
       {projectsData.map((project, index) => (
        <div key={index} >
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="h-48 w-full object-cover"
          />
        </div>))}

        <div className='bg-projectcardbg p-4'>
          <h3 className='text-xl text-white font-bold'>{project.title}</h3>
          <p className='mt-2 text-sm text-[#E4E4E7]'>{project.description}</p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {project.techStack.map((tech)=>
            (
              <div
              key={tech}
              className="flex h-8 w-8 items-center justify-center rounded-full"
              title={techIcons[tech].name}
            >
              {techIcons[tech].icon}
            </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
               <Link
               href={project.links.live}
               className="inline-flex items-center justify-center rounded-md bg-pink px-4 py-2 text-sm font-medium text-ll_btn_col shadow transition-colors hover:bg-pink/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
               target="_blank"
            rel="noopener noreferrer">
                          <ExternalLinkIcon className="mr-2 h-4 w-4" />
                 Live Site
               </Link>

               <Link
            href={project.github}
            className="inline-flex items-center justify-center rounded-md  bg-pink text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <FontAwesomeIcon icon="fa-brands fa-github" className="mr-2 h-4 w-4 text-white"/>
            GitHub
          </Link>
          </div>
        </div>

    </div>
  )
}

export default ProjectCard