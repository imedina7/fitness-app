import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';

import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div);
})

it('renders properly', () => {
    const { getByTestId } = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(getByTestId('app-logo-link')).toHaveTextContent('Fitness app');
    expect(getByTestId('app-menu-buttons')).toBeInTheDocument();
})