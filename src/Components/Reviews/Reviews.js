import React from "react";
import "./Reviews.scss";

const Reviews = () => {
  const reviewData = [
    {
      id: 1,
      name: 'Terry',
      location: 'Chicago',
      review: '“Chef Arthur never ceases to amaze me with his creations. I just have to keep coming back just to try the new dishes!”'
    },
    {
      id: 2,
      name: 'Brenda',
      location: 'Los Angeles',
      review: '“Every time I think I have seen everything this restaurant can do, I am surprised yet again with their offerings and cannot wait to come back”'
    },
    {
      id: 3,
      name: 'Paul',
      location: 'Miami',
      review: '“This restaurant is the best!!! The service is great, and the food is to die for! It is the first place I think of after work!”'
    }
  ]
  return <>
    <section id="reviews">
      <div className="secContainer">
        <h2>What Our Customers Are Saying About Us</h2>
        <div className="card-wrapper">
          {reviewData.map((review) => {
            return (
              <div className="review-card" key={review.id}>
                <p className="review-name">
                  <span className="name">{review.name}</span>, <span className="location">{review.location}</span>
                </p>
                <p className="review">{review.review}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  </>
}

export default Reviews;