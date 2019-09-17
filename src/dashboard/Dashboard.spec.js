// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Dashboard from './Dashboard';

test('Dashboard renders', () => {
    render(<Dashboard />);
});

test('Shows unlocked and open', () => {
    const container = render(<Dashboard />);

    container.getByText(/unlocked/i);
    container.getByText(/open/i);
});

test('Displays closed after close button click', async () => {
    const container = render(<Dashboard />);

    const button = container.getByText(/close gate/i);

    await fireEvent.click(button);

    container.getByText(/closed/i);
});

test('Displays closed and locked after close and lock buttons are clicked', async () => {
    const container = render(<Dashboard />);

    const closeButton = container.getByText(/close gate/i);

    await fireEvent.click(closeButton);

    const lockButton = container.getByText(/lock gate/i);

    await fireEvent.click(lockButton);

    container.getByText(/open gate/i);
});