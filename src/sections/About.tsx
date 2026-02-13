import React from "react";

import type { PersonalData, EducationData } from "../types";
import Bio from "../components/Bio/bio";

import icon from "../assets/icons/aika-icon.png";
import placeholder from "../assets/icons/paulNyaa.png";

interface AboutProps {
  about: PersonalData;
  education: EducationData[];
}

export default function About({ about, education }: AboutProps) {
  return (
    <section>
      <h2 className="logo terminal-prompt text-4xl">
        <span className="text-yellow-400 mx-2">/</span>about
      </h2>
      <div className="flex justify-end">
        <div role="tablist" className="-mb-0.5 flex gap-3">
          <button
            role="tab"
            aria-selected="false"
            className="border-2 border-black bg-yellow-300 px-6 py-2 font-semibold text-black shadow-[4px_4px_0_0] focus:ring-2 focus:ring-yellow-300 focus:outline-0">
            about
          </button>

          <button
            role="tab"
            aria-selected="false"
            className="text-black border-2 border-black bg-yellow-300 px-6 py-2 font-semibold shadow-[4px_4px_0_0] hover:translate-1 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 shadow-black">
            education
          </button>

          <button
            role="tab"
            aria-selected="false"
            className="text-black border-2 border-black bg-yellow-300 px-6 py-2 font-semibold shadow-[4px_4px_0_0] hover:translate-1 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 shadow-black">
            techstack
          </button>
        </div>
      </div>

      <div
        role="tabpanel"
        className="flex flex-col-reverse md:flex-row items-center md:justify-center mt-4">
        <div className="biography md:text-[14px] xl:text-[16px] md:w-2/3 lg:max-w-2xl mt-4">
          <Bio about={about} />
        </div>
        <div className="icon flex justify-center md:w-1/3 my-4">
          <img
            src={icon}
            alt="hi"
            className="rounded-full w-xs max-w-sm md:w-4/5 lg:max-w-90"
          />
        </div>
      </div>
    </section>
  );
}
