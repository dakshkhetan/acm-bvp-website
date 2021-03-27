import React from "react";
import Fade from "react-reveal/Fade";
import ProgressiveImage from "react-progressive-image";

import WebIcon from "../../assets/technology/web-icon.png";
import AndroidIcon from "../../assets/technology/android-icon.png";
import iOSIcon from "../../assets/technology/ios-icon.png";
import MLIcon from "../../assets/technology/ml-icon.png";
import RoboticsIcon from "../../assets/technology/robotics-icon.png";
import BlockchainIcon from "../../assets/technology/blockchain-icon.png";
import { ReactComponent as Illustration } from "../../assets/illustrations/reading-book.svg";

import "./LatestTrends.styles.scss";

const TrendImage = (props) => {
  return (
    <div className="image-container">
      <ProgressiveImage src={props.src} placeholder="">
        {(src, loading) => {
          return loading ? (
            <div className="loader-container">
              <div className="loading-spinner" />
            </div>
          ) : (
            <img src={src} alt={props.alt} />
          );
        }}
      </ProgressiveImage>
    </div>
  );
};

const LatestTrends = ({ darkMode }) => {
  return (
    <section
      id="latest-trends"
      className={`section section-latestTrends ${darkMode ? "dark" : ""}`}
    >
      <Fade bottom>
        <h1 className="section-heading">Latest Trends</h1>
      </Fade>
      <Fade bottom delay={100}>
        <div className="sub-heading">
          <p>ACM takes all the latest technologies into consideration</p>
        </div>
      </Fade>
      <div className="section-content">
        <div className="tech-container">
          <Fade bottom delay={150}>
            <TrendImage src={WebIcon} alt="web-development" />
            <TrendImage src={AndroidIcon} alt="android" />
            <TrendImage src={iOSIcon} alt="ios" />
          </Fade>
          <Fade bottom delay={250}>
            <TrendImage src={MLIcon} alt="machine-learning" />
            <TrendImage src={RoboticsIcon} alt="robotics" />
            <TrendImage src={BlockchainIcon} alt="blockchain" />
          </Fade>
        </div>
      </div>
      <div className="illustration-container">
        <div className="illustration">
          <Illustration />
        </div>
      </div>
    </section>
  );
};

export default LatestTrends;
