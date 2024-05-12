import { render, screen } from '@testing-library/react';
import React from 'react';
import { Typography } from './Typography';

describe('Typography component renders', () => {
  it('should render the component successfully', () => {
    render(<Typography children="Typography" />);
    const typography = screen.getByTestId('typography');
    expect(typography).toBeTruthy();
  });
});
