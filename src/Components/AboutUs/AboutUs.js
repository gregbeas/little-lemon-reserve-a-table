import React from "react";
import "./AboutUs.scss";

import AboutUsImage from "../../Assets/Images/about-us.jpg";

const AboutUs = () => {
  return <>
  <section id="about-us">
    <div className="secContainer">
        <h2>About Us</h2>
        <div className="wrapper">
          <img src={AboutUsImage} alt="Chef Arthur plating a dish"></img>
          <p>
            <span>Little Lemon</span> is a family owned Mediterranean restaurant,
            focused on recipes served with a modern twist.<br></br><br></br>
            Established in 2019 in Chicago's downtown. Head chef Arthur has been
            helping <span>Little Lemon</span> serve fresh and innovative cuisine to hundreds of eager diners.
          </p>
        </div>
      </div>
    </section>
  </>
}

export default AboutUs;