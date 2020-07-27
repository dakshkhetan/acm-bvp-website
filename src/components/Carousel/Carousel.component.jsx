import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ar1 from '../../assets/gallery/ar/ar1.jpg';
import ar2 from '../../assets/gallery/ar/ar2.jpg';
import ar3 from '../../assets/gallery/ar/ar3.jpg';
import ar4 from '../../assets/gallery/ar/ar4.jpg';
import ar5 from '../../assets/gallery/ar/ar5.jpg';

import android1 from '../../assets/gallery/android/android1.jpg';
import android2 from '../../assets/gallery/android/android2.jpg';
import android3 from '../../assets/gallery/android/android3.jpg';
import android4 from '../../assets/gallery/android/android4.jpg';
import android5 from '../../assets/gallery/android/android5.jpg';
import android6 from '../../assets/gallery/android/android6.jpg';

import hs1 from '../../assets/gallery/hs/hs1.jpg';
import hs2 from '../../assets/gallery/hs/hs2.jpg';
import hs3 from '../../assets/gallery/hs/hs3.jpg';
import hs4 from '../../assets/gallery/hs/hs4.jpg';

import webDev1 from '../../assets/gallery/webDev/webd1.jpg';
import webDev2 from '../../assets/gallery/webDev/webd2.jpg';
import webDev3 from '../../assets/gallery/webDev/webd3.jpg';
import webDev4 from '../../assets/gallery/webDev/webd4.jpg';
import webDev5 from '../../assets/gallery/webDev/webd5.jpg';
import webDev6 from '../../assets/gallery/webDev/webd6.jpg';
import webDev7 from '../../assets/gallery/webDev/webd7.jpg';

import hoc1 from '../../assets/gallery/hoc/hoc1.jpg';
import hoc2 from '../../assets/gallery/hoc/hoc2.jpg';
import hoc3 from '../../assets/gallery/hoc/hoc3.jpg';
import hoc4 from '../../assets/gallery/hoc/hoc4.jpg';
import hoc5 from '../../assets/gallery/hoc/hoc5.jpg';
import hoc6 from '../../assets/gallery/hoc/hoc6.jpg';
import hoc7 from '../../assets/gallery/hoc/hoc7.jpg';

import './Carousel.styles.scss';

const Carousel = ({ title }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
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

  const content = () => {
    switch (title) {
      case 'ar':
        return (
          <div className='carousel slider-container'>
            <Slider {...settings}>
              <div className='slide'>
                <div className='image-container'>
                  <img src={ar1} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={ar2} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={ar3} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={ar4} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={ar5} alt='workshop' />
                </div>
              </div>
            </Slider>
          </div>
        );
      case 'android':
        return (
          <div className='carousel slider-container'>
            <Slider {...settings}>
              <div className='slide'>
                <div className='image-container'>
                  <img src={android1} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={android2} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={android3} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={android4} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={android5} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={android6} alt='workshop' />
                </div>
              </div>
            </Slider>
          </div>
        );
      case 'hs':
        return (
          <div className='carousel slider-container'>
            <Slider {...settings}>
              <div className='slide'>
                <div className='image-container'>
                  <img src={hs1} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={hs2} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={hs3} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={hs4} alt='workshop' />
                </div>
              </div>
            </Slider>
          </div>
        );
      case 'webDev':
        return (
          <div className='carousel slider-container'>
            <Slider {...settings}>
              <div className='slide'>
                <div className='image-container'>
                  <img src={webDev1} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={webDev2} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={webDev3} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={webDev4} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={webDev5} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={webDev6} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={webDev7} alt='workshop' />
                </div>
              </div>
            </Slider>
          </div>
        );
      case 'hoc':
        return (
          <div className='carousel slider-container'>
            <Slider {...settings}>
              <div className='slide'>
                <div className='image-container'>
                  <img src={hoc1} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={hoc2} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={hoc3} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={hoc4} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={hoc5} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={hoc6} alt='workshop' />
                </div>
              </div>
              <div className='slide'>
                <div className='image-container'>
                  <img src={hoc7} alt='workshop' />
                </div>
              </div>
            </Slider>
          </div>
        );
      default:
        return null;
    }
  };

  return <React.Fragment>{content()}</React.Fragment>;
};

export default Carousel;
