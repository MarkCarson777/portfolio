import React from "react";
import Thumbnail from "./Thumbnail.js";
import clock from "../assets/clock.jpg";

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
        image=""
        title="Pikachoose"
        category="Website"
      />
      <Thumbnail
        link="/bournemouthbars"
        image=""
        title="Bournemouth Bars"
        category="Website"
      />
    </div>
  )
};

export default Projects;