import React from "react";
import Fade from "react-reveal/Fade";
import ParticlesBg from "particles-bg";
import { Link as ScrollLink } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/acm-logo/ACM-logo.png";

import "./Hero.styles.scss";

const Hero = ({ darkMode }) => {
  const colorsLight = ["#f5f5f5", "#539dfe47"];
  // const colorsDark = ['#323232', '#539dfe47'];

  return (
    <section
      id="home"
      className={`section section-hero ${darkMode ? "dark" : ""}`}
    >
      <Fade>
        <div className="logo-container">
          <img src={logo} alt="ACM logo" />
        </div>
      </Fade>

      <Fade bottom delay={150}>
        <h1 className="section-heading hero-heading">
          Association for Computing Machinery
        </h1>
        <h2 className="sub-hero-heading">Student Chapter BVP</h2>
      </Fade>

      <Fade bottom delay={350}>
        <ScrollLink
          activeClass="active"
          to="workshops"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FontAwesomeIcon icon={faAngleDoubleDown} className="hero-icon" />
        </ScrollLink>
      </Fade>

      {!darkMode && (
        <ParticlesBg type="circle" color={colorsLight} num={200} bg={true} />
      )}
    </section>
  );
};

export default Hero;
