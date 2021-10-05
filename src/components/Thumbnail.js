import React from 'react';
import { Link } from 'react-router-dom';

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to="">
        <div className="project-image">
          <img src="" alt="Project Image"/>
        </div>
        <div className="project-title">""</div>
        <div className="project-category">""</div>
      </Link>
    </div>
  )
};

export default Thumbnail;