import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

jest.mock('@chakra-ui/react', () => require('./__mocks__/chakra'));

beforeEach(() => {
  localStorage.clear();
});

test('renders login card', () => {
  render(<App />);
  const titleElement = screen.getByText(/faça o login/i);
  expect(titleElement).toBeInTheDocument();
});

test('não deve exibir a tela de login caso já exista usuário logado no localStorage', async () => {
  localStorage.setItem('diobank', JSON.stringify({
    login: true,
    user: {
      id: '1',
      name: 'Teste Dio',
      email: 'tester@dio.bank'
    }
  }));

  render(<App />);

  await waitFor(() => {
    expect(screen.queryByText(/faça o login/i)).not.toBeInTheDocument();
  });
});
