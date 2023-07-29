import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bannerbg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Carlos Polo </h1>
        <p>Scrum Master, Game Producer</p>
        <Link to="/menu">
          <button> MY PROJECTS </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
