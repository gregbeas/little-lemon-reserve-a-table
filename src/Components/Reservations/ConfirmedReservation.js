import React from 'react';
import './Reservations.scss';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const ConfirmedReservation = ({formData, setFormData, page, setPage}) => {

  const dateFormatter = (date) => {
    const splitDate = date.split("-");
    let month = "";
    switch(splitDate[1]) {
      case '01':
        month = 'January';
        break;
      case '02':
        month = "February";
        break;
      case '03':
        month = "March";
        break;
      case '04':
        month = "April";
        break;
      case '05':
        month = "May";
        break;
      case '06':
        month = "June";
        break;
      case '07':
        month = "July";
        break;
      case '08':
        month = "August";
        break;
      case '09':
        month = 'September';
        break;
      case '10':
        month = 'October';
        break;
      case '11':
        month = 'November';
        break;
      case '12':
        month = "December";
        break;
    }
    const formattedDate = `${splitDate[2]} ${month}, ${splitDate[0]}`;
    return formattedDate;

  }

 return ( <>
    <section id="reservations" className="reservation-confirmed">
      <h1>Reservation Confirmed</h1>
      <h2>See you soon!</h2>
      <p className='confirmed-text'><span>Name:</span> {formData.name}</p>
      <p className='confirmed-text'>
      <span>Reservation Date:</span>  {dateFormatter(formData.date)}
      </p>
      <p className='confirmed-text'><span>Reservation Time:</span>  {formData.time}</p>
      <p className='confirmed-text'><span>Party Size:</span>  {formData.party}</p>
      <p className='confirmed-text'><span>Occasion:</span>  {formData.occasion}</p>
      <p className='confirmed-text'><span>Location Preference:</span>  {formData.locationPreference}</p>
      <div className="button-wrapper">
        <button
          onClick={() => {
            setPage(0);
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
          }}>
          Back to Reservations
        </button>
        </div>
    </section>
  </>
 )
}

export default ConfirmedReservation;