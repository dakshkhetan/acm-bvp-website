import React from 'react';

import Header from './components/Header/Header.component';
import Hero from './components/Hero/Hero.component';
import About from './components/About/About.component';
import Contact from './components/Contact/Contact.component';
import Footer from './components/Footer/Footer.component';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
