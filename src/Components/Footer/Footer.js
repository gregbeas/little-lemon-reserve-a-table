import React from "react";
import "./Footer.scss";

import fullLogo from "../../Assets/Images/full-logo-multi.png";

import {FaFacebook, FaInstagramSquare, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return <>
    <footer id="footer">
      <img src={fullLogo} alt="Little Lemon banner logo" className="footer_logo"/>
      <div id="footer-info">
        <div className="footer-info_left">
          <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#whats-new">What's New</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#reviews">Reviews</a></li>
          </ul>
        </div>
        <div className="footer-info_right">
          <ul>
            <li><a href="mailto:email@example.com">email@example.com</a></li>
            <li><p>(123) 456-7890</p></li>
            <li>123 Main St, Chicago, Il 12345</li>
          </ul>
        </div>
      </div>
      <div className="socials">
        <FaInstagramSquare size={25} className="footer_icon"/>
        <FaFacebook size={25}className="footer_icon"/>
        <FaTwitter size={25} className="footer_icon"/>
      </div>
    </footer>
  </>
}

export default Footer;