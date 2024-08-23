import './styles.css';

const FavoriteItem: React.FC<{ code: string; name: string }> = ({ code, name }) => (
  <div className="favorite-item">
    <span>{code}</span>
    <span>{name}</span>
    <button>remover</button>
  </div>
);

export default FavoriteItem;
