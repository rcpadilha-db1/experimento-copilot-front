import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '.';

describe('Stock Data Explorer', () => {
  it('renders header with title and navigation links', () => {
    render(<Home />);
    const titleElement = screen.getByText(/Stock Data Explorer/i);
    expect(titleElement).toBeInTheDocument();

    const homeLink = screen.getByText(/Home/i);
    const acoesLink = screen.getByText(/Ações/i);
    expect(homeLink).toBeInTheDocument();
    expect(acoesLink).toBeInTheDocument();
  });

  it('renders favorite items with correct names and codes', () => {
    render(<Home />);
    const favoriteItem1 = screen.getByText(/STKA/i);
    const favoriteItem2 = screen.getByText(/STKB/i);
    const favoriteItem3 = screen.getByText(/STKC/i);

    expect(favoriteItem1).toBeInTheDocument();
    expect(favoriteItem2).toBeInTheDocument();
    expect(favoriteItem3).toBeInTheDocument();

    const favoriteName1 = screen.getByText(/Empresa A/i);
    const favoriteName2 = screen.getByText(/Empresa B/i);
    const favoriteName3 = screen.getByText(/Empresa C/i);

    expect(favoriteName1).toBeInTheDocument();
    expect(favoriteName2).toBeInTheDocument();
    expect(favoriteName3).toBeInTheDocument();
  });

  it('renders news items with correct titles and descriptions', () => {
    render(<Home />);

    const newsTitle1 = screen.getByText(/BeyondMath Scoops Up \$8.5M Seed Round/i);
    const newsTitle2 = screen.getByText(/Insider Sale: Patrick Callahan Sells 7,697 Shares/i);

    expect(newsTitle1).toBeInTheDocument();
    expect(newsTitle2).toBeInTheDocument();

    const newsDescription1 = screen.getByText(/BeyondMath Scoops Up/i);
    const newsDescription2 = screen.getByText(/Patrick Callahan, Personal Lines/i);

    expect(newsDescription1).toBeInTheDocument();
    expect(newsDescription2).toBeInTheDocument();
  });

  it('removes favorite item when "remover" button is clicked', () => {
    render(<Home />);
    const removeButtons = screen.getAllByText(/remover/i);

    expect(removeButtons.length).toBe(3); // Deve haver 3 botões de remover inicialmente

    fireEvent.click(removeButtons[0]); // Simula o clique no primeiro botão de remover

    const updatedRemoveButtons = screen.getAllByText(/remover/i);
    expect(updatedRemoveButtons.length).toBe(2); // Após remover, deve haver 2 botões restantes
  });
});
