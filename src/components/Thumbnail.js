import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Thumbnail.css";

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Display"/>
        </div>
        <div className="project-title">{props.title}</div>
        {/* <div className="project-category">{props.category}</div> */}
      </Link>
    </div>
  )
};

export default Thumbnail;