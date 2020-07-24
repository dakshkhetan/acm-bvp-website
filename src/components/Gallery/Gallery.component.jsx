import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { workshops } from '../../workshops.data';
import Carousel from '../Carousel/Carousel.component';
import Footer from '../Footer/Footer.component';

import { ReactComponent as Divider } from '../../assets/section-divider.svg';
import { ReactComponent as Illustration } from '../../assets/illustrations/event1.svg';

import './Gallery.styles.scss';

const Gallery = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <React.Fragment>
      <section id='gallery' className='section section-gallery'>
        <Fade bottom>
          <h1 className='section-heading'>Gallery</h1>
        </Fade>

        <div className='section-content'>
          <div className='workshop-container workshop-1'>
            <Carousel />

            <div className='info'>
              <h2>{workshops[0].title}</h2>
              <p>{workshops[0].details}</p>
            </div>
          </div>

          <div className='divider-container'>
            <Divider className='divider' />
          </div>

          <div className='workshop-container workshop-2'>
            <Carousel />

            <div className='info'>
              <h2>{workshops[1].title}</h2>
              <p>{workshops[1].details}</p>
            </div>
          </div>

          <div className='divider-container'>
            <Divider className='divider' />
          </div>

          <div className='workshop-container workshop-3'>
            <Carousel />

            <div className='info'>
              <h2>{workshops[2].title}</h2>
              <p>{workshops[2].details}</p>
            </div>
          </div>

          <div className='divider-container'>
            <Divider className='divider' />
          </div>

          <div className='workshop-container workshop-4'>
            <Carousel />

            <div className='info'>
              <h2>{workshops[3].title}</h2>
              <p>{workshops[3].details}</p>
            </div>
          </div>

          <div className='divider-container'>
            <Divider className='divider' />
          </div>

          <div className='workshop-container workshop-5'>
            <Carousel />

            <div className='info'>
              <h2>{workshops[4].title}</h2>
              <p>{workshops[4].details}</p>
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

export default Gallery;
