import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { animateScroll as scroll } from "react-scroll";

import { blogsData } from "../../data/blogs.data";

import Blog from "./Blog.component";

import { ReactComponent as Illustration } from "../../assets/illustrations/blogging.svg";

import "./Blogs.styles.scss";

const Blogs = ({ darkMode }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <React.Fragment>
      <section
        id="blogs"
        className={`section section-blogs ${darkMode ? "dark" : ""}`}
      >
        <Fade bottom>
          <h1 className="section-heading">Blogs</h1>
        </Fade>

        <div className="illustration-container">
          <Fade bottom delay={50}>
            <div className="illustration">
              <Illustration />
            </div>
          </Fade>
        </div>

        <div className="section-content">
          <div className="blog-container">
            {blogsData.map((blog) => (
              <Blog key={blog.key} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blogs;
