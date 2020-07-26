import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import SideDrawer from '../SideDrawer/SideDrawer.component';
import Backdrop from '../Backdrop/Backdrop.component';

import logo from '../../assets/acm-logo/ACM-BVP-logo.jpg';

import './Header.styles.scss';

class Header extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  scrollToTop = () => {
    const { location, history } = this.props;
    const { sideDrawerOpen } = this.state;
    sideDrawerOpen && this.closeSideDrawer();
    location.pathname === '/' ? scroll.scrollToTop() : history.push('/');
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

  contactOption = () => {
    const { location, history } = this.props;
    return location.pathname === '/' ? (
      <ScrollLink
        activeClass='active'
        to='contact'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className='option hover'
      >
        Contact
      </ScrollLink>
    ) : (
      <span className='option hover' onClick={() => history.push('/contact')}>
        Contact
      </span>
    );
  };

  headerOptions = (className) => (
    <React.Fragment>
      <span className={`${className} hover`} onClick={() => this.scrollToTop()}>
        Home
      </span>
      <Link to='/gallery' className={`${className} hover`}>
        Gallery
      </Link>
      <Link to='/dsp' className={`${className} hover`}>
        DSP
      </Link>
      {this.contactOption()}
    </React.Fragment>
  );

  render() {
    const { sideDrawerOpen } = this.state;

    return (
      <nav className='header'>
        <div className='logo-container'>
          <img
            src={logo}
            alt='logo'
            className='logo'
            onClick={this.scrollToTop}
          />
        </div>

        <div className='options'>{this.headerOptions('option')}</div>

        <div className='sidedrawer-btn'>
          <span className='toggle' onClick={this.openSideDrawer}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>

        <SideDrawer
          show={sideDrawerOpen}
          closeSideDrawer={this.closeSideDrawer}
          scrollToTop={this.scrollToTop}
        />
        {sideDrawerOpen && <Backdrop click={this.backdropClickHandler} />}
      </nav>
    );
  }
}

export default withRouter(Header);
