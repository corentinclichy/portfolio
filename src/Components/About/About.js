import React from "react";
import "./About.css";
import About_photo from "../../Assets/img/about_photo.JPG";

import Stack_nodejs from "../../Assets/img/1280px-Node.js_logo.svg.png";
import Stack_htmlcsssjs from "../../Assets/img/Daco_4562887.png";
import Stack_Reactjs from "../../Assets/img/unnamed.png";
import Stack_wordpress from "../../Assets/img/1200px-WordPress_logo.svg.png";
import MouseScroll from "../MouseScroll/MouseScroll";

function About() {
  return (
    <div className="about section">
      <div className="about__infos">
        <h1 className="title">ABOUT</h1>
        <p>
          I am{" "}
          <strong>
            passionate of building project and learning new things
          </strong>
          .
          <br />
          <br />I am the co-founder of <strong>Surmesure Communication</strong>.
          <br />
          We help <strong>
            all size company to plan, build and monitor
          </strong>{" "}
          their communication strategy, by{" "}
          <strong>building modern website</strong> to build strong brand
          awareness and growth.
          <br />
          <br />I also invest time on <strong>freelance project</strong>.
          <br />
          <br /> I am also following <strong>online courses</strong> to improve
          my developer skills, focused mainly on the <strong>MERN Stack</strong>
          .
        </p>
        <div className="photo__stack">
          <img src={Stack_Reactjs} alt="" className="react" />
          <img src={Stack_htmlcsssjs} alt="" className="htmlcssjs" />
          <img src={Stack_nodejs} alt="" className="nodejs" />
          <img src={Stack_wordpress} alt="" className="wordpress" />
        </div>
        <div className="mouseScrool">
          <MouseScroll className="mouseScrollAbout" />
        </div>
      </div>
      <div className="about__image"></div>
    </div>
  );
}

export default About;
