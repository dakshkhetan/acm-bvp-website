import React from "react";
import Fade from "react-reveal/Fade";

import { ReactComponent as Image } from "../../../assets/illustrations/road-ahead.svg";

import "./RoadAhead.styles.scss";

const RoadAhead = () => {
  return (
    <>
      <section id="road-ahead" className="section section-acmw-roadAhead">
        <Fade bottom delay={50}>
          <h1 className="section-heading">Road Ahead</h1>
        </Fade>
        <Fade bottom delay={100}>
          <div className="sub-heading">
            <h2>(2020 – 2021)</h2>
          </div>
        </Fade>

        <div className="section-content">
          <div className="info">
            <Fade delay={200}>
              <p className="text1">
                With the coming of the new academic session and introduction of
                a new team, we hope to be able to surpass the extraordinary
                legacy inherited by us.
              </p>
            </Fade>
            <Fade delay={300}>
              <p className="text2">
                The road ahead will be difficult and unknown but we aim to
                strive for excellence and promise to bring more women into
                technology in the future as well.
              </p>
            </Fade>
          </div>

          <Fade left delay={150}>
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

export default RoadAhead;
