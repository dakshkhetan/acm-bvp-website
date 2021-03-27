import React from "react";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";

import image1 from "../../assets/acm-logo/ACM-W-logo.png";
import image2_light from "../../assets/acm-logo/ACM-Parivartan-light.jpeg";
import image2_dark from "../../assets/acm-logo/ACM-Parivartan-dark.jpeg";
import image1Placeholder from "../../assets/acm-logo/compressed/ACM-W-logo.png";
import image2_lightPlaceholder from "../../assets/acm-logo/compressed/ACM-Parivartan-light.png";
import image2_darkPlaceholder from "../../assets/acm-logo/compressed/ACM-Parivartan-dark.png";
import { ReactComponent as Divider } from "./../../assets/illustrations/divider.svg";

import "./Divisions.styles.scss";

const Divisions = ({ history, darkMode }) => {
  return (
    <section
      id="divisions"
      className={`section section-divisions ${darkMode ? "dark" : ""}`}
    >
      <Fade bottom>
        <h1 className="section-heading">Divisions</h1>
      </Fade>

      <div className="section-content">
        <div className="info-acmw">
          <Fade bottom delay={150}>
            <div className="image-container">
              <ProgressiveImage src={image1} placeholder={image1Placeholder}>
                {(src) => (
                  <img
                    src={src}
                    className="image-acmw"
                    alt="acm-w"
                    onClick={() => history.push("/acm-w")}
                  />
                )}
              </ProgressiveImage>
            </div>
          </Fade>
          <Fade bottom delay={250}>
            <div className="text-container">
              <p>
                ACM-W BVP is a part of ACM-BVP which supports, celebrates, and
                advocates for the full engagement of women in all aspects of the
                computing field.
              </p>
            </div>
          </Fade>
        </div>

        <Divider className="divider" />

        <div className="info-acmp">
          <Fade bottom delay={150}>
            <div className="image-container">
              <ProgressiveImage
                src={darkMode ? image2_dark : image2_light}
                placeholder={
                  darkMode ? image2_darkPlaceholder : image2_lightPlaceholder
                }
              >
                {(src) => (
                  <img src={src} className="image-acmp" alt="acm-parivartan" />
                )}
              </ProgressiveImage>
            </div>
          </Fade>
          <Fade bottom delay={250}>
            <div className="text-container">
              <p>
                ACM PARIVARTAN is a part of ACM-BVP which aims at introducing
                the world of technology tot the people from humble background.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Divisions);
