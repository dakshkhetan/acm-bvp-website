import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import DisplayImagePlaceholder from '../../assets/display-pics/displayPicTemplate.png';
import './Person.styles.scss';

const Person = ({ member }) => {
  const {
    name,
    position,
    displayPicSrc,
    linkedInURL,
    githubURL,
    twitterURL
  } = member;

  return (
    <div className='member'>
      <div className='img-container'>
        <div className='display-pic'>
          {displayPicSrc ? (
            <img src={displayPicSrc} alt='profile pic' />
          ) : (
            <img src={DisplayImagePlaceholder} alt='profile pic' />
          )}
        </div>
      </div>
      <span className='name'>{name}</span>
      <span className='position'>{position}</span>
      <div className='social-icons'>
        {linkedInURL && (
          <a
            href={linkedInURL}
            className='social-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className='icon linkedin mr-10'
            />
          </a>
        )}
        {githubURL && (
          <a
            href={githubURL}
            className='social-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} className='icon github m-8' />
          </a>
        )}
        {twitterURL && (
          <a
            href={twitterURL}
            className='social-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
          </a>
        )}
      </div>
    </div>
  );
};

export default Person;
