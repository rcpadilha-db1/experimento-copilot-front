import { INotificia } from '../../../../interfaces/noticias';
import { formatDate } from '../../../../utils/date.utils';
import './index.css';

export const Noticia = ({
  title,
  description,
  published_at,
  url,
}: INotificia) => {
  const dataFormatada = formatDate(published_at, 'DD/MM/YYYY, HH:mm[h]');
  return (
    <div className="noticia">
      <div>
        <h4>{title}</h4>
        <p>{dataFormatada}</p>
      </div>
      <p>{description}</p>
      <a href={url} target="_blank">
        Ver notícia
      </a>
    </div>
  );
};
