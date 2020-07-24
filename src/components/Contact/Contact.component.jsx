import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import Footer from '../Footer/Footer.component';

import { ReactComponent as Image } from '../../assets/illustrations/contact_img.svg';
import './Contact.styles.scss';

const Contact = ({ location }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const addFooterCheck = () => {
    return location.pathname === '/contact' && <Footer />;
  };

  return (
    <React.Fragment>
      <section id='contact' className='section section-contact'>
        <Fade bottom>
          <h1 className='section-heading'>Reach Us</h1>
        </Fade>
        <div className='section-content'>
          <div className='info'>
            <Fade bottom delay={200}>
              <h2 className='heading'>ADDRESS</h2>
            </Fade>
            <Fade bottom delay={300}>
              <p className='text'>A-4, Paschim Vihar, New Delhi - 110063</p>
            </Fade>
            <Fade bottom delay={400}>
              <p className='text text-2'>
                (In front of Paschim Vihar East Metro Station)
              </p>
            </Fade>
            <Fade bottom delay={500}>
              <div className='mail-btn'>
                <a href='mailto:acmbvcoe@gmail.com'>Write To Us</a>
              </div>
            </Fade>
          </div>
          <Fade delay={100}>
            <div className='image-container'>
              <div className='illustration'>
                <Image />
              </div>
            </div>
          </Fade>
        </div>
      </section>
      {addFooterCheck()}
    </React.Fragment>
  );
};

export default withRouter(Contact);
