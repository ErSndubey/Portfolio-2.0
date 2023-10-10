import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Proficient in a spectrum of modern technologies, from React and Node.js to responsive design and API integration. Building dynamic web solutions that seamlessly blend creativity and code.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img alt={skill.skillName} src={skill.skillImgURL} className="w-14 md:w-10 mr-4 hover:scale-125 transition-all duration-500" />
                {/*  */}
                <span className="title-font font-semibold mr-5 text-white">
                  {skill.skillName}
                </span>
                {skill.certification ? (
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-2" />
                ) : null}
                <button type="button" className="text-sm text-white cursor-pointer hover:scale-110 transition-all duration-300 ">{skill.certificationText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;