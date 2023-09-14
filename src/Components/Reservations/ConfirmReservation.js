import React, {useState} from 'react';
import './Reservations.scss';

const ConfirmReservation = () => {

  return (
    <>
      <section id="reservations-confirm">
        <h2>Little Lemon</h2>
        <h1>Confirm Reservation</h1>
        <form className="reservations-form">
          <div className="input-div">
            <label htmlFor="name">Name: </label>
            <div className="input-wrapper">
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                placeholder="name"
                required
              ></input>
            </div>
          </div>
          <div className="input-div">
            <label htmlFor="email">Name: </label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                placeholder="example@email.com"
                required
              ></input>
            </div>
          </div>
          <div className="input-div">
            <label htmlFor="name">Phone: </label>
            <div className="input-wrapper">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input"
                placeholder="0123456789"
                pattern="[0-9]{10}"
                required
              ></input>
            </div>
          </div>
            {/* <button className="back-button" type="button">
              <FaArrowCircleLeft /> Back
            </button> */}
          <button type="submit">Make Reservation</button>
        </form>
      </section>
    </>
  );
};

export default ConfirmReservation;
