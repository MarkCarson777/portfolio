import React from "react";
import Thumbnail from './Thumbnail.js';

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/righttime"
        image=""
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