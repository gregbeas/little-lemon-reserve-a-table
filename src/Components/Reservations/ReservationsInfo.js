import React from 'react';
import './Reservations.scss';

import { FaClock } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { FaWineBottle } from 'react-icons/fa';

const ReservationsInfo = ({ formData, setFormData }) => {

  return (
    <>
      <section id="reservations-info">
        <h2>Little Lemon</h2>
        <h1>Reservations</h1>
        <div className="reservations-form" id="form1">
          <div className="input-div">
            <label htmlFor="date">Date:</label>
            <div className="input-wrapper">
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: e.target.value,
                  })
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
                name="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    time: e.target.value,
                  })
                }
                id="time"
                className="input"
                required
              >
                <option value="" disabled>
                  What time?{' '}
                </option>
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
                value={formData.party}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    party: e.target.value,
                  })
                }
                className="input"
                required
              >
                <option value="" disabled>
                  How many people?
                </option>
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
                value={formData.occasion}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    occasion: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Celebrating?
                </option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date night">Date Night</option>
                <option value="business meal">Business Meal</option>
              </select>
              <FaWineBottle color="#495E57" className="icon" />
            </div>
          </div>
          <div className="radio" id="radio">
            <div className="radio-option">
              <label htmlFor="indoors">indoors</label>
              <input
                type="radio"
                id="indoors"
                name="locationPreference"
                onClick={(e) =>
                  setFormData({
                    ...formData,
                    locationPreference: e.target.value,
                  })
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
                onClick={(e) =>
                  setFormData({
                    ...formData,
                    locationPreference: e.target.value,
                  })
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
                onClick={(e) =>
                  setFormData({
                    ...formData,
                    locationPreference: e.target.value,
                  })
                }
                defaultChecked="true"
              ></input>
            </div>
          </div>
          {/* <button type="submit" disabled={submitDisabled}>Submit</button>
            <button type="button" disabled={editDisabled} onClick={handleEdit}>Edit</button> */}
        </div>
      </section>
    </>
  );
};

export default ReservationsInfo;
