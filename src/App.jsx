import React from 'react';

import Hero from './components/Hero/Hero.component';
import Workshops from './components/Workshops/Workshops.component';
import Divisions from './components/Divisions/Divisions.component';
import LatestTrends from './components/LatestTrends/LatestTrends.component';
import Team from './components/Team/Team.component';
import Contact from './components/Contact/Contact.component';
import Footer from './components/Footer/Footer.component';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Hero />
      <Workshops />
      <Divisions />
      <LatestTrends />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
