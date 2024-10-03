import React from "react";

const Navlink = ({ setMobileNav }) => {
  return (
    <>
      <div>
        <a href="#"
          className="text-white  peer focus:text-pink active:text-pink"
        >
          Home
        </a>
        <div className="w-full bg-pink h-[0.075rem]  scale-0 peer-hover:scale-100 transition-all duration-300 "></div>
      </div>
      <div>
        <a href="#experience"
          className="text-white  peer focus:text-pink active:text-pink"
        >
          Experience
        </a>
        <div className="w-full bg-pink h-[0.075rem]  scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
      <div>
        <a href="#projects"
          className="text-white  peer focus:text-pink active:text-pink"
        >
          Projects
        </a>
        <div className="w-full bg-pink h-[0.075rem]  scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>

      <div>
        <a href="#skills"
          className="text-white  peer focus:text-pink active:text-pink"
        >
          Skills
        </a>
        <div className="w-full bg-pink  h-[0.075rem]  scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
      
      <div>
        <a href="#contact"
          className="text-white  peer focus:text-pink active:text-pink"
        >
         Contact
        </a>
        <div className="w-full bg-pink h-[0.075rem]  scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
    </>
  );
};

export default Navlink;