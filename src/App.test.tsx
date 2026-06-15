import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders portfolio heading', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(getByRole('heading', { level: 1, name: /jordan barrilleaux/i })).toBeInTheDocument();
});
