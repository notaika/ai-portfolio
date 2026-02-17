import React, { useState } from "react";

import type { PersonalData, EducationData } from "../types";
import AboutCard from "../components/TabCard/aboutCard";
import EduCard from "../components/TabCard/eduCard";

interface AboutProps {
  about: PersonalData;
  education: EducationData[];
}

export default function About({ about, education }: AboutProps) {
  const [activeTab, setActiveTab] = useState("about");

  console.log(education);

  return (
    <section id="about">
      <h2 className="logo terminal-prompt text-4xl">
        <span className="text-yellow-400 mx-2">/</span>about
      </h2>
      <div className="flex justify-end">
        <div role="tablist" className="-mb-0.5 flex gap-3">
          <button
            onClick={() => setActiveTab("about")}
            role="tab"
            aria-selected="false"
            className={`text-black border-black  px-6 py-2 font-semibold 
            ${
              activeTab === "about"
                ? "border-2 border-black bg-yellow-300 px-6 py-2 font-semibold text-black shadow-[4px_4px_0_0] focus:ring-2 focus:ring-yellow-300 focus:outline-0"
                : "border-2 border-black px-6 py-2 font-semibold shadow-[4px_4px_0_0] hover:translate-1 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 bg-black text-yellow-300"
            }`}>
            about
          </button>

          <button
            onClick={() => setActiveTab("education")}
            role="tab"
            aria-selected="false"
            className={`text-black border-black  px-6 py-2 font-semibold 
            ${
              activeTab === "education"
                ? "border-2 border-black bg-yellow-300 px-6 py-2 font-semibold text-black shadow-[4px_4px_0_0] focus:ring-2 focus:ring-yellow-300 focus:outline-0"
                : "border-2 border-black px-6 py-2 font-semibold shadow-[4px_4px_0_0] hover:translate-1 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 bg-black text-yellow-300"
            }`}>
            education
          </button>

          <button
            onClick={() => setActiveTab("techstack")}
            role="tab"
            aria-selected="false"
            className={`text-black border-black  px-6 py-2 font-semibold 
            ${
              activeTab === "techstack"
                ? "border-2 border-black bg-yellow-300 px-6 py-2 font-semibold text-black shadow-[4px_4px_0_0] focus:ring-2 focus:ring-yellow-300 focus:outline-0"
                : "border-2 border-black px-6 py-2 font-semibold shadow-[4px_4px_0_0] hover:translate-1 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 bg-black text-yellow-300"
            }`}>
            techstack
          </button>
        </div>
      </div>

      <div
        role="tabpanel"
        className="flex flex-col-reverse md:flex-row items-center md:justify-center mt-4 bg-gray-800">
        {activeTab === "about" && <AboutCard props={about.bio} />}

        {activeTab === "education" && <EduCard props={education} />}

        {activeTab === "techstack" && <TabCard props={about.techstack} />}

        <div className="icon flex justify-center md:w-1/3 my-4">
          <img
            src={about.pfp}
            alt="hi"
            className="rounded-full w-xs max-w-sm md:w-4/5 lg:max-w-90"
          />
        </div>
      </div>
    </section>
  );
}
