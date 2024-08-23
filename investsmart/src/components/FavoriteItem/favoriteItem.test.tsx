import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FavoriteItem from '.';

describe('header', () => {
  it('renders header', () => {
    render(<FavoriteItem code="STKA" name="Empresa A" />);
    const code = screen.getByText(/STKA/i);
    expect(code).toBeInTheDocument();
  });
});
