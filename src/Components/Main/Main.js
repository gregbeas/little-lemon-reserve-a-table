import React from "react";
import "./Main.scss";

import Hero from "../../Components/Hero/Hero";
import Highlights from "../../Components/Highlights/Highlights"
import AboutUs from "../../Components/AboutUs/AboutUs"
import Reviews from "../../Components/Reviews/Reviews"

const Main = () => {
  return <>
      <Hero />
      <Highlights />
      <AboutUs />
      <Reviews />
  </>
}

export default Main;