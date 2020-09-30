import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
