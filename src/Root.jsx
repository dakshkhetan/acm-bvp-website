import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import ACM_W from './components/ACM-W/App/App.component';

import Header from './components/Header/Header.component';
import Events from './components/Events/Events.component';
import DSP from './components/DSP/Dsp.component';
import FAQs from './components/FAQs/FAQs.component';
import Contact from './components/Contact/Contact.component';
import CodeOfConduct from './components/CodeOfConduct/CodeOfConduct.component';
import Footer from './components/Footer/Footer.component';

const Root = ({ darkMode }) => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path='/' render={() => <App darkMode={darkMode} />} />
      <Route path='/acm-w' render={() => <ACM_W darkMode={darkMode} />} />
      <Route path='/events' render={() => <Events darkMode={darkMode} />} />
      <Route path='/dsp' render={() => <DSP darkMode={darkMode} />} />
      <Route path='/faq' render={() => <FAQs darkMode={darkMode} />} />
      <Route path='/contact' render={() => <Contact darkMode={darkMode} />} />
      <Route
        path='/code-of-conduct'
        render={() => <CodeOfConduct darkMode={darkMode} />}
      />
      <Redirect to='/' />
    </Switch>
    <Footer />
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  darkMode: state.theme.darkMode
});

export default connect(mapStateToProps)(Root);
