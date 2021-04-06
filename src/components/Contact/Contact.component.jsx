import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { animateScroll as scroll } from "react-scroll";

import { ReactComponent as Image } from "../../assets/illustrations/contact.svg";

import "./Contact.styles.scss";

const Contact = ({ darkMode }) => {
  let location = useLocation();

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const setPageTitle = () =>
    location.pathname === "/" ? (
      <Helmet>
        <title>ACM BVP</title>
      </Helmet>
    ) : (
      <Helmet>
        <title>Contact | ACM BVP</title>
      </Helmet>
    );

  return (
    <>
      {setPageTitle()}

      <section
        id="contact"
        className={`section section-contact ${darkMode ? "dark" : ""}`}
      >
        <Fade bottom>
          <h1 className="section-heading">Reach Us</h1>
        </Fade>

        <div className="section-content">
          <div className="info-container">
            <div className="info">
              <Fade bottom delay={200}>
                <h2 className="heading">ADDRESS</h2>
              </Fade>

              <Fade bottom delay={300}>
                <p className="text">A-4, Paschim Vihar, New Delhi - 110063</p>
              </Fade>
              <Fade bottom delay={400}>
                <p className="text text-2">
                  (In front of Paschim Vihar East Metro Station)
                </p>
              </Fade>

              <Fade bottom delay={500}>
                <div className="mail-btn">
                  <span>
                    <a href="mailto:contact@bvcoe.acm.org">Write To Us</a>
                  </span>
                </div>
              </Fade>
            </div>
          </div>

          <Fade delay={100}>
            <div className="image-container">
              <div className="illustration">
                <Image />
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Contact;
