import React from "react";
import Fade from "react-reveal/Fade";
import ProgressiveImage from "react-progressive-image";

const Blog = ({ blog }) => {
  const { image, code, date, title, description, author, link } = blog;

  const truncate = (str) => {
    if (str.length <= 150) {
      return str;
    }
    return str.slice(0, 150) + "...";
  };

  return (
    <>
      <div className={`blog ${code}`}>
        <Fade delay={300}>
          <ProgressiveImage src={image} placeholder="">
            {(src, loading) => {
              return loading ? (
                <div className="loader-container">
                  <div className="loading-spinner" />
                </div>
              ) : (
                <img src={src} alt="cover" />
              );
            }}
          </ProgressiveImage>
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
          <a href={link} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-arrow-circle-right icon"></i>
          </a>
        </Fade>
      </div>
    </>
  );
};

export default Blog;
