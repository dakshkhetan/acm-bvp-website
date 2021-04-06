import React from "react";
import Fade from "react-reveal/Fade";

import { accomplishments } from "../../../data/accomplishments.data";

import Accomplishment from "./Accomplishment.component";

import { ReactComponent as Image } from "../../../assets/illustrations/accomplishments.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/illustrations/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/illustrations/arrow-right.svg";

import "./Accomplishments.styles.scss";

const Accomplishments = () => {
  return (
    <>
      <section
        id="accomplishments"
        className="section section-acmw-accomplishments"
      >
        <Fade bottom>
          <h1 className="section-heading">Accomplishments</h1>
        </Fade>

        <div className="section-content">
          <div className="info">
            <Fade bottom delay={200}>
              <p className="text">
                ACM-W has always been a creative and collaborative force.
                Following are few of the biggest events, we at ACM-W, have
                successfully organised to celebrate innovation in thought and
                technology.
              </p>
            </Fade>

            <Fade right delay={200}>
              <div className="illustration-container">
                <div className="illustration">
                  <Image />
                </div>
              </div>
            </Fade>
          </div>

          <div className="accomplishments">
            {accomplishments.map((accomplishment) => (
              <Accomplishment
                key={accomplishment.key}
                accomplishment={accomplishment}
              />
            ))}

            <div className="honorary-mentions">
              <Fade right delay={250}>
                <div className="arrow-left">
                  <ArrowLeft />
                </div>
              </Fade>
              <div className="accomplishment">
                <Fade bottom delay={150}>
                  <span className="title">Honorary Mentions</span>
                  <span className="date">
                    (6th - 8th November 2019, Bangalore)
                  </span>
                </Fade>
                <Fade bottom delay={250}>
                  <p>
                    Student Representatives of ACM-W BVP were selected by ACM-W
                    India to attend the Grace Hopper‘s Celebrations (GHC) for
                    'Women in Computing' programme held in Bangalore in 2019.
                    ACM-W Chair Sweta and Vice Chair Simrann Arora were
                    sponsored and invited by ACM-W India to interact with women
                    all across the globe that had come to attend this
                    prestigious event.
                  </p>
                </Fade>
              </div>
              <Fade left delay={250}>
                <div className="arrow-right">
                  <ArrowRight />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accomplishments;
