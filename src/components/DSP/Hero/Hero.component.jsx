import React from "react";
import Fade from "react-reveal/Fade";

import { ReactComponent as Image } from "../../../assets/acm-logo/ACM-DSP.svg";

import "./Hero.styles.scss";

const Hero = ({ darkMode }) => {
  return (
    <section
      id="dsp-hero"
      className={`section-dsp-hero ${darkMode ? "dark" : ""}`}
    >
      <Fade bottom>
        <h1 className="section-heading">ACM Distinguished Speakers Program</h1>
      </Fade>
      <div className="section-content">
        <div className="info">
          <Fade bottom delay={150}>
            <h2>ACM DSP</h2>
          </Fade>
          <Fade bottom delay={250}>
            <p>
              This program brings renowned international thought leaders to a
              variety of host venues around the world where they speak on the
              most important topics in computing today. This program current
              include more than 125 speakers and 400 available lectures on
              topics including software engineering, high performance computing,
              human computer interaction, artificial intelligence, gaming,
              mobile computing, and dozens more.
            </p>
          </Fade>
        </div>
        <Fade right delay={100}>
          <Image className="image-container" />
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
