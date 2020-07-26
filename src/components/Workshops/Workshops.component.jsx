import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import { ReactComponent as Image } from '../../assets/worskshop-section/workshop.svg';

import './Workshops.styles.scss';

const Workshops = () => {
  return (
    <section id='workshops' className='section section-workshops'>
      <Fade bottom>
        <h1 className='section-heading'>Workshops</h1>
      </Fade>
      <div className='section-content'>
        <div className='info'>
          <Fade bottom delay={150}>
            <p>
              Workshops are high intensity sessions with more focus on building
              projects. These are life changing as attendees build so much of
              amazing stuff under the guidance of mentors.
            </p>
          </Fade>
          <Fade bottom delay={250}>
            <div className='link-btn'>
              <Link to='/gallery'>Check More Such Events</Link>
            </div>
          </Fade>
        </div>
        <Fade right delay={100}>
          <Image className='image-container' />
        </Fade>
      </div>
    </section>
  );
};

export default Workshops;
