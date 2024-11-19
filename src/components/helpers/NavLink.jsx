import React from "react";

const Navlink = ({ setMobileNav }) => {
  const handleNavClick = () => {
    setMobileNav(false); // Close the nav menu when a link is clicked
  };

  return (
    <>
      <div>
     
        <div className="w-full bg-pink h-[0.075rem]  scale-0 peer-hover:scale-100 transition-all duration-300 "></div>
      </div>
      <div>
        <a href="#about"
          className="text-white  peer focus:text-pink active:text-pink"
          onClick={handleNavClick}  >
          Experience
        </a>
        <div className="w-full bg-pink h-[0.075rem]  scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
      <div>
        <a href="#projects"
          className="text-white  peer focus:text-pink active:text-pink"
          onClick={handleNavClick}  >
          Projects
        </a>
        <div className="w-full bg-pink h-[0.075rem]  scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>

      <div>
        <a href="#about"
          className="text-white  peer focus:text-pink active:text-pink"
          onClick={handleNavClick} >
          Skills
        </a>
        <div className="w-full bg-pink  h-[0.075rem]  scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
      
      <div>
        <a href="#contact"
          className="text-white  peer focus:text-pink active:text-pink"
          onClick={handleNavClick}  >
         Contact
        </a>
        <div className="w-full bg-pink h-[0.075rem]  scale-0 peer-hover:scale-100 transition-all duration-300"></div>
      </div>
    </>
  );
};

export default Navlink;