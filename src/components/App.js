import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* router setup */}
        <Route exact path="/" component={Projects} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/about" component={About} />

        <div className="Navigation">
          {/* <img src={} className="logo" alt="Logo Image" /> */}
          <div className="navigation-sub">
            <a href="" className="item">Projects</a>
            <a href="" className="item">Articles</a>
            <a href="" className="item">About</a>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;