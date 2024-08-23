import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewsItem from '.';

describe('header', () => {
  it('renders header', () => {
    render(<NewsItem title="BeyondMath Scoops Up $8.5M Seed Round" date="20/08/2024, 18:01h" description="BeyondMath Scoops Up $8.5M" />);
    const code = screen.getByText('20/08/2024, 18:01h');
    expect(code).toBeInTheDocument();
  });
});
