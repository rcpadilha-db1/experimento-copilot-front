import { useCallback, useEffect, useState } from 'react';
import './style.css';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { requestObtainStocksList, StocksDataResponse } from '../../service/apiService';

const Stocks = () => {
  const [query, setQuery] = useState('');
  const [stocksList, setStocksList] = useState<StocksDataResponse[]>([]);
  const [filteredStocks, setFilteredStocks] = useState<StocksDataResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleRequestStocksList = useCallback(async () => {
    try {
      console.log('Requesting Stocks');
      const response = await requestObtainStocksList();
      setStocksList(response);
      setFilteredStocks(response);
    } catch (error) {
      console.error('Error fetching Stocks:', error);
      setError('Não foi possível carregar as ações.');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = () => {
    const filtered = stocksList.filter(stock =>
      stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
      stock.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStocks(filtered);
  };

  useEffect(() => {
    handleRequestStocksList();
  }, [handleRequestStocksList]);

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
        <button onClick={handleSearch}>Pesquisar</button>
      </div>

      {loading ? (
        <p>Carregando as ações...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
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
      )}
    </div>
  );
}

export default Stocks;
