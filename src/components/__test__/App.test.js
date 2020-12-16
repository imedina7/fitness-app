import { cleanup, render, screen } from '@testing-library/react';
import AppHeader from '../layout/header/Header';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';

afterEach(cleanup);
test('renders header', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headerElement = render(<BrowserRouter><AppHeader /></BrowserRouter>);
  expect(headerElement.baseElement).toBeInTheDocument();
});

it('renders home page', () => {
  const { getByTestId } = render(<BrowserRouter><App /></BrowserRouter>);
  expect(getByTestId('home-page')).toBeInTheDocument();
})

it('renders sidebar menu', () => {
  const { getByTestId } = render(<BrowserRouter><App /></BrowserRouter>);
  expect(getByTestId('sidebar-menu')).toBeInTheDocument();
})