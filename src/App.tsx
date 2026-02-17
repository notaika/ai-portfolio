import { useState } from "react";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

import "./App.css";

import { about, education, projects } from "./data/data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="text-white overflow-x-hidden relative text-xs">
        <Navbar />
        <Hero />
        <About about={about} education={education} />
        <Projects projects={projects} />
      </main>
    </>
  );
}

export default App;
