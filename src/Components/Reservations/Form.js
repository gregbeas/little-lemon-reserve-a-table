import React, { useState } from 'react';

import {submitAPI} from '../../api/api.js'

import { useNavigate } from "react-router-dom";

import ReservationsInfo from './ReservationsInfo';
import ConfirmReservation from './ConfirmReservation';
import ConfirmedReservation from './ConfirmedReservation.js';

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
    } else if (page ===2) {
      return <ConfirmedReservation formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>;
    }
  };

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      setPage(2);
    }

  }

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
      <div style={page === 2 ? {display: 'none'} : {display: 'block'}} className="button-wrapper">
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
            alert('Reservation confirmation will be sent to your email! See you soon!')
            submitForm(formData);
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
