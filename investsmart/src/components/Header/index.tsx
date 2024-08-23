import './styles.css';

const Header = () => {
  return (
    <div className="stock-data-explorer">
      <header className="header">
        <h1>Stock Data Explorer</h1>
        <nav>
          <a href="/home">Home</a>
          <a href="/stocks">Ações</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
