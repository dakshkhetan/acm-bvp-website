import React from 'react';
import Fade from 'react-reveal/Fade';

const Blog = ({ blog }) => {
  const { image, code, date, title, description, author, link } = blog;

  const truncate = (str) => {
    if (str.length <= 120) {
      return str;
    }
    return str.slice(0, 120) + '...';
  };

  return (
    <React.Fragment>
      <div className={`blog ${code}`}>
        <Fade delay={300}>
          <img src={image} alt='cover' />
        </Fade>
        <Fade delay={400}>
          <time>{date}</time>
        </Fade>
        <Fade delay={300}>
          <h2>{title}</h2>
        </Fade>
        <Fade delay={300}>
          <p>{truncate(description)}</p>
        </Fade>
        <Fade delay={500}>
          <span>By {author}</span>
        </Fade>
        <Fade delay={400}>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-arrow-circle-right icon'></i>
          </a>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default Blog;
