import React from 'react';
import Fade from 'react-reveal/Fade';

import { ReactComponent as Image } from './workshopSVG.svg';

import './Workshops.styles.scss';

const Workshops = () => {
  return (
    <section id='workshops' className='section section-workshops'>
      <Fade bottom>
        <h1 className='section-heading'>Workshops</h1>
        <div className='section-content'>
          <div className='info'>
            <p>
              Workshops are high intensity sessions with more focus on building
              projects. These are life changing as attendees build so much of
              amazing stuff under the guidance of mentors.
            </p>
            <button>Check More Such Events</button>
          </div>
          <Image className='image-container' />
        </div>
      </Fade>
    </section>
  );
};

export default Workshops;
