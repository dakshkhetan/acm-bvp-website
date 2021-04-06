import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Hero from "../../components/ACM-W/Hero/Hero.component";
import About from "../../components/ACM-W/About/About.component";
import Vision from "../../components/ACM-W/Vision/Vision.component";
import Accomplishments from "../../components/ACM-W/Accomplishments/Accomplishments.component";
import RoadAhead from "../../components/ACM-W/RoadAhead/RoadAhead.component";

import "./ACM-W.styles.scss";

const ACM_W = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>ACM-W BVP</title>
      </Helmet>

      <div className={`acm-w ${darkMode ? "dark" : ""}`}>
        <Hero darkMode={darkMode} />
        <About />
        <Vision />
        <Accomplishments />
        <RoadAhead />
      </div>
    </>
  );
};

export default ACM_W;
