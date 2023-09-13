import './App.scss';

import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Reservations from './Components/Reservations/Reservations';
import ReservationsConfirm from './Components/Reservations/ReservationsConfirm';

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/confirm-reservation" element={<ReservationsConfirm />}></Route>
      </Routes>
    </>
  );
}

export default App;
