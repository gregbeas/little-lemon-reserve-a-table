import React from 'react';
import './Reservations.scss';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import { Link } from "react-router-dom";

const ConfirmReservation = () => {
  return (
    <>
      <section id="reservations-confirm">
        <h2>Little Lemon</h2>
        <h1>Confirm Reservation</h1>
        <form className="reservations-form">
          <div className="input-div">
            <label htmlFor="name">Name: </label>
            <div className='input-wrapper'>
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
            <div className='input-wrapper'>
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
            <div className='input-wrapper'>
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
          <Link to="/reservations"><button className='back-button'>Go Back</button></Link>
          <button type='submit'>Make Reservation</button>
        </form>

      </section>
    </>
  );
};

const ReservationsConfirm = () => {
  return (
    <>
      <Header />
      <section id="reservations">
        <ConfirmReservation />
      </section>
      <Footer />
    </>
  );
};

export default ReservationsConfirm;