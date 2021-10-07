import React from "react";
import pokemon from "../../assets/pokemon.jpg";
import "../../css/Pikachoose.css";

function Pikachoose(props) {
  return (
    <div>
      <a target="_blank" className="image-container" href="https://pikachoose2.herokuapp.com/">
        <img className="project-link" src={pokemon} alt="Project Link" />
      </a>
      <div className="righttime-header">
        <h1>Pikachoose</h1>
      </div>
    </div>
  )
};

export default Pikachoose; 