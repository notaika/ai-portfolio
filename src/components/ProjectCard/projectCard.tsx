import React from "react";

export default function ProjectCard({ projects }) {
  return projects.map((proj, index: number) => (
    <div
      key={index}
      className="border-2 border-black bg-white shadow-[4px_4px_0_0,8px_8px_0_0] m-8">
      <div className="bg-yellow-300 p-3">
        <div className="flex items-center justify-between">
          <strong className="text-xs/none font-bold uppercase">
            {proj.title}
          </strong>

          <div className="flex gap-1">
            <div className="size-3 border-2 border-black bg-white"></div>
            <div className="size-3 border-2 border-black bg-white"></div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-black p-4 sm:p-6 flex flex-col sm:flex-row">
        <div className="screenshots sm:w-1/2">
          {proj.images.map((image: string, index: number) => (
            <img
              src={image}
              alt="Project screenshot"
              key={index}
              className="w-fill"
            />
          ))}
        </div>
        <div className="project-info sm:w-1/2 flex flex-col md:ml-8">
          <p className="my-3 text-sm text-black text-pretty">
            {proj.description}
          </p>
          <div className="project-techstack md:mt-3">
            {proj.techstack.map((tech: string, index: number) => (
              <span
                key={index}
                className="tech text-black my-0.5 mr-2 inline-block bg-gray-300 text-[9px] text-white  px-3 py-1 rounded-full">
                #{tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
}
