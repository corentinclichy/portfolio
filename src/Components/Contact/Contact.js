import React from "react";
import "./Contact.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Contact() {
  return (
    <div className="contact section">
      <h1>CONTACT</h1>
      <div className="contact__infos">
        <p>
          I'm always <strong>open to collaborate on cool project</strong> with
          any kind of individuals in order to{" "}
          <strong>
            solve real business-problems, continue to learn new skills and
            maintain my interpersonnal skills.
          </strong>
        </p>
        <p>
          If that all sounds good to you, then we should{" "}
          <strong>have a chat about how we can work together</strong>
        </p>
        <a href="https://wa.me/33616343000" className="chat">
          <ArrowForwardIcon className="arrow" />
          <p className="talk">Let's have a chat</p>
        </a>
      </div>
      <div className="contact__social">
        <a href="https://www.instagram.com/corentin.dev/" target="_blank">
          <InstagramIcon className="instagram icon" />
        </a>
        <a href="https://www.linkedin.com/in/corentinclichy/" target="_blank">
          <LinkedInIcon className="Linkedin icon" />
        </a>
        <a href="mailto:cor.clichy@gmail.com" target="_blank">
          <MailOutlineIcon className="Mail icon" />
        </a>
      </div>
      <div className="footer">
        <p>Made with 💘 by Corentin Clichy - 2020</p>
      </div>
    </div>
  );
}

export default Contact;
