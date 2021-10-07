import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Articles from './components/Articles.js';
import About from './components/About.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* router setup */}
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/about" component={About} />

        <div className="Navigation">
          {/* <img src={} className="logo" alt="Logo Image" /> */}
          <div className="navigation-sub">

            {/* links setup */}
            <Link to="/home" className="item">Home</Link>
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>

          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;