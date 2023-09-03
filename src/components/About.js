import React from "react";
import dev from "../Images/dev.webp"


const About = ()=> {
  return (
    <section id="about">
      <div className=" lg:container  mx-auto flex flex-col px-10 py-20  lg:flex-row  items-center">
        <div className="lg:flex-grow lg:w-1/2 lg:pr-24  flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
          <h1 className="title-font text-4xl lg:text-6xl mb-4 font-medium">
           <span className="text-red-600">Hi,</span> <span className="text-white">I'm Sachchidanand.</span> 
            
        
          </h1>
          <h1 className="title-font flex text-2xl  items-center mb-4 font-medium text-white">I <span> <svg fill="none" className="w-6 mx-2 " stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
</svg></span> to build amazing 
           <span className="text-red-600 mx-2"> apps.</span></h1>
          <p className="mb-8 leading-snug lg:leading-relaxed text-3xl lg:text-2xl ">
         
          "Empowering my projects with the latest technologies and tools, I craft solutions that go beyond expectations. By embracing emerging trends, I guarantee top-tier quality and client satisfaction. My approach merges innovation with efficiency, resulting in impactful outcomes. Attuned to user preferences, I design solutions that truly resonate."
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0  py-2 px-3 md:px-6 focus:outline-none hover:bg-green-600 rounded text-md md:text-lg">
              Work With Me
            </a>
            
            <a target="_blank"
              href="https://docs.google.com/document/d/1d-xD_k0uNgbUDlSEd9BRsix1rW7fT79YVnZ5iEwQii0/edit?usp=sharing"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-3 md:px-6  focus:outline-none hover:bg-gray-700 hover:text-white rounded text-md md:text-lg">
              Download Resume
            </a>
          </div>

        </div>
        <div className="lg:max-w-lg lg:w-full md:w-2/3 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            
            src={dev}
          />
        </div>
      </div>
    </section>
  );
}
export default About;
