import React from "react";
import Fade from "react-reveal/Fade";

import { ReactComponent as Image } from "../../../assets/illustrations/vision.svg";

import "./Vision.styles.scss";

const Vision = () => {
  return (
    <>
      <section id="vision" className="section section-acmw-vision">
        <div className="section-content">
          <div className="info">
            <Fade bottom delay={200}>
              <h2 className="heading">Our vision</h2>
            </Fade>

            <Fade bottom delay={300}>
              <p className="text">
                Exposing women undergraduate students in computer science and
                related programs to the computer science research world and
                encouraging them to continue on this to the next level. We
                encourage innovations and provide the necessary support for
                women to excel in every way possible.
              </p>
            </Fade>
          </div>

          <Fade left delay={400}>
            <div className="illustration-container">
              <div className="illustration">
                <Image />
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Vision;
