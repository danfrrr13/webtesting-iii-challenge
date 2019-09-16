// Test away

import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Display from './Display';

test('Display renders', () => {
    render(<Display />);
});