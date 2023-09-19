import React from "react";
import "./Highlights.scss";

import diningRoom from "../../Assets/Images/dining-room.jpg";
import foodPhoto from "../../Assets/Images/chicken.jpg";

import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Highlights = () => {
  const cardData = [
    {
      id: 1,
      photo: diningRoom,
      text: 'Come See Our New Dining Room!'
    },
    {
      id: 2,
      photo: foodPhoto,
      text: 'We Have New Menu Items For Fall!'
    }
  ]

  return <>
    <section id="highlights">
    <div className="secContainer card-container">
      <Carousel autoPlay infiniteLoop stopOnHover showThumbs={false} showArrows={false} showStatus={false} interval={10000} swipeable={true}>
        <article className="card">
            <img src={cardData[0].photo} alt="Little Lemon dining room"></img>
            <h2>{cardData[0].text}</h2>
          </article>
          <article className="card">
            <img src={cardData[1].photo} alt="New fall dish"></img>
            <h2>{cardData[1].text}</h2>
          </article>
      </Carousel>
      </div>
    </section>
  </>
}

export default Highlights;