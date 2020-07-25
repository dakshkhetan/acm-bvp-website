import React from 'react';

import Hero from './Hero/Hero.component';
import Speakers from './Speakers/Speakers.component';
import Sessions from './Sessions/Sessions.component';

import './Dsp.styles.scss';

const DSP = () => {
  return (
    <section id='dsp' className='section section-dsp'>
      <Hero />
      <Speakers />
      <Sessions />
    </section>
  );
};

export default DSP;
