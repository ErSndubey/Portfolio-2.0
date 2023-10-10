import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

const  Projects =()=> {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-1 py-10 mx-auto text-center lg:px-40 ">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Crafting captivating web experiences with cutting-edge technologies. Transforming ideas into interactive realities through innovative web applications.
          </p>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row flex-wrap gap-10 lg:gap-0">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-full lg:w-1/2 w-100 lg:p-4 mb-20 lg:mb-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-max h-max  object-cover object-center  rounded-lg"
                  src={project.image}
                />
                <div className="px-8 py-16 lg:py-10 relative  w-full min-h-fit  border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;