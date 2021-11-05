import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import SmoothScrollbar from './components/SmoothScrollbar';

export default function App() {
  return (
    <Router>
      <NavMenu />
      <SmoothScrollbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </SmoothScrollbar>
    </Router>
  );
}
