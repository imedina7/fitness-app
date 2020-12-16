import React from 'react';
import ReactDOM from 'react-dom';
import ButtonLink from '../ButtonLink';

import { BrowserRouter } from 'react-router-dom';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><ButtonLink url='/'/></BrowserRouter>, div);
})

it ('links to somewhere', () => {
    const { getByTestId } = render(<BrowserRouter><ButtonLink url='/'/></BrowserRouter>);
    const linkBtn = getByTestId('link-btn');

    expect(linkBtn).toBeInTheDocument();
    expect(linkBtn).toHaveAttribute('href');
    expect(linkBtn.getAttribute('href')).toBe('/');
})

it ('renders properly', () => {
    const { getByTestId } = render(<BrowserRouter><ButtonLink url='/' title='this is the button link text'/></BrowserRouter>);
    const linkBtn = getByTestId('link-btn');
    expect(linkBtn).toHaveTextContent('this is the button link text');
})