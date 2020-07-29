import React, { useEffect } from 'react';

import Hero from '../Hero/Hero.component';
import About from '../About/About.component';
import Vision from '../Vision/Vision.component';
import Accomplishments from '../Accomplishments/Accomplishments.component';
import RoadAhead from '../RoadAhead/RoadAhead.component';
import Footer from '../../Footer/Footer.component';

import './App.styles.scss';

const ACM_W = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='acm-w'>
      <Hero />
      <About />
      <Vision />
      <Accomplishments />
      <RoadAhead />
      <Footer />
    </div>
  );
};

export default ACM_W;
