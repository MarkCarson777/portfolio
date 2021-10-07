import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Articles from './components/Articles.js';
import About from './components/About.js';
import Navigation from './components/Navigation.js';
import Righttime from './components/projects/Righttime.js';
import "./css/App.css"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">

        {/* router setup */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/righttime" component={Righttime} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/about" component={About} />

      </div>
    </BrowserRouter>
  )
};

export default App;