import React from 'react';
import Fade from 'react-reveal/Fade';

import './Gallery.styles.scss';

const Gallery = () => {
  return (
    <section id='home' className='section section-gallery'>
      <Fade bottom>
        <h1 className='section-heading'>Gallery</h1>
      </Fade>
    </section>
  );
};

export default Gallery;
