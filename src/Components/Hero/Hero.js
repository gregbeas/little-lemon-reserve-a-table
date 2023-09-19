import React from "react";
import "./Hero.scss";

import {Link} from "react-router-dom";

import heroImage from "../../Assets/Images/chef.jpg";

const Hero = () => {
  return <>
    <section id="hero">
      <div className="secContainer">
        <div className="hero-content">
          <div className="hero-content_left">
            <img src={heroImage} alt="Chef Arthur plating a dish at Little Lemmon"/>
          </div>
          <div className="hero-content_right">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <Link to="/reservations"><button><p>Reserve a Table</p></button></Link>
        </div>
      </div>
    </section>
  </>
}

export default Hero;