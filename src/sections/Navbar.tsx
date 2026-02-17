import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full">
      <div className="terminal-log">
        <div className="logo terminal-prompt">
          <a href="#" className="">
            ai.
          </a>
        </div>
      </div>
      <ul className="flex w-100 sm:w-1/2 md:w-1/3 lg:w-1/4 mt-2 justify-between items-center">
        <li>
          <a className="menu-item text-xs " href="#">
            <span className="text-green-400 mr-1">/</span>home
          </a>
        </li>
        <li>
          <a className="menu-item text-xs" href="#about">
            <span className="text-yellow-400 mr-1">/</span>about
          </a>
        </li>
        <li>
          <a className="menu-item text-xs" href="#projects">
            <span className="text-red-400 mr-1">/</span>projects
          </a>
        </li>
        <li>
          <a className="menu-item text-xs" href="#links">
            <span className="text-orange-400 mr-1">/</span>links
          </a>
        </li>
      </ul>
    </nav>

    // <div className="terminal-nav px-4 bg-[#050510] text-xs bg-gradient-to-t to-purple-900 via-transparent from-transparent opacity-70">
    //   <div className="terminal-log">
    //     <div className="logo terminal-prompt">
    //       <a href="#" className="no-style blue">
    //         ai.
    //       </a>
    //     </div>
    //   </div>
    //   <nav className="terminal-menu ">
    //     <ul>
    //       <li>
    //         <a className="menu-item text-light text-xs " href="#">
    //           /home
    //         </a>
    //       </li>
    //       <li>
    //         <a className="menu-item text-xs" href="#about">
    //           /about
    //         </a>
    //       </li>
    //       <li>
    //         <a className="menu-item text-xs" href="#projects">
    //           /projects
    //         </a>
    //       </li>
    //       <li>
    //         <a className="menu-item text-xs" href="#links">
    //           /links
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
}
