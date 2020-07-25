import React from 'react';
import Fade from 'react-reveal/Fade';

import SpeakerImage1 from '../../../assets/dsp-speakers/speaker2020.png';
import SpeakerImage2 from '../../../assets/dsp-speakers/speaker2019.png';
import { ReactComponent as Illustration } from '../../../assets/illustrations/speaker.svg';

import './Speakers.styles.scss';

const Speakers = () => {
  return (
    <section id='dsp-speakers' className='section-dsp-speakers'>
      <Fade bottom>
        <h1 className='section-heading'>Speakers</h1>
      </Fade>
      <div className='section-content'>
        <div className='speaker'>
          <Fade delay={150}>
            <div className='image-container'>
              <img src={SpeakerImage1} alt='speaker' />
            </div>
          </Fade>
          <Fade delay={250}>
            <h2 className='title'>DSP'20 SPEAKER</h2>
            <h2 className='name'>Dr. Qi Han</h2>
          </Fade>
          <Fade delay={300}>
            <p className='info'>
              Dr. Qi Han received her Ph.D. degree from the Donald Bren School
              of Information and Computer Sciences at the University of
              California, Irvine in 2005. She is an Associate Professor in the
              Department of Computer Science at the Colorado School of Mines.
              She gave a talk on the topic "Detection and Tracking of Dynamic
              Amorphous Events in Wireless Sensor Networks".
            </p>
          </Fade>
        </div>

        <div className='speaker'>
          <Fade delay={150}>
            <div className='image-container'>
              <img src={SpeakerImage2} alt='speaker' />
            </div>
          </Fade>
          <Fade delay={250}>
            <h2 className='title'>DSP'19 SPEAKER</h2>
            <h2 className='name'>Dr. Chuck Eastomm</h2>
          </Fade>
          <Fade delay={300}>
            <p className='info'>
              Dr. Chuck Eastomm is an author, consultant and a computer expert.
              He is chairing doctoral committee at Capitol Technology
              University, Maryland, USA. His books and articles have been
              referenced by numerous computer scientists, including several
              Ph.D. dissertations. He gave a talk on the topic "Cryptographic
              Backdoors" and discussed about “S-Box Design”.
            </p>
          </Fade>
        </div>
      </div>

      <div className='illustration-container'>
        <Illustration className='illustration' />
      </div>
    </section>
  );
};

export default Speakers;
