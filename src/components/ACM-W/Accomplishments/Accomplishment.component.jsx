import React from "react";
import Fade from "react-reveal/Fade";

import { ReactComponent as Divider } from "../../../assets/illustrations/section-divider.svg";

const Accomplishment = ({ accomplishment }) => {
  const { title, date, details, className } = accomplishment;

  return (
    <>
      <div className={`accomplishment ${className}`}>
        <Fade bottom delay={150}>
          <span className="title">{title}</span>
        </Fade>
        <Fade bottom delay={250}>
          <span className="date">{date}</span>
        </Fade>
        <Fade bottom delay={350}>
          <p>{details}</p>
        </Fade>
      </div>

      <Fade delay={400}>
        <div className="divider-container">
          <Divider className="divider" />
        </div>
      </Fade>
    </>
  );
};

export default Accomplishment;
