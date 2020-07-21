import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import logo from '../../assets/ACM-BVP-logo.jpg';

import './Header.styles.scss';

class Header extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  headerOptions = (className) => (
    <React.Fragment>
      <Link
        activeClass='active'
        to='home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={className}
      >
        Home
      </Link>
      <Link
        activeClass='active'
        to='about'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={className}
      >
        About
      </Link>
      <Link
        activeClass='active'
        to='contact'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={className}
      >
        Contact
      </Link>
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

export default Header;
