import React from "react";
import clock from "../../assets/clock.jpg";
import "../../css/Righttime.css";

function Righttime(props) {
  return (
    <div>
      <a className="image-container" href="https://www.righttime.club/">
        <img className="project-link" src={clock} alt="Project Link" />
      </a>
      <div className="righttime-header">
        <h1>RightTime</h1>
      </div>
    </div>
  )
};

export default Righttime; 