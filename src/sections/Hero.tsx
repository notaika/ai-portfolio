import React from "react";

export default function Hero() {
  return (
    <section className="home h-screen w-screen flex flex-col md:flex-row items-center justify-center 2xl:container mx-auto">
      {/* Left Code Block */}
      <div className="sm:w-2/3 flex mb-10 md:mb-0 justify-center">
        <div className="bg-[#1e1e2e] border border-gray-700 p-6 rounded-lg shadow-2xl min-w-2/3 min-h-3/4 ">
          {/* Window Buttons */}
          <div className="flex gap-2 mb-5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {/* Inside Codeblock */}
          <p className={`text-pink-400 text-4xl xl:text-5xl`}>
            hi there
            <span className="text-yellow-300 mt-5">!</span>
          </p>

          <p className={`text-right text-4xl xl:text-5xl`}>
            i&apos;m <span className="text-green-400">aika</span>
            <span className="text-yellow-300">;</span>
          </p>

          <p className={`text-center xl:text-lg`}>
            &lt; an aspiring software developer /&gt;
          </p>
        </div>
      </div>

      {/* Right Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-gray-400 text-lg lg:text-2xl mb-8 max-w-lg">
          aika@BCIT <span className="text-green-400">portfolio</span> on{" "}
          <span className="text-purple-400">main</span>
          {" ~ "}
          <span className="text-orange-400">[!]</span>
        </p>
        <button
          className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-bold shadow-lg hover:scale-105 transition transform"
          id="targetAbout">
          &gt; cd ./portfolio
        </button>
      </div>
    </section>
  );
}
