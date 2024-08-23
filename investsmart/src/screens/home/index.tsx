import './styles.css';
import Header from '../../components/Header';
import FavoriteItem from '../../components/FavoriteItem';
import NewsItem from '../../components/NewsItem';
import { useCallback, useEffect, useState } from 'react';
import { requestObtainNews, Data } from '../../service/apiService';
import localStorageService, { ActionData } from '../../store/localStorageService';

const Home = () => {
  const [news, setNews] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [action, setAction] = useState<ActionData | null>(null);

  const handleRequestNews = useCallback(async () => {
    try {
      console.log('Requesting news');
      const response = await requestObtainNews();
      setNews(response);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Não foi possível carregar as notícias.');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCheckFavoriteStocks = useCallback(() => {
    const storedAction = localStorageService.getAction('appleAction');
    setAction(storedAction);
  }, []);

  useEffect(() => {
    handleRequestNews();
    handleCheckFavoriteStocks();
  }, [handleCheckFavoriteStocks, handleRequestNews]);

  return (
    <div className="stock-data-explorer">
      <Header />

      <section className="favorites">
      { action &&
        <div>
          <h2>Favoritos</h2>
          <div className="favorite-list">
            <FavoriteItem code={action?.symbol || ''} name={action?.name || ''} />
          </div>
        </div>
      }
      </section>

      <section className="news">
        <h2>Últimas Notícias</h2>
        {loading ? (
          <p>Carregando notícias...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          news.map((item) => (
            <NewsItem
              key={item.uuid}
              title={item.title}
              date={new Date(item.published_at).toLocaleString()}
              description={item.description}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default Home;
