import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { animateScroll as scroll } from "react-scroll";

import Hero from "./Hero/Hero.component";
import Speakers from "./Speakers/Speakers.component";
import Sessions from "./Sessions/Sessions.component";

import "./Dsp.styles.scss";

const DSP = ({ darkMode }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Helmet>
        <title>DSP | ACM BVP</title>
      </Helmet>

      <section
        id="dsp"
        className={`section section-dsp ${darkMode ? "dark" : ""}`}
      >
        <Hero darkMode={darkMode} />
        <Speakers darkMode={darkMode} />
        <Sessions darkMode={darkMode} />
      </section>
    </>
  );
};

export default DSP;
