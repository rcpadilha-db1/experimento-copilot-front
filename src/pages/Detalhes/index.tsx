import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { detalhes } from "../../service/detalhes.service";

import { Pagina } from "../../components/Pagina";
import { CompanyDetails } from "../../interface/detalhes.interface";
import {DetalhesTicker} from "../../components/DetalhesTicket";

export const Detalhes = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [tickerData, setTickerData] = useState<CompanyDetails | null>(null);

  useEffect(() => {
    const fetchDetalhes = async () => {
        if(symbol) { 
      const response = await detalhes(symbol); 
      setTickerData(response[0]); 
    };
  }
    fetchDetalhes();
  }, [ symbol ]);

  return (
    <Pagina>
      {tickerData ? <DetalhesTicker {...tickerData} /> : <div>Loading...</div>}
    </Pagina>
  );
};