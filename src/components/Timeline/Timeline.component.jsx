import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { timelineData } from '../../data/timeline.data';

import './Timeline.styles.scss';

const TimelineItem = ({ data }) => (
  <div className='timeline-item'>
    <div className='timeline-item-content'>
      <Fade delay={150}>
        <img src={data.cover} alt='art' />
        <time>{data.month}</time>
        {data.info}
        <span className='circle' />
      </Fade>
    </div>
  </div>
);

const Timeline = ({ darkMode }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <React.Fragment>
      <section
        id='timeline'
        className={`section section-timeline ${darkMode ? 'dark' : ''}`}
      >
        <Fade bottom>
          <h1 className='section-heading'>Events Timeline</h1>
        </Fade>

        <div className='section-content'>
          {timelineData.length > 0 && (
            <div className='timeline-container'>
              {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
              ))}
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Timeline;
