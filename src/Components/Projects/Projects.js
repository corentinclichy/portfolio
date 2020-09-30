import React from "react";
import "./Projects.css";
import Netflix from "../../Assets/img/netflixClone (1).png";
import Libellule from "../../Assets/img/LibelluleCafe_restaurant_Res.png";
import GuessTheNumber from "../../Assets/img/GuessTheNumber.png";
import Surmesure from "../../Assets/img/Surmesure.png";
import Tinder from "../../Assets/img/[CITYPNG.COM]New Modern Tinder Logo - 1200x800.png";
import Amazon from "../../Assets/img/580b57fcd9996e24bc43c518.png";

function Projects() {
  return (
    <div className="projects section">
      <h1>PROJECTS</h1>
      <div className="projects__grid">
        <a
          href="https://netflix-clone-cbac3.web.app/"
          target="_blank"
          id="grayscale"
        >
          <img className="img-hover-zoom--blur" src={Netflix} alt="" />
          <h4>Netflix Clone</h4>
          <p>React.js / HTML / CSS</p>
        </a>
        <a href="https://libellulecafe.fr/" target="_blank" id="grayscale">
          <img className="img-hover-zoom--blur" src={Libellule} alt="" />
          <h4>Libellule Café - Freelance Work</h4>
          <p>Wordpress / HTML / CSS</p>
        </a>
        <a
          href="https://corentinclichy.github.io/GuessTheNumber/"
          target="_blank"
          id="grayscale"
        >
          <img className="img-hover-zoom--blur" src={GuessTheNumber} alt="" />
          <h4>Guess The Number Game</h4>
          <p>HTML / CSS / VanillaJS</p>
        </a>
        <a href="http://www.surmesure-lyon.fr/" target="_blank" id="grayscale">
          <img className="img-hover-zoom--blur" src={Surmesure} alt="" />
          <h4>Surmesure Communication - Freelance Work</h4>
          <p>Wordpress / HTML / CSS</p>
        </a>
      </div>
    </div>
  );
}

export default Projects;
