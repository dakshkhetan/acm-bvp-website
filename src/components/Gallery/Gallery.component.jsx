import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import Carousel from '../Carousel/Carousel.component';
import Footer from '../Footer/Footer.component';

import { ReactComponent as Illustration } from '../../assets/illustrations/gallery.svg';
import { ReactComponent as Divider } from '../../assets/section-divider.svg';

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
          <div className='workshop-container'>
            <Carousel />

            <div className='info'>
              <h2> AUGMENTED REALITY</h2>
              <p>
                ACM-W BVP presented a hands-on session on Augmented Reality for
                students of various colleges across all branches. The students
                were taught AR right from beginning to building a complete AR
                project. The session received an overwhelming response from
                students of various colleges.
              </p>
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
