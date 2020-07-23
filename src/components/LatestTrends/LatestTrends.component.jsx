import React from 'react';
import Fade from 'react-reveal/Fade';

import WebIcon from '../../assets/technology/web-icon.png';
import AndroidIcon from '../../assets/technology/android-icon.png';
import iOSIcon from '../../assets/technology/ios-icon.png';
import MLIcon from '../../assets/technology/ml-icon.png';
import RoboticsIcon from '../../assets/technology/robotics-icon.png';
import BlockchainIcon from '../../assets/technology/blockchain-icon.png';
import { ReactComponent as Illustration } from '../../assets/illustrations/reading-book.svg';

import './LatestTrends.styles.scss';

const LatestTrends = () => {
  return (
    <section id='latest-trends' className='section section-latestTrends'>
      <Fade bottom>
        <h1 className='section-heading'>Latest Trends</h1>
        <div className='sub-heading'>
          <p>ACM takes all the latest technologies into consideration</p>
        </div>
        <div className='section-content'>
          <div className='tech-container'>
            <div className='image-container'>
              <img src={WebIcon} alt='web-development' />
            </div>
            <div className='image-container'>
              <img src={AndroidIcon} alt='android' />
            </div>
            <div className='image-container'>
              <img src={iOSIcon} alt='ios' />
            </div>
            <div className='image-container'>
              <img src={MLIcon} alt='machine-learning' />
            </div>
            <div className='image-container'>
              <img src={RoboticsIcon} alt='robotics' />
            </div>
            <div className='image-container'>
              <img src={BlockchainIcon} alt='blockchain' />
            </div>
          </div>
          <div className='illustration-container'>
            <div className='illustration'>
              <Illustration />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default LatestTrends;
