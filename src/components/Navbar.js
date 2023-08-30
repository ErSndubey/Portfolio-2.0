import { ArrowRightIcon } from "@heroicons/react/solid";
import ICON from "../Images/sdLogo.png";
import React from "react";
import LinkedinIcon from "../Images/linkedin.png"
import GithubIcon from "../Images/github.png"

const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
         <a href="/">
            <img className="w-12" src={ICON} alt="nameIcon" />
            </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#certifications" className="mr-5 hover:text-white">
          Certifications
          </a> 
        </nav>
        <div className="inline-flex items-center text-center">
          <ul className="flex">
            <a href="https://www.linkedin.com/in/ersndubey/">
            <li className="w-8 mx-2"><img src={LinkedinIcon} alt="linkedinIcon"/></li>
            </a>
            <a href="https://github.com/ErSndubey">
            <li><img className="w-8" src={GithubIcon} alt="githubIcon"/></li>
            </a>
          </ul>
          <a
            href="#contact"
            className="bg-gray-800 border-0 py-1 px-3 text-center focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Hire Me 
          </a>
          <ArrowRightIcon className="w-4 h-4 ml-1 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
