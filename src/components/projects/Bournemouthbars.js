import React from "react";
import cocktail from "../../assets/cocktail.jpg";
import "../../css/Bournemouthbars.css";

function Bournemouthbars(props) {
  return (
    <div>
      <a target="_blank" rel="noreferrer" className="project-image-container" href="https://www.bournemouthbars.com/">
        <img className="project-link" src={cocktail} alt="Project Link" />
      </a>
      <div className="project-header">
        <h1>Bournemouth Bars</h1>
      </div>
    </div>
  )
};

export default Bournemouthbars; 