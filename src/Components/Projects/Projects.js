import React from "react";
import "./Projects.css";
import Netflix from "../../Assets/img/netflixClone (1).png";
import Libellule from "../../Assets/img/LibelluleCafe_restaurant_Res.png";
import GuessTheNumber from "../../Assets/img/GuessTheNumber.png";
import Surmesure from "../../Assets/img/Surmesure.png";
import MouseScroll from "../MouseScroll/MouseScroll";

function Projects() {
  return (
    <div className="projects section">
      <h1 className="title">PROJECTS</h1>
      <div className="projects__grid">
        <a
          href="https://netflix-clone-cbac3.web.app/"
          target="_blank"
          id="grayscale"
          rel="noopener noreferrer"
        >
          <img className="img-hover-zoom--blur" src={Netflix} alt="" />
          <h4>Netflix Clone</h4>
          <p>React.js / HTML / CSS</p>
        </a>
        <a
          href="https://libellulecafe.fr/"
          target="_blank"
          rel="noopener noreferrer"
          id="grayscale"
        >
          <img className="img-hover-zoom--blur" src={Libellule} alt="" />
          <h4 className="mobile_font">Libellule - Freelance Work</h4>
          <p>WP / HTML / CSS</p>
        </a>
        <a
          href="https://corentinclichy.github.io/GuessTheNumber/"
          target="_blank"
          id="grayscale"
          rel="noopener noreferrer"
        >
          <img className="img-hover-zoom--blur" src={GuessTheNumber} alt="" />
          <h4>Guess The Number Game</h4>
          <p>HTML / CSS / VanillaJS</p>
        </a>
        <a href="http://www.surmesure-lyon.fr/" target="_blank" id="grayscale">
          <img className="img-hover-zoom--blur" src={Surmesure} alt="" />
          <h4>Surmesure - Freelance Work</h4>
          <p>WP / HTML / CSS</p>
        </a>
      </div>
      <MouseScroll />
    </div>
  );
}

export default Projects;
