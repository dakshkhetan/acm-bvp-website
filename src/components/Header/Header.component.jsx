import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import logo from '../../assets/ACM-BVP-logo.jpg';

import './Header.styles.scss';

class Header extends React.Component {
  scrollToTop = () => {
    const { location, history } = this.props;
    location.pathname === '/' ? scroll.scrollToTop() : history.push('/');
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
        className='option'
      >
        Contact
      </ScrollLink>
    ) : (
      <span className='option' onClick={() => history.push('/contact')}>
        Contact
      </span>
    );
  };

  headerOptions = (className) => (
    <React.Fragment>
      <span className={className} onClick={() => this.scrollToTop()}>
        Home
      </span>
      <Link to='/gallery' className={className}>
        Gallery
      </Link>
      <Link to='/dsp' className={className}>
        DSP
      </Link>
      {this.contactOption()}
    </React.Fragment>
  );

  render() {
    return (
      <nav className='header'>
        <div className='logo-container' href='/'>
          <img
            src={logo}
            alt='logo'
            className='logo'
            onClick={this.scrollToTop}
          />
        </div>
        <div className='options'>{this.headerOptions('option')}</div>
      </nav>
    );
  }
}

export default withRouter(Header);
