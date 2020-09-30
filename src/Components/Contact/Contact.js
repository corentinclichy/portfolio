import React from "react";

// CSS
import "./Contact.css";

// Material Icon
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Contact() {
  return (
    <div className="contact section">
      <h1 className="title">CONTACT</h1>
      <div className="contact__infos">
        <p>
          I'm always <strong>open to collaborate on impactful project</strong>{" "}
          with any kind of individuals in order to{" "}
          <strong>
            solve real business-problems, continue to learn new skills and
            develop my interpersonnal skills.
          </strong>
        </p>
        <p className="no_mobile">
          If that all sounds good to you, then we should{" "}
          <strong>have a chat about how we can work together</strong>
        </p>
        <a href="https://wa.me/33616343000" className="chat shake">
          <WhatsAppIcon className="arrow" />
          <p className="talk ">Let's have a chat</p>
        </a>
      </div>
      <div className="contact__social">
        <p>and connect on socials...</p>
        <div className="socials__icons">
          <a href="https://www.instagram.com/corentin.dev/" target="_blank">
            <InstagramIcon className="instagram icon" />
          </a>
          <a href="https://www.linkedin.com/in/corentinclichy/" target="_blank">
            <LinkedInIcon className="Linkedin icon" />
          </a>
          <a href="mailto:cor.clichy@gmail.com" target="_blank">
            <MailOutlineIcon className="Mail icon" />
          </a>
          <a href="https://github.com/corentinclichy" target="_blank">
            <GitHubIcon className="Github icon" />
          </a>
        </div>
      </div>
      <div className="footer">
        <p>Made with 💘 by Corentin Clichy - 2020</p>
      </div>
    </div>
  );
}

export default Contact;
