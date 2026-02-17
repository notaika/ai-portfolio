import React from "react";
import type { ReactNode } from "react";
import type { EducationData } from "../../types";

interface EduCardProps {
  props: EducationData[];
}

export default function EduCard({ props }: EduCardProps) {
  return (
    <div className="card md:text-[14px] xl:text-[16px] md:w-2/3 lg:max-w-2xl mt-4">
      <div>
        <div className="relative px-4">
          <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

          {props.map((edu, index) => (
            <div key={index} className="flex items-center w-full my-6 -ml-1.5">
              <div className="w-1/12 z-10">
                <div className="w-3.5 h-3.5 bg-yellow-300 rounded-full"></div>
              </div>
              <div className="w-11/12">
                <p className="flex justify-between">
                  <span className="font-bold ">{edu.institution} </span>
                  <span className="location italic ">{edu.location}</span>
                </p>

                <p className="certificate font-bold text-gray-300 flex justify-between text-[10px]">
                  {edu.certification}, {edu.program}
                  <span className="year italic font-normal">
                    {edu.timeline}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
