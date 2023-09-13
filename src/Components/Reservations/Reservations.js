import React from 'react';
import './Reservations.scss';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import { FaClock } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { FaWineBottle } from 'react-icons/fa';

import { Link } from "react-router-dom";

const ReservationsInfo = () => {
  return (
    <>
      <section id="reservations-info">
        <h2>Little Lemon</h2>
        <h1>Reservations</h1>
        <form className="reservations-form">
          <div className="input-div">
            <label htmlFor="date">Date: </label>
            <div className="input-wrapper">
              <input
                type="date"
                id="date"
                name="date"
                className="input"
                required
              ></input>
            </div>
          </div>
          <div className="input-div">
            <label htmlFor="time">Time: </label>
            <div className="input-wrapper">
              <select
                name="time"
                id="time"
                className="input"
                required
                defaultValue="default"
              >
                <option value="5-00">5:00 PM</option>
                <option value="5-30">5:30 PM</option>
                <option value="6-00">6:00 PM</option>
                <option value="6-30">6:30 PM</option>
                <option value="7-00">7:00 PM</option>
                <option value="7-30">7:30 PM</option>
                <option value="8-00">8:00 PM</option>
                <option value="default">What time? </option>
              </select>
              <FaClock color="#495E57" className="icon" />
            </div>
          </div>
          <div className="input-div">
            <label htmlFor="party">Party Size: </label>
            <div className="input-wrapper">
              <select
                id="party"
                name="party"
                className="input"
                required
                defaultValue="default"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="default">How many people?</option>
              </select>
              <FaRegUser color="#495E57" className="icon" />
            </div>
          </div>
          <div className='input-div'>
            <label htmlFor='occasion'>Occasion: </label>
            <div className='input-wrapper'>
              <select id="occasion" name='Occasion' className='input' defaultValue="default" required>
                <option value="default">Celebrating?</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date-night">Date Night</option>
                <option value="business-meal">Business Meal</option>
              </select>
              <FaWineBottle color="#495E57" className='icon'/>
            </div>
          </div>
          <div className="radio">
            <div className="radio-option">
              <label htmlFor="indoors">indoors</label>
              <input
                type="radio"
                id="indoors"
                name="indoor-outdoor"
                value="indoors"
              ></input>
            </div>
            <div className="radio-option">
              <label htmlFor="outdoors">outdoors</label>
              <input
                type="radio"
                id="outdoors"
                name="indoor-outdoor"
                value="outdoors"
              ></input>
            </div>
            <div className="radio-option">
              <label htmlFor="outdoors">no preference</label>
              <input
                type="radio"
                id="no-preference"
                name="indoor-outdoor"
                value="no-preference"
                checked="true"
              ></input>
            </div>
          </div>
          <Link to="/confirm-reservation"><button type="submit">Submit</button></Link>
        </form>
      </section>
    </>
  );
};

const Reservations = () => {
  return (
    <>
      <Header />
      <section id="reservations">
        <ReservationsInfo />
      </section>
      <Footer />
    </>
  );
};

export default Reservations;
