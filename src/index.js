import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Header from './components/Header/Header.component';
import Gallery from './components/Gallery/Gallery.component';
import DSP from './components/DSP/Dsp.component';
import CodeOfConduct from './components/CodeOfConduct/CodeOfConduct.component';

import './index.css';
import Contact from './components/Contact/Contact.component';

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/dsp' component={DSP} />
          <Route path='/contact' component={Contact} />
          <Route path='/code-of-conduct' component={CodeOfConduct} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('root')
);
