import React, {useState} from "react";
import "./Header.scss";
import {Link} from "react-router-dom";

import simpleLogoYellow from "../../Assets/Images/lemon-logo-yellow.png";

const Header = () => {

  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [dataVisible, setDataVisible] = useState(false);

  const navToggle = () => {
    setDataVisible(!dataVisible);
    setAriaExpanded(!ariaExpanded);
  }

  return <>
  <header className="nav-bar flex">
    <div className="logo">
      <Link to="/"><img src={simpleLogoYellow} alt="Little Lemon Logo" /></Link>
    </div>
    <nav className="menu" data-visible={dataVisible}>
      <ul className="flex">
        <Link to="/"><li className="nav-item" onClick={navToggle}>Home</li></Link>
        <Link to="/menu"><li className="nav-item" onClick={navToggle}>Menu</li></Link>
        <Link to="/reservations"><li className="nav-item" onClick={navToggle}>Reservations</li></Link>
      </ul>
      </nav>
      <div id="toggle-div">
        <button id="nav-toggle" aria-controls="menu" aria-expanded={ariaExpanded} onClick={navToggle}><span className="visually-hidden">Menu</span></button>
      </div>
  </header>
  </>
}

export default Header;
