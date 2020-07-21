import React from 'react';

import './Footer.styles.scss';

const Footer = () => {
  return (
    <section id='footer' className='footer'>
      <h1 className='heading'>COPYRIGHT © 2020</h1>
      <p className='sub-heading'>
        Powered by <a href='http://bvcoe.acm.org/'>ACM BVP</a>. All rights
        reserved.
      </p>
    </section>
  );
};

export default Footer;
