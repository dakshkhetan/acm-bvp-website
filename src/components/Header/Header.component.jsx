import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import { compose } from "redux";
import ProgressiveImage from "react-progressive-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { toggleDarkMode } from "../../redux/dark-mode/dark-mode.action";

import Toggle from "../Toggle/Toggle";
import SideDrawer from "../SideDrawer/SideDrawer.component";
import Backdrop from "../Backdrop/Backdrop.component";

import logo from "../../assets/acm-logo/ACM-BVP-logo.png";
import logoPlaceholder from "../../assets/acm-logo/compressed/ACM-BVP-logo.png";
import sun from "../../assets/illustrations/sun.png";
import moon from "../../assets/illustrations/moon.png";

import "./Header.styles.scss";

class Header extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  scrollToTop = () => {
    const { location, history } = this.props;
    const { sideDrawerOpen } = this.state;
    sideDrawerOpen && this.closeSideDrawer();
    location.pathname === "/" ? scroll.scrollToTop() : history.push("/");
  };

  scrollToTopACMW = () => {
    const { location, history } = this.props;
    const { sideDrawerOpen } = this.state;
    sideDrawerOpen && this.closeSideDrawer();
    location.pathname === "/acm-w"
      ? scroll.scrollToTop()
      : history.push("/acm-w");
  };

  openSideDrawer = () => {
    this.setState((prevState) => ({
      sideDrawerOpen: !prevState.sideDrawerOpen
    }));
  };

  closeSideDrawer = () => this.setState({ sideDrawerOpen: false });

  backdropClickHandler = () => {
    this.closeSideDrawer();
  };

  darkModeToggle = () => (
    <span className="dark-mode-toggle">
      <Toggle
        icons={{
          checked: (
            <img
              src={moon}
              alt="moon"
              width="16"
              height="16"
              role="presentation"
              style={{ pointerEvents: "none" }}
            />
          ),
          unchecked: (
            <img
              src={sun}
              alt="sun"
              width="16"
              height="16"
              role="presentation"
              style={{ pointerEvents: "none" }}
            />
          )
        }}
        checked={this.props.darkMode}
        onChange={this.props.toggleDarkMode}
      />
    </span>
  );

  headerOption = (option) => {
    const { location, history } = this.props;
    return location.pathname === "/" ? (
      <ScrollLink
        activeClass="active"
        to={option}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={`option hover ${option}`}
      >
        {option}
      </ScrollLink>
    ) : (
      <span
        className={`option hover ${option}`}
        onClick={() => history.push(`/${option}`)}
      >
        {option}
      </span>
    );
  };

  headerOptions = (className) => (
    <>
      <span className={`${className} hover`} onClick={() => this.scrollToTop()}>
        Home
      </span>
      <Link to="/events" className={`${className} hover`}>
        Events
      </Link>
      <Link to="/blogs" className={`${className} hover`}>
        Blogs
      </Link>
      <span
        className={`${className} hover`}
        onClick={() => this.scrollToTopACMW()}
      >
        ACM-W
      </span>
      <Link to="/dsp" className={`${className} hover`}>
        DSP
      </Link>
      {this.headerOption("faq")}
      {this.headerOption("contact")}
      {this.darkModeToggle()}
    </>
  );

  render() {
    const { sideDrawerOpen } = this.state;
    const { darkMode } = this.props;

    return (
      <nav className={`header ${darkMode ? "dark" : ""}`}>
        <div className="logo-container">
          <ProgressiveImage src={logo} placeholder={logoPlaceholder}>
            {(src) => (
              <img
                src={src}
                alt="logo"
                className="logo"
                onClick={this.scrollToTop}
              />
            )}
          </ProgressiveImage>
        </div>

        <div className="options">{this.headerOptions("option")}</div>

        <div className="sidedrawer-btn">
          {this.darkModeToggle()}
          <span className="toggle" onClick={this.openSideDrawer}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>

        <SideDrawer
          show={sideDrawerOpen}
          closeSideDrawer={this.closeSideDrawer}
          scrollToTop={this.scrollToTop}
          darkMode={darkMode}
        />
        {sideDrawerOpen && <Backdrop click={this.backdropClickHandler} />}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  darkMode: state.theme.darkMode
});

export default compose(
  withRouter,
  connect(mapStateToProps, { toggleDarkMode })
)(Header);
