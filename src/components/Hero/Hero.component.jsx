import React from 'react';
import Fade from 'react-reveal/Fade';

import './Hero.styles.scss';

const Hero = () => {
  return (
    <section id='home' className='section section-hero'>
      <Fade bottom>
        <h1 className='section-heading'>Hero</h1>
      </Fade>
    </section>
  );
};

export default Hero;
