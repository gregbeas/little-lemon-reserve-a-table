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

  return <>
  <Header />
  <section id="reservations">
      <Form />
  </section>
  <Footer />
  </>
};

export default Reservations;
