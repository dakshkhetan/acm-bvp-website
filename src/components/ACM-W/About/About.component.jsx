import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { ReactComponent as Image } from '../../../assets/illustrations/introduction.svg';

import './About.styles.scss';

const About = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <React.Fragment>
      <section id='about' className='section section-acmw-about'>
        <div className='section-content'>
          <div className='info'>
            <Fade bottom delay={200}>
              <h2 className='heading'>About ACM-W</h2>
            </Fade>

            <Fade bottom delay={300}>
              <p className='text'>
                Founded in (year), ACM-W BVP has had a total of (number) members
                until date and has always advocated for the technical upliftment
                of women. Affiliated with the global organisation of ACM–W, we
                aim to empower and celebrate women providing a holistic
                environment to grow along with global exposure to nurture their
                skills.
              </p>
            </Fade>
          </div>

          <Fade delay={300}>
            <div className='illustration-container'>
              <div className='illustration'>
                <Image />
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
