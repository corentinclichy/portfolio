import React from "react";
import MouseScroll from "../MouseScroll/MouseScroll";
import "./Hero.css";
import Avatar from "../../Assets/img/avatar_corentin_rounded.png";

function Hero() {
  return (
    <div className="hero section">
      <div className="hero__welcome">
        <div className="hero__welcome__photo">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="hero__welcome__infos">
          <h1 className="hero__title">
            Hello{" "}
            <span
              role="img"
              aria-label="call me hands"
              aria-labelledby="call me hands"
            >
              🤙
            </span>{" "}
          </h1>
          <h1 className="hero__title">
            I'm <strong>Corentin Clichy</strong>
          </h1>
          <h1 className="hero__title">Full-stack web developer</h1>
          <h4 className="shake">
            <span role="img" aria-label="rocket" aria-labelledby="rocket">
              🚀{" "}
            </span>
            Available for projects
          </h4>
        </div>
      </div>
      <MouseScroll />
    </div>
  );
}

export default Hero;
