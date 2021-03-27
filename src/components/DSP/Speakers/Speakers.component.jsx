import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import ProgressiveImage from "react-progressive-image";

import SpeakerImage1 from "../../../assets/dsp-speakers/speaker2019.png";
import SpeakerImage2 from "../../../assets/dsp-speakers/speaker2020.png";
import SpeakerImage3 from "../../../assets/dsp-speakers/speaker2021.png";
import { ReactComponent as Illustration } from "../../../assets/illustrations/speaker.svg";

import "./Speakers.styles.scss";

const isNumberOfSpeakersOdd = () => {
  let speakersRow = document.getElementsByClassName("speaker-row");
  let speakersInLastRow = speakersRow[
    speakersRow.length - 1
  ].getElementsByClassName("speaker");

  return speakersInLastRow.length === 1;
};

const Speakers = ({ darkMode }) => {
  useEffect(() => {
    if (isNumberOfSpeakersOdd()) {
      let speakersRow = document.getElementsByClassName("speaker-row");
      let speakersLastRow = speakersRow[speakersRow.length - 1];
      speakersLastRow.classList.add("odd");
    }
  }, []);

  return (
    <section
      id="dsp-speakers"
      className={`section-dsp-speakers ${darkMode ? "dark" : ""}`}
    >
      <Fade bottom>
        <h1 className="section-heading">Speakers</h1>
      </Fade>
      <div className="section-content">
        <div className="speaker-row">
          <div className="speaker">
            <Fade delay={150}>
              <div className="image-container">
                <ProgressiveImage src={SpeakerImage3} placeholder="">
                  {(src, loading) => {
                    return loading ? (
                      <div className="loader-container">
                        <div className="loading-spinner" />
                      </div>
                    ) : (
                      <img src={src} alt="speaker" />
                    );
                  }}
                </ProgressiveImage>
              </div>
            </Fade>
            <Fade delay={250}>
              <h2 className="title">DSP'21 SPEAKER</h2>
              <h2 className="name">Dr. Juan Wachs</h2>
            </Fade>
            <Fade delay={300}>
              <p className="info">
                Dr. Juan P Wachs is an Associate Professor in the Industrial
                Engineering School at Purdue University. He's the director of
                the Intelligent Systems and Assistive Technologies Lab at Purdue
                and he's affiliated with Regenstrief Center for Healthcare
                Engineering. He is the associate editor of IEEE Transactions in
                Human-Machine Systems, Frontiers in Robotics and AI, and the
                Journal of Realtime Image Processing.
              </p>
            </Fade>
          </div>

          <div className="speaker">
            <Fade delay={150}>
              <div className="image-container">
                <ProgressiveImage src={SpeakerImage2} placeholder="">
                  {(src, loading) => {
                    return loading ? (
                      <div className="loader-container">
                        <div className="loading-spinner" />
                      </div>
                    ) : (
                      <img src={src} alt="speaker" />
                    );
                  }}
                </ProgressiveImage>
              </div>
            </Fade>
            <Fade delay={250}>
              <h2 className="title">DSP'20 SPEAKER</h2>
              <h2 className="name">Dr. Qi Han</h2>
            </Fade>
            <Fade delay={300}>
              <p className="info">
                Dr. Qi Han received her Ph.D. degree from the Donald Bren School
                of Information and Computer Sciences at the University of
                California, Irvine in 2005. She is an Associate Professor in the
                Department of Computer Science at the Colorado School of Mines.
                She gave a talk on the topic "Detection and Tracking of Dynamic
                Amorphous Events in Wireless Sensor Networks".
              </p>
            </Fade>
          </div>
        </div>

        <div className="speaker-row">
          <div className="speaker">
            <Fade delay={150}>
              <div className="image-container">
                <ProgressiveImage src={SpeakerImage1} placeholder="">
                  {(src, loading) => {
                    return loading ? (
                      <div className="loader-container">
                        <div className="loading-spinner" />
                      </div>
                    ) : (
                      <img src={src} alt="speaker" />
                    );
                  }}
                </ProgressiveImage>
              </div>
            </Fade>
            <Fade delay={250}>
              <h2 className="title">DSP'19 SPEAKER</h2>
              <h2 className="name">Dr. Chuck Eastomm</h2>
            </Fade>
            <Fade delay={300}>
              <p className="info">
                Dr. Chuck Eastomm is an author, consultant and a computer
                expert. He is chairing doctoral committee at Capitol Technology
                University, Maryland, USA. His books and articles have been
                referenced by numerous computer scientists, including several
                Ph.D. dissertations. He gave a talk on the topic "Cryptographic
                Backdoors" and discussed about “S-Box Design”.
              </p>
            </Fade>
          </div>
        </div>
      </div>

      <div className="illustration-container">
        <Illustration className="illustration" />
      </div>
    </section>
  );
};

export default Speakers;
