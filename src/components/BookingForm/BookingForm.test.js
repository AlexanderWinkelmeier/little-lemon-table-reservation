import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, timesReducer } from '../../App';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Reserve a table');
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns expected array of times', () => {
  const result = initializeTimes();
  result.forEach((time) => {
    expect(result).toContain(time);
  });
});

test('updateTimes returns the same state', () => {
  const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'UPDATE_TIMES', times: currentState };
  const result = timesReducer(currentState, action);
  expect(result).toEqual(currentState);
});
