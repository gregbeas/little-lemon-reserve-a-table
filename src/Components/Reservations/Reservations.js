import React from 'react';

import './Reservations.scss';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import Form from './Form';

const Reservations = () => {

  return <>
  <Header />
  <main>
  <section id="reservations">
      <Form />
  </section>
  </main>
  <Footer />
  </>
};

export default Reservations;
