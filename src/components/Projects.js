import React from "react";
import Thumbnail from "./Thumbnail.js";
import clock from "../assets/clock.jpg";
import pokemon from "../assets/pokemon.jpg";
import cocktail from "../assets/cocktail.jpg";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/righttime"
        image={clock}
        title="RightTime"
        category="Website"
      />
      <Thumbnail
        link="/pikachoose"
        image={pokemon}
        title="Pikachoose"
        category="Website"
      />
      <Thumbnail
        link="/bournemouthbars"
        image={cocktail}
        title="Bournemouth Bars"
        category="Website"
      />
    </div>
  )
};

export default Projects;