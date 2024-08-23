import { Link, useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { IAcao } from '../../interfaces/acoes';
import { addSignal } from './detalhes.helper';
import { Button } from 'rsuite';
import { PriceDescription } from './components/PriceDescription';
import './index.css';

export const Detalhes = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useApi<IAcao[]>(
    `https://api.stockdata.org/v1/data/quote?symbols=${id}&api_token=${import.meta.env.VITE_API_TOKEN}`,
    'get'
  );
  const acao = data?.[0];

  return (
    <main className="main">
      {error && <div className="error">Erro ao carregar dados</div>}
      {loading && <div className="loading">Carregando...</div>}
      {acao && (
        <div className="acao">
          <h4>{`${acao.ticker} - ${acao.name}`}</h4>
          <h3>{acao.type}</h3>
          <h3 className={acao.day_change > 0 ? 'green' : 'red'}>
            {addSignal(acao.day_change)}
          </h3>
          <div>
            <div className="grid">
              <PriceDescription price={acao.price} description="Valor atual" />
              <PriceDescription
                price={acao.day_high}
                description="Maior valor hoje"
              />
              <PriceDescription
                price={acao.day_low}
                description="Menor valor hoje"
              />
              <PriceDescription
                price={acao.previous_close_price}
                description="Último fechamento"
              />
            </div>
            <hr className="hr" />
            <p className="acao-last_year">No último ano</p>
            <div className="grid">
              <PriceDescription
                price={acao['52_week_high']}
                description="Maior valor"
              />
              <PriceDescription
                price={acao['52_week_low']}
                description="Menor valor"
              />
            </div>
          </div>
        </div>
      )}
      <Button className="acao-btn" as={Link} to={'..'}>
        Voltar
      </Button>
    </main>
  );
};