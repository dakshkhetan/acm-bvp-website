import React from 'react';
import Fade from 'react-reveal/Fade';

import { TeamData } from '../../team.data';
import Person from '../Person/Person.component';

import { ReactComponent as Illustration } from '../../assets/illustrations/team_img.svg';
import './Team.styles.scss';

const Team = () => {
  return (
    <section id='team' className='section section-team'>
      <Fade bottom>
        <h1 className='section-heading'>Meet The Team</h1>
        <div className='section-content'>
          <div className='members'>
            {TeamData.map((member) => (
              <Person key={member.key} member={member} />
            ))}
          </div>
          <div className='image-container'>
            <div className='illustration'>
              <Illustration />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Team;
