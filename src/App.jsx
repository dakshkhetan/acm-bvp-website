import React, { useEffect } from 'react';

import Hero from './components/Hero/Hero.component';
import Workshops from './components/Workshops/Workshops.component';
import Divisions from './components/Divisions/Divisions.component';
import LatestTrends from './components/LatestTrends/LatestTrends.component';
import Team from './components/Team/Team.component';
import FAQs from './components/FAQs/FAQs.component';
import Contact from './components/Contact/Contact.component';

import './App.scss';

const App = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Hero darkMode={darkMode} />
      <Workshops darkMode={darkMode} />
      <Divisions darkMode={darkMode} />
      <LatestTrends darkMode={darkMode} />
      <Team darkMode={darkMode} />
      <FAQs darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default App;
