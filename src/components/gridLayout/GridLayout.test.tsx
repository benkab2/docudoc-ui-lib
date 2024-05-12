import { render, screen } from '@testing-library/react';
import React from 'react';
import { Column, Section } from './GridLayout';

describe('Column component renders', () => {
  it('should render the component successfully', () => {
    render(<Column children={<></>} />);
    const column = screen.getByTestId('column');
    expect(column).toBeTruthy();
  });
});

describe('Section component renders', () => {
  it('should render the component successfully', () => {
    render(<Section children={<></>} />);
    const section = screen.getByTestId('section');
    expect(section).toBeTruthy();
  });
});
