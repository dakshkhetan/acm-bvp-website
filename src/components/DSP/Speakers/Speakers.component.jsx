import React from 'react';
import Fade from 'react-reveal/Fade';

// import { ReactComponent as Image } from '../../../assets/*.svg';

import './Speakers.styles.scss';

const Speakers = () => {
  return (
    <section id='dsp-speakers' className='section-dsp-speakers'>
      <Fade bottom>
        <h1 className='section-heading'>Speakers</h1>
      </Fade>
      <div className='section-content'>
        <div className='info'>
          Speakers Content
        </div>
        <Fade right delay={100}>
          {/* <Image className='image-container' /> */}
        </Fade>
      </div>
    </section>
  );
};

export default Speakers;
