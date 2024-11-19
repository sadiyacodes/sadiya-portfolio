import { Button } from "@/components/ui/button"
import {techIcons} from"./ProjectCard"
import { SiRedux, SiMysql, SiGit } from 'react-icons/si'
export function ButtonWithIcons() {
  return (
    <div className="mt-2 grid grid-cols-4  md:grid-cols-5 lg:grid-cols-4 gap-4">
      <Button className="flex text-xs md:text-base items-center border-pink border-2 text-white  h-8">
        <i className="fa-brands fa-react text-cyan-500"></i>
        <span>React</span>
      </Button>
      <Button className="flex text-xs md:text-base items-center  border-pink border-2 text-white h-8">
        <i className="fa-brands fa-js text-yellow-400"></i>
        <span>JavaScript</span>
      </Button>
      <Button className="flex text-xs md:text-base items-center  border-pink border-2 text-white  h-8">
        <i className="fa-brands fa-node text-green-600"></i>
        <span>Node.js</span>
      </Button>
      <Button className="flex text-xs md:text-base items-center  border-pink border-2 text-white  h-8">
      {techIcons["Express"]?.icon}
        <span>Express</span>
      </Button>
    
      <Button className="flex text-xs md:text-base items-center  border-pink border-2 text-white h-8">
      <SiMysql className="w-5 h-5 " />
        <span>MySql</span>
      </Button>
      
      <Button className="flex text-xs md:text-base items-center  border-pink border-2 text-white  h-8">
        
              {techIcons["MongoDB"]?.icon}
           
        <span>MongoDB</span>
      </Button>
      <Button className="flex w-full text-xs md:text-base items-center  border-pink border-2 text-white  h-8">
      {techIcons["Tailwind"]?.icon}
        <span>TailwindCSS</span>
      </Button>
      <Button className="flex text-xs md:text-base items-center  border-pink border-2 text-white h-8">
        <i className="fa-brands fa-java"></i>
        <span>Java</span>
      </Button>
      <Button className="flex text-xs md:text-base items-center  border-pink border-2 text-white  h-8">
        <i className="fa-brands fa-html5 text-orange-500"></i>
        <span>HTML5</span>
      </Button>
      <Button className="flex text-xs md:text-base items-center border-pink border-2 text-white  h-8">
        <i className="fa-brands fa-css3-alt text-blue-600"></i>
        <span>CSS3</span>
      </Button> 
      <Button className="flex text-xs md:text-base items-center  border-pink border-2 text-white  h-8">
         <SiGit className="w-5 h-5 text-[#F05032]"/>
        <span>Git</span>
      </Button>
      <Button className="flex text-xs md:text-base items-center  border-pink border-2 text-white h-8">
      <SiRedux className="w-5 h-5 text-purple-600" />
        <span>Redux</span>
      </Button>
     
    </div>
  );
}
