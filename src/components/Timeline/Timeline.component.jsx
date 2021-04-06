import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import ProgressiveImage from "react-progressive-image";
import { animateScroll as scroll } from "react-scroll";

import { timelineData } from "../../data/timeline.data";

import preloadImage from "../../assets/month-art-cover/placeholder.jpg";

import "./Timeline.styles.scss";

const TimelineItem = ({ data }) => (
  <>
    <Helmet>
      <title>Events Timeline | ACM BVP</title>
    </Helmet>

    <div className="timeline-item">
      <div className="timeline-item-content">
        <ProgressiveImage src={data.cover} placeholder={preloadImage}>
          {(src) => (
            <Fade delay={150}>
              <img src={src} alt="art" />
            </Fade>
          )}
        </ProgressiveImage>
        <Fade delay={150}>
          <time>{data.month}</time>
          {data.info}
          <span className="circle" />
        </Fade>
      </div>
    </div>
  </>
);

const Timeline = ({ darkMode }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <section
        id="timeline"
        className={`section section-timeline ${darkMode ? "dark" : ""}`}
      >
        <Fade bottom>
          <h1 className="section-heading">Events Timeline</h1>
        </Fade>

        <Fade bottom delay={150}>
          <div className="section-content">
            {timelineData.length > 0 && (
              <div className="timeline-container">
                {timelineData.map((data, idx) => (
                  <TimelineItem data={data} key={idx} />
                ))}
              </div>
            )}
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Timeline;
