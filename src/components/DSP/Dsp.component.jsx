import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Hero from './Hero/Hero.component';
import Speakers from './Speakers/Speakers.component';
import Sessions from './Sessions/Sessions.component';

import './Dsp.styles.scss';

const DSP = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <section id='dsp' className='section section-dsp'>
      <Hero />
      <Speakers />
      <Sessions />
    </section>
  );
};

export default DSP;
