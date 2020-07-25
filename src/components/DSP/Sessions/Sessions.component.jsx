import React from 'react';
import Fade from 'react-reveal/Fade';

import './Sessions.styles.scss';

const Sessions = () => {
  return (
    <section id='dsp-sessions' className='section-dsp-sessions'>
      <Fade bottom>
        <h1 className='section-heading'>Sessions</h1>
      </Fade>
      <div className='section-content'>
        <div className='info'>
          <div className='info'>Sessions Content</div>
        </div>
      </div>
    </section>
  );
};

export default Sessions;
