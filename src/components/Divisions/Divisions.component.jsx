import React from 'react';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';

import image1 from '../../assets/acm-logo/ACM-W-logo.png';
import image2 from '../../assets/acm-logo/ACM-Parivartan-logo.png';
import { ReactComponent as Divider } from './../../assets/illustrations/divider.svg';

import './Divisions.styles.scss';

const Divisions = ({ history, darkMode }) => {
  return (
    <section
      id='divisions'
      className={`section section-divisions ${darkMode ? 'dark' : ''}`}
    >
      <Fade bottom>
        <h1 className='section-heading'>Divisions</h1>
      </Fade>

      <div className='section-content'>
        <div className='info-acmw'>
          <Fade bottom delay={150}>
            <div className='image-container'>
              <img
                src={image1}
                className='image-acmw'
                alt='acm-w'
                onClick={() => history.push('/acm-w')}
              />
            </div>
          </Fade>
          <Fade bottom delay={250}>
            <div className='text-container'>
              <p>
                ACM-W BVP is a part of ACM-BVP which supports, celebrates, and
                advocates for the full engagement of women in all aspects of the
                computing field.
              </p>
            </div>
          </Fade>
        </div>

        <Divider className='divider' />

        <div className='info-acmp'>
          <Fade bottom delay={150}>
            <div className='image-container'>
              <img src={image2} className='image-acmp' alt='acm-parivartan' />
            </div>
          </Fade>
          <Fade bottom delay={250}>
            <div className='text-container'>
              <p>
                ACM PARIVARTAN is a part of ACM-BVP which aims at introducing
                the world of technology tot the people from humble background.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Divisions);
