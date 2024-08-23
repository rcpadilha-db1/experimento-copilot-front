import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Stocks from '.';

describe('Stock Data Explorer', () => {
  it('renders header with title and navigation links', () => {
    render(<Stocks />);
    const titleElement = screen.getByText(/Stock Data Explorer/i);
    expect(titleElement).toBeInTheDocument();

    const homeLink = screen.getByText(/Home/i);
    const acoesLink = screen.getByText(/Ações/i);
    expect(homeLink).toBeInTheDocument();
    expect(acoesLink).toBeInTheDocument();
  });

  it('renders search bar with input and button', () => {
    render(<Stocks />);
    const inputElement = screen.getByPlaceholderText(/Pesquise por nome ou símbolo/i);
    const buttonElement = screen.getByText(/Pesquisar/i);
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders table with stocks', () => {
    render(<Stocks />);
    const symbolLinks = screen.getAllByText(/XPTO/i);
    const nameCells = screen.getAllByText(/Ação XPTO/i);
    const typeCells = screen.getAllByText(/Equity/i);

    expect(symbolLinks.length).toBe(5);
    expect(nameCells.length).toBe(5);
    expect(typeCells.length).toBe(5);
  });

  it('filters stocks based on query', () => {
    render(<Stocks />);
    const inputElement = screen.getByPlaceholderText(/Pesquise por nome ou símbolo/i);

    // Pesquisar por "xpto"
    fireEvent.change(inputElement, { target: { value: 'xpto' } });
    let symbolLinks = screen.getAllByText(/XPTO/i);
    expect(symbolLinks.length).toBe(5);

    // Pesquisar por um texto inexistente
    fireEvent.change(inputElement, { target: { value: 'inexistente' } });
    symbolLinks = screen.queryAllByText(/XPTO/i);
    expect(symbolLinks.length).toBe(0);
  });
});
