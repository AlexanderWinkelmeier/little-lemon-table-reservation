import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App'; // Importiere die Haupt-App, um die Navigation zu simulieren

test('displays the booking confirmation page after submitting the form', async () => {
  render(
    <MemoryRouter initialEntries={['/reservations']}>
      <App />
    </MemoryRouter>
  );

  // Erwartung, dass die Bestätigungsmeldung initial nicht vorhanden ist
  expect(
    screen.queryByText('Your reservation was successful')
  ).not.toBeInTheDocument();

  // Warten darauf, dass das Formular erscheint
  await waitFor(() => {
    expect(screen.getByText('Reserve a table')).toBeInTheDocument();
  });

  // Simulation des Formularabsendens
  fireEvent.submit(
    screen.getByRole('button', { name: /Make Your reservation/i })
  );

  // Warten darauf, dass die Bestätigungsmeldung erscheint
  await waitFor(() => {
    expect(
      screen.getByText('Your reservation was successful')
    ).toBeInTheDocument();
  });
});
