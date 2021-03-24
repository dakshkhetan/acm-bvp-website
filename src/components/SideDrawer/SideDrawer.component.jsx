import React from "react";
import { withRouter } from "react-router-dom";

import "./SideDrawer.styles.scss";

class SideDrawer extends React.Component {
  render() {
    const { show, darkMode, scrollToTop } = this.props;

    const onClickHandler = (route) => {
      const { history, closeSideDrawer } = this.props;
      closeSideDrawer();
      history.push(`/${route}`);
    };

    return (
      <nav
        className={`${show ? `sidedrawer open` : `sidedrawer`} ${
          darkMode ? `dark` : ""
        }`}
      >
        <div className="options-container">
          <span className="option" onClick={() => scrollToTop()}>
            Home
          </span>
          <span className="option" onClick={() => onClickHandler("events")}>
            Events
          </span>
          <span className="option" onClick={() => onClickHandler("blogs")}>
            Blogs
          </span>
          <span className="option" onClick={() => onClickHandler("acm-w")}>
            ACM-W
          </span>
          <span className="option" onClick={() => onClickHandler("dsp")}>
            DSP
          </span>
          <span className="option" onClick={() => onClickHandler("faq")}>
            FAQ
          </span>
          <span className="option" onClick={() => onClickHandler("contact")}>
            Contact
          </span>
        </div>
      </nav>
    );
  }
}

export default withRouter(SideDrawer);
