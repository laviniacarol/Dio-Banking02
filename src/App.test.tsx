import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('@chakra-ui/react', () => require('./__mocks__/chakra'));

test('renders login card', () => {
  render(<App />);
  const titleElement = screen.getByText(/faça o login/i);
  expect(titleElement).toBeInTheDocument();
});
