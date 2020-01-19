import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders HOJA DE PERSONAJE', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/HOJA DE PERSONAJE/i);
  expect(linkElement).toBeInTheDocument();
});
