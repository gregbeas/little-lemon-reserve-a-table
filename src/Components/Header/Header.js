import React from "react";
import "./Header.scss";
import {Link} from "react-router-dom";

import simpleLogoYellow from "../../Assets/Images/lemon-logo-yellow.png";

import {FaBars} from "react-icons/fa";

const Header = () => {
  return <>
  <header id="header">
    <div id="logo-div">
      <img src={simpleLogoYellow} alt="Little Lemon Logo" />
    </div>
    <nav>
      <ul id="nav-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
      </ul>
      <FaBars size={30}/>
    </nav>
  </header>
  </>
}

export default Header;
