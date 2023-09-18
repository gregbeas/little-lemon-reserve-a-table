import React, { useState } from 'react';

import ReservationsInfo from './ReservationsInfo';
import ConfirmReservation from './ConfirmReservation';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

// const [page, setPage] = useState(0);

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    party: '',
    occasion: '',
    locationPreference: 'no preference',
    name: '',
    phone: '',
    email: '',
  });

  const pageOneValid = () => {
    if( formData.date.length > 0 && formData.time.length > 0 && formData.party.length > 0) {
      return true;
    } else { return false}
  }

  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


  const pageTwoValid = () => {
    if ( formData.name.length > 0 && formData.email.match(emailRegex) && formData.phone.length === 10) {
      return true
    } else {return false}
  }

  const PageDisplay = () => {
    if (page === 0) {
      return <ReservationsInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <ConfirmReservation formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <form>
      <div className="button-wrapper">
        <div className="progress">
          <div className="indicator-wrapper">
            <div
              className="progress-indicator"
              style={{ borderRadius: '16px 0 0 8px' }}
            ></div>
            <div
              className="progress-indicator"
              id="progress-indicator_2"
              style={
                page === 0
                  ? { backgroundPosition: 'right bottom' }
                  : { backgroundPosition: 'left bottom' }
              }
            ></div>
          </div>
        </div>
        {PageDisplay()}
      </div>
      <div className="button-wrapper">
        <button
          className="back-button"
          disabled={page === 0}
          onClick={() => setPage(0)}
        >
          <FaArrowCircleLeft /> Back
        </button>
        <button className="next-button" type="submit" onClick={(e) => {
          if (page === 0 && pageOneValid() === true) {
            e.preventDefault()
            setPage(1);
          } else if (page === 0 && pageOneValid() === false) {
            return
          } else if (page === 1 && pageTwoValid() === false) {
            return
          } else if (page === 1 && pageTwoValid() === true) {
            e.preventDefault()
            console.log(formData);
            //POST TO API HERE
            alert('Reservation confirmation will be sent to your email! See you soon!')
            setFormData({
              date: '',
              time: '',
              party: '',
              occasion: '',
              locationPreference: 'no preference',
              name: '',
              phone: '',
              email: '',
            })
            setPage(0);
        }
        }}>
          {page === 1 ? 'Make Reservation' : 'Next'}
          {page === 1 ? "" : <FaArrowCircleRight />}
        </button>
      </div>
    </form>
  );
};

export default Form;
