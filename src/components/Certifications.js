import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid"; // Import the appropriate icon
import { certifications } from "../data"; // Assuming you have a certifications data array

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="container  px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Certifications
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        Certified in advanced web development techniques, backed by reputable institutions. Validating expertise through industry-recognized certifications.
          </p>
        <div className="flex flex-col lg:flex lg:flex-row flex-wrap m-4">
          {certifications.map((certification) => (
            <div className="p-4  lg:w-1/3 w-full" key={certification.id}>
              <div className="h-full bg-gray-700 bg-opacity-40 p-10 rounded">
                <AcademicCapIcon className="block w-8 text-gray-500 mb-4" />
                <div className="mb-6">
                  <a target="_blank" href={certification.verificationLink}>
                  <img
                    alt="certificate"
                    src={certification.link}
                    className="w-full lg:w-80 mx-auto"
                  />
                  </a>
                </div>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {certification.title}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {certification.organization}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
