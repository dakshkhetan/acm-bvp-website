import React from 'react';

// import Header from './components/Header/Header.component';
import Hero from './components/Hero/Hero.component';
import About from './components/About/About.component';
import Contact from './components/Contact/Contact.component';
import Divisions from './components/Divisions/Divisions.component';
import Team from './components/Team/Team.component';
import Footer from './components/Footer/Footer.component';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Hero />
      <About />
      <Divisions />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
