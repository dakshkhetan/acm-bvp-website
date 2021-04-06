import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { animateScroll as scroll } from "react-scroll";

import { workshops } from "../../data/workshops.data";

import Event from "./Event.component";

import { ReactComponent as Illustration } from "../../assets/illustrations/event.svg";

import "./Events.styles.scss";

const EventsPage = ({ darkMode }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Helmet>
        <title>Events | ACM BVP</title>
      </Helmet>

      <section
        id="events"
        className={`section section-events ${darkMode ? "dark" : ""}`}
      >
        <Fade bottom>
          <h1 className="section-heading">Events</h1>
        </Fade>

        <Fade bottom delay={150}>
          <span className="timeline-heading">
            <Link to="/events/timeline">
              <span>Checkout Our Event Calender Timeline</span>{" "}
              <i className="fas fa-arrow-right icon"></i>
            </Link>
          </span>
        </Fade>

        <div className="section-content">
          {workshops.map((workshop) => (
            <Event key={workshop.key} workshop={workshop} />
          ))}
        </div>

        <div className="illustration-container">
          <div className="illustration">
            <Illustration />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
