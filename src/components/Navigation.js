import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

function Navigation(props) {
  return (
    <div className="navigation">
      {/* <img src={} className="logo" alt="Logo Image" /> */}
      <div className="navigation-sub">

        {/* links setup */}
        <Link to="/home" className="item">Home</Link>
        <Link to="/projects" className="item">Projects</Link>
        <Link to="/articles" className="item">Articles</Link>
        <Link to="/about" className="item">About</Link>

      </div>
    </div>
  )
}

export default Navigation;