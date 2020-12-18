import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { cleanup } from '@testing-library/react';
import Sidebar from '../Sidebar';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>,
    div,
  );
});
