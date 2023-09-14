import React from 'react';
import { useState } from 'react';
import './Reservations.scss';

import { FaClock } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { FaWineBottle } from 'react-icons/fa';

const ReservationsInfo = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [party, setParty] = useState('');
  const [occasion, setOccasion] = useState('');
  const [locationPreference, setLocationPreference] = useState('no preference');
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');

  const formData = {
    date: date,
    time: time,
    party: party,
    occasion: occasion,
    locationPreference: locationPreference,
    // name: name,
    // phone: phone,
    // email: email,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted!');
    console.log(formData);
  };
  return (
    <>
      <section id="reservations-info">
        <h2>Little Lemon</h2>
        <h1>Reservations</h1>
        <form className="reservations-form" onSubmit={handleSubmit}>
          <div className="input-div">
            <label htmlFor="date">Date:</label>
            <div className="input-wrapper">
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) =>
                  setDate(
                    e.target.value
                  )
                }
                className="input"
                required
              ></input>
            </div>
          </div>
          <div className="input-div">
            <label htmlFor="time">Time: </label>
            <div className="input-wrapper">
              <select
                name= "time"
                value={time}
                onChange={(e) =>
                  setTime(e.target.value)
                }
                id="time"
                className="input"
                required
              >
                <option value="" disabled>What time? </option>
                <option value="5:00">5:00 PM</option>
                <option value="5:30">5:30 PM</option>
                <option value="6:00">6:00 PM</option>
                <option value="6:30">6:30 PM</option>
                <option value="7:00">7:00 PM</option>
                <option value="7:30">7:30 PM</option>
                <option value="8:00">8:00 PM</option>
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
                value={party}
                onChange={(e) =>
                  setParty(e.target.value)
                }
                className="input"
                required
              >
                <option value="" disabled>How many people?</option>
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
              </select>
              <FaRegUser color="#495E57" className="icon" />
            </div>
          </div>
          <div className="input-div">
            <label htmlFor="occasion">Occasion: </label>
            <div className="input-wrapper">
              <select
                id="occasion"
                name="occasion"
                className="input"
                value={occasion}
                onChange={(e) =>
                  setOccasion(e.target.value)
                }
              >
                <option value="" disabled>Celebrating?</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date-night">Date Night</option>
                <option value="business-meal">Business Meal</option>
              </select>
              <FaWineBottle color="#495E57" className="icon" />
            </div>
          </div>
          <div className="radio">
            <div className="radio-option">
              <label htmlFor="indoors">indoors</label>
              <input
                type="radio"
                id="indoors"
                name="locationPreference"
                onClick={() =>
                  setLocationPreference("indoors")
                }
                value="indoors"
              ></input>
            </div>
            <div className="radio-option">
              <label htmlFor="outdoors">outdoors</label>
              <input
                type="radio"
                id="outdoors"
                name="locationPreference"
                onClick={() =>
                  setLocationPreference("outdoors")
                }
                value="outdoors"
              ></input>
            </div>
            <div className="radio-option">
              <label htmlFor="outdoors">no preference</label>
              <input
                type="radio"
                id="no-preference"
                name="locationPreference"
                value="no preference"
                onClick={() =>
                  setLocationPreference("no preference")
                }
                defaultChecked="true"
              ></input>
            </div>
          </div>
            {/* <button type="submit">Next</button> */}
        </form>
      </section>
    </>
  );
};

export default ReservationsInfo;
