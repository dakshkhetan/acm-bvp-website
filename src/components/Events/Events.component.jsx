import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { workshops } from '../../data/workshops.data';

import Event from './Event.component';

import { ReactComponent as Illustration } from '../../assets/illustrations/event.svg';

import './Events.styles.scss';

const Events = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <React.Fragment>
      <section id='events' className='section section-events'>
        <Fade bottom>
          <h1 className='section-heading'>Events</h1>
        </Fade>

        <div className='section-content'>
          {workshops.map((workshop) => (
            <Event key={workshop.key} workshop={workshop} />
          ))}
        </div>

        <div className='illustration-container'>
          <div className='illustration'>
            <Illustration />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Events;
