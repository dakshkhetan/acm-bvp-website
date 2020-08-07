import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { workshops } from '../../data/workshops.data';
import Carousel from '../Carousel/Carousel.component';
import Footer from '../Footer/Footer.component';

import { ReactComponent as Divider } from '../../assets/illustrations/section-divider.svg';
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
          <div className='workshop-container workshop-1'>
            <Fade bottom delay={100}>
              <Carousel title='ml' />
            </Fade>

            <div className='info'>
              <Fade bottom delay={300}>
                <h2>{workshops[0].title}</h2>
              </Fade>
              <Fade bottom delay={200}>
                <p>{workshops[0].details}</p>
              </Fade>
            </div>
          </div>

          <div className='divider-container'>
            <Divider className='divider' />
          </div>

          <div className='workshop-container workshop-1'>
            <Fade delay={100}>
              <Carousel title='ar' />
            </Fade>

            <div className='info'>
              <Fade bottom delay={300}>
                <h2>{workshops[1].title}</h2>
              </Fade>
              <Fade bottom delay={200}>
                <p>{workshops[1].details}</p>
              </Fade>
            </div>
          </div>

          <div className='divider-container'>
            <Divider className='divider' />
          </div>

          <div className='workshop-container workshop-1'>
            <Fade bottom delay={100}>
              <Carousel title='android' />
            </Fade>

            <div className='info'>
              <Fade bottom delay={300}>
                <h2>{workshops[2].title}</h2>
              </Fade>
              <Fade bottom delay={200}>
                <p>{workshops[2].details}</p>
              </Fade>
            </div>
          </div>

          <div className='divider-container'>
            <Divider className='divider' />
          </div>

          <div className='workshop-container workshop-1'>
            <Fade bottom delay={100}>
              <Carousel title='hs' />
            </Fade>

            <div className='info'>
              <Fade bottom delay={300}>
                <h2>{workshops[3].title}</h2>
              </Fade>
              <Fade bottom delay={200}>
                <p>{workshops[3].details}</p>
              </Fade>
            </div>
          </div>

          <div className='divider-container'>
            <Divider className='divider' />
          </div>

          <div className='workshop-container workshop-1'>
            <Fade bottom delay={100}>
              <Carousel title='webDev' />
            </Fade>

            <div className='info'>
              <Fade bottom delay={300}>
                <h2>{workshops[4].title}</h2>
              </Fade>
              <Fade bottom delay={200}>
                <p>{workshops[4].details}</p>
              </Fade>
            </div>
          </div>

          <div className='divider-container'>
            <Divider className='divider' />
          </div>

          <div className='workshop-container workshop-1'>
            <Fade bottom delay={100}>
              <Carousel title='hoc' />
            </Fade>

            <div className='info'>
              <Fade bottom delay={300}>
                <h2>{workshops[5].title}</h2>
              </Fade>
              <Fade bottom delay={200}>
                <p>{workshops[5].details}</p>
              </Fade>
            </div>
          </div>

          <div className='divider-container'>
            <Divider className='divider' />
          </div>
        </div>

        <div className='illustration-container'>
          <div className='illustration'>
            <Illustration />
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Events;
