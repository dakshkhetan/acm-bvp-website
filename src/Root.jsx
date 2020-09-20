import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import App from './App';
import ACM_W from './components/ACM-W/App/App.component';

import Header from './components/Header/Header.component';
import Events from './components/Events/Events.component';
import DSP from './components/DSP/Dsp.component';
import FAQs from './components/FAQs/FAQs.component';
import Contact from './components/Contact/Contact.component';
import CodeOfConduct from './components/CodeOfConduct/CodeOfConduct.component';
import Footer from './components/Footer/Footer.component';

import './index.css';

const Root = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/acm-w' component={ACM_W} />
      <Route path='/events' component={Events} />
      <Route path='/dsp' component={DSP} />
      <Route path='/faq' component={FAQs} />
      <Route path='/contact' component={Contact} />
      <Route path='/code-of-conduct' component={CodeOfConduct} />
      <Redirect to='/' />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default Root;
