import React from "react";
import "./Footer.scss";

import fullLogo from "../../Assets/Images/full-logo-multi.png";

import {FaFacebook, FaInstagramSquare, FaTwitter} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return <>
    <footer id="footer">
      <img src={fullLogo} alt="Little Lemon banner logo" className="footer_logo"/>
      <hr/>
      <div id="footer-info">
        <div className="footer-info_left">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/menu"><li>Menu</li></Link>
            <Link to="/reservations"><li>Reservations</li></Link>
          </ul>
        </div>
        <div className="footer-info_right">
          <ul>
            <li><a href="mailto:email@example.com">email@example.com</a></li>
            <li><p>(123) 456-7890</p></li>
            <li>123 Main St, Chicago, Il 12345</li>
            <br/>
            <li><b>Hours:</b></li>
            <li>
                Sun: 10 AM - 7 PM<br></br>
                Mon: CLOSED<br></br>
                Tues - Thur: 10 AM - 8 PM<br></br>
                Fri - Sat: 10 AM - 10 PM<br></br>
            </li>
          </ul>
        </div>
      </div>
      <div className="socials">
        <button><FaInstagramSquare size={25} className="footer_icon"/></button>
        <button><FaFacebook size={25}className="footer_icon"/></button>
        <button><FaTwitter size={25} className="footer_icon"/></button>
      </div>
    </footer>
  </>
}

export default Footer;