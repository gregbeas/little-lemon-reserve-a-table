import React, {useState} from "react";

import ReservationsInfo from "./ReservationsInfo";
import ConfirmReservation from "./ConfirmReservation";

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

// const [page, setPage] = useState(0);

const Form = () => {

  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if(page === 0) {
      return (
        <>
        <ReservationsInfo />
        <button onClick={() => setPage(1)}>Next <FaArrowCircleRight /></button>
      </>
      )
    } else if(page === 1) {
      return (
        <>
          <ConfirmReservation />
          <button className='back-button' onClick={() => setPage(0)}><FaArrowCircleLeft /> Back</button>
        </>
      )
    }
  }

  return <div>
    {PageDisplay()};
  </div>
}

export default Form;