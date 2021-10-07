import React from "react";
import pokemon from "../../assets/pokemon.jpg";
import "../../css/Pikachoose.css";

function Pikachoose(props) {
  return (
    <div>
      <a target="_blank" rel="noreferrer" className="project-image-container" href="https://pikachoose2.herokuapp.com/">
        <img className="project-link" src={pokemon} alt="Project Link" />
      </a>
      <div className="project-header">
        <h1>Pikachoose</h1>
      </div>
    </div>
  )
};

export default Pikachoose; 