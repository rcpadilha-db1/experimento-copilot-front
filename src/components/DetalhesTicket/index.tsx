import React from "react";
import { useNavigate } from "react-router-dom";
import { Botao} from "../Botao";


interface DetalhesTickerProps {
  ticker: string;
  name: string;
  day_change: number;
  price: number;
  day_high: number;
  day_low: number;
  previous_close_price: number;
  '52_week_high': number;
  '52_week_low': number;
}

const DetalhesTicker: React.FC<DetalhesTickerProps> = ({
  ticker,
  name,
  day_change,
  price,
  day_high,
  day_low,
  previous_close_price,
  '52_week_high': week_52_high,
  '52_week_low': week_52_low,
}) => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", width: "60%" }}>
        <h3>
          <strong>{ticker}</strong> - {name}
        </h3>
        <div style={{ color: day_change >= 0 ? "green" : "red", marginBottom: "10px" }}>
          {day_change >= 0 ? `+${day_change}` : day_change}%
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <div>
          <h1>${price}</h1>
          <p>Valor atual</p>
        </div>
        <div>
          <h1>${day_high}</h1>
          <p>Maior valor hoje</p>
        </div>
        <div>
          <h1>${day_low}</h1>
          <p>Menor valor hoje</p>
        </div>
        <div>
          <h1>${previous_close_price}</h1>
          <p>Último fechamento</p>
        </div>
      </div>
      <div style={{ display: "flex", gap: 100, marginBottom: "10px" }}>
        <div>
          <h1>${week_52_high}</h1>
          <p>Maior valor</p>
        </div>
        <div>
          <h1>${week_52_low}</h1>
          <p>Menor valor</p>
        </div>
      </div>
      <Botao onClick={() => navigate(-1)}>Voltar</Botao>
    </div>
  );
};

export { DetalhesTicker };
