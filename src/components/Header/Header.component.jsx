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

  headerOptions = (className) => (
    <React.Fragment>
      <ScrollLink
        activeClass='active'
        to='home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={className}
      >
        Home
      </ScrollLink>
      <ScrollLink
        activeClass='active'
        to='about'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={className}
      >
        About
      </ScrollLink>
      <Link to='/gallery' className={className}>
        Gallery
      </Link>
      <Link to='/dsp' className={className}>
        DSP
      </Link>
      <ScrollLink
        activeClass='active'
        to='contact'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={className}
      >
        Contact
      </ScrollLink>
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
