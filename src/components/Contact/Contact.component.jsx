import React from 'react';

import { ReactComponent as Image } from '../../assets/illustrations/contact_img.svg';

import './Contact.styles.scss';

const Contact = () => {
  return (
    <section id='contact' className='section section-contact'>
      <h1 className='section-heading'>Reach Us</h1>
      <div className='section-content'>
        <div className='info'>
          <h2 className='heading'>ADDRESS</h2>
          <p className='text'>A-4, Paschim Vihar, New Delhi - 110063</p>
          <p className='text text-2'>
            (In front of Paschim Vihar East Metro Station)
          </p>
          <div className='mail-btn'>
            <a href='mailto:acmbvcoe@gmail.com'>Write To Us</a>
          </div>
        </div>
        <div className='image-container'>
          <div className='illustration'>
            <Image />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
