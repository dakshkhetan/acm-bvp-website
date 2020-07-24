import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Carousel.styles.scss';

const Carousel = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '0',
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <div className='carousel slider-container'>
      <Slider {...settings}>
        <div className='slide'>
          <h3>1</h3>
        </div>
        <div className='slide'>
          <h3>2</h3>
        </div>
        <div className='slide'>
          <h3>3</h3>
        </div>
        <div className='slide'>
          <h3>4</h3>
        </div>
        <div className='slide'>
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
