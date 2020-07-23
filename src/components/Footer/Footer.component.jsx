import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import './Footer.styles.scss';

const Footer = () => {
  return (
    <section id='footer' className='footer'>
      <div className='social-icons'>
        <a
          href='https://www.instagram.com/acm.bvp'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className='icon instagram'
          />
        </a>
        <a
          href='https://twitter.com/acmbvp'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className='icon twitter'
          />
        </a>
        <a
          href='https://in.linkedin.com/organization-guest/company/acmbvp'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className='icon linkedin'
          />
        </a>
        <a
          href='https://github.com/acmbvp'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faGithub}
            className='icon github'
          />
        </a>
        <a
          href='https://www.facebook.com/acmbvp'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className='icon facebook'
          />
        </a>
      </div>

      <h1 className='heading'>COPYRIGHT © 2020</h1>
      <p className='sub-heading'>
        Powered by <a href='http://bvcoe.acm.org/'>ACM BVP</a>. All rights
        reserved.
      </p>
      <p className='sub-heading'>
        <Link to='/code-of-conduct'>Code of Conduct</Link>
      </p>
    </section>
  );
};

export default Footer;
