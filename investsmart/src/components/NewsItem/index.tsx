import './styles.css';

const NewsItem: React.FC<{ title: string; date: string; description: string }> = ({ title, date, description }) => (
  <div className="news-item">
    <h3>{title}</h3>
    <span>{date}</span>
    <p>{description}</p>
    <a href="#">Ver notícia</a>
  </div>
);

export default NewsItem;
