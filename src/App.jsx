import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/Home/Home.page";
import EventsPage from "./pages/Events/Events.page";
import Blogs from "./pages/Blogs/Blogs.page";
import ACM_W from "./pages/ACM-W/ACM-W.page";

import Header from "./components/Header/Header.component";
import DSP from "./components/DSP/Dsp.component";
import Timeline from "./components/Timeline/Timeline.component";
import FAQs from "./components/FAQs/FAQs.component";
import Contact from "./components/Contact/Contact.component";
import CodeOfConduct from "./components/CodeOfConduct/CodeOfConduct.component";
import Footer from "./components/Footer/Footer.component";

const App = ({ darkMode }) => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <HomePage darkMode={darkMode} />} />
      <Route path="/acm-w" render={() => <ACM_W darkMode={darkMode} />} />
      <Route
        exact
        path="/events"
        render={() => <EventsPage darkMode={darkMode} />}
      />
      <Route
        path="/events/timeline"
        render={() => <Timeline darkMode={darkMode} />}
      />
      <Route path="/blogs" render={() => <Blogs darkMode={darkMode} />} />
      <Route path="/dsp" render={() => <DSP darkMode={darkMode} />} />
      <Route path="/faq" render={() => <FAQs darkMode={darkMode} />} />
      <Route path="/contact" render={() => <Contact darkMode={darkMode} />} />
      <Route
        path="/code-of-conduct"
        render={() => <CodeOfConduct darkMode={darkMode} />}
      />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </>
);

const mapStateToProps = (state) => ({
  darkMode: state.theme.darkMode
});

export default connect(mapStateToProps)(App);
