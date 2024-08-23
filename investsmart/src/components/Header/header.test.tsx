import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '.';

describe('header', () => {
  it('renders header', () => {
    render(<Header />);
    const linkA = screen.getByText(/Home/i);
    expect(linkA).toBeInTheDocument();
  });
});
