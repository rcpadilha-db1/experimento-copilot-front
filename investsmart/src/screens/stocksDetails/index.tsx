import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import localStorageService, { ActionData } from '../../store/localStorageService';

interface RouteParams {
   symbol: string;
}

const StockDetail = () => {

  const { symbol } = useParams<RouteParams>();

  const data = {
    companyName: 'XPTO',
    changePercentage: 99.9,
    currentPrice: 999.99,
    highPriceToday: 999.99,
    lowPriceToday: 999.99,
    lastClosePrice: 999.99,
    highPriceYear: 999.99,
    lowPriceYear: 999.99,
  };

  const handleSaveStocksAsFavorite = () => {
    const action: ActionData = { symbol: 'AAPL', name: 'Apple Inc.', type: 'Stock' };
    localStorageService.setAction('appleAction', action);
  };

  return (
    <div className="stock-detail">
      <Header />

      <div className="stock-info">
        <h2>{symbol} - Ação da empresa {data.companyName}</h2>
        <p className="change-percentage" style={{ color: data.changePercentage > 0 ? 'green' : 'red' }}>
          {data.changePercentage > 0 ? '+' : ''}{data.changePercentage}%
        </p>

        <div className="price-info">
          <div>
            <p>${data.currentPrice.toFixed(2)}</p>
            <p>Valor Atual</p>
          </div>
          <div>
            <p>${data.highPriceToday.toFixed(2)}</p>
            <p>Maior valor hoje</p>
          </div>
          <div>
            <p>${data.lowPriceToday.toFixed(2)}</p>
            <p>Menor valor hoje</p>
          </div>
          <div>
            <p>${data.lastClosePrice.toFixed(2)}</p>
            <p>Último fechamento</p>
          </div>
        </div>

        <hr />

        <div className="yearly-price-info">
          <div>
            <p>${data.highPriceYear.toFixed(2)}</p>
            <p>Maior valor</p>
          </div>
          <div>
            <p>${data.lowPriceYear.toFixed(2)}</p>
            <p>Menor valor</p>
          </div>
        </div>

        <div className="actions">
          <button onClick={handleSaveStocksAsFavorite}>Marcar Como Favorito</button>
          <button onClick={() => {}}>Voltar</button>
        </div>
      </div>
    </div>
  );
}

export default StockDetail;
