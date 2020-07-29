import React from 'react';

import { ReactComponent as Divider } from '../../../assets/illustrations/section-divider.svg';

const Accomplishment = ({ accomplishment }) => {
  const { title, date, details, className } = accomplishment;

  return (
    <React.Fragment>
      <div className={`accomplishment ${className}`}>
        <span className='title'>{title}</span>
        <span className='date'>{date}</span>
        <p>{details}</p>
      </div>

      <div className='divider-container'>
        <Divider className='divider' />
      </div>
    </React.Fragment>
  );
};

export default Accomplishment;
