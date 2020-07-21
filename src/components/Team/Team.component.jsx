import React from 'react';
import Fade from 'react-reveal/Fade';

import './Team.styles.scss';

const Team = () => {
  return (
    <section id='home' className='section section-team'>
      <Fade bottom>
        <h1 className='section-heading'>Meet The Team</h1>
      </Fade>
    </section>
  );
};

export default Team;
