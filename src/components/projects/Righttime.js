import React from "react";
import clock from "../../assets/clock.jpg";
import "../../css/Righttime.css";

function Righttime(props) {
  return (
    <div>
      <a target="_blank" rel="noreferrer" className="project-image-container" href="https://www.righttime.club/">
        <img className="project-link" src={clock} alt="Project Link" />
      </a>
      <div className="project-header">
        <h1>RightTime</h1>
      </div>
    </div>
  )
};

export default Righttime; 