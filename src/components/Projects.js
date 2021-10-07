import React from "react";
import Thumbnail from "./Thumbnail.js";
import clock from "../assets/clock.jpg";
import pokemon from "../assets/pokemon.jpg";
import cocktail from "../assets/cocktail.jpg";
import "../css/Projects.css";

function Projects(props) {
  return (
    <div>
      <div className="thumbnail-container">
        <Thumbnail
          link="/projects/righttime"
          image={clock}
          title="RightTime"
          // category="Website"
        />
        <Thumbnail
          link="https://pikachoose2.herokuapp.com/"
          image={pokemon}
          title="Pikachoose"
          // category="Website"
        />
        <Thumbnail
          link="https://www.bournemouthbars.com/"
          image={cocktail}
          title="Bournemouth Bars"
          // category="Website"
        />
      </div>
    </div>
  )
};

export default Projects;