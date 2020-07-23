import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link as ScrollLink } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/ACM-logo.png';

import './Hero.styles.scss';

const Hero = () => (
  <section id='home' className='section section-hero'>
    <Fade>
      <div className='logo-container'>
        <img src={logo} alt='ACM logo' />
      </div>
    </Fade>
    <Fade bottom delay={150}>
      <h1 className='section-heading hero-heading'>
        Association for Computing Machinery
      </h1>
    </Fade>
    <Fade bottom delay={350}>
      <ScrollLink
        activeClass='active'
        to='workshops'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <FontAwesomeIcon icon={faAngleDoubleDown} className='hero-icon' />
      </ScrollLink>
    </Fade>
  </section>
);

export default Hero;
