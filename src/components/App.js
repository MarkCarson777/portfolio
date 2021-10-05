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

            {/* links setup */}
            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>

          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;