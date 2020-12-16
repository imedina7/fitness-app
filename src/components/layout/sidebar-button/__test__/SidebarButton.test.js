import React from 'react';
import ReactDOM from 'react-dom';
import SidebarButton from '../SidebarButton';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SidebarButton />, div);
})
it('has 3 bars', () => {
    const { getByTestId } = render(<SidebarButton />);
    const container = getByTestId('sidebar-btn');
    const bars = container.querySelectorAll('span.sbtn-bar');
    expect(bars.length).toBe(3);
})