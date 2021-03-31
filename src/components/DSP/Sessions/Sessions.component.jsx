import React from "react";
import Fade from "react-reveal/Fade";
import ProgressiveImage from "react-progressive-image";

import Image1 from "../../../assets/dsp-sessions/session1.png";
import Image2 from "../../../assets/dsp-sessions/session2.png";

import { ReactComponent as Illustration } from "../../../assets/illustrations/session.svg";

import "./Sessions.styles.scss";

const Sessions = ({ darkMode }) => {
  return (
    <section
      id="dsp-sessions"
      className={`section-dsp-sessions ${darkMode ? "dark" : ""}`}
    >
      <Fade bottom>
        <h1 className="section-heading">Sessions</h1>
      </Fade>

      <div className="section-content">
        <div className="session">
          <Fade delay={150}>
            <div className="image-container">
              <ProgressiveImage src={Image1} placeholder="">
                {(src, loading) => {
                  return loading ? (
                    <div className="loader-container">
                      <div className="loading-spinner" />
                    </div>
                  ) : (
                    <img src={src} alt="session" />
                  );
                }}
              </ProgressiveImage>
            </div>
          </Fade>
          <div className="info">
            <Fade bottom delay={250}>
              <h2 className="title1">Discussion on Cryptographic Backdoors</h2>
            </Fade>
          </div>
        </div>

        <div className="session">
          <Fade delay={150}>
            <div className="image-container">
              <ProgressiveImage src={Image2} placeholder="">
                {(src, loading) => {
                  return loading ? (
                    <div className="loader-container">
                      <div className="loading-spinner" />
                    </div>
                  ) : (
                    <img src={src} alt="session" />
                  );
                }}
              </ProgressiveImage>
            </div>
          </Fade>
          <div className="info">
            <Fade bottom delay={250}>
              <h2 className="title2">Discussion on S-Box Design</h2>
            </Fade>
          </div>
        </div>
      </div>

      <div className="illustration-container">
        <Illustration className="illustration" />
      </div>
    </section>
  );
};

export default Sessions;
