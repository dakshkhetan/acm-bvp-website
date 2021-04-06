import React from "react";
import Fade from "react-reveal/Fade";

import Carousel from "../../components/Carousel/Carousel.component";

import { ReactComponent as Divider } from "../../assets/illustrations/section-divider.svg";

const Event = ({ workshop }) => {
  const { title, details, images } = workshop;

  return (
    <>
      <div className="workshop-container">
        <Fade bottom delay={100}>
          <Carousel images={images} />
        </Fade>

        <div className="info">
          <Fade bottom delay={300}>
            <h2>{title}</h2>
          </Fade>
          <Fade bottom delay={200}>
            <p>{details}</p>
          </Fade>
        </div>
      </div>

      <div className="divider-container">
        <Divider className="divider" />
      </div>
    </>
  );
};

export default Event;
