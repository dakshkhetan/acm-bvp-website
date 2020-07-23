import React from 'react';
import Fade from 'react-reveal/Fade';

import image1 from '../../assets/ACM-W-logo.png';
import image2 from '../../assets/ACM-Parivartan-logo.png';
import { ReactComponent as Divider } from './../../assets/divider.svg';

import './Divisions.styles.scss';

const Divisions = () => {
  return (
    <section id='divisions' className='section section-divisions'>
      <Fade bottom>
        <h1 className='section-heading'>Divisions</h1>
        <div className='section-content'>
          <div className='info-acmw'>
            <div className='image-container'>
              <img src={image1} className='image-acmw' alt='acm-w' />
            </div>
            <div className='text-container'>
              <p>
                ACM-W BVP is a part of ACM-BVP which supports, celebrates, and
                advocates for the full engagement of women in all aspects of the
                computing field.
              </p>
            </div>
          </div>
          <Divider className='divider' />
          <div className='info-acmp'>
            <div className='image-container'>
              <img src={image2} className='image-acmp' alt='acm-parivartan' />
            </div>
            <div className='text-container'>
              <p>
                ACM PARIVARTAN is a part of ACM-BVP which aims at introducing
                the world of technology tot the people from humble background.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Divisions;
