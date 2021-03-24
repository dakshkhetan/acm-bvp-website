import React, { useEffect } from "react";
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
    <React.Fragment>
      <section
        id="dsp"
        className={`section section-dsp ${darkMode ? "dark" : ""}`}
      >
        <Hero darkMode={darkMode} />
        <Speakers darkMode={darkMode} />
        <Sessions darkMode={darkMode} />
      </section>
    </React.Fragment>
  );
};

export default DSP;
