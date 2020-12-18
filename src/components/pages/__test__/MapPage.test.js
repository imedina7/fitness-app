import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import MapPage from '../MapPage';

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapPage />, div);
});

it('renders map', () => {
  const { getByTestId } = render(<MapPage />);
  expect(getByTestId('map-component')).toBeInTheDocument();
});
