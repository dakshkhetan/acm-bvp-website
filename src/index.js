import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import App from './App';
import Header from './components/Header/Header.component';
import Gallery from './components/Gallery/Gallery.component';
import DSP from './components/DSP/Dsp.component';
import FAQs from './components/FAQs/FAQs.component';
import Contact from './components/Contact/Contact.component';
import CodeOfConduct from './components/CodeOfConduct/CodeOfConduct.component';

import './index.css';

const Root = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/dsp' component={DSP} />
      <Route path='/faq' component={FAQs} />
      <Route path='/contact' component={Contact} />
      <Route path='/code-of-conduct' component={CodeOfConduct} />
      <Redirect to='/' />
    </Switch>
  </Router>
);

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('root')
);
