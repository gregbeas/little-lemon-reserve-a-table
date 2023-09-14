import React from 'react';
import { useState } from 'react';
import './Reservations.scss';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import ConfirmReservation from './ConfirmReservation';
import ReservationsInfo from './ReservationsInfo';
import Form from './Form';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Reservations = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted!');
    console.log(formData);
  };

  return <>
  <Header />
  <section id="reservations">
    <form onSubmit={handleSubmit()}>
      <Form />
    </form>
  </section>
  <Footer />
  </>
};

export default Reservations;
