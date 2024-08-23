import "./index.css";

interface PaginaProps {
  children: React.ReactNode;
}

export const Pagina = ({ children }: PaginaProps) => {
  return (
    <div>
      <div className="pagina">
        <h2>Stack Data Explorer</h2>
        <div className="links">
          <a href="/">Home</a>
          <a href="/detalhes">Ações</a>
        </div>
      </div>
      <div className="dados">{children}</div>
    </div>
  );
};
