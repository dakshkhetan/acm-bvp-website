import React from "react";
import Fade from "react-reveal/Fade";
import ParticlesBg from "particles-bg";
import ProgressiveImage from "react-progressive-image";
import { Link as ScrollLink } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import logo from "../../../assets/acm-logo/ACM-W-logo.png";
import logoPlaceholder from "../../../assets/acm-logo/compressed/ACM-W-logo.png";

import "./Hero.styles.scss";

const Hero = ({ darkMode }) => {
  const colors = ["#f5f5f5", "#539dfe47"];

  return (
    <section
      id="home"
      className={`section section-acmw-hero ${darkMode ? "dark" : ""}`}
    >
      <Fade delay={200}>
        <div className="logo-container">
          <ProgressiveImage src={logo} placeholder={logoPlaceholder}>
            {(src) => <img src={src} alt="ACM-W logo" />}
          </ProgressiveImage>
        </div>
      </Fade>

      <Fade bottom delay={150}>
        <h1 className="section-heading hero-heading">
          Supporting, celebrating and advocating for Women in Computing
        </h1>
      </Fade>

      <Fade bottom delay={350}>
        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FontAwesomeIcon icon={faAngleDoubleDown} className="hero-icon" />
        </ScrollLink>
      </Fade>

      {!darkMode && (
        <ParticlesBg type="circle" color={colors} num={200} bg={true} />
      )}
    </section>
  );
};

export default Hero;
