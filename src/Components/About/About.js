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
        <h1>ABOUT</h1>
        <p>
          I am{" "}
          <strong>
            passionate of building project and learning new things
          </strong>
          .
          <br />
          <br />I <strong>develop tailored web application</strong> for all size
          company, <strong>as freelance</strong>.
          <br />
          <br /> I am also following online courses to continue learning and get
          strong skills on the <strong>MERN stack</strong>.
        </p>
        <div className="photo__stack">
          <img src={Stack_Reactjs} alt="" className="react" />
          <img src={Stack_htmlcsssjs} alt="" className="htmlcssjs" />
          <img src={Stack_nodejs} alt="" className="nodejs" />
          <img src={Stack_wordpress} alt="" className="wordpress" />
        </div>
        <MouseScroll className="mouseScrollAbout" />
      </div>
      <div className="about__image"></div>
    </div>
  );
}

export default About;
