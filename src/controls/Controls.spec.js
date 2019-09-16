// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

test('Controls renders', () => {
    render(<Controls />);
});

test('Shows buttons', () => {
    const container = render(<Controls />);

    container.getByText(/lock gate/i);
    container.getByText(/close gate/i);
});