import { useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import { INotificia } from '../../interfaces/noticias';
import { Noticia } from './components/Noticia';
import './index.css';

export const Inicio = () => {
  const {
    data: noticias,
    loading,
    error,
    fetch
  } = useApi<INotificia[]>(
    `news/all?language=en`,
    'get'
  );

  useEffect(() => {
    fetch()
  },[])

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
