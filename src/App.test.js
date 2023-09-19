import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import App from './App';
import Reservations from './Components/Reservations/Reservations';
import Form from './Components/Reservations/Form';
import { BrowserRouter } from 'react-router-dom';

test('Renders reservations heading', () => {
  render(
    <BrowserRouter>
      <Reservations />
    </BrowserRouter>
  );
  const headingElement = screen.getByRole('heading', {name: 'Reservations'});
  expect(headingElement).toBeInTheDocument();
});

test('back button is disabled on first page',  () => {
  render(
    <BrowserRouter>
      <Reservations />
    </BrowserRouter>
  );

  const backButton = screen.getByRole('button', {name: "Back"});
  expect(backButton).toBeDisabled();
})

test('next button changes to submit', () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );

  const nextButton = screen.getByRole('button', {name: "Next"});
})
