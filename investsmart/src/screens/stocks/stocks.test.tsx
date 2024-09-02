import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Stocks from '.';

jest.mock('../../service/apiService', () => ({
  requestObtainStocksList: jest.fn().mockResolvedValue([
    { symbol: 'AAPL', name: 'Apple Inc.', type: 'Technology' },
    { symbol: 'TSLA', name: 'Tesla, Inc.', type: 'Automotive' },
    { symbol: 'AMZN', name: 'Amazon.com, Inc.', type: 'E-commerce' },
  ]),
}));

describe('Stocks Component', () => {
  it('should render the stock table after fetching data', async () => {
    render(
      <BrowserRouter>
        <Stocks />
      </BrowserRouter>
    );

    const rows = await screen.findAllByRole('row');
    expect(rows).toHaveLength(4);
  });

  it('should filter stocks based on user input and search button click', async () => {
    render(
      <BrowserRouter>
        <Stocks />
      </BrowserRouter>
    );

    await screen.findAllByRole('row');

    const searchInput = screen.getByPlaceholderText('Pesquise por nome ou símbolo');
    fireEvent.change(searchInput, { target: { value: 'Apple' } });

    const searchButton = screen.getByText('Pesquisar');
    fireEvent.click(searchButton);

    const filteredRows = await screen.findAllByRole('row');
    expect(filteredRows).toHaveLength(2);
    expect(screen.getByText('Apple Inc.')).toBeInTheDocument();
    expect(screen.queryByText('Tesla, Inc.')).not.toBeInTheDocument();
  });

  it('should display loading message while fetching data', () => {
    render(
      <BrowserRouter>
        <Stocks />
      </BrowserRouter>
    );

    expect(screen.getByText('Carregando as ações...')).toBeInTheDocument();
  });

  it('should display an error message if fetching stocks fails', async () => {
    jest.spyOn(require('../../service/apiService'), 'requestObtainStocksList').mockRejectedValueOnce(new Error('Erro ao buscar dados'));

    render(
      <BrowserRouter>
        <Stocks />
      </BrowserRouter>
    );

    const errorMessage = await screen.findByText('Não foi possível carregar as ações.');
    expect(errorMessage).toBeInTheDocument();
  });
});
