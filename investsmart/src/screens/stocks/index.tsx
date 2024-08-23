import React, { useState } from 'react';
import './style.css';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

interface Stock {
  symbol: string;
  name: string;
  type: string;
}

const Stocks = () => {
  const [query, setQuery] = useState('');
  const stocks: Stock[] = [
    { symbol: 'XPTO', name: 'Ação XPTO', type: 'Equity' },
    { symbol: 'XPTO', name: 'Ação XPTO', type: 'Equity' },
    { symbol: 'XPTO', name: 'Ação XPTO', type: 'Equity' },
    { symbol: 'XPTO', name: 'Ação XPTO', type: 'Equity' },
    { symbol: 'XPTO', name: 'Ação XPTO', type: 'Equity' },
  ];

  const filteredStocks = stocks.filter(stock =>
    stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
    stock.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="stock-data-explorer">
      <Header />

      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquise por nome ou símbolo"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Pesquisar</button>
      </div>

      <table className="stock-table">
        <thead>
          <tr>
            <th>Símbolo</th>
            <th>Nome</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {filteredStocks.map((stock, index) => (
            <tr key={index}>
              <td><Link to={`/stocksDetails/${stock.symbol}`}>{stock.symbol}</Link></td>
              <td>{stock.name}</td>
              <td>{stock.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stocks;
