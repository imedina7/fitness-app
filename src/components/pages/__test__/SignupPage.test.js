import React from 'react';
import ReactDOM from 'react-dom';
import SignupPage from '../SignupPage';

import { BrowserRouter } from 'react-router-dom';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignupPage />, div);
})