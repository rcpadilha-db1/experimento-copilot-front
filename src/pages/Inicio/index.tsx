import { useApi } from '../../hooks/useApi';
import { INotificia } from '../../interfaces/noticias';
import { Noticia } from './components/Noticia';
import './index.css';

export const Inicio = () => {
  const {
    data: noticias,
    loading,
    error,
  } = useApi<INotificia[]>(
    `https://api.stockdata.org/v1/news/all?language=en&api_token=${import.meta.env.VITE_API_TOKEN}`,
    'get'
  );

  return (
    <div className="noticias">
      <h3>Últimas notícias</h3>
      {error && <div>Erro ao carregar as notícias</div>}
      {loading && <div>Carregando...</div>}
      {noticias?.length === 0 && !loading && (
        <div>Nenhuma notícia encontrada</div>
      )}
      {!!noticias?.length && (
        <div className="noticias_items">
          {noticias?.map(({ title, description, published_at, url }) => (
            <Noticia
              key={url}
              title={title}
              description={description}
              published_at={published_at}
              url={url}
            />
          ))}
        </div>
      )}
    </div>
  );
};
