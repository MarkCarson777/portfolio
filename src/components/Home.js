import React from "react";
import homepage from "../assets/homepage.jpg";
import "../css/Home.css";

function Home(props) {
  return (
    <div>
      <img className="homepage-bg" src={homepage} alt="Homepage"/>
    </div>
  )
};

export default Home;