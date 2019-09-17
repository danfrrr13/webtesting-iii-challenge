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

test('Shows correct text with true props', () => {
    const container = render(<Controls locked={true} closed={true} />);

    container.getByText(/unlock gate/i);
    container.getByText(/open gate/i)
});

test('Shows correct text with false props', () => {
    const container = render(<Controls locked={false} closed={false} />);

    container.getByText(/lock gate/i);
    container.getByText(/close gate/i)
});