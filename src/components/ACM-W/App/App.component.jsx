import React, { useEffect } from 'react';

import Hero from '../Hero/Hero.component';
import About from '../About/About.component';
import Vision from '../Vision/Vision.component';
import Accomplishments from '../Accomplishments/Accomplishments.component';
import RoadAhead from '../RoadAhead/RoadAhead.component';

import './App.styles.scss';

const ACM_W = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`acm-w ${darkMode ? 'dark' : ''}`}>
      <Hero darkMode={darkMode} />
      <About />
      <Vision />
      <Accomplishments />
      <RoadAhead />
    </div>
  );
};

export default ACM_W;
