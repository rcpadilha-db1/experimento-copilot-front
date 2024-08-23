import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StockDetail from '.';

describe('StockDetail Component', () => {
  it('renders stock details correctly', () => {
    render(<StockDetail />);
    
    expect(screen.getByText(/XPTO - Ação da empresa XPTO/i)).toBeInTheDocument();
    expect(screen.getByText(/\+99.9%/i)).toBeInTheDocument();
    expect(screen.getAllByText(/\$999.99/i).length).toBe(7);
    expect(screen.getByText(/Valor Atual/i)).toBeInTheDocument();
    expect(screen.getByText(/Maior valor hoje/i)).toBeInTheDocument();
    expect(screen.getByText(/Menor valor hoje/i)).toBeInTheDocument();
    expect(screen.getByText(/Último fechamento/i)).toBeInTheDocument();
    expect(screen.getByText(/Maior valor/i)).toBeInTheDocument();
    expect(screen.getByText(/Menor valor/i)).toBeInTheDocument();
  });

  // it('triggers onMarkAsFavorite when "Marcar Como Favorito" button is clicked', () => {
  //   render(<StockDetail />);
    
  //   fireEvent.click(screen.getByText(/Marcar Como Favorito/i));
  //   expect(mockProps.onMarkAsFavorite).toHaveBeenCalledTimes(1);
  // });

  // it('triggers onBack when "Voltar" button is clicked', () => {
  //   render(<StockDetail />);
    
  //   fireEvent.click(screen.getByText(/Voltar/i));
  //   expect(mockProps.onBack).toHaveBeenCalledTimes(1);
  // });
});
