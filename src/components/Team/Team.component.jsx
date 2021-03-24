import React from "react";
import Fade from "react-reveal/Fade";

import { TeamData } from "../../data/team.data";
import Person from "../Person/Person.component";

import { ReactComponent as Illustration } from "../../assets/illustrations/team.svg";

import "./Team.styles.scss";

const Team = ({ darkMode }) => {
  return (
    <section
      id="team"
      className={`section section-team ${darkMode ? "dark" : ""}`}
    >
      <Fade bottom>
        <h1 className="section-heading">Meet The Team</h1>
      </Fade>
      <div className="section-content">
        <div className="members">
          <Fade bottom delay={150}>
            {TeamData.members.map((member) => (
              <Person key={member.key} member={member} />
            ))}
          </Fade>
        </div>
        <Fade bottom delay={200}>
          <h2 className="section-heading">Mentors</h2>
        </Fade>
        <div className="mentors">
          <Fade bottom delay={150}>
            {TeamData.mentors.map((member) => (
              <Person key={member.key} member={member} />
            ))}
          </Fade>
        </div>
        <div className="image-container">
          <div className="illustration">
            <Illustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
